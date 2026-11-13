import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { hostOf, liveSites } from "../components/projects/pick.js";
import ProjectImage from "../components/projects/ProjectImage.jsx";
import { ArrowLink, ButtonLink, Container, KeepHyphens, Section, TagList } from "../components/ui/index.js";
import common from "../content/common.js";
import projectsCopy, { getProject, PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";
import NotFound from "./NotFound.jsx";

const FULL = "(min-width: 1152px) 1088px, calc(100vw - 2.5rem)";
const HALF = "(min-width: 1152px) 532px, (min-width: 768px) calc((100vw - 4.5rem) / 2), calc(100vw - 2.5rem)";

/** Project page: name, one line, role, live links, screenshots, 3–4 bullets, stack, contact + next project. */
export default function ProjectDetail() {
  const lang = useLang();
  const { slug } = useParams();
  const project = getProject(slug);
  // Unknown slug: the server serves 404.html for it, so render the identical NotFound page (hydration-safe).
  if (!project) return <NotFound />;

  const t = projectsCopy[lang];
  const c = common[lang];
  const name = project.name[lang];
  const sites = liveSites(project);
  const screens = project.screens;
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

  return (
    <>
      <Seo page="project" params={{ slug: project.slug }} project={project} />

      <header className="border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { label: c.nav.home, to: pathFor("home", lang) },
              { label: c.nav.projects, to: pathFor("projects", lang) },
              { label: name },
            ]}
          />
          <h1 className="mt-8 max-w-3xl text-h1 font-semibold text-ink">{name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            <KeepHyphens text={project.line[lang]} />
          </p>
          <p className="mt-3 font-mono text-sm text-muted">
            {keepDots(`${project.org} · ${project.role[lang]} · ${project.period[lang]}`)}
          </p>
          {sites.length ? (
            <ul className="mt-6 flex flex-wrap gap-3">
              {sites.map((site) => (
                <li key={site}>
                  <ButtonLink href={site} external variant="secondary">
                    {hostOf(site)}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </header>

      <Section as="div">
        {screens.length ? (
          <section aria-label={t.labels.screens} className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {screens.map((key, index) => {
              const wide = screens.length !== 2 && index === 0;
              // screens[i] shows liveUrls[i] (see projects.js).
              const alt = sites[index] ? t.shot.replace("{host}", hostOf(sites[index])) : name;
              return (
                <ProjectImage
                  key={key}
                  image={key}
                  alt={alt}
                  sizes={wide ? FULL : HALF}
                  priority={index === 0}
                  className={`h-auto w-full rounded-xl border border-line ${wide ? "md:col-span-2" : ""}`}
                />
              );
            })}
          </section>
        ) : null}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <section aria-labelledby="did-title">
            <h2 id="did-title" className="text-2xl font-semibold text-ink">
              {t.labels.did}
            </h2>
            <ul className="mt-5 space-y-3 text-lg text-ink-soft">
              {project.points[lang].map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <KeepHyphens text={point} />
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="stack-title">
            <h2 id="stack-title" className="text-2xl font-semibold text-ink">
              {t.labels.stack}
            </h2>
            <TagList items={project.stack} className="mt-5" label={t.labels.stack} />
          </section>
        </div>
      </Section>

      <Section tone="surface" labelledBy="project-cta-title">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="project-cta-title" className="text-2xl font-semibold text-ink">
            {t.cta.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink to={pathFor("contact", lang)} size="lg">
              {t.cta.button}
            </ButtonLink>
            <ArrowLink to={pathFor("project", lang, { slug: next.slug })}>
              {c.cta.next}: {next.name[lang]}
            </ArrowLink>
          </div>
        </div>
      </Section>
    </>
  );
}
