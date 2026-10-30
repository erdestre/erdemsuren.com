// Server entry, built with `vite build --ssr src/entry-server.jsx --outDir dist-ssr` and used only by
// scripts/prerender.mjs at build time (the site itself is static HTML on IIS).
import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { PAGES } from "./pages/registry.js";
import { langFromPath } from "./routes.js";
import { HeadContext } from "./seo/HeadContext.js";

export {
  absoluteUrl,
  allPrerenderPaths,
  fileForPath,
  LANGS,
  NOT_FOUND_PAGES,
  pathFor,
  ROUTES,
  SITE_URL,
} from "./routes.js";

// Route key → page module path from the project root (src/pages/registry.js). scripts/prerender.mjs looks each one up
// in Vite's client manifest to add <link rel="modulepreload"> for the page's chunks.
export const PAGE_SOURCES = Object.fromEntries(Object.entries(PAGES).map(([key, page]) => [key, page.src]));

/**
 * Renders one URL to static HTML.
 * @returns {Promise<{ html: string, head: string, lang: "tr" | "en", status: number }>}
 *   html   – React's output: the hoisted head preamble (<title>, <meta>, <link>) followed by the app markup;
 *            scripts/prerender.mjs moves the preamble into <head>.
 *   head   – extra head markup collected while rendering (the JSON-LD <script>).
 *   status – 404 when the URL rendered the NotFound page, else 200.
 */
export async function render(url) {
  const collected = { jsonLd: null, status: 200 };
  const errors = [];

  const { prelude } = await prerenderToNodeStream(
    <HeadContext value={collected}>
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>
    </HeadContext>,
    {
      onError(error) {
        errors.push(error);
      },
    },
  );

  // Decode as a stream so multi-byte characters (ş, ğ, İ …) split across chunks stay intact.
  const decoder = new TextDecoder();
  let html = "";
  for await (const chunk of prelude) {
    html += typeof chunk === "string" ? chunk : decoder.decode(chunk, { stream: true });
  }
  html += decoder.decode();

  if (errors.length) {
    const error = new Error(`Render failed for ${url}: ${errors.map((e) => e?.message ?? e).join("; ")}`);
    error.cause = errors[0];
    throw error;
  }

  const head = collected.jsonLd
    ? `<script type="application/ld+json" id="ld-json">${collected.jsonLd}</script>`
    : "";

  return { html, head, lang: langFromPath(url), status: collected.status };
}
