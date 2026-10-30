import { Fragment } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "../components/ContactForm.jsx";
import { Card, PageHeader, Section, SmartLink } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import contact from "../content/contact.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import Seo from "../seo/Seo.jsx";

// "https://www.linkedin.com/in/erdemsurentr/" → "linkedin.com/in/erdemsurentr"
const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Long values on narrow cards: offer line breaks after "/" and before "@" (overflow-wrap stays as a fallback).
// A plain loop, not a lookbehind regex (older Safari cannot parse those).
function Breakable({ text }) {
  const parts = [];
  let current = "";
  for (const char of text) {
    if (char === "@" && current) {
      parts.push(current);
      current = "";
    }
    current += char;
    if (char === "/") {
      parts.push(current);
      current = "";
    }
  }
  if (current) parts.push(current);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 ? <wbr /> : null}
      {part}
    </Fragment>
  ));
}

/**
 * Contact (master plan §B.2, §F.7; owner decision 5): h1 + lead, direct channels (e-mail, WhatsApp, LinkedIn,
 * GitHub; the phone number is never shown as text) and the contact form. The WhatsApp link appears only here and
 * on Services.
 */
export default function Contact() {
  const lang = useLang();
  const t = contact[lang];
  const c = common[lang];

  // `brand`: the label is a product name, so it is uppercased with English rules ("LINKEDIN", not "LİNKEDIN").
  const channels = [
    {
      key: "email",
      label: c.contactLabels.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      Icon: FiMail,
    },
    {
      key: "whatsapp",
      label: c.contactLabels.whatsapp,
      value: c.cta.whatsapp,
      href: CONTACT.whatsapp,
      Icon: FaWhatsapp,
      external: true,
      brand: true,
    },
    {
      key: "linkedin",
      label: c.contactLabels.linkedin,
      value: displayUrl(CONTACT.linkedin),
      href: CONTACT.linkedin,
      Icon: FiLinkedin,
      external: true,
      me: true,
      brand: true,
    },
    {
      key: "github",
      label: c.contactLabels.github,
      value: displayUrl(CONTACT.github),
      href: CONTACT.github,
      Icon: FiGithub,
      external: true,
      me: true,
      brand: true,
    },
  ];

  return (
    <>
      <Seo page="contact" />
      <PageHeader eyebrow={c.cta.workWithMe} title={t.heading} intro={[c.availability, t.intro]} />

      <Section as="div">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <section aria-labelledby="channels-title" className="min-w-0">
            <h2 id="channels-title" className="text-2xl font-semibold text-ink">
              {t.channels.heading}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3">
              {channels.map(({ key, label, value, href, Icon, external, me, brand }) => (
                <li key={key}>
                  <SmartLink
                    href={href}
                    external={external}
                    me={me}
                    className="group flex min-h-16 items-center gap-4 rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        lang={brand && lang !== "en" ? "en" : undefined}
                        className="block font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase"
                      >
                        {label}
                      </span>
                      <span className="mt-0.5 block font-medium text-ink [overflow-wrap:anywhere] group-hover:text-accent">
                        <Breakable text={value} />
                      </span>
                    </span>
                    {external ? (
                      <FiArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted group-hover:text-accent" />
                    ) : null}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-3 text-[15px] text-muted">
              <FiMapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span>
                <span className="sr-only">{c.contactLabels.location}: </span>
                {keepDots(`${c.location} · ${t.channels.timezone}`)}
              </span>
            </p>
          </section>

          <section aria-labelledby="form-title" className="min-w-0">
            <Card className="p-5 sm:p-8">
              <h2 id="form-title" className="text-2xl font-semibold text-ink">
                {t.form.heading}
              </h2>
              <ContactForm labelledBy="form-title" className="mt-6" />
            </Card>
          </section>
        </div>
      </Section>
    </>
  );
}
