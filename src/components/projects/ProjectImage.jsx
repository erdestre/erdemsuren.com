import { PROJECT_IMAGES } from "../../content/projectImages.js";

/**
 * Responsive project screenshot (800w / 1568w WebP) with intrinsic width/height to avoid layout shift.
 * `priority` = the page's LCP image: eager + fetchpriority=high (React also emits a preload for it).
 */
export default function ProjectImage({ image, alt, sizes = "100vw", priority = false, className }) {
  const shot = PROJECT_IMAGES[image];
  if (!shot) return null;
  return (
    <img
      src={shot.src}
      srcSet={shot.srcSet}
      sizes={sizes}
      width={shot.width}
      height={shot.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
