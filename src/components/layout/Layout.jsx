import { useEffect } from "react";
import { useLang } from "../../i18n/LanguageContext.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import SkipLink from "./SkipLink.jsx";

/** Page chrome: skip link, sticky header, <main id="main">, footer. */
export default function Layout({ children }) {
  const lang = useLang();

  // The prerendered HTML already has the right <html lang>; keep it right after client-side navigation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Spotlight cards (.spotlight in index.css): the light follows the pointer. One passive listener for the page.
  useEffect(() => {
    const onMove = (event) => {
      const card = event.target instanceof Element ? event.target.closest(".spotlight") : null;
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
