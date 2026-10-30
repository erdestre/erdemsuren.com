import { PageHeader, Section, SmartLink } from "../components/ui/index.js";
import { CONTACT } from "../content/common.js";
import privacy, { PRIVACY_UPDATED } from "../content/privacy.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Seo from "../seo/Seo.jsx";

function Block({ block }) {
  if (block.list) {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft marker:text-muted">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.email) {
    return (
      <p className="mt-4 text-ink-soft">
        {block.email}{" "}
        <SmartLink
          href={`mailto:${CONTACT.email}`}
          className="link inline-flex min-h-11 items-center [overflow-wrap:anywhere] sm:min-h-0"
        >
          {CONTACT.email}
        </SmartLink>
        {block.after ?? null}
      </p>
    );
  }
  return <p className="mt-4 text-ink-soft">{block.p}</p>;
}

/** Privacy notice / KVKK aydınlatma metni for the contact form (master plan §F.8). Linked from the footer and the form. */
export default function Privacy() {
  const lang = useLang();
  const t = privacy[lang];

  return (
    <>
      <Seo page="privacy" />
      <PageHeader eyebrow={t.eyebrow} title={t.heading} intro={t.intro}>
        <p className="mt-6 font-mono text-xs text-muted">
          {t.updatedLabel}: <time dateTime={PRIVACY_UPDATED}>{t.updated}</time>
        </p>
      </PageHeader>

      <Section as="div">
        <div className="max-w-measure space-y-12">
          {t.sections.map((section) => (
            <section key={section.id} aria-labelledby={`privacy-${section.id}`}>
              <h2 id={`privacy-${section.id}`} className="text-2xl font-semibold text-ink">
                {section.title}
              </h2>
              {section.blocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
