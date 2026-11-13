import { cx } from "../../lib/cx.js";

/**
 * Surface card: 1px line border, 12px radius, flat (§B.6).
 * `interactive` (only for cards that are one click target): border turns cobalt, the card lifts 4px with a cobalt
 * shadow and a pointer-following light (.spotlight) on hover
 * (no motion under prefers-reduced-motion), plus a focus ring while a link inside has keyboard focus. Use it with
 * a "stretched" main link: give that link `after:absolute after:inset-0`, the card is `relative`.
 */
export default function Card({ as: Tag = "div", interactive = false, className, children, ...props }) {
  return (
    <Tag
      className={cx(
        "rounded-xl border border-line bg-surface",
        interactive &&
          "spotlight relative transition-[translate,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_60px_-28px_rgb(39_71_208/0.5)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-paper motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
