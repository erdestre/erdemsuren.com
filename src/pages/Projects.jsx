import ProjectCard from "../components/projects/ProjectCard.jsx";
import { ArrowLink, PageHeader, Section } from "../components/ui/index.js";
import projectsCopy, { PROJECT_GROUPS, PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

/** Projects page: one card per project, grouped by where it was built. One line each; details live in the CV. */
export default function Projects() {
  const lang = useLang();
  const t = projectsCopy[lang];
  let index = 0;

  return (
    <>
      <Seo page="projects" projects={PROJECTS} />
      <PageHeader title={t.heading} intro={t.intro}>
        <div className="mt-4">
          <ArrowLink to={pathFor("cv", lang)}>{t.cv}</ArrowLink>
        </div>
      </PageHeader>
      <Section as="div">
        <div className="space-y-16">
          {PROJECT_GROUPS.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <h2
                id={`group-${group.id}`}
                className="reveal flex items-center gap-3 font-display text-2xl font-semibold tracking-display text-ink"
              >
                <span
                  aria-hidden="true"
                  className="size-3 shrink-0 rounded-full"
                  style={{
                    backgroundColor: `var(--color-${group.accent})`,
                    boxShadow: `0 0 0 4px color-mix(in srgb, var(--color-${group.accent}) 20%, transparent)`,
                  }}
                />
                {group.org}
                <span className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-xs font-medium text-muted">
                  {group.items.length}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((item) => {
                  const project = { ...item, org: group.org, accent: group.accent };
                  const priority = index++ === 0;
                  return (
                    <li key={item.id} id={item.id} className="reveal flex min-w-0 scroll-mt-24">
                      <ProjectCard project={project} priority={priority} className="w-full" />
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
