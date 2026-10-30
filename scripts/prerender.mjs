// Static prerender (ARCH.md §5). Runs after:
//   vite build                                   → dist/ (client bundle + index.html template + .vite/manifest.json)
//   vite build --ssr src/entry-server.jsx --outDir dist-ssr
// Renders every route × language plus the two 404 pages into dist/, adds <link rel="modulepreload"> for each page's
// code-split chunks, writes sitemap.xml and robots.txt, verifies the SEO basics, the content rules and the JS/CSS
// budget, then deletes dist-ssr and dist/.vite. Any error → non-zero exit (fails the build).
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { gzipSync } from "node:zlib";

// React's production build for the render (must be set before the SSR bundle loads React).
process.env.NODE_ENV ??= "production";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SSR_DIR = path.join(ROOT, "dist-ssr");
const SSR_ENTRY = path.join(SSR_DIR, "entry-server.js");
const MANIFEST_DIR = path.join(DIST, ".vite");
const MANIFEST = path.join(MANIFEST_DIR, "manifest.json");

const HEAD_PLACEHOLDER = "<!--app-head-->";
const HTML_PLACEHOLDER = "<!--app-html-->";
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;
const DESCRIPTION_MIN = 50;
// Master plan §D.2 gate 8, in gzip bytes: the JS every page loads (entry chunk + its static imports) and the CSS.
// kB = 1000 bytes, the unit Vite's build log uses.
const BUDGET = { entryJs: 110_000, entryJsWarn: 90_000, css: 20_000 };
// Master plan §D.2 gate 6 / CONTRACTS §2, on visible text and text attributes: placeholders and banned claims.
const BANNED =
  /\[PLACEHOLDER|\bTODO\b|\bTBD\b|lorem ipsum|\bSenior\b|Kıdemli|\b10\+\s*Sertifika|software development is dead|yazılım geliştirme öldü/i;

// Brand files produced separately into public/ and referenced by index.html / <Seo>.
const BRAND_FILES = [
  "favicon.svg",
  "favicon-32.png",
  "favicon.ico",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "site.webmanifest",
  "og/og-tr.png",
  "og/og-en.png",
];

// React 19 hoists <title>/<meta>/<link> (and image preloads) of a partial tree into a leading preamble.
const PREAMBLE = /^(?:\s*(?:<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link|base)\b[^>]*>))+/;

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const xmlEscape = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const count = (text, regex) => (text.match(regex) ?? []).length;
const chars = (text) => [...text].length;
// Inline SVG keeps its own <title>/<desc> (accessible diagrams; React 19 does not hoist a <title> inside <svg>), so
// the document-level <title> and head-tag checks ignore everything between <svg> and </svg> (no nested <svg>).
const withoutSvg = (html) => html.replace(/<svg\b[\s\S]*?<\/svg>/gi, "");

function assemble(template, rendered, preloads = []) {
  const match = rendered.html.match(PREAMBLE);
  const preamble = match ? match[0].trim() : "";
  const appHtml = rendered.html.slice(match ? match[0].length : 0);
  const preloadTags = preloads.map((href) => `<link rel="modulepreload" crossorigin href="${href}">`);
  // Function replacements: never let "$&"-style sequences in content act as replacement patterns.
  return template
    .replace(/<html lang="[^"]*">/, () => `<html lang="${rendered.lang}">`)
    .replace(HEAD_PLACEHOLDER, () => [preamble, rendered.head].filter(Boolean).join("\n    "))
    .replace("</head>", () => [...preloadTags, "</head>"].join("\n  "))
    .replace(HTML_PLACEHOLDER, () => appHtml);
}

// Vite manifest: a chunk's closure is the chunk plus every chunk it imports statically (all of them are fetched
// before its code runs).
function chunkClosure(manifest, key, seen = new Set()) {
  if (seen.has(key)) return seen;
  if (!manifest[key]) throw new Error(`not in the Vite manifest: ${key}`);
  seen.add(key);
  for (const dep of manifest[key].imports ?? []) chunkClosure(manifest, dep, seen);
  return seen;
}

const kb = (bytes) => `${(bytes / 1000).toFixed(1)} kB`;

// Visible text of a page (no inline <svg>, no scripts, no tags) plus its text attributes.
function shippedText(html) {
  const flat = withoutSvg(html).replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  const attributes = [...flat.matchAll(/\s(?:alt|aria-label|title|content|placeholder)="([^"]*)"/g)].map((m) => m[1]);
  return decodeEntities([flat.replace(/<[^>]+>/g, " "), ...attributes].join(" "));
}

