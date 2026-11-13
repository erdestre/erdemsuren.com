import { useEffect, useRef, useState } from "react";
import loop from "../../assets/home/system-loop.mp4";
import posterLarge from "../../assets/home/system-poster-1600.webp";
import posterSmall from "../../assets/home/system-poster-960.webp";
import { cx } from "../../lib/cx.js";

// Decorative system-blueprint band (Higgsfield, November 2026: an 8 s seamless loop; its first frame is the poster).
// The prerendered HTML has only the poster. The 2.4 MB video is added on the client when the band comes near the
// viewport, and only on wide screens, without prefers-reduced-motion and without Save-Data.
export default function SystemLoop({ className }) {
  const box = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = box.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const saveData = Boolean(navigator.connection?.saveData);
    if (!node || reduce || !wide || saveData || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} aria-hidden="true" className={cx("relative overflow-hidden rounded-2xl border border-line bg-paper", className)}>
      <img
        src={posterSmall}
        srcSet={`${posterSmall} 960w, ${posterLarge} 1600w`}
        sizes="(min-width: 1152px) 1088px, calc(100vw - 2.5rem)"
        width="1600"
        height="900"
        alt=""
        loading="lazy"
        decoding="async"
        className="aspect-[21/9] h-auto w-full object-cover"
      />
      {play ? (
        <video
          src={loop}
          poster={posterLarge}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
