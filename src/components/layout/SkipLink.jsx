import common from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";

/** First focusable element on every page: jumps to <main id="main">. */
export default function SkipLink() {
  const lang = useLang();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper focus:shadow-lift"
    >
      {common[lang].a11y.skipToContent}
    </a>
  );
}
