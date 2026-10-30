import { cx } from "../../lib/cx.js";

/** Technology / keyword chip in the mono face (ink-soft on paper, 13.8:1). */
export default function Tag({ as: Element = "span", className, children }) {
  return (
    <Element
      className={cx(
        "inline-flex items-center rounded-md border border-line bg-paper px-2 py-0.5 font-mono text-xs leading-5 text-ink-soft",
        className,
      )}
    >
      {children}
    </Element>
  );
}

/** A wrapping list of Tags (semantic <ul>). */
export function TagList({ items, className, label }) {
  return (
    <ul className={cx("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
