// Fonts (Inter + Space Grotesk: Fontsource latin + a five-glyph Turkish subset each) are declared with @font-face in
// index.css.
import "./index.css";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { preloadPage } from "./pages/registry.js";

// IIS also serves every prerendered page at ".../index.html" (e.g. /hakkimda/index.html). The routes only know the
// directory form, so the client would render the 404 page over the prerendered one (hydration mismatch).
// Switch the address to the canonical directory URL before the router reads it.
const { pathname, search, hash } = window.location;
if (/\/index\.html$/i.test(pathname)) {
  window.history.replaceState(window.history.state, "", `${pathname.replace(/index\.html$/i, "")}${search}${hash}`);
}

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

function start() {
  // Prerendered pages (npm run build) contain markup → hydrate it. The dev server serves an empty #root → render.
  if (container.firstElementChild) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
  preloadOnIntent();
}

// Pages are separate chunks (src/pages/registry.js). Load the current one first, so hydration renders the same tree
// as the prerendered HTML in one pass. The prerender already added <link rel="modulepreload"> for it, so this is
// normally a cache hit. If it fails, hydrate anyway: the prerendered page stays as it is.
preloadPage(window.location.pathname).then(start, start);

// Start loading a page's chunk when a link to it is hovered, focused or touched, so the click finds it ready.
function preloadOnIntent() {
  const onIntent = (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || link.origin !== window.location.origin || link.target === "_blank") return;
    preloadPage(link.pathname).catch(() => {});
  };
  for (const type of ["pointerover", "focusin", "touchstart"]) {
    document.addEventListener(type, onIntent, { passive: true });
  }
}
