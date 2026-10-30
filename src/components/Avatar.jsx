import avatar256 from "../assets/avatar-256.webp";
import avatar512 from "../assets/avatar-512.webp";
import { cx } from "../lib/cx.js";

/**
 * Small round portrait (never a large photo hero). `size` is the rendered CSS size in px; srcset lets the
 * browser pick 256/512 for the device pixel ratio. Pass alt="" when the name is right next to the image.
 * - `loading`: "lazy" (default) or "eager" for images above the fold.
 * - `fetchPriority="low"` for tiny decorative uses (e.g. the header), which also keeps React from emitting
 *   an image preload for it during prerender.
 */
export default function Avatar({ size = 48, alt, loading = "lazy", fetchPriority, className }) {
  return (
    <img
      src={avatar256}
      srcSet={`${avatar256} 256w, ${avatar512} 512w`}
      sizes={`${size}px`}
      width={size}
      height={size}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={cx("shrink-0 rounded-full bg-line object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
