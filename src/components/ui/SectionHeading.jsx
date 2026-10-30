import { cx } from "../../lib/cx.js";
import Eyebrow from "./Eyebrow.jsx";

/**
 * Section title block: optional eyebrow (mono label), heading (h2 by default, display face, text-h2 scale),
 * description and an action (e.g. a "see all" link) aligned to the right on wide screens.
 * On an ink band pass `onInk` so the description uses on-ink-muted.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  action,
  onInk = false,
  className,
}) {
  return (
    <div className={cx("flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow onInk={onInk}>{eyebrow}</Eyebrow> : null}
        <Heading
          id={id}
          className={cx(
            Heading === "h2" ? "text-h2 font-semibold" : "text-xl font-semibold tracking-tight sm:text-2xl",
            onInk ? "text-on-ink" : "text-ink",
            eyebrow && "mt-3",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p className={cx("mt-3 leading-relaxed", onInk ? "text-on-ink-muted" : "text-muted")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
