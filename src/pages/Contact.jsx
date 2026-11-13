import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PageHeader, Section, SmartLink } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import contact from "../content/contact.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Seo from "../seo/Seo.jsx";

// "https://www.linkedin.com/in/erdemsurentr/" → "erdemsurentr" (the label already names the network)
const handle = (url) => url.replace(/\/$/, "").split("/").pop();

/** Contact: four direct channels. The phone number is never shown as text (only inside the WhatsApp link). */
export default function Contact() {
  const lang = useLang();
  const t = contact[lang];
  const c = common[lang];

  const channels = [
    {
      key: "email",
      label: c.contactLabels.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      Icon: FiMail,
      tint: "accent",
    },
    {
      key: "whatsapp",
      label: c.contactLabels.whatsapp,
      value: t.whatsappAction,
      href: CONTACT.whatsapp,
      Icon: FaWhatsapp,
      external: true,
      tint: "success",
    },
    {
      key: "linkedin",
      label: c.contactLabels.linkedin,
      value: handle(CONTACT.linkedin),
      href: CONTACT.linkedin,
      Icon: FiLinkedin,
      external: true,
      me: true,
      tint: "violet",
    },
    {
      key: "github",
      label: c.contactLabels.github,
      value: handle(CONTACT.github),
      href: CONTACT.github,
      Icon: FiGithub,
      external: true,
      me: true,
      tint: "ink",
    },
  ];

  return (
    <>
      <Seo page="contact" />
      <PageHeader title={t.heading} intro={[t.intro, c.availability]} />

      <Section as="div">
        <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map(({ key, label, value, href, Icon, external, me, tint }) => (
            <li key={key}>
              <SmartLink
                href={href}
                external={external}
                me={me}
                className="spotlight group relative flex min-h-20 items-center gap-4 overflow-hidden rounded-xl border border-line bg-surface px-5 py-4 transition-[translate,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_60px_-28px_rgb(39_71_208/0.5)] motion-reduce:hover:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-xl"
                  style={{
                    color: `var(--color-${tint})`,
                    backgroundColor: `color-mix(in srgb, var(--color-${tint}) 10%, transparent)`,
                  }}
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block text-lg font-medium text-ink [overflow-wrap:anywhere] group-hover:text-accent">
                    {value}
                  </span>
                </span>
                {external ? (
                  <FiArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted group-hover:text-accent" />
                ) : null}
              </SmartLink>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
