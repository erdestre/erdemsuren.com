import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  // Several dev servers can run side by side from this folder (one per page agent); each one gets its own
  // dependency-optimizer cache via VITE_CACHE_DIR so they never rewrite each other's node_modules/.vite.
  cacheDir: process.env.VITE_CACHE_DIR || "node_modules/.vite",
  define: {
    // Build-time constant (same value in the client and the SSR build, so it is hydration-safe).
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  build: {
    // dist/.vite/manifest.json (client build only): scripts/prerender.mjs reads it to add <link rel="modulepreload">
    // for each page's chunks (pages are code-split, src/pages/registry.js), then deletes it so it is not deployed.
    manifest: !isSsrBuild,
    // One stylesheet for the whole site (also the CV page's print rules): every prerendered page links it in <head>,
    // so a lazily loaded page never brings its own CSS late. Budget: ≤ 20 KB gzip (checked by the prerender).
    cssCodeSplit: false,
    // Never inline web fonts as data: URIs. index.css references one file per unicode subset (latin, latin-ext)
    // and the browser only downloads the subsets a page uses; an inlined subset would sit in the render-blocking
    // CSS on every page instead. Other assets: Vite's default.
    assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf)$/i.test(filePath) ? false : undefined),
  },
  ssr: {
    resolve: {
      // react-router(-dom) 7 maps `module-sync` -> ESM build; without it the CJS build is picked
      // and named imports such as `StaticRouter` fail in Vite's SSR runner.
      externalConditions: ["module-sync"],
    },
  },
}));
