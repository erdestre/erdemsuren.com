// Keeps a " · " separator on the line of the word before it (no line may start with "·") by turning the
// space before the dot into a no-break space. For display only; content strings and meta tags stay as-is.
export function keepDots(text) {
  return typeof text === "string" ? text.replace(/ · /g, " · ") : text;
}