function checkPage(doc, page) {
  const problems = [];
  const headStart = doc.indexOf("<head>");
  const headEnd = doc.indexOf("</head>");
  const head = doc.slice(headStart, headEnd);
  const body = doc.slice(headEnd);

  if (!doc.includes(`<html lang="${page.lang}">`)) problems.push(`<html lang> is not "${page.lang}"`);
  if (doc.includes(HEAD_PLACEHOLDER) || doc.includes(HTML_PLACEHOLDER)) problems.push("placeholder left in output");

  if (count(withoutSvg(doc), /<title\b/g) !== 1 || count(head, /<title\b/g) !== 1) {
    problems.push("expected exactly one <title> in <head>");
  }
  const title = decodeEntities(head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "").trim();
  if (!title) problems.push("empty <title>");
  if (chars(title) > TITLE_MAX) problems.push(`title is ${chars(title)} chars (> ${TITLE_MAX}): ${title}`);

  const descriptions = [...head.matchAll(/<meta name="description" content="([^"]*)"/g)];
  if (descriptions.length !== 1 || count(doc, /<meta name="description"/g) !== 1) {
    problems.push("expected exactly one meta description in <head>");
  }
  const description = decodeEntities(descriptions[0]?.[1] ?? "");
  if (chars(description) > DESCRIPTION_MAX || chars(description) < DESCRIPTION_MIN) {
    problems.push(`description is ${chars(description)} chars (allowed ${DESCRIPTION_MIN}–${DESCRIPTION_MAX})`);
  }

  if (count(body, /<h1\b/g) !== 1) problems.push(`expected exactly one <h1>, found ${count(body, /<h1\b/g)}`);
  if (/<title\b|rel="canonical"|<meta\b/.test(withoutSvg(body))) {
    problems.push("head tags left in <body> (preamble not moved)");
  }
  if (/\bundefined\b|\[object Object\]|\bNaN\b/.test(body)) problems.push("'undefined' / '[object Object]' / 'NaN' in markup");
  const banned = shippedText(doc).match(BANNED);
  if (banned) problems.push(`banned text "${banned[0]}"`);
  for (const [img] of body.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt="/.test(img) || !/\swidth="/.test(img) || !/\sheight="/.test(img)) {
      problems.push(`<img> without alt, width or height: ${img.slice(0, 100)}`);
    }
  }

  const canonicals = [...head.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const alternates = Object.fromEntries(
    [...head.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]*)"/gi)].map((m) => [m[1], m[2]]),
  );
  const noindex = /<meta name="robots" content="noindex"/.test(head);

  if (page.is404) {
    if (canonicals.length) problems.push("404 page must not have a canonical");
    if (Object.keys(alternates).length) problems.push("404 page must not have hreflang alternates");
    if (!noindex) problems.push("404 page must be noindex");
    if (page.status !== 404) problems.push(`render status ${page.status}, expected 404`);
  } else {
    if (canonicals.length !== 1 || canonicals[0] !== page.url) {
      problems.push(`canonical ${JSON.stringify(canonicals)} !== ${page.url}`);
    }
    for (const [code, href] of Object.entries(page.alternates)) {
      if (alternates[code] !== href) problems.push(`hreflang ${code} is ${alternates[code]}, expected ${href}`);
    }
    if (Object.keys(alternates).length !== Object.keys(page.alternates).length) problems.push("unexpected hreflang set");
    if (noindex) problems.push("indexable page has noindex");
    if (page.status !== 200) problems.push(`render status ${page.status}, expected 200`);
    if (!/<meta property="og:url" content="/.test(head)) problems.push("missing og:url");
  }

  const jsonLd = [...head.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (jsonLd.length !== 1) problems.push(`expected one JSON-LD script in <head>, found ${jsonLd.length}`);
  else {
    try {
      const data = JSON.parse(jsonLd[0][1]);
      if (!Array.isArray(data["@graph"]) || !data["@graph"].length) problems.push("JSON-LD has no @graph");
    } catch (error) {
      problems.push(`JSON-LD does not parse: ${error.message}`);
    }
  }
  if (!/<meta property="og:image" content="https:\/\//.test(head)) problems.push("missing absolute og:image");

  return { problems, title, description };
}

// Root-relative URLs in a generated page (links, images, srcsets, preloads, scripts, styles) that do not resolve
// to a file in dist/ (a directory URL needs its index.html). Run after every page is written.
function missingLocalUrls(doc) {
  const urls = new Set();
  for (const m of doc.matchAll(/\s(?:href|src)="(\/(?!\/)[^"]*)"/gi)) urls.add(m[1]);
  for (const m of doc.matchAll(/\s(?:srcset|imagesrcset)="([^"]*)"/gi)) {
    for (const part of m[1].split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url.startsWith("/") && !url.startsWith("//")) urls.add(url);
    }
  }
  return [...urls].filter((url) => {
    let clean;
    try {
      clean = decodeURIComponent(url.split(/[?#]/)[0]);
    } catch {
      return true;
    }
    const target = path.join(DIST, clean);
    return clean.endsWith("/") ? !existsSync(path.join(target, "index.html")) : !existsSync(target);
  });
}

function buildSitemap(pages) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];
  for (const page of pages) {
    lines.push("  <url>", `    <loc>${xmlEscape(page.url)}</loc>`);
    for (const [code, href] of Object.entries(page.alternates)) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${xmlEscape(href)}"/>`);
    }
    lines.push("  </url>");
  }
  lines.push("</urlset>", "");
  return lines.join("\n");
}

