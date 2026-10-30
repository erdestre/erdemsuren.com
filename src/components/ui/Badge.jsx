import { cx } from "../../lib/cx.js";

// Every text/background pair is WCAG AA (src/index.css header): ink on surface 18.9, accent on accent-soft 6.15,
// ink on signal 14.6, success / error on their 5% tints 6.1, muted on surface 6.85.
const TONES = {
  neutral: "border-line bg-surface text-ink",
  accent: "border-accent/25 bg-accent-soft text-accent",
  // Lime "AI pill" and live status. Works on light and on ink backgrounds (ink text on lime).
  signal: "border-ink/10 bg-signal text-ink",
  success: "border-success/25 bg-success/5 text-success",
  error: "border-error/25 bg-error/5 text-error",
  // Prototype / draft / not live: quiet dashed outline.
  draft: "border-dashed border-field-border bg-surface text-muted",
};

const DOTS = {
  neutral: "bg-muted",
  accent: "bg-accent",
  signal: "bg-ink",
  success: "bg-success",
  error: "bg-error",
  draft: "border border-muted",
};

// Deprecated tone name kept for existing callers (`prototype: "warn"`): renders as `draft`.
const ALIASES = { warn: "draft" };

/**
 * Small pill label (status, project type, the AI pill).
 * `tone`: neutral | accent | signal | success | error | draft. `dot` adds a decorative (aria-hidden) status dot,
 * so the text itself must carry the meaning.
 */
export default function Badge({ tone = "neutral", dot = false, className, children }) {
  const key = ALIASES[tone] ?? (TONES[tone] ? tone : "neutral");
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        TONES[key],
        className,
      )}
    >
      {dot ? <span aria-hidden="true" className={cx("size-1.5 shrink-0 rounded-full", DOTS[key])} /> : null}
      {children}
    </span>
  );
}
