import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { cx } from "../../lib/cx.js";

/**
 * Text link with a trailing arrow for tertiary actions ("View CV →", "Case study →"). Underlined like body links,
 * 44px tall so it is a full tap target, and it wraps (unlike buttons), so long labels never overflow at 360px.
 * `onInk` switches to the ink-band link colours (focus ring turns lime there automatically).
 */
export default function ArrowLink({ to, onInk = false, className, children }) {
  return (
    <Link
      to={to}
      className={cx(
        "group inline-flex min-h-11 items-center gap-2 font-medium",
        onInk ? "link-on-ink" : "link",
        className,
      )}
    >
      <span>{children}</span>
      <FiArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      />
    </Link>
  );
}
