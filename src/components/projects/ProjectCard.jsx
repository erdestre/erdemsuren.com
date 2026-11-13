import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import common from "../../content/common.js";
import projectsCopy, { KINDS, linkLabel } from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import Card from "../ui/Card.jsx";
import KeepHyphens from "../ui/KeepHyphens.jsx";
import SmartLink from "../ui/SmartLink.jsx";
import ProjectCover from "./ProjectCover.jsx";

// Rendered card width for the cover's `sizes`: one column below md, two from md, three or four from lg.
const COVER_SIZES =
  "(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 4.5rem) / 2), calc(100vw - 2.5rem)";

const STRETCHED = "after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none";

/**
 * Project card: cover, org · kind, name, one line on what it does.
 * - `to`: internal link (the home page links each card to its place on the projects page);
 * - otherwise the project's public `link` (new tab), or no link at all.
 * The link is stretched over the card, so the whole card is one click target.
 */
export default function ProjectCard({ project, to, headingLevel = 3, priority = false, className }) {
  const lang = useLang();
  const t = projectsCopy[lang];
  const Heading = `h${headingLevel}`;
  const external = !to && project.link ? project.link : null;
  const alt = project.link ? t.shot.replace("{host}", new URL(project.link).host) : "";
  const name = project.name[lang];

  return (
    <Card as="article" interactive={Boolean(to || external)} className={cx("group flex flex-col overflow-hidden", className)}>
      <ProjectCover project={project} alt={alt} sizes={COVER_SIZES} priority={priority} className="border-b border-line" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-muted">
          {project.org} · {KINDS[project.kind][lang]}
        </p>
        <Heading className="mt-2 text-lg font-semibold tracking-tight text-ink">
          {to ? (
            <Link to={to} className={STRETCHED}>
              {name}
            </Link>
          ) : external ? (
            <SmartLink href={external} external className={STRETCHED}>
              {name}
            </SmartLink>
          ) : (
            name
          )}
        </Heading>
        <p className="mt-1 text-[15px] leading-relaxed text-muted">
          <KeepHyphens text={project.line[lang]} />
        </p>
        {to || external ? (
          <p className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-xs font-medium text-accent">
            {external ? linkLabel(external) : common[lang].nav.projects}
            {external ? (
              <FiArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            ) : (
              <FiArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            )}
          </p>
        ) : null}
      </div>
    </Card>
  );
}
