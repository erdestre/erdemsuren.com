import { FiArrowRight, FiCpu, FiLayout, FiLink } from "react-icons/fi";
import { ArrowLink, ButtonLink, Card, PageHeader, Section } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import { getProject } from "../content/projects.js";
import services, { SERVICE_PROOF_SLUGS } from "../content/services.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

const ICONS = { web: FiLayout, integration: FiLink, ai: FiCpu };

/** Services: three cards, three steps, recent work, contact band. Copy: src/content/services.js. */
export default function Services() {
  const lang = useLang();
  const t = services[lang];
  const c = common[lang];
  const proof = SERVICE_PROOF_SLUGS.map(getProject).filter(Boolean);

  return (
    <>
      <Seo page="services" offers={t.items} />
      <PageHeader title={t.heading} intro={t.intro} />

      <Section as="div">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.items.map((item) => {
            const Icon = ICONS[item.key];
            return (
              <li key={item.key} id={`service-${item.key}`} className="flex min-w-0">
                <Card className="w-full p-6">
                  {Icon ? <Icon aria-hidden="true" className="size-6 text-accent" /> : null}
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink">{item.title}</h2>
                  <p className="mt-2 text-muted">{item.text}</p>
                </Card>
              </li>
            );
          })}
        </ul>

        <section aria-labelledby="steps-title" className="mt-16">
          <h2 id="steps-title" className="text-2xl font-semibold text-ink">
            {t.stepsTitle}
          </h2>
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.steps.map((step, index) => (
              <li key={step} className="flex items-baseline gap-3 text-lg text-ink-soft">
                <span aria-hidden="true" className="font-mono text-sm font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {proof.length ? (
          <section aria-labelledby="proof-title" className="mt-16">
            <h2 id="proof-title" className="text-2xl font-semibold text-ink">
              {t.proof}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8">
              {proof.map((project) => (
                <li key={project.slug}>
                  <ArrowLink to={pathFor("project", lang, { slug: project.slug })}>{project.name[lang]}</ArrowLink>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Section>

      <Section tone="ink" labelledBy="services-cta-title">
        <h2 id="services-cta-title" className="text-h2 font-semibold text-on-ink">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-lg text-on-ink-muted">{t.cta.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to={pathFor("contact", lang)} size="lg">
            {t.cta.button}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href={CONTACT.whatsapp} external variant="inverse" size="lg">
            {c.cta.whatsapp}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
