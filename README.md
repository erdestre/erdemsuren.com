# erdemsuren.com

Source code of **[erdemsuren.com](https://erdemsuren.com)**, the bilingual (Turkish / English) portfolio of
Erdem Süren, a full-stack software engineer (.NET & React/Next.js). Turkish is served from `/`, English from
`/en/`.

It is a React app that is prerendered to static HTML at build time and hydrated in the browser. The site is served
as static files behind Cloudflare.

## Highlights

- **React 19 + Vite 6 + Tailwind CSS 4**, with react-router-dom 7. Tailwind's default palette is switched off, so
  only the design tokens in `src/index.css` exist as colour utilities.
- **Static prerendering.** A second Vite build bundles `src/entry-server.jsx`. `scripts/prerender.mjs` then renders
  every route in both languages with `react-dom/static` (`prerenderToNodeStream`) inside a `StaticRouter` and writes
  one `index.html` per URL, plus a Turkish and an English `404.html`. In the browser, `hydrateRoot` takes over the
  prerendered markup.
- **Code splitting without hydration flicker.** Every page except the 404 is its own chunk. The prerender adds
  `<link rel="modulepreload">` for each page's chunks (read from Vite's manifest), the client loads the current page
  before it hydrates, and links preload their page on hover, focus or touch.
- **Per-route head, hreflang and JSON-LD.** `<Seo>` uses React 19's native `<title>` / `<meta>` / `<link>` hoisting
  for the title, description, canonical URL, TR/EN `hreflang` alternates with `x-default` and Open Graph tags. It
  also builds a JSON-LD `@graph` (WebSite, Person and Organization on every page; ProfilePage, CollectionPage,
  ContactPage, CreativeWork, OfferCatalog or BreadcrumbList where they apply): the prerender writes it into `<head>`,
  and an effect keeps it in sync after client-side navigation.
- **Sitemap, robots and llms.txt.** The build writes `sitemap.xml` (with `xhtml:link` language alternates) and
  `robots.txt`; `public/llms.txt` gives AI assistants a plain-text summary of the site.
- **Build-time quality gates.** The prerender fails the build on render errors; a missing or extra `<title>`,
  `<h1>` or meta description; titles over 60 or descriptions outside 50–155 characters; duplicate titles or
  descriptions; a wrong canonical; `hreflang` sets that are not reciprocal; missing JSON-LD or `og:image`;
  placeholder text or banned claims; an `<img>` without `alt`, `width` or `height`; any root-relative link or asset
  with no file in `dist/`; and the budgets: entry JS ≤ 110 kB gzip, CSS ≤ 20 kB gzip. It prints the sizes per page
  type.
- **Accessibility.** A skip link; focus moves to `<main>` after client-side navigation; the mobile menu traps focus
  and closes on Esc; text and UI colour pairs are measured against WCAG AA (the ratios are documented in
  `src/index.css`); visible focus rings; 44 px tap targets on touch layouts; reduced motion respected; architecture
  diagrams as inline SVG with `role="img"`, `<title>` and `<desc>`; a contact form with inline errors and an
  `aria-live` status region; `lang` on the language-switch links.
- **Images and fonts.** Real screenshots as 800w / 1568w WebP with `srcset` / `sizes` and intrinsic `width` /
  `height` (no layout shift). The first screenshot on the projects index loads eagerly with `fetchpriority="high"`,
  the small portraits at the top of a page load eagerly, and every other image loads lazily. Inter and Space Grotesk
  are self-hosted (Fontsource) plus five-glyph Turkish subsets made with fontTools. Hashed assets are cached for a
  year.
- **Hydration-safe rendering.** No `Date.now()`, `Math.random()`, `window` or storage reads during render; the
  build year is a Vite `define` constant. The contact form loads EmailJS only on submit, stays disabled until
  hydration, and has a honeypot and an in-memory rate limit.

## Project structure

```text
src/
  main.jsx             client entry: hydrateRoot (createRoot on the dev server)
  entry-server.jsx     server entry, used only by the prerender
  App.jsx              routes for every page × language, inside the layout
  routes.js            route table (trailing slash is canonical), TR/EN pairing, prerender list
  pages/               one component per route; registry.js maps route keys to lazy page chunks
  components/          layout (header, footer, language toggle, skip link), UI kit, home sections,
                       project cards, SVG architecture diagrams, contact form
  content/             all copy as { tr, en } objects: pages, projects, case studies, CV, privacy notice
  seo/                 <Seo>, titles and descriptions (meta.js), JSON-LD builder (jsonld.js)
  i18n/                language context (the language comes from the URL only)
  lib/                 small helpers (lazy pages, class names, text)
  index.css            Tailwind 4 theme: tokens, type scale, fonts, focus styles
  styles/cv-print.css  print layout of the CV page
  assets/              fonts, portrait, project screenshots
scripts/prerender.mjs  static prerender, sitemap.xml, robots.txt, quality gates and budgets
public/                icons, Open Graph images, CV PDFs, llms.txt, web.config (rewrites, 404s, headers)
```

## Scripts

Requires Node.js 22.12 or later.

| Command | What it does |
|---|---|
| `npm ci` | Installs the exact dependency tree from `package-lock.json`. |
| `npm run dev` | Vite dev server (client-rendered, no prerender). `/__diagrams/` previews every diagram. |
| `npm run lint` | ESLint (flat config with the React, Hooks and React Refresh rules). |
| `npm run build` | Client build, SSR build, then `scripts/prerender.mjs`: every page, both 404 pages, `sitemap.xml` and `robots.txt` in `dist/`, with all quality gates. |
| `npm run preview` | Serves `dist/` locally (unlike production, it falls back to `index.html` for unknown paths). |

## How it was built

Designed and directed by Erdem Süren, implemented with AI coding agents (Claude Code) under his review.
Architecture, code review and releases stay with him. That is how he works: AI-native, end to end. Code comments
refer to planning documents (master plan, fact sheet, contracts) and local check scripts that are not part of this
repository.

---

Content (texts, photos, CV) © Erdem Süren; code may be read for reference.
