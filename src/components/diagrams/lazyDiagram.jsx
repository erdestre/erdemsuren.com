import { lazy, Suspense } from "react";
import { MARGIN } from "./views.js";

const ratio = ([w, h]) => ({ aspectRatio: `${w + 2 * MARGIN} / ${h + 2 * MARGIN}` });

/**
 * Turns a diagram module into a code-split component: its copy (TR + EN) and both drawings stay out of the main bundle
 * and load only on the case-study pages that show a diagram.
 * - Prerender (prerenderToNodeStream) waits for the chunk, so the static HTML always contains the whole <figure>.
 * - Hydration keeps that server HTML until the chunk arrives (Suspense boundary), then hydrates it in place.
 * - Client-side navigation shows an empty frame with the figure's size for the moment the chunk needs.
 * - A chunk that fails to load (offline, or an old page after a deploy) renders nothing instead of breaking the page.
 * `view` = VIEWS[slug] from views.js (sizes of the tall and the wide drawing).
 */
export function lazyDiagram(load, view) {
  const Diagram = lazy(() => load().catch(() => ({ default: () => null })));
  // Same frame and aspect ratios as DiagramFigure (parts.jsx), without content.
  const placeholder = (
    <div aria-hidden="true" className="w-full max-w-100 md:max-w-none">
      <div className="rounded-xl border border-line bg-paper p-2 sm:p-3 md:p-4">
        <div className="md:hidden" style={ratio(view.tall)} />
        <div className="hidden md:block" style={ratio(view.wide)} />
      </div>
    </div>
  );

  return function LazyDiagram({ lang }) {
    return (
      <Suspense fallback={placeholder}>
        <Diagram lang={lang} />
      </Suspense>
    );
  };
}
