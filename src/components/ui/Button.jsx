import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import common from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { buttonClasses } from "./buttonStyles.js";

/** Native <button>. `variant`: primary | secondary | ghost | dark | inverse; `size`: sm | md | lg. `type` defaults to "button". */
export function Button({ variant, size, className, type = "button", ...props }) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

/**
 * Link styled as a button.
 * - `to`: internal route → react-router <Link> (renders a real <a href>).
 * - `href` + `external`: new tab with rel="noopener noreferrer", an arrow icon and an sr-only note.
 * - `href` only: plain <a> (mailto:, tel:, files).
 */
export function ButtonLink({ to, href, external = false, variant, size, className, children, ...props }) {
  const lang = useLang();
  const classes = buttonClasses({ variant, size, className });
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
        <FiArrowUpRight aria-hidden="true" className="size-4" />
        {/* Leading space: the accessible name reads "Visit the site (opens in a new tab)", not "...site(opens...". */}
        <span className="sr-only"> {common[lang].a11y.newTab}</span>
      </a>
    );
  }
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
