// aria-current for a menu item: "page" on the page itself.
// Based on the validated route match (matchRoute), so unknown URLs (404) highlight nothing, on the server and
// on the client alike.
export function currentFor(key, match) {
  if (!match) return undefined;
  if (match.key === key) return "page";
  return undefined;
}
