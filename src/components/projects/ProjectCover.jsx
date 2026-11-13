import { PROJECT_IMAGES } from "../../content/projectImages.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import ProjectImage from "./ProjectImage.jsx";

const COVER_RATIO = "aspect-[1568/698]"; // same ratio as the screenshots, so every card cover lines up

/**
 * Card cover, decorative except for screenshots (their alt names the site):
 * - a screenshot or illustration from projectImages.js;
 * - a GitHub repository: a small terminal with the repo path;
 * - otherwise an ink block with the project's name.
 */
export default function ProjectCover({ project, alt = "", sizes, priority = false, className }) {
  const lang = useLang();
  const image = project.image ? PROJECT_IMAGES[project.image] : null;

  if (image) {
    return (
      <div className={cx("overflow-hidden bg-paper", className)}>
        <ProjectImage
          image={project.image}
          alt={image.shot ? alt : ""}
          sizes={sizes}
          priority={priority}
          className={cx(
            COVER_RATIO,
            "h-auto w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
        />
      </div>
    );
  }

  if (project.repo) {
    return (
      <div aria-hidden="true" className={cx("flex flex-col bg-ink p-4 text-on-ink sm:p-5", COVER_RATIO, className)}>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-on-ink-muted/40" />
          <span className="size-2.5 rounded-full bg-on-ink-muted/40" />
          <span className="size-2.5 rounded-full bg-on-ink-muted/40" />
          <span className="ml-2 truncate font-mono text-xs text-on-ink-muted">github.com/erdestre</span>
        </div>
        <p className="mt-auto truncate font-mono text-sm sm:text-[15px]">
          <span className="text-signal">$</span> cd {project.repo}
          <span className="caret ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-on-ink/80" />
        </p>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cx("flex items-end bg-ink p-5 text-on-ink sm:p-6", COVER_RATIO, className)}>
      <p className="font-display text-xl font-semibold tracking-display sm:text-2xl">{project.name[lang]}</p>
    </div>
  );
}
