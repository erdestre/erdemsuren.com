// Architecture diagrams for case-study pages (contract: scratchpad/foundation-notes/CONTRACTS.md, "Diagrams").
// - Keys: project slugs from src/content/projects.js (same slug in TR and EN).
// - Values: React components that receive { lang } ("tr" | "en") and render ONE accessible inline-SVG <figure>
//   (<svg role="img"> labelled by its <title> + <desc> via useId() ids, a <figcaption>, text in the page language,
//   colours from the src/index.css tokens only, no window/document/random values during render).
// - Each diagram is its own chunk (lazyDiagram.jsx): the prerendered HTML contains the full figure, and only the pages
//   that show a diagram download its code. Sizes live in views.js.
// src/pages/ProjectDetail.jsx renders DIAGRAMS[slug] under an "Architecture" heading when a key is present.
// Dev server only: /__diagrams/ shows every registered diagram in both languages (DiagramsPreview.jsx).
import { lazyDiagram } from "./lazyDiagram.jsx";
import { VIEWS } from "./views.js";

export const DIAGRAMS = {
  eribi: lazyDiagram(() => import("./EribiDiagram.jsx"), VIEWS.eribi),
  "ai-native-delivery": lazyDiagram(() => import("./AiDeliveryDiagram.jsx"), VIEWS["ai-native-delivery"]),
  "belbim-headless-cms": lazyDiagram(() => import("./BelbimDiagram.jsx"), VIEWS["belbim-headless-cms"]),
  "igdas-field-operations": lazyDiagram(() => import("./IgdasDiagram.jsx"), VIEWS["igdas-field-operations"]),
};
