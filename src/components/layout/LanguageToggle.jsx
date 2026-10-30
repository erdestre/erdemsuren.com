import { Link, useLocation } from "react-router-dom";
import common, { LANG_NAMES } from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { alternatePath, LANGS } from "../../routes.js";

// The choice is remembered only as a hint; it is never read to redirect anyone (ARCH.md §3).
function rememberLanguage(code) {
  try {
    window.localStorage.setItem("lang", code);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); nothing depends on it.
  }
}

const ITEM =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm lg:h-9 lg:min-w-10 lg:px-2.5 lg:text-xs";

/**
 * TR | EN segmented toggle (header and footer). The current language is plain text; the other one is a real link
 * to the paired URL of the current page (unknown pages pair with the other language's home page).
 * Items are 44px tall below the lg breakpoint (touch), 36px on desktop.
 */
export default function LanguageToggle({ className }) {
  const lang = useLang();
  const { pathname } = useLocation();
  const t = common[lang].a11y;

  return (
    <div
      role="group"
      aria-label={t.langGroup}
      className={cx("inline-flex items-center rounded-lg border border-line bg-surface p-0.5 font-mono", className)}
    >
      {LANGS.map((code) =>
        code === lang ? (
          <span key={code} aria-current="true" className={cx(ITEM, "bg-ink font-medium text-on-ink")}>
            <span className="sr-only">{t.currentLang} </span>
            {code.toUpperCase()}
          </span>
        ) : (
          <Link
            key={code}
            to={alternatePath(pathname, code)}
            hrefLang={code}
            lang={code}
            onClick={() => rememberLanguage(code)}
            className={cx(ITEM, "font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent")}
          >
            {code.toUpperCase()}
            <span className="sr-only"> – {LANG_NAMES[code]}</span>
          </Link>
        ),
      )}
    </div>
  );
}
