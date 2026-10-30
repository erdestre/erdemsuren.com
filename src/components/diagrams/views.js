// Drawing sizes in SVG user units: `tall` is shown below md, `wide` from md. Shared by the diagram modules and by the
// space-reserving placeholder in lazyDiagram.jsx, which is why it lives apart from them (a few bytes in the main bundle).
//
// Text sizes (parts.jsx) are 17.5 units at least. The wide drawing is never narrower than ~669 px (md with a classic
// scrollbar) and the tall one never narrower than ~285 px at a 360 px viewport, so no text renders below 12 px.
export const MARGIN = 6;

export const VIEWS = {
  eribi: { tall: [380, 1318], wide: [960, 680] },
  "ai-native-delivery": { tall: [380, 1334], wide: [960, 664] },
  "belbim-headless-cms": { tall: [380, 980], wide: [960, 590] },
  "igdas-field-operations": { tall: [380, 1006], wide: [960, 640] },
};
