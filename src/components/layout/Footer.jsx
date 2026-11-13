import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import common, { CONTACT } from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { matchRoute, pathFor } from "../../routes.js";
import Container from "../ui/Container.jsx";
import SmartLink from "../ui/SmartLink.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { currentFor } from "./navCurrent.js";

// 44×44px tap targets on touch layouts, 36px tall from sm.
const LINK =
  "inline-flex min-h-11 min-w-11 items-center gap-2 text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline sm:min-h-9";

/** Site footer: one row with the name, e-mail, LinkedIn, GitHub, privacy and the language toggle. */
export default function Footer() {
  const lang = useLang();
  const t = common[lang];
  const { pathname } = useLocation();
  const match = matchRoute(pathname);

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {__BUILD_YEAR__} {t.name}
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <li>
            <SmartLink href={`mailto:${CONTACT.email}`} className={LINK}>
              <FiMail aria-hidden="true" className="size-4 shrink-0 text-muted" />
              <span className="[overflow-wrap:anywhere]">{CONTACT.email}</span>
            </SmartLink>
          </li>
          <li>
            <SmartLink href={CONTACT.linkedin} external me className={LINK}>
              <FiLinkedin aria-hidden="true" className="size-4 shrink-0 text-muted" />
              {t.contactLabels.linkedin}
            </SmartLink>
          </li>
          <li>
            <SmartLink href={CONTACT.github} external me className={LINK}>
              <FiGithub aria-hidden="true" className="size-4 shrink-0 text-muted" />
              {t.contactLabels.github}
            </SmartLink>
          </li>
          <li>
            <Link to={pathFor("privacy", lang)} aria-current={currentFor("privacy", match)} className={LINK}>
              {t.nav.privacy}
            </Link>
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </Container>
    </footer>
  );
}
