import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * On client-side navigation to a new path: scroll to the top (or to the element named by the URL's #hash, e.g.
 * /hakkimda/#skills-title) and move focus to <main> so screen readers start at the new content. Back/forward (POP)
 * keeps the browser's own scroll restoration. `scroll-padding-top` in index.css keeps a hash target clear of the
 * sticky header.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    if (navigationType === "POP") return;
    let target = null;
    if (hash.length > 1) {
      try {
        target = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        target = null;
      }
    }
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash, navigationType]);

  return null;
}
