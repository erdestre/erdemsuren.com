import { cx } from "../lib/cx.js";
import { keepDots } from "../lib/text.js";

/**
 * Vertical timeline of roles, newest first (About; the CV page renders its own layout from cv.js).
 *
 * Items: [{ org, role, period, location, points[], summary?, current?, kind? }]
 *  - `kind: "break"`: a career break. Rendered without organisation, with a hollow marker.
 *  - `current: true`: an ongoing role (decorative halo on the marker; the period text says "present").
 *
 * Props:
 *  - `headingLevel`: level of each role heading (3 under a section h2).
 *  - `compact`: role, organisation, period and location only.
 *  - `summary`: show each item's one-line `summary` instead of its `points` (About page).
 *  - `renderExtra(item)`: optional content at the end of an item (e.g. a case-study link).
 *
 * The marker cuts the line with a paper-coloured border, so place the list on a paper background.
 */
export default function ExperienceList({
  items,
  headingLevel = 3,
  compact = false,
  summary = false,
  renderExtra,
  className,
}) {
  const Heading = `h${headingLevel}`;
  return (
    <ol className={cx("relative space-y-10 border-l border-line", className)}>
      {items.map((item) => {
        const isBreak = item.kind === "break";
        const extra = renderExtra ? renderExtra(item) : null;
        return (
          <li key={`${item.org}-${item.role}-${item.period}`} className="relative pl-6 sm:pl-8">
            <span
              aria-hidden="true"
              className={cx(
                "absolute top-2 -left-[5px] size-[9px] rounded-full border-2",
                isBreak && "border-field-border bg-paper",
                !isBreak && "border-paper bg-accent",
                !isBreak && (item.current ? "ring-4 ring-accent/20" : "ring-1 ring-accent/30"),
              )}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <Heading
                className={cx("text-lg font-semibold tracking-tight", isBreak ? "text-ink-soft" : "text-ink")}
              >
                {item.role}
                {item.org ? (
                  // keepDots: the "·" never starts a line.
                  <span className="font-normal text-muted">{keepDots(" · " + item.org)}</span>
                ) : null}
              </Heading>
              <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
            </div>
            {item.location ? <p className="mt-1 text-sm text-muted">{keepDots(item.location)}</p> : null}
            {!compact && summary && item.summary ? (
              <p className="mt-3 max-w-measure text-base leading-relaxed text-ink-soft">{item.summary}</p>
            ) : null}
            {!compact && !summary && item.points?.length ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-soft marker:text-muted">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {extra}
          </li>
        );
      })}
    </ol>
  );
}
