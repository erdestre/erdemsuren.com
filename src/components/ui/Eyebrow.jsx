import { cx } from "../../lib/cx.js";

/**
 * Small mono label above headings (cobalt; `onInk` = accent-on-ink for ink bands). Uppercase relies on
 * <html lang> for correct Turkish casing (i → İ). `caps={false}` keeps the text's own casing, for labels that
 * contain names whose casing matters (".NET", "React/Next.js").
 */
export default function Eyebrow({ as: Tag = "p", onInk = false, caps = true, className, children }) {
  return (
    <Tag
      className={cx(
        "font-mono text-xs font-medium",
        caps ? "uppercase tracking-[0.14em]" : "tracking-[0.04em]",
        onInk ? "text-accent-on-ink" : "text-accent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
