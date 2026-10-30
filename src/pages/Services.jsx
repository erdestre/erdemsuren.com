import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiEye,
  FiGlobe,
  FiLayout,
  FiLink,
  FiMail,
  FiPlus,
  FiServer,
  FiShield,
  FiShoppingCart,
  FiTerminal,
  FiUserCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import {
  Badge,
  ButtonLink,
  Card,
  Eyebrow,
  PageHeader,
  Section,
  SectionHeading,
  Terminal,
} from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import { getProject } from "../content/projects.js";
import services from "../content/services.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { cx } from "../lib/cx.js";
import { keepDots } from "../lib/text.js";
import { contactPath, pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

const SERVICE_ICONS = {
  web: FiGlobe,
  ecommerce: FiShoppingCart,
  panels: FiLayout,
  integrations: FiLink,
  ai: FiCpu,
  ops: FiServer,
  "ai-setup": FiTerminal,
};

const WHY_ICONS = {
  owner: FiUserCheck,
  discipline: FiShield,
  progress: FiEye,
  ai: FiCpu,
};

const projectsFor = (slugs = []) => slugs.map((slug) => getProject(slug)).filter(Boolean);

/** "Related work" links under a service card: one link per row, 44px tall (tap target). Unknown slugs are skipped. */
function RelatedWork({ slugs, label, lang, className }) {
  const projects = projectsFor(slugs);
  if (!projects.length) return null;
  return (
    <div className={className}>
      <p className="text-sm text-muted">{label[projects.length > 1 ? "other" : "one"]}</p>
      <ul className="mt-1">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              to={pathFor("project", lang, { slug: project.slug })}
              className="flex min-h-11 items-center py-1 text-sm font-medium text-accent underline-offset-4 hover:text-accent-hover hover:underline"
            >
              {/* The arrow sits in the text flow, so it follows the last word when a long title wraps. */}
              <span className="min-w-0">
                {project.title[lang]}
                <FiArrowRight aria-hidden="true" className="ml-1.5 inline-block size-3.5 align-[-0.125em]" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ item, t, lang }) {
  const Icon = SERVICE_ICONS[item.key] ?? FiCheck;

  const intro = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon className="size-5" />
        </span>
        {item.ai ? <Badge tone="signal">{t.aiBadge}</Badge> : null}
      </div>
      {item.audience ? <Eyebrow className="mt-5">{item.audience}</Eyebrow> : null}
      <h3 className={cx("text-lg font-semibold tracking-tight text-ink", item.audience ? "mt-2" : "mt-5")}>
        {item.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
    </>
  );
  const points = (className) => (
    <ul className={cx("space-y-2 text-[15px] text-ink-soft", className)}>
      {item.points.map((point) => (
        <li key={point} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span className="min-w-0">{point}</span>
        </li>
      ))}
    </ul>
  );
  const note = item.note ? (
    <p className="mt-4 border-l-2 border-line pl-3 text-sm leading-relaxed text-muted">{item.note}</p>
  ) : null;
  const related = <RelatedWork slugs={item.proof} label={t.proofLabel} lang={lang} className="mt-auto pt-5" />;

  if (item.wide) {
    return (
      <Card
        id={`service-${item.key}`}
        className="grid w-full grid-cols-1 gap-x-12 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        <div>
          {intro}
          {note}
        </div>
        <div className="flex flex-col">
          {points("mt-6 lg:mt-0")}
          {related}
        </div>
      </Card>
    );
  }

  return (
    <Card id={`service-${item.key}`} className="flex w-full flex-col p-6">
      {intro}
      {points("mt-4")}
      {note}
      {related}
    </Card>
  );
}

export default function Services() {
  const lang = useLang();
  const t = services[lang];
  const c = common[lang];
  // The contact page preselects the "project" topic from this link's query (master plan §B.5).
  const introCall = contactPath(lang, "project");
  const work = projectsFor(t.work.slugs);

  return (
    <>
      {/* The service cards are also the JSON-LD OfferCatalog (one Service node per card, linked by #service-<key>). */}
      <Seo page="services" offers={t.items} />

      <PageHeader eyebrow={t.eyebrow} title={t.heading} intro={t.intro}>
        {/* Stacked CTAs are full width on phones (same as Home), content width from sm. */}
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to={introCall} size="lg" className="w-full sm:w-auto">
            {t.cta.introCall}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href={CONTACT.whatsapp} external variant="secondary" size="lg" className="w-full sm:w-auto">
            <FaWhatsapp aria-hidden="true" className="size-4" />
            {c.cta.whatsapp}
          </ButtonLink>
        </div>
        <ul className="mt-6 space-y-2 text-[15px] text-muted">
          {[t.terms, c.availability].map((line) => (
            <li key={line} className="flex gap-2.5">
              <FiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <span className="min-w-0">{line}</span>
            </li>
          ))}
        </ul>
        {/* Real 1px borders between the cells (a gap-px grid on bg-line put the hairlines on fractional pixels, where
            they anti-aliased to near-invisible): one column, then 2 × 2 from sm, then one row of four from lg. */}
        <dl className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((fact, index) => (
            <div
              key={fact.key}
              className={cx(
                "border-line px-5 py-4",
                index > 0 && "border-t lg:border-t-0 lg:border-l",
                index === 1 && "sm:border-t-0",
                index % 2 === 1 && "sm:border-l",
              )}
            >
              <dt className="font-mono text-xs text-muted">{fact.label}</dt>
              <dd className="mt-1.5">
                {fact.descriptor ? (
                  <Badge tone="signal">{c.descriptor}</Badge>
                ) : (
                  <span className="block font-semibold leading-snug text-ink">{fact.value}</span>
                )}
                <span className="mt-1.5 block text-sm leading-snug text-muted">{keepDots(fact.detail)}</span>
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <Section labelledBy="services-list-title">
        <SectionHeading
          id="services-list-title"
          eyebrow={t.list.eyebrow}
          title={t.list.title}
          description={t.list.description}
        />
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <li key={item.key} className={cx("flex", item.wide && "md:col-span-2 lg:col-span-3")}>
              <ServiceCard item={item} t={t} lang={lang} />
            </li>
          ))}
        </ul>
      </Section>

      {work.length ? (
        <Section tone="surface" labelledBy="services-work-title">
          <SectionHeading
            id="services-work-title"
            eyebrow={t.work.eyebrow}
            title={t.work.title}
            description={t.work.description}
            action={
              <ButtonLink to={pathFor("projects", lang)} variant="secondary">
                {c.cta.allProjects}
                <FiArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            }
          />
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {work.map((project) => (
              <li key={project.slug} className="flex">
                <ProjectCard project={project} className="w-full" />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section labelledBy="services-process-title">
        <SectionHeading
          id="services-process-title"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />
        <ol className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-4">
              <p aria-hidden="true" className="font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface" labelledBy="services-why-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHeading id="services-why-title" eyebrow={t.why.eyebrow} title={t.why.title} />
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {t.why.items.map((item) => {
                const Icon = WHY_ICONS[item.key] ?? FiCheck;
                return (
                  <li key={item.key}>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent"
                      >
                        <Icon className="size-[18px]" />
                      </span>
                      {item.ai ? <Badge tone="signal">{t.aiBadge}</Badge> : null}
                    </div>
                    <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <Terminal
            title={t.why.terminal.title}
            label={t.why.terminal.label}
            command={t.why.terminal.command}
            lines={t.why.terminal.lines}
            result={t.why.terminal.result}
          />
        </div>
      </Section>

      <Section labelledBy="services-faq-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <SectionHeading id="services-faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{t.faq.more}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link inline-flex min-h-11 items-center gap-2 font-medium [overflow-wrap:anywhere]"
            >
              <FiMail aria-hidden="true" className="size-4 shrink-0" />
              {CONTACT.email}
            </a>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {t.faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{item.q}</span>
                  <FiPlus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  />
                </summary>
                <p className="max-w-measure pb-5 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="services-closing-title">
        <SectionHeading
          id="services-closing-title"
          eyebrow={t.closing.eyebrow}
          title={t.closing.title}
          description={t.closing.text}
          onInk
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to={introCall} size="lg" className="w-full sm:w-auto">
            {t.cta.introCall}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href={CONTACT.whatsapp} external variant="inverse" size="lg" className="w-full sm:w-auto">
            <FaWhatsapp aria-hidden="true" className="size-4" />
            {c.cta.whatsapp}
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT.email}`} variant="inverse" size="lg" className="w-full sm:w-auto">
            <FiMail aria-hidden="true" className="size-4" />
            {c.cta.email}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
