import { Link } from "react-router-dom";
import common from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";

/**
 * One link component for every destination:
 * - `to`        internal route → react-router <Link>
 * - `external`  new tab, rel="noopener noreferrer" (+ "me" for identity profiles) and an sr-only note
 * - otherwise   plain <a> (mailto:, tel:, files)
 */
export default function SmartLink({ to, href, external = false, me = false, className, children, ...props }) {
  const lang = useLang();
  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel={me ? "me noopener noreferrer" : "noopener noreferrer"}
        className={className}
        {...props}
      >
        {children}
        <span className="sr-only"> {common[lang].a11y.newTab}</span>
      </a>
    );
  }
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
