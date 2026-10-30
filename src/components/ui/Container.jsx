import { cx } from "../../lib/cx.js";

/** Centered page column (max-w-6xl) with responsive side padding. */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cx("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}
