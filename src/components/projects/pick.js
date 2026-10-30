// Reads a project field that is either one value for both languages or a { tr, en } pair.
export function pick(value, lang) {
  return value && typeof value === "object" && !Array.isArray(value) ? value[lang] : value;
}

// Host name of an absolute URL ("https://eribitech.com" → "eribitech.com"). Pure, so it is SSR-safe.
export function hostOf(url) {
  return new URL(url).host;
}

// A project's live sites, in order: `liveUrls` when a case study covers several (BELBİM), otherwise `liveUrl`.
export function liveSites(project) {
  return project.liveUrls ?? (project.liveUrl ? [project.liveUrl] : []);
}
