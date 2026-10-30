// aria-current for a menu item: "page" on the page itself, "true" on its section (a project page → Projects).
// Based on the validated route match (matchRoute), so unknown URLs (404) highlight nothing, on the server and
// on the client alike.
export function currentFor(key, match) {
  if (!match) return undefined;
  if (match.key === key) return "page";
  if (key === "projects" && match.key === "project") return "true";
  return undefined;
}
