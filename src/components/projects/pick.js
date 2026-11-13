// Host name of an absolute URL ("https://eribitech.com" → "eribitech.com"). Pure, so it is SSR-safe.
export function hostOf(url) {
  return new URL(url).host;
}

// A project's live sites, in order.
export function liveSites(project) {
  return project.liveUrls ?? [];
}
