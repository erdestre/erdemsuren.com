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
    { key: "email", label: c.contactLabels.email, value: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: FiMail },
    {
      key: "whatsapp",
      label: c.contactLabels.whatsapp,
      value: t.whatsappAction,
      href: CONTACT.whatsapp,
      Icon: FaWhatsapp,
      external: true,
    },
    {
      key: "linkedin",
      label: c.contactLabels.linkedin,
      value: handle(CONTACT.linkedin),
      href: CONTACT.linkedin,
      Icon: FiLinkedin,
      external: true,
      me: true,
    },
    {
      key: "github",
      label: c.contactLabels.github,
      value: handle(CONTACT.github),
      href: CONTACT.github,
      Icon: FiGithub,
      external: true,
      me: true,
    },
  ];

  return (
    <>
      <Seo page="contact" />
      <PageHeader title={t.heading} intro={[t.intro, c.availability]} />

      <Section as="div">
        <ul className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map(({ key, label, value, href, Icon, external, me }) => (
            <li key={key}>
              <SmartLink
                href={href}
                external={external}
                me={me}
                className="group flex min-h-20 items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <Icon aria-hidden="true" className="size-6 shrink-0 text-accent" />
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
