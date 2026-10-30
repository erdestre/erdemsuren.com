import { FiArrowRight } from "react-icons/fi";
import common from "../../content/common.js";
import home, { FEATURED_SLUGS } from "../../content/home.js";
import { getProject } from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { pathFor } from "../../routes.js";
import ProjectCard from "../projects/ProjectCard.jsx";
import { ButtonLink, Section, SectionHeading } from "../ui/index.js";

/**
 * "Öne çıkan işler / Selected work" (master plan §B.2 #3): Eribi, BELBİM and AI-native delivery (FEATURED_SLUGS in
 * home.js), read from src/content/projects.js. Slugs that do not exist (yet) are skipped instead of breaking the page.
 */
export default function SelectedWork() {
  const lang = useLang();
  const t = home[lang].work;
  const c = common[lang];
  const projects = FEATURED_SLUGS.map(getProject).filter(Boolean);

  if (!projects.length) return null;

  return (
    <Section labelledBy="work-title">
      <SectionHeading
        id="work-title"
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        action={
          <ButtonLink to={pathFor("projects", lang)} variant="secondary">
            {c.cta.allProjects}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        }
      />
      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex min-w-0">
            <ProjectCard project={project} columns={3} className="w-full" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
