import { useId } from "react";
import { cx } from "../../lib/cx.js";
import { MARGIN } from "./views.js";

// Shared drawing primitives for the architecture diagrams. Colours come only from the src/index.css tokens (fill-* and
// stroke-* utilities). Geometry is plain arithmetic on fixed numbers, rounded to 0.1, so the server and the browser
// produce identical attributes (no trigonometry, no randomness).

const TITLE = 20; // node titles (Inter, weight 600)
const TEXT = 17.5; // every other text: node lines, chips, arrow labels, group legends
const TITLE_LH = 25;
const TEXT_LH = 23;
const GAP = 5; // between a title and its lines
const PAD = 16; // left padding of start-aligned text
const HEAD = 11; // arrowhead length
const HEAD_HALF = 5.5; // arrowhead half width

const round = (value) => Math.round(value * 10) / 10;
// Baseline that centres one line of `size` in a line box of `lineHeight` starting at `top` (cap height ≈ 0.72 em).
const baseline = (top, lineHeight, size) => round(top + lineHeight / 2 + size * 0.36);

const NODE_TONES = {
  plain: { rect: "fill-surface stroke-ink", title: "fill-ink", text: "fill-muted" },
  accent: { rect: "fill-accent-soft stroke-accent", title: "fill-ink", text: "fill-ink-soft" },
  soft: { rect: "fill-paper stroke-muted", title: "fill-ink", text: "fill-muted" },
  none: { rect: null, title: "fill-ink", text: "fill-muted" }, // text only, inside a larger box
};

const LINE_TONES = {
  ink: { line: "stroke-ink", head: "fill-ink" },
  muted: { line: "stroke-muted", head: "fill-muted" },
  accent: { line: "stroke-accent", head: "fill-accent" },
};

/**
 * One accessible diagram: a <figure> with two drawings of the same content (`tall` below md, `wide` from md; the
 * hidden one is display:none, so assistive tech only meets the visible one) and a visible <figcaption>.
 * copy: { title, desc, caption } in the page language. tall / wide: { size: [w, h], body: SVG children }.
 */
export function DiagramFigure({ copy, tall, wide }) {
  return (
    <figure className="w-full max-w-100 md:max-w-none">
      <div className="relative rounded-xl border border-line bg-paper p-2 sm:p-3 md:p-4">
        <div aria-hidden="true" className="bg-dot-grid absolute inset-0 rounded-[inherit]" />
        <DiagramSvg copy={copy} size={tall.size} className="md:hidden">
          {tall.body}
        </DiagramSvg>
        <DiagramSvg copy={copy} size={wide.size} className="hidden md:block">
          {wide.body}
        </DiagramSvg>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted">{copy.caption}</figcaption>
    </figure>
  );
}

function DiagramSvg({ copy, size: [w, h], className, children }) {
  // useId: SSR-safe and unique per instance (the dev preview renders every diagram twice).
  const id = useId();
  const titleId = `${id}title`;
  const descId = `${id}desc`;
  return (
    <svg
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      viewBox={`${-MARGIN} ${-MARGIN} ${w + 2 * MARGIN} ${h + 2 * MARGIN}`}
      width={w + 2 * MARGIN}
      height={h + 2 * MARGIN}
      className={cx("relative h-auto w-full", className)}
    >
      <title id={titleId}>{copy.title}</title>
      <desc id={descId}>{copy.desc}</desc>
      {children}
    </svg>
  );
}

/**
 * A component box. `title` is a string or an array of lines; `lines` are strings or { text, mono }.
 * tone: plain | accent | soft | none (text only). align: middle | start. `ai` adds the lime AI marker (top right).
 */
export function Node({ x, y, w, h, title, lines = [], tone = "plain", align = "middle", rx = 10, ai = false }) {
  const style = NODE_TONES[tone];
  const titles = [].concat(title ?? []);
  const rows = [
    ...titles.map((text) => ({ text, isTitle: true })),
    ...lines.map((line) => (typeof line === "string" ? { text: line } : line)),
  ];
  const gap = titles.length && lines.length ? GAP : 0;
  let top = y + (h - (titles.length * TITLE_LH + lines.length * TEXT_LH + gap)) / 2;
  const textX = align === "start" ? x + PAD : x + w / 2;

  return (
    <g>
      {style.rect ? <rect x={x} y={y} width={w} height={h} rx={rx} strokeWidth={1.5} className={style.rect} /> : null}
      {rows.map((row, index) => {
        const size = row.isTitle ? TITLE : TEXT;
        const lineHeight = row.isTitle ? TITLE_LH : TEXT_LH;
        if (index === titles.length) top += gap;
        const y0 = baseline(top, lineHeight, size);
        top += lineHeight;
        return (
          <text
            key={index}
            x={textX}
            y={y0}
            fontSize={size}
            fontWeight={row.isTitle ? 600 : undefined}
            textAnchor={align}
            className={cx(row.isTitle ? style.title : style.text, row.mono && "font-mono")}
          >
            {row.text}
          </text>
        );
      })}
      {ai ? <AiMark x={x + w - 15} y={y + 15} /> : null}
    </g>
  );
}

