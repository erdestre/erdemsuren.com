import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import projectsCopy from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { pathFor } from "../../routes.js";
import Card from "../ui/Card.jsx";
import KeepHyphens from "../ui/KeepHyphens.jsx";
import { hostOf, liveSites } from "./pick.js";
import ProjectCover from "./ProjectCover.jsx";

// Rendered card width for the screenshot's `sizes`: one column below md, two from md, three from lg.
const COVER_SIZES =
  "(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 4.5rem) / 2), calc(100vw - 2.5rem)";

/**
 * Project card: cover, name, one line. The name link is stretched over the card, so the whole card is one click
 * target. `headingLevel` keeps the outline right (2 under the page h1, 3 under a section h2).
 */
export default function ProjectCard({ project, headingLevel = 3, priority = false, className }) {
  const lang = useLang();
  const t = projectsCopy[lang];
  const Heading = `h${headingLevel}`;
  const sites = liveSites(project);
  const alt = sites.length ? t.shot.replace("{host}", hostOf(sites[0])) : "";

  return (
    <Card as="article" interactive className={cx("group flex flex-col overflow-hidden", className)}>
      <ProjectCover project={project} alt={alt} sizes={COVER_SIZES} priority={priority} className="border-b border-line" />
      <div className="flex flex-1 items-start justify-between gap-4 p-5 sm:p-6">
        <div className="min-w-0">
          <Heading className="text-lg font-semibold tracking-tight text-ink">
            <Link
              to={pathFor("project", lang, { slug: project.slug })}
              className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none"
            >
              {project.name[lang]}
            </Link>
          </Heading>
          <p className="mt-1 text-[15px] leading-relaxed text-muted">
            <KeepHyphens text={project.line[lang]} />
          </p>
        </div>
        <FiArrowRight
          aria-hidden="true"
          className="mt-1.5 size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </div>
    </Card>
  );
}
