import { FiArrowRight } from "react-icons/fi";
import ctaTexture from "../assets/home/cta-texture-2000.webp";
import Avatar from "../components/Avatar.jsx";
import Stats from "../components/home/Stats.jsx";
import SystemLoop from "../components/home/SystemLoop.jsx";
import SystemMap from "../components/home/SystemMap.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import { ArrowLink, ButtonLink, Container, Section, SectionHeading, SmartLink } from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import home from "../content/home.js";
import { FEATURED_PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { cx } from "../lib/cx.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

// Entrance delay for a hero element (CSS .enter reads --d).
const delay = (seconds) => ({ "--d": `${seconds}s` });

// The three stack chips under the title, each with its own colour dot.
const STACK_DOTS = ["var(--color-accent)", "var(--color-ink)", "var(--color-violet)"];

const CURRENT = /Günümüz|present/;

/** Home (/ and /en/): hero with the system map, numbers, selected work, end-to-end layers, experience, contact band. */
export default function Home() {
  const lang = useLang();
  const t = home[lang];
  const c = common[lang];

  return (
    <>
      <Seo page="home" />

      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="aurora">
          <span />
          <span />
          <span />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_75%_40%,#000_15%,transparent_72%)]"
        />
        <Container className="relative grid items-center gap-12 pt-12 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-14 lg:pt-24 lg:pb-24">
          <div className="min-w-0">
            <span className="avatar-ring">
              <Avatar size={72} alt={c.a11y.portrait} loading="eager" />
            </span>
            <h1 id="hero-title" className="mt-8 text-ink">
              <span className="block text-display">{c.name}</span>{" "}
              <span className="text-gradient mt-3 block pb-1 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-display">
                {c.title}
              </span>
            </h1>
            <ul aria-label={c.stack} className="enter mt-4 flex flex-wrap gap-2" style={delay(0.05)}>
              {c.stack.split(" · ").map((item, index) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 font-mono text-sm font-medium text-ink shadow-card backdrop-blur-sm"
                >
                  <span aria-hidden="true" className="size-2 rounded-full" style={{ backgroundColor: STACK_DOTS[index] }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="enter mt-5 font-mono text-sm font-medium tracking-wide text-ink-soft sm:text-base" style={delay(0.12)}>
              {c.focus}
            </p>
            <ul className="mt-6 max-w-2xl space-y-2 text-lg text-ink-soft">
              {t.lead.map((line, index) => (
                <li key={line} className="enter flex gap-3" style={delay(0.18 + index * 0.07)}>
                  <span
                    aria-hidden="true"
                    className="mt-[0.62em] size-2 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-accent to-violet"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p
              className="enter mt-6 inline-flex items-center gap-2.5 rounded-full border border-success/25 bg-success/[0.07] px-3.5 py-1.5 text-[15px] font-medium text-ink"
              style={delay(0.55)}
            >
              <span aria-hidden="true" className="live-dot size-2 shrink-0 rounded-full bg-success" />
              {c.availability}
            </p>
            <div className="enter mt-8 flex flex-wrap gap-3" style={delay(0.6)}>
              <ButtonLink to={pathFor("projects", lang)} size="lg" className="shadow-[0_12px_30px_-12px_rgb(39_71_208/0.7)]">
                {c.cta.projects}
                <FiArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink to={pathFor("cv", lang)} size="lg" variant="secondary">
                {c.cta.cv}
              </ButtonLink>
            </div>
          </div>

          <div className="enter min-w-0" style={delay(0.1)}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgb(39_71_208/0.35),transparent)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(160deg,var(--color-ink),var(--color-night))] shadow-[0_40px_90px_-40px_rgb(14_17_22/0.9)] ring-1 ring-white/10">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-rose/80" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-amber/80" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-signal/80" />
                  <span className="ml-3 font-mono text-xs text-on-ink-muted">~/erdemsuren · {t.map.window}</span>
                </div>
                <div className="p-3 sm:p-5">
                  <SystemMap title={t.mapLabel} labels={t.map} className="block h-auto w-full" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section labelledBy="stats-title" className="!pt-0 !pb-14 lg:!pb-20">
        <h2 id="stats-title" className="sr-only">
          {t.stats.label}
        </h2>
        <div className="reveal">
          <Stats items={t.stats.items} label={t.stats.label} />
        </div>
      </Section>

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

      <Section tone="ink" labelledBy="layers-title" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgb(39_71_208/0.35),transparent_70%),radial-gradient(ellipse_50%_40%_at_0%_100%,rgb(107_78_246/0.25),transparent_70%)]"
        />
        <div className="relative">
          <SectionHeading
            id="layers-title"
            title={<span className="text-gradient-on-ink">{t.layers.title}</span>}
            description={t.layers.text}
            onInk
            className="reveal"
          />
          <SystemLoop className="reveal mt-10 shadow-[0_30px_80px_-30px_rgb(39_71_208/0.7)]" />
          <div className="relative mt-12">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute top-[1.0625rem] right-0 left-0 hidden h-0.5 w-full lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 100 2"
            >
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                className="flow-line"
                stroke="var(--color-signal)"
                strokeOpacity="0.6"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.layers.items.map((layer, index) => (
                <li key={layer.key} className="reveal relative min-w-0">
                  <span className="relative inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-signal px-3 font-mono text-xs font-semibold text-ink shadow-[0_0_24px_-4px_rgb(198_242_78/0.8)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-on-ink">{layer.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {layer.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-xs leading-5 text-on-ink transition-colors hover:border-signal/60"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          title={t.experience.title}
          action={<ArrowLink to={pathFor("cv", lang)}>{c.cta.cv}</ArrowLink>}
          className="reveal"
        />
        <ol className="relative mt-10 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[4.5px] before:w-0.5 before:rounded-full before:bg-[linear-gradient(to_bottom,var(--color-signal),var(--color-accent),var(--color-violet),transparent)]">
          {t.experience.items.map((item) => {
            const current = CURRENT.test(item.period);
            return (
              <li key={item.key} className="reveal relative pl-9">
                <span
                  aria-hidden="true"
                  className={cx(
                    "absolute top-1.5 left-0 size-[11px] rounded-full ring-4 ring-paper",
                    current ? "live-dot bg-signal" : "bg-accent",
                  )}
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <p className="text-lg">
                    <span className="font-semibold text-ink">{item.org}</span>
                    <span className="text-muted"> · {item.role}</span>
                  </p>
                  <p className="shrink-0 font-mono text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-1 text-ink-soft">{item.text}</p>
              </li>
            );
          })}
        </ol>
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
          <h2 id="cta-title" className="text-h2 font-semibold">
            <span className="text-gradient-on-ink">{t.cta.title}</span>
            <span aria-hidden="true" className="caret ml-2 inline-block h-[0.85em] w-[0.45em] translate-y-[0.08em] rounded-[2px] bg-signal" />
          </h2>
          <p className="mt-3 text-lg text-on-ink-muted">{t.cta.text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink to={pathFor("contact", lang)} size="lg" className="shadow-[0_12px_30px_-10px_rgb(142_162_255/0.6)]">
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
