// Single route table for the client router, the language toggle, <Seo>, the prerender script and the sitemap.
// Trailing slash is canonical; internal links must always use these exact forms (ARCH.md §3).
import { PROJECT_SLUGS } from "./content/projectSlugs.js";

export { PROJECT_SLUGS };

export const SITE_URL = "https://erdemsuren.com";
export const LANGS = ["tr", "en"];
export const DEFAULT_LANG = "tr";

export const ROUTES = {
  home: { tr: "/", en: "/en/" },
  projects: { tr: "/projeler/", en: "/en/projects/" },
  project: { tr: "/projeler/:slug/", en: "/en/projects/:slug/" },
  services: { tr: "/hizmetler/", en: "/en/services/" },
  about: { tr: "/hakkimda/", en: "/en/about/" },
  cv: { tr: "/cv/", en: "/en/cv/" },
  contact: { tr: "/iletisim/", en: "/en/contact/" },
  privacy: { tr: "/gizlilik/", en: "/en/privacy/" },
};

// Page order (master plan §B.1), used for prerendering, the sitemap and the menus. Every key is indexed.
export const PAGE_KEYS = ["home", "projects", "services", "about", "cv", "contact", "privacy"];
// Header menu (desktop and mobile): the brand links home, contact is the header CTA, privacy is footer-only.
export const NAV_KEYS = PAGE_KEYS.filter((key) => !["home", "contact", "privacy"].includes(key));
// Footer "Pages" column. Privacy sits in the footer's bottom row instead.
export const FOOTER_KEYS = PAGE_KEYS.filter((key) => key !== "privacy");

// Rendered by scripts/prerender.mjs: the URLs only need to fall through to the catch-all routes.
export const NOT_FOUND_PAGES = [
  { lang: "tr", url: "/__not-found__/", file: "404.html" },
  { lang: "en", url: "/en/__not-found__/", file: "en/404.html" },
];

export function langFromPath(pathname = "/") {
  const path = String(pathname).toLowerCase();
  return path === "/en" || path.startsWith("/en/") ? "en" : "tr";
}

export function pathFor(key, lang = DEFAULT_LANG, params = {}) {
  const pattern = ROUTES[key]?.[lang];
  if (!pattern) throw new Error(`Unknown route "${key}" for language "${lang}"`);
  return pattern.replace(/:([a-z]+)/gi, (_, name) => {
    const value = params?.[name];
    if (value == null || value === "") throw new Error(`Missing route param "${name}" for "${key}"`);
    return encodeURIComponent(value);
  });
}

export function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

// Contact-form topics and the query that preselects one (master plan §B.5). The contact page reads both forms on
// both language versions, in an effect after hydration: /iletisim/?tip=proje, /en/contact/?topic=project.
export const CONTACT_TOPICS = ["job", "project", "other"];
export const CONTACT_TOPIC_QUERY = {
  tr: { param: "tip", values: { job: "is", project: "proje", other: "diger" } },
  en: { param: "topic", values: { job: "job", project: "project", other: "other" } },
};

// Contact page link, optionally with a preselected topic: contactPath("tr", "project") → "/iletisim/?tip=proje".
export function contactPath(lang = DEFAULT_LANG, topic) {
  const path = pathFor("contact", lang);
  if (!topic) return path;
  const { param, values } = CONTACT_TOPIC_QUERY[lang];
  if (!values[topic]) throw new Error(`Unknown contact topic "${topic}"`);
  return `${path}?${param}=${values[topic]}`;
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const MATCHERS = Object.entries(ROUTES).flatMap(([key, paths]) =>
  LANGS.map((lang) => {
    const names = [];
    const source = escapeRegExp(paths[lang]).replace(/:([a-z]+)/gi, (_, name) => {
      names.push(name);
      return "([^/]+)";
    });
    return { key, lang, names, re: new RegExp(`^${source}$`, "i") };
  }),
);

// Matches a pathname against the route table. Returns { key, lang, params } or null.
// Unknown project slugs return null, exactly like any other unknown path (they render the 404 page).
// `anySlug: true` matches like the client router does (any slug), e.g. to preload the page module it will render.
export function matchRoute(pathname, { anySlug = false } = {}) {
  let path = String(pathname ?? "/").split(/[?#]/)[0] || "/";
  if (!path.endsWith("/")) path += "/";
  for (const matcher of MATCHERS) {
    const result = matcher.re.exec(path);
    if (!result) continue;
    const params = {};
    try {
      matcher.names.forEach((name, i) => {
        params[name] = decodeURIComponent(result[i + 1]).toLowerCase();
      });
    } catch {
      return null;
    }
    if (matcher.key === "project" && !anySlug && !PROJECT_SLUGS.includes(params.slug)) return null;
    return { key: matcher.key, lang: matcher.lang, params };
  }
  return null;
}

// Paired URL of the current page in another language (used by the TR/EN toggle).
// Unknown paths (404) pair with the other language's home page.
export function alternatePath(location, targetLang) {
  const pathname = typeof location === "string" ? location : location?.pathname;
  const match = matchRoute(pathname);
  if (!match) return pathFor("home", targetLang);
  return pathFor(match.key, targetLang, match.params);
}

// Every prerendered page: route x language, project pages for every slug. 404 pages are in NOT_FOUND_PAGES.
export function allPrerenderPaths() {
  const pages = [];
  for (const key of PAGE_KEYS) {
    for (const lang of LANGS) pages.push({ key, lang, params: {}, path: pathFor(key, lang) });
    if (key === "projects") {
      for (const slug of PROJECT_SLUGS) {
        for (const lang of LANGS) {
          pages.push({ key: "project", lang, params: { slug }, path: pathFor("project", lang, { slug }) });
        }
      }
    }
  }
  return pages;
}

// dist/ file for a canonical path: "/" -> "index.html", "/en/about/" -> "en/about/index.html".
export function fileForPath(path) {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${clean}/index.html` : "index.html";
}
