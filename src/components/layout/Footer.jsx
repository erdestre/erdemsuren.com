import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import common, { CONTACT } from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { keepDots } from "../../lib/text.js";
import { FOOTER_KEYS, matchRoute, pathFor } from "../../routes.js";
import Badge from "../ui/Badge.jsx";
import Container from "../ui/Container.jsx";
import SmartLink from "../ui/SmartLink.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { currentFor } from "./navCurrent.js";

// 44×44px tap targets on touch layouts (short labels like "CV" included), 36px tall from sm.
const LINK =
  "inline-flex min-h-11 min-w-11 items-center gap-2.5 text-[15px] text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline sm:min-h-9";
const HEADING = "font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted";

/**
 * Site footer (master plan §B.1, §F.10): name + title + descriptor; Pages; Elsewhere (LinkedIn, GitHub);
 * Contact (e-mail only: no phone, no WhatsApp here); bottom row with ©, Privacy and the language toggle.
 */
export default function Footer() {
  const lang = useLang();
  const t = common[lang];
  const { pathname } = useLocation();
  const match = matchRoute(pathname);

  const elsewhere = [
    { key: "linkedin", href: CONTACT.linkedin, label: t.contactLabels.linkedin, Icon: FiLinkedin },
    { key: "github", href: CONTACT.github, label: t.contactLabels.github, Icon: FiGithub },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold tracking-tight text-ink">{t.name}</p>
          <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-balance text-muted">{keepDots(t.title)}</p>
          <Badge tone="signal" className="mt-4">
            {t.descriptor}
          </Badge>
        </div>

        <nav aria-labelledby="footer-pages">
          <h2 id="footer-pages" className={HEADING}>
            {t.footer.pagesHeading}
          </h2>
          <ul className="mt-4 grid gap-1">
            {FOOTER_KEYS.map((key) => (
              <li key={key}>
                <Link to={pathFor(key, lang)} aria-current={currentFor(key, match)} className={LINK}>
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={HEADING}>{t.footer.elsewhereHeading}</h2>
          <ul className="mt-4 grid gap-1">
            {elsewhere.map(({ key, href, label, Icon }) => (
              <li key={key}>
                <SmartLink href={href} external me className={LINK}>
                  <Icon aria-hidden="true" className="size-4 shrink-0 text-muted" />
                  {label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>{t.footer.contactHeading}</h2>
          <ul className="mt-4 grid gap-1">
            <li>
              <SmartLink href={`mailto:${CONTACT.email}`} className={LINK}>
                <FiMail aria-hidden="true" className="size-4 shrink-0 text-muted" />
                <span className="min-w-0 [overflow-wrap:anywhere]">{CONTACT.email}</span>
              </SmartLink>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 text-sm text-muted">
          <div className="flex flex-wrap items-center gap-x-5">
            <p>
              © {__BUILD_YEAR__} {t.name}
            </p>
            <Link
              to={pathFor("privacy", lang)}
              aria-current={currentFor("privacy", match)}
              className="inline-flex min-h-11 min-w-11 items-center underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {t.nav.privacy}
            </Link>
          </div>
          <LanguageToggle />
        </Container>
      </div>
    </footer>
  );
}
