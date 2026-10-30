import { cx } from "../../lib/cx.js";
import Container from "./Container.jsx";
import Eyebrow from "./Eyebrow.jsx";
import KeepHyphens from "./KeepHyphens.jsx";

/**
 * Top of an inner page: the page's single <h1> (display face, text-h1 scale), an optional eyebrow, intro
 * paragraph(s) and extra content (buttons; breadcrumbs above via `before`). A string title keeps its short hyphenated
 * words together ("e-commerce" never breaks as "e-" / "commerce").
 */
export default function PageHeader({ eyebrow, title, intro, before, children, className }) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];
  return (
    <header className={cx("border-b border-line", className)}>
      <Container className="py-14 sm:py-20">
        {before}
        {eyebrow ? <Eyebrow className={before ? "mt-8" : undefined}>{eyebrow}</Eyebrow> : null}
        <h1 className={cx("max-w-3xl text-h1 font-semibold text-ink", (eyebrow || before) && "mt-3")}>
          {typeof title === "string" ? <KeepHyphens text={title} /> : title}
        </h1>
        {paragraphs.map((text) => (
          <p key={text} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {text}
          </p>
        ))}
        {children}
      </Container>
    </header>
  );
}