async function main() {
  if (!existsSync(SSR_ENTRY)) throw new Error(`Missing ${path.relative(ROOT, SSR_ENTRY)}: run the SSR build first.`);
  const templatePath = path.join(DIST, "index.html");
  const template = await readFile(templatePath, "utf8");
  for (const marker of [HEAD_PLACEHOLDER, HTML_PLACEHOLDER, '<html lang="tr">']) {
    if (count(template, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) !== 1) {
      throw new Error(`dist/index.html must contain "${marker}" exactly once (was it already prerendered? run vite build)`);
    }
  }

  const ssr = await import(pathToFileURL(SSR_ENTRY).href);
  const { render, allPrerenderPaths, NOT_FOUND_PAGES, absoluteUrl, pathFor, fileForPath, LANGS, SITE_URL, PAGE_SOURCES } =
    ssr;

  // Code-split pages (src/pages/registry.js): modulepreload for each page's chunks that the entry does not already
  // load, and the size budget, both from Vite's client manifest.
  if (!existsSync(MANIFEST)) {
    throw new Error(`Missing ${path.relative(ROOT, MANIFEST)}: build.manifest must be on for the client build.`);
  }
  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  const entryKey = Object.keys(manifest).find((key) => manifest[key].isEntry);
  if (!entryKey) throw new Error("The Vite manifest has no entry chunk");
  const entryChunks = chunkClosure(manifest, entryKey);
  // A page chunk is listed under its source path, or, when other chunks import shared code from it (ProjectDetail
  // hosts what its lazy diagrams share), under "_<name>-<hash>.js" with the module's name. Exactly one must match.
  const pageChunkKey = (src) => {
    if (manifest[src]?.isDynamicEntry) return src;
    const name = path.basename(src ?? "", path.extname(src ?? ""));
    const keys = Object.keys(manifest).filter(
      (key) => manifest[key].isDynamicEntry && !manifest[key].src && manifest[key].name === name,
    );
    return keys.length === 1 ? keys[0] : null;
  };
  const preloadsFor = (pageKey) => {
    const src = PAGE_SOURCES?.[pageKey];
    const key = src ? pageChunkKey(src) : null;
    if (!key) throw new Error(`page "${pageKey}": ${src} is not a code-split page chunk (see src/pages/registry.js)`);
    return [...chunkClosure(manifest, key)].filter((dep) => !entryChunks.has(dep)).map((dep) => `/${manifest[dep].file}`);
  };
  const gzipOf = async (files) => {
    const sizes = await Promise.all(files.map(async (file) => gzipSync(await readFile(path.join(DIST, file))).length));
    return sizes.reduce((sum, size) => sum + size, 0);
  };
  const entryJs = await gzipOf([...entryChunks].map((key) => manifest[key].file));
  // The stylesheet(s) every page links (one file: build.cssCodeSplit is off).
  const cssFiles = [...template.matchAll(/<link rel="stylesheet"[^>]*href="\/([^"]+\.css)"/g)].map((m) => m[1]);
  if (!cssFiles.length) throw new Error("dist/index.html links no stylesheet");
  const css = await gzipOf(cssFiles);

  const pages = allPrerenderPaths().map((entry) => {
    const alternates = Object.fromEntries(LANGS.map((code) => [code, absoluteUrl(pathFor(entry.key, code, entry.params))]));
    // Same rule as src/seo/Seo.jsx: x-default is the English page.
    alternates["x-default"] = absoluteUrl(pathFor(entry.key, "en", entry.params));
    return {
      ...entry,
      renderUrl: entry.path,
      url: absoluteUrl(entry.path),
      file: fileForPath(entry.path),
      alternates,
      preloads: preloadsFor(entry.key),
      is404: false,
    };
  });
  // NotFound is part of the entry chunk: nothing extra to preload.
  const notFound = NOT_FOUND_PAGES.map((entry) => ({ ...entry, renderUrl: entry.url, url: null, preloads: [], is404: true }));

  const failures = [];
  const seenTitles = new Map();
  const seenDescriptions = new Map();
  const written = [];
  const writtenDocs = [];

  for (const page of [...pages, ...notFound]) {
    let rendered;
    try {
      rendered = await render(page.renderUrl);
    } catch (error) {
      failures.push(`${page.renderUrl}: ${error.stack ?? error}`);
      continue;
    }
    if (rendered.lang !== page.lang) failures.push(`${page.renderUrl}: rendered lang ${rendered.lang}, expected ${page.lang}`);

    const doc = assemble(template, rendered, page.preloads);
    const { problems, title, description } = checkPage(doc, { ...page, status: rendered.status });
    if (!page.is404) {
      if (seenTitles.has(title)) problems.push(`duplicate title (also on ${seenTitles.get(title)})`);
      if (seenDescriptions.has(description)) problems.push(`duplicate description (also on ${seenDescriptions.get(description)})`);
      seenTitles.set(title, page.renderUrl);
      seenDescriptions.set(description, page.renderUrl);
    }
    if (problems.length) {
      failures.push(...problems.map((problem) => `${page.renderUrl}: ${problem}`));
      continue;
    }

    const outFile = path.join(DIST, page.file);
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, doc, "utf8");
    written.push(page.file);
    writtenDocs.push([page.renderUrl, doc]);
  }

  // Internal links and asset references must resolve now that every page exists.
  for (const [url, doc] of writtenDocs) {
    for (const missing of missingLocalUrls(doc)) failures.push(`${url}: broken local URL ${missing}`);
  }

  // hreflang must be reciprocal: every alternate URL is itself a page that lists the same set.
  const byUrl = new Map(pages.map((page) => [page.url, page]));
  for (const page of pages) {
    for (const [code, href] of Object.entries(page.alternates)) {
      const target = byUrl.get(href);
      if (!target) failures.push(`${page.url}: hreflang ${code} → ${href} is not a prerendered page`);
      else if (JSON.stringify(target.alternates) !== JSON.stringify(page.alternates)) {
        failures.push(`${page.url}: hreflang set differs from ${href}`);
      }
    }
  }

  if (entryJs > BUDGET.entryJs) failures.push(`entry JS is ${kb(entryJs)} gzip (budget ${kb(BUDGET.entryJs)})`);
  if (css > BUDGET.css) failures.push(`CSS is ${kb(css)} gzip (budget ${kb(BUDGET.css)})`);

  if (failures.length) {
    throw new Error(`Prerender checks failed (${failures.length}):\n  - ${failures.join("\n  - ")}`);
  }

  await writeFile(path.join(DIST, "sitemap.xml"), buildSitemap(pages), "utf8");
  await writeFile(
    path.join(DIST, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    "utf8",
  );
  written.push("sitemap.xml", "robots.txt");

  const missingBrand = BRAND_FILES.filter((file) => !existsSync(path.join(DIST, file)));
  if (missingBrand.length) {
    console.warn(`[prerender] warning: brand files missing from dist/ (expected from public/): ${missingBrand.join(", ")}`);
  }

  console.log(`[prerender] ${pages.length} pages + ${notFound.length} 404 pages, sitemap.xml, robots.txt`);
  for (const file of written) console.log(`  dist/${file}`);

  // Budget report: what every page loads (entry), then per page type the entry plus that page's own chunks.
  console.log(`[prerender] entry JS ${kb(entryJs)} gzip (budget ${kb(BUDGET.entryJs)}), CSS ${kb(css)} gzip (budget ${kb(BUDGET.css)})`);
  if (entryJs > BUDGET.entryJsWarn) console.warn(`[prerender] warning: entry JS is over the ${kb(BUDGET.entryJsWarn)} target`);
  for (const key of Object.keys(PAGE_SOURCES)) {
    const own = await gzipOf(preloadsFor(key).map((href) => href.slice(1)));
    console.log(`  ${key.padEnd(9)} page chunks ${kb(own).padStart(8)}, with entry ${kb(entryJs + own)} gzip`);
  }
}

try {
  await main();
} catch (error) {
  console.error(`[prerender] FAILED\n${error.stack ?? error}`);
  process.exitCode = 1;
} finally {
  await rm(SSR_DIR, { recursive: true, force: true });
  // The manifest is a build input only: never deploy it.
  await rm(MANIFEST_DIR, { recursive: true, force: true });
}
