import { cx } from "../../lib/cx.js";
import Container from "./Container.jsx";

// ink = an "ink band": on-ink text; inside it use text-on-ink-muted, link-on-ink, Button variant "inverse",
// Badge tone "signal". Focus rings switch to the lime signal automatically (src/index.css).
const TONES = {
  default: "",
  surface: "border-y border-line bg-surface",
  ink: "bg-ink text-on-ink",
};

/**
 * Vertical page section with a Container inside: 4rem padding on mobile, 6rem from lg (§B.6).
 * Pass `labelledBy` with the id of the section's heading so the region gets an accessible name.
 */
export default function Section({
  as: Tag = "section",
  id,
  labelledBy,
  tone = "default",
  className,
  containerClassName,
  children,
}) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={cx("py-16 lg:py-24", TONES[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
