import ProjectCard from "../components/projects/ProjectCard.jsx";
import ProjectCta from "../components/projects/ProjectCta.jsx";
import { PageHeader, Section, SectionHeading } from "../components/ui/index.js";
import projectsCopy, { PROJECT_GROUPS, PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { cx } from "../lib/cx.js";
import Seo from "../seo/Seo.jsx";

// Projects index (§B.2, §F.2): one page header, then the three groups in order: My products, Employer work,
// Client and other work. Groups of three get three columns from lg; the others (four products) a 2 × 2 grid. It ends
// with the same dual CTA as the case studies (§B.5).
export default function Projects() {
  const lang = useLang();
  const t = projectsCopy[lang];
  const groups = PROJECT_GROUPS.map((key) => ({ key, items: PROJECTS.filter((project) => project.group === key) })).filter(
    (group) => group.items.length > 0,
  );

  return (
    <>
      <Seo page="projects" projects={PROJECTS} />
      <PageHeader eyebrow={t.eyebrow} title={t.heading} intro={t.intro} />
      <Section containerClassName="divide-y divide-line">
        {groups.map(({ key, items }, groupIndex) => {
          const headingId = `projects-${key}-title`;
          return (
            <section
              key={key}
              aria-labelledby={headingId}
              className="py-14 first:pt-0 last:pb-0 lg:py-20"
            >
              <SectionHeading id={headingId} title={t.groups[key].title} description={t.groups[key].description} />
              <ul
                className={cx(
                  "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2",
                  items.length % 3 === 0 && "lg:grid-cols-3",
                )}
              >
                {items.map((project, index) => (
                  <li key={project.slug} className="flex min-w-0">
                    <ProjectCard
                      project={project}
                      priority={groupIndex === 0 && index === 0}
                      columns={items.length % 3 === 0 ? 3 : 2}
                      className="w-full"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Section>
      <ProjectCta />
    </>
  );
}
