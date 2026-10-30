// The published case-study slugs, in display order (same ASCII slug in TR and EN; never change one once published).
// This short list is all the route table needs (src/routes.js: matching, the TR/EN toggle, prerender paths and the
// sitemap), so the main bundle does not carry the case-study copy. src/content/projects.js must list exactly these
// projects in this order; it throws otherwise, which fails the build.
export const PROJECT_SLUGS = [
  "eribi",
  "ai-native-delivery",
  "eribi-growth",
  "eribi-creative",
  "belbim-headless-cms",
  "igdas-field-operations",
  "drift-max",
  "darkpost",
  "olser-bilisim",
  "odis",
];
