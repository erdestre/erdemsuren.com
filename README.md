# erdemsuren.com

Source of **[erdemsuren.com](https://erdemsuren.com)**: Erdem Süren's portfolio. Turkish at `/`, English at `/en/`.

- React 19, Vite 6, Tailwind CSS 4, react-router-dom 7.
- Prerendered to static HTML (`react-dom/static`), hydrated in the browser.
- Per-route SEO: title, description, canonical, hreflang, Open Graph, JSON-LD, sitemap.
- The build fails on SEO, content, link and size checks (`scripts/prerender.mjs`).
- Short on purpose: few pages, short sentences.

## Scripts

Node.js 22.12+.

| Command | What it does |
|---|---|
| `npm ci` | Install |
| `npm run dev` | Dev server |
| `npm run build` | Build + prerender |
| `npm run lint` | ESLint |

## Structure

```text
src/pages/      one component per route
src/content/    all copy as { tr, en }
src/seo/        <Seo>, meta.js, jsonld.js
src/components/ layout, UI kit, project cards
scripts/        prerender and quality gates
public/         icons, Open Graph images, CV PDFs, llms.txt, web.config
```

---

Content (texts, photos, CV) © Erdem Süren; code may be read for reference.
