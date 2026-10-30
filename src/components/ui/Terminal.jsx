import { cx } from "../../lib/cx.js";
import { keepDots } from "../../lib/text.js";

/**
 * The "agent terminal" motif: an ink card in the mono face.
 * Props:
 *  - title: window title (shown in the top bar, used as the figure caption)
 *  - label: accessible name of the figure
 *  - command: optional first line, rendered after a "$" prompt
 *  - lines: [{ key, text }] rendered as an aligned two-column log
 *  - result: optional closing line with a check mark
 *  - children: free-form content instead of / after `lines`
 * Colours on ink are AA: on-ink text 17.6:1, accent-on-ink keys 7.89:1, lime signal prompt/check 14.6:1,
 * on-ink-muted title on the ink-soft bar 6.40:1. Focusable children get the lime focus ring (src/index.css).
 */
export default function Terminal({ title, label, command, lines = [], result, className, children }) {
  return (
    <figure
      aria-label={label}
      className={cx("overflow-hidden rounded-xl border border-ink bg-ink text-on-ink shadow-lift", className)}
    >
      <div className="flex items-center gap-3 border-b border-on-ink/10 bg-ink-soft px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-on-ink/25" />
          <span className="size-2.5 rounded-full bg-on-ink/25" />
          <span className="size-2.5 rounded-full bg-on-ink/25" />
        </span>
        {title ? <figcaption className="truncate font-mono text-xs text-on-ink-muted">{title}</figcaption> : null}
      </div>
      <div className="px-5 py-5 font-mono text-[13px] leading-relaxed sm:px-6 sm:text-sm">
        {command ? (
          <p className="break-words">
            <span aria-hidden="true" className="text-signal">
              ${" "}
            </span>
            <span className="text-on-ink">{command}</span>
          </p>
        ) : null}
        {lines.length ? (
          <dl className={cx("grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2", command && "mt-4")}>
            {lines.map((line) => (
              <div key={line.key} className="contents">
                <dt className="text-accent-on-ink">{line.key}</dt>
                <dd className="text-on-ink">{keepDots(line.text)}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {children}
        {result ? (
          <p className="mt-4 text-signal">
            <span aria-hidden="true">✓ </span>
            {result}
          </p>
        ) : null}
      </div>
    </figure>
  );
}
