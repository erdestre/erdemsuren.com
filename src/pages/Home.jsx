import { FiArrowRight } from "react-icons/fi";
import Avatar from "../components/Avatar.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import { ArrowLink, ButtonLink, Container, Section, SectionHeading, SmartLink } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import home, { HOME_STACK } from "../content/home.js";
import { FEATURED_PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

/** Home (/ and /en/): hero, selected work, experience, stack, contact band. Copy: src/content/home.js. */
export default function Home() {
  const lang = useLang();
  const t = home[lang];
  const c = common[lang];

  return (
    <>
      <Seo page="home" />

      <section aria-labelledby="hero-title">
        <Container className="pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
          <Avatar size={72} alt={c.a11y.portrait} loading="eager" className="ring-1 ring-line" />
          <h1 id="hero-title" className="mt-8 text-ink">
            <span className="block text-display">{c.name}</span>{" "}
            <span className="mt-3 block text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight font-medium text-ink-soft">
              {keepDots(c.title)}
            </span>
          </h1>
          <p className="mt-4 font-mono text-base font-medium text-accent sm:text-lg">{keepDots(c.focus)}</p>
          <ul className="mt-6 max-w-3xl space-y-2 text-lg text-ink-soft">
            {t.lead.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2.5 text-[15px] font-medium text-ink">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-success" />
            {c.availability}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={pathFor("projects", lang)} size="lg">
              {c.cta.projects}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink to={pathFor("cv", lang)} size="lg" variant="secondary">
              {c.cta.cv}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section tone="surface" labelledBy="work-title">
        <SectionHeading
          id="work-title"
          title={t.work.title}
          action={<ArrowLink to={pathFor("projects", lang)}>{c.cta.allProjects}</ArrowLink>}
        />
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <li key={project.slug} className="flex min-w-0">
              <ProjectCard project={project} className="w-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          title={t.experience.title}
          action={<ArrowLink to={pathFor("cv", lang)}>{c.cta.cv}</ArrowLink>}
        />
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {t.experience.items.map((item) => (
            <li key={item.key} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p>
                  <span className="font-semibold text-ink">{item.org}</span>
                  <span className="text-muted"> · {item.role}</span>
                </p>
                <p className="shrink-0 font-mono text-sm text-muted">{item.period}</p>
              </div>
              <p className="mt-1 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="stack-title">
        <SectionHeading id="stack-title" title={t.stack.title} />
        <ul aria-label={t.stack.title} className="mt-6 flex flex-wrap gap-2">
          {HOME_STACK.map((item) => (
            <li key={item} className="rounded-lg border border-line bg-paper px-3 py-1.5 font-mono text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink" labelledBy="cta-title">
        <h2 id="cta-title" className="text-h2 font-semibold text-on-ink">
          {t.cta.title}
        </h2>
        <p className="mt-3 text-lg text-on-ink-muted">{t.cta.text}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink to={pathFor("contact", lang)} size="lg">
            {c.cta.contact}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <SmartLink
            href={`mailto:${CONTACT.email}`}
            className="link-on-ink inline-flex min-h-11 items-center font-medium [overflow-wrap:anywhere]"
          >
            {CONTACT.email}
          </SmartLink>
        </div>
      </Section>
    </>
  );
}
