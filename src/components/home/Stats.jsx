import { useEffect, useRef } from "react";

// Big-number strip. The prerendered HTML has the final numbers; on the client, the first time the strip scrolls into
// view, each number counts up from 0 (skipped under prefers-reduced-motion). Only the text of [data-count] changes.
export default function Stats({ items, label }) {
  const list = useRef(null);

  useEffect(() => {
    const node = list.current;
    if (!node || !("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const targets = [...node.querySelectorAll("[data-count]")];
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          for (const el of targets) el.textContent = String(Math.round(Number(el.dataset.count) * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ul
      ref={list}
      aria-label={label}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:grid-cols-4"
    >
      {items.map((item) => (
        <li key={item.label} className="relative bg-surface p-6 sm:p-8">
          <p className="font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-none font-semibold tracking-display">
            <span className="text-gradient tabular-nums" data-count={item.value}>
              {item.value}
            </span>
            <span className="text-gradient">{item.suffix}</span>
          </p>
          <p className="mt-3 font-mono text-xs text-muted sm:text-sm">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
