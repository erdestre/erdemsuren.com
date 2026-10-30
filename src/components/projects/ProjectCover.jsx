import projectsCopy from "../../content/projects.js";
import { PROJECT_IMAGES } from "../../content/projectImages.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { pick } from "./pick.js";
import ProjectImage from "./ProjectImage.jsx";

const COVER_RATIO = "aspect-[1568/698]"; // same ratio as the screenshots, so every card cover lines up

/**
 * Card cover: the project's real screenshot when it has one, otherwise a typographic cover (decorative, aria-hidden;
 * the card's title carries the meaning). Employer work and practices get an ink cover, the prototype a paper one.
 * Lime is used only for the AI marker (`cover.ai`).
 */
export default function ProjectCover({ project, alt = "", sizes, priority = false, className }) {
  const lang = useLang();

  if (project.image && PROJECT_IMAGES[project.image]) {
    return (
      <div className={cx("overflow-hidden bg-paper", className)}>
        <ProjectImage
          image={project.image}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className={cx(
            COVER_RATIO,
            "h-auto w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
        />
      </div>
    );
  }

  const cover = project.cover ?? { label: project.title[lang] };
  const draft = project.type === "prototype";
  return (
    <div
      aria-hidden="true"
      className={cx(
        "relative flex flex-col justify-between overflow-hidden p-5 sm:p-6",
        COVER_RATIO,
        draft ? "bg-paper text-ink" : "bg-ink text-on-ink",
        className,
      )}
    >
      <div className={cx("absolute inset-0 bg-dot-grid", draft ? "opacity-100" : "opacity-15")} />
      <div className="relative flex items-center justify-between gap-3">
        {cover.kicker ? (
          <span className={cx("truncate font-mono text-xs", draft ? "text-muted" : "text-on-ink-muted")}>
            {pick(cover.kicker, lang)}
          </span>
        ) : null}
        {cover.ai ? (
          <span className="shrink-0 rounded-full bg-signal px-2 py-0.5 font-mono text-xs font-medium text-ink">
            {projectsCopy[lang].ai}
          </span>
        ) : null}
      </div>
      <div className="relative">
        <p className="font-display text-xl font-semibold tracking-display sm:text-2xl">{pick(cover.label, lang)}</p>
        {cover.flow ? (
          <p className={cx("mt-1.5 font-mono text-xs", draft ? "text-muted" : "text-accent-on-ink")}>
            {pick(cover.flow, lang)}
          </p>
        ) : null}
      </div>
    </div>
  );
}
