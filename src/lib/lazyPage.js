import { lazy } from "react";

// The page the browser loaded first (".../index.html" counts as its directory, as in main.jsx).
const initialPath = typeof window === "undefined" ? null : window.location.pathname.replace(/index\.html$/i, "");

/**
 * Route-level code splitting that keeps hydration clean: one chunk per page, so the entry chunk stays within the
 * JS budget (master plan §D.1/§D.2: route splitting is revisited once the entry chunk passes 110 KB gzip).
 *
 * - The prerender (react-dom/static) waits for every lazy page, so each HTML file contains the whole page.
 * - main.jsx calls `preload()` for the current URL before hydrateRoot. Once a module is in memory, `Component`
 *   resolves synchronously (an already-fulfilled thenable), so hydration renders the same tree as the server in one
 *   pass, with no Suspense fallback and no second render.
 * - Client-side navigation loads the chunk inside the router's transition (BrowserRouter uses startTransition):
 *   the current page stays on screen until the next one is ready. main.jsx also preloads on link hover, focus and
 *   touch, so the chunk is usually there before the click.
 * - If a chunk cannot be loaded during navigation (offline, or a deploy replaced the hashed files), the target URL
 *   is loaded from the server instead. During the first load the prerendered HTML is simply kept.
 *
 * `src` is the module's path from the project root. scripts/prerender.mjs looks it up in Vite's manifest to add
 * <link rel="modulepreload"> for the page's chunks, and fails the build if it is not there.
 * @returns {{ Component: import("react").ComponentType, preload: () => Promise<object>, src: string }}
 */
export function lazyPage(load, src) {
  let loaded = null;
  let pending = null;

  const preload = () => {
    pending ??= load().then(
      (module) => (loaded = module),
      (error) => {
        pending = null; // a later call may retry
        throw error;
      },
    );
    return pending;
  };

  const Component = lazy(() => (loaded ? { then: (resolve) => resolve(loaded) } : preload().catch(recover)));
  return { Component, preload, src };
}

function recover(error) {
  if (typeof window === "undefined") throw error; // prerender: fail the build
  if (window.location.pathname !== initialPath) window.location.reload(); // after a navigation: the target URL
  return new Promise(() => {}); // keep what is on screen
}
