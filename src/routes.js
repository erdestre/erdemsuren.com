// Single route table for the client router, the language toggle, <Seo>, the prerender script and the sitemap.
// Trailing slash is canonical; internal links must always use these exact forms (ARCH.md §3).
export const SITE_URL = "https://erdemsuren.com";
export const LANGS = ["tr", "en"];
export const DEFAULT_LANG = "tr";

export const ROUTES = {
  home: { tr: "/", en: "/en/" },
  projects: { tr: "/projeler/", en: "/en/projects/" },
  cv: { tr: "/cv/", en: "/en/cv/" },
  contact: { tr: "/iletisim/", en: "/en/contact/" },
  privacy: { tr: "/gizlilik/", en: "/en/privacy/" },
};

// Page order, used for prerendering, the sitemap and the menus. Every key is indexed.
// Removed pages redirect in public/web.config (/hakkimda/ → /cv/, /hizmetler/ → /, /projeler/<slug>/ → /projeler/).
export const PAGE_KEYS = ["home", "projects", "cv", "contact", "privacy"];
// Header menu (desktop and mobile): the brand links home, contact is the header CTA, privacy is footer-only.
export const NAV_KEYS = PAGE_KEYS.filter((key) => !["home", "contact", "privacy"].includes(key));

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

// Matches a pathname against the route table. Returns { key, lang, params } or null (unknown path: the 404 page).
export function matchRoute(pathname) {
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

// Every prerendered page: route x language. 404 pages are in NOT_FOUND_PAGES.
export function allPrerenderPaths() {
  const pages = [];
  for (const key of PAGE_KEYS) {
    for (const lang of LANGS) pages.push({ key, lang, params: {}, path: pathFor(key, lang) });
  }
  return pages;
}

// dist/ file for a canonical path: "/" -> "index.html", "/en/cv/" -> "en/cv/index.html".
export function fileForPath(path) {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${clean}/index.html` : "index.html";
}
