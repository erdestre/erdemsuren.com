// Keeps short hyphenated words ("e-ticaret", "e-commerce", "multi-tenant", "age-rating") on one line, so a heading or
// a paragraph never ends a line with a dangling "e-" or "multi-". Space Grotesk has no U+2011 (non-breaking hyphen)
// glyph, so a no-wrap span is the clean way. Longer compounds may still break at the hyphen, so nothing can overflow a
// 360px screen (12 characters of a 36px heading are about 260px). Display only: data, meta tags and JSON-LD keep the
// plain string. The text between those words stays one string (one text node, no React separators per word).
// Non-string children are returned unchanged.
const MAX_LENGTH = 12;

export default function KeepHyphens({ text }) {
  if (typeof text !== "string") return text ?? null;
  const out = [];
  let plain = "";
  for (const part of text.split(/(\s+)/)) {
    if (part.includes("-") && part.length <= MAX_LENGTH) {
      if (plain) out.push(plain);
      plain = "";
      out.push(
        <span key={out.length} className="whitespace-nowrap">
          {part}
        </span>,
      );
    } else {
      plain += part;
    }
  }
  if (plain) out.push(plain);
  return out.length === 1 && typeof out[0] === "string" ? out[0] : out;
}
