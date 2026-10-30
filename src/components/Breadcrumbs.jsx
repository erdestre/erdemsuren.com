import { Link } from "react-router-dom";
import common from "../content/common.js";
import { useLang } from "../i18n/LanguageContext.jsx";

/**
 * Visible breadcrumb trail; mirrors the BreadcrumbList JSON-LD. Items: [{ label, to? }] (last = current page).
 * One line at every width: the links never shrink and the current page (repeated by the <h1> right below) is
 * truncated with an ellipsis, so a wrapped line can never start with the "/" separator.
 */
export default function Breadcrumbs({ items }) {
  const lang = useLang();
  return (
    <nav aria-label={common[lang].a11y.breadcrumb}>
      <ol className="flex items-center gap-x-2 text-sm text-muted">
        {items.map((item, index) => (
          <li key={item.label} className={item.to ? "flex shrink-0 items-center gap-2" : "flex min-w-0 items-center gap-2"}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-muted">
                /
              </span>
            ) : null}
            {item.to ? (
              <Link
                to={item.to}
                className="inline-flex min-h-11 min-w-11 items-center rounded-sm underline-offset-4 hover:text-ink hover:underline sm:min-h-0 sm:min-w-0"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="truncate text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