/** A small one-line box (services in a grid, inventory steps). */
export function Chip({ x, y, w, h = 42, children, ai = false }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} strokeWidth={1.25} className="fill-surface stroke-ink" />
      <text
        x={round(x + w / 2)}
        y={baseline(y, h, TEXT)}
        fontSize={TEXT}
        fontWeight={500}
        textAnchor="middle"
        className="fill-ink"
      >
        {children}
      </text>
      {ai ? <AiMark x={x + w - 12} y={y + 12} small /> : null}
    </g>
  );
}

// Lime dot = AI (the site-wide meaning of the signal colour). Decorative: the label says "AI" in words.
function AiMark({ x, y, small = false }) {
  return <circle cx={x} cy={y} r={small ? 4.5 : 6} strokeWidth={1.25} className="fill-signal stroke-ink" />;
}

/**
 * A dashed container whose legend sits on its top border, like a fieldset. tone: muted | accent.
 * A paper strip under the legend breaks the border (the text halo alone leaves it visible between words). Its width
 * assumes ≤ 0.605 em per character, which holds for every font in the mono stack (Consolas 0.55 … Menlo 0.602).
 * Keep arrows that enter a group away from its legend.
 */
export function Group({ x, y, w, h, label, labelX = x + 18, tone = "muted" }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        strokeWidth={1.25}
        strokeDasharray="7 5"
        className={cx("fill-none", tone === "accent" ? "stroke-accent" : "stroke-muted")}
      />
      {label ? (
        <>
          <rect
            x={labelX - 4}
            y={y - 6}
            width={round([...label].length * TEXT * 0.605 + 8)}
            height={12}
            className="fill-paper"
          />
          <Label x={labelX} y={y + 6} tone={tone}>
            {label}
          </Label>
        </>
      ) : null}
    </g>
  );
}

/**
 * A connector through `points` ([x1, y1, x2, y2, …], axis-aligned segments). `head` draws an arrowhead at the end;
 * the line stops at the head's base so the stroke never pokes through the tip. tone: ink | muted | accent.
 */
export function Arrow({ points, tone = "ink", dashed = false, head = true }) {
  const style = LINE_TONES[tone];
  const p = [...points];
  const n = p.length;
  let headPath = null;
  if (head) {
    const [x1, y1, x2, y2] = p.slice(n - 4);
    const dx = Math.sign(x2 - x1);
    const dy = Math.sign(y2 - y1);
    const bx = x2 - dx * HEAD;
    const by = y2 - dy * HEAD;
    p[n - 2] = bx;
    p[n - 1] = by;
    headPath = `M${x2} ${y2}L${bx - dy * HEAD_HALF} ${by + dx * HEAD_HALF}L${bx + dy * HEAD_HALF} ${by - dx * HEAD_HALF}Z`;
  }
  let d = "";
  for (let i = 0; i < p.length; i += 2) d += `${i ? "L" : "M"}${p[i]} ${p[i + 1]}`;
  return (
    <g>
      <path
        d={d}
        strokeWidth={1.75}
        strokeLinejoin="round"
        strokeDasharray={dashed ? "6 5" : undefined}
        className={cx("fill-none", style.line)}
      />
      {headPath ? <path d={headPath} className={style.head} /> : null}
    </g>
  );
}

/** A mono label on the paper canvas (arrow labels, group legends), with a paper halo that hides lines behind it. */
export function Label({ x, y, anchor = "start", tone = "muted", children }) {
  return (
    <text
      x={x}
      y={y}
      fontSize={TEXT}
      textAnchor={anchor}
      strokeWidth={6}
      strokeLinejoin="round"
      className={cx(
        "font-mono stroke-paper [paint-order:stroke]",
        tone === "accent" ? "fill-accent" : "fill-muted",
      )}
    >
      {children}
    </text>
  );
}
