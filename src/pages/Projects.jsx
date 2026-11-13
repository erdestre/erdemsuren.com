import ProjectCard from "../components/projects/ProjectCard.jsx";
import { PageHeader, Section } from "../components/ui/index.js";
import projectsCopy, { PROJECTS } from "../content/projects.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Seo from "../seo/Seo.jsx";

/** Projects index: one header, one grid. */
export default function Projects() {
  const lang = useLang();
  const t = projectsCopy[lang];

  return (
    <>
      <Seo page="projects" projects={PROJECTS} />
      <PageHeader title={t.heading} intro={t.intro} />
      <Section as="div">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <li key={project.slug} className="flex min-w-0">
              <ProjectCard project={project} headingLevel={2} priority={index === 0} className="w-full" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
