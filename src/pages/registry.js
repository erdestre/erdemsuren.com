// Route key (src/routes.js) → page module. Each page is its own chunk (src/lib/lazyPage.js); App.jsx mounts
// `Component` for every route × language, main.jsx preloads the current page before hydrating, and
// scripts/prerender.mjs adds <link rel="modulepreload"> for `src` to that page's HTML. NotFound stays in the main
// bundle: it is the fallback for every unknown URL (and for unknown project slugs inside ProjectDetail).
// New page: add it here with the same path twice (import + src); the prerender fails if `src` is not a page chunk.
import { lazyPage } from "../lib/lazyPage.js";
import { matchRoute } from "../routes.js";

export const PAGES = {
  home: lazyPage(() => import("./Home.jsx"), "src/pages/Home.jsx"),
  projects: lazyPage(() => import("./Projects.jsx"), "src/pages/Projects.jsx"),
  project: lazyPage(() => import("./ProjectDetail.jsx"), "src/pages/ProjectDetail.jsx"),
  services: lazyPage(() => import("./Services.jsx"), "src/pages/Services.jsx"),
  about: lazyPage(() => import("./About.jsx"), "src/pages/About.jsx"),
  cv: lazyPage(() => import("./CV.jsx"), "src/pages/CV.jsx"),
  contact: lazyPage(() => import("./Contact.jsx"), "src/pages/Contact.jsx"),
  privacy: lazyPage(() => import("./Privacy.jsx"), "src/pages/Privacy.jsx"),
};

// Loads the page module the router will render for `pathname` (any project slug, like the router; an unknown slug
// renders NotFound from inside ProjectDetail). Resolves immediately for paths that render NotFound.
export function preloadPage(pathname) {
  const match = matchRoute(pathname, { anySlug: true });
  return match ? PAGES[match.key].preload() : Promise.resolve();
}
