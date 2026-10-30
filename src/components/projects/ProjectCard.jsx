import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import projectsCopy from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { keepDots } from "../../lib/text.js";
import { pathFor } from "../../routes.js";
import Badge from "../ui/Badge.jsx";
import Card from "../ui/Card.jsx";
import KeepHyphens from "../ui/KeepHyphens.jsx";
import { TagList } from "../ui/Tag.jsx";
import { hostOf } from "./pick.js";
import ProjectCover from "./ProjectCover.jsx";

// Rendered card width for the screenshot's `sizes`: Container (max 72rem, 2rem side padding from lg), 1.5rem gaps;
// one column below md, two from md, then two or three from lg.
const COVER_SIZES = {
  2: "(min-width: 1152px) 532px, (min-width: 768px) calc((100vw - 4.5rem) / 2), calc(100vw - 2.5rem)",
  3: "(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 4.5rem) / 2), calc(100vw - 2.5rem)",
};

/**
 * Case-study teaser card: cover (screenshot or typographic), type badge (+ lime "Live" for live sites), title,
 * one-line outcome, stack tags and the period. The title link is "stretched" over the whole card, so the card is
 * one click target while the accessible name stays the project title (a real <a href>).
 * `headingLevel` keeps the outline right (3 under a section h2). `priority` = the page's first, above-the-fold card.
 * `columns` = the grid's column count from lg (2 or 3), so the screenshot's `sizes` matches the rendered width.
 */
export default function ProjectCard({ project, headingLevel = 3, maxTags = 5, priority = false, columns = 2, className }) {
  const lang = useLang();
  const t = projectsCopy[lang];
  const Heading = `h${headingLevel}`;
  const to = pathFor("project", lang, { slug: project.slug });
  const thumbAlt = project.liveUrl ? t.shot.replace("{host}", hostOf(project.liveUrl)) : "";

  return (
    <Card as="article" interactive className={cx("group flex flex-col overflow-hidden", className)}>
      <ProjectCover
        project={project}
        alt={thumbAlt}
        sizes={COVER_SIZES[columns] ?? COVER_SIZES[2]}
        priority={priority}
        className="border-b border-line"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={project.type === "prototype" ? "draft" : "neutral"}>{keepDots(t.type[project.type])}</Badge>
          {project.status === "live" ? (
            <Badge tone="signal" dot>
              {t.live}
            </Badge>
          ) : null}
        </div>
        <Heading className="mt-4 text-lg font-semibold tracking-tight text-ink">
          <Link to={to} className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none">
            <KeepHyphens text={project.title[lang]} />
          </Link>
        </Heading>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.outcomeLine[lang]}</p>
        <TagList items={project.stack.slice(0, maxTags)} className="mt-5" label={t.labels.stack} />
        <p className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-xs text-muted">
          {project.period[lang]}
          <FiArrowRight
            aria-hidden="true"
            className="ml-auto size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </p>
      </div>
    </Card>
  );
}
