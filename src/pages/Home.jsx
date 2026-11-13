import { FiArrowRight } from "react-icons/fi";
import Avatar from "../components/Avatar.jsx";
import SystemLoop from "../components/home/SystemLoop.jsx";
import SystemMap from "../components/home/SystemMap.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import { ArrowLink, ButtonLink, Container, Section, SectionHeading, SmartLink } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import ctaTexture from "../assets/home/cta-texture-2000.webp";
import home from "../content/home.js";
import { FEATURED_PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

// Entrance delay for the n-th hero element (CSS .enter reads --d).
const delay = (seconds) => ({ "--d": `${seconds}s` });

/** Home (/ and /en/): hero with the system map, selected work, end-to-end layers, experience, contact band. */
export default function Home() {
  const lang = useLang();
  const t = home[lang];
  const c = common[lang];

  return (
    <>
      <Seo page="home" />

      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_75%_40%,#000_20%,transparent_75%)]"
        />
        <Container className="relative grid items-center gap-12 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,29rem)] lg:gap-14 lg:pt-24 lg:pb-28">
          <div className="min-w-0">
            <Avatar size={72} alt={c.a11y.portrait} loading="eager" className="ring-1 ring-line" />
            <h1 id="hero-title" className="mt-8 text-ink">
              <span className="block text-display">{c.name}</span>{" "}
              <span className="mt-3 block font-display text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight font-semibold tracking-display">
                {c.title}
              </span>
            </h1>
            <p className="enter mt-2 font-display text-[clamp(1.15rem,2.1vw,1.5rem)] font-medium text-accent" style={delay(0.05)}>
              {keepDots(c.stack)}
            </p>
            <p className="enter mt-4 font-mono text-sm font-medium text-ink-soft sm:text-base" style={delay(0.12)}>
              {keepDots(c.focus)}
            </p>
            <ul className="mt-6 max-w-2xl space-y-2 text-lg text-ink-soft">
              {t.lead.map((line, index) => (
                <li key={line} className="enter flex gap-3" style={delay(0.18 + index * 0.07)}>
                  <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="enter mt-6 flex items-center gap-2.5 text-[15px] font-medium text-ink" style={delay(0.55)}>
              <span aria-hidden="true" className="live-dot size-2 shrink-0 rounded-full bg-success" />
              {c.availability}
            </p>
            <div className="enter mt-8 flex flex-wrap gap-3" style={delay(0.6)}>
              <ButtonLink to={pathFor("projects", lang)} size="lg">
                {c.cta.projects}
                <FiArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink to={pathFor("cv", lang)} size="lg" variant="secondary">
                {c.cta.cv}
              </ButtonLink>
            </div>
          </div>

          <div className="enter min-w-0" style={delay(0.1)}>
            <div className="rounded-2xl border border-line bg-surface/85 p-3 shadow-lift backdrop-blur-[2px] sm:p-5">
              <SystemMap title={t.mapLabel} labels={t.map} className="block h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="surface" labelledBy="work-title">
        <SectionHeading
          id="work-title"
          title={t.work.title}
          action={<ArrowLink to={pathFor("projects", lang)}>{c.cta.allProjects}</ArrowLink>}
          className="reveal"
        />
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <li key={project.id} className="reveal flex min-w-0">
              <ProjectCard project={project} to={`${pathFor("projects", lang)}#${project.id}`} className="w-full" />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="layers-title">
        <SectionHeading id="layers-title" title={t.layers.title} description={t.layers.text} className="reveal" />
        <SystemLoop className="reveal mt-10" />
        <div className="relative mt-12">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-[1.0625rem] right-0 left-0 hidden h-0.5 w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line x1="0" y1="1" x2="100" y2="1" className="flow-line" stroke="var(--color-accent)" strokeOpacity="0.5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.layers.items.map((layer, index) => (
            <li key={layer.key} className="reveal relative min-w-0">
              <span className="relative inline-flex h-9 items-center rounded-full border border-line bg-paper px-3 font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{layer.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {layer.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs leading-5 text-ink-soft transition-colors hover:border-accent hover:text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          </ol>
        </div>
      </Section>

      <Section tone="surface" labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          title={t.experience.title}
          action={<ArrowLink to={pathFor("cv", lang)}>{c.cta.cv}</ArrowLink>}
          className="reveal"
        />
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {t.experience.items.map((item) => (
            <li key={item.key} className="reveal py-4">
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

      <Section tone="ink" labelledBy="cta-title" className="relative overflow-hidden">
        <img
          src={ctaTexture}
          width="2000"
          height="667"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        <div className="reveal relative">
          <h2 id="cta-title" className="text-h2 font-semibold text-on-ink">
            {t.cta.title}
            <span aria-hidden="true" className="caret ml-2 inline-block h-[0.85em] w-[0.45em] translate-y-[0.08em] rounded-[2px] bg-signal" />
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
        </div>
      </Section>
    </>
  );
}
