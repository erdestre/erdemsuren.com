import { PROJECT_IMAGES } from "../../content/projectImages.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import ProjectImage from "./ProjectImage.jsx";

const COVER_RATIO = "aspect-[1568/698]"; // same ratio as the screenshots, so every card cover lines up

/**
 * Card cover: the project's screenshot, or a plain ink block with its name (decorative, aria-hidden; the card title
 * carries the meaning).
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

  return (
    <div aria-hidden="true" className={cx("flex items-end bg-ink p-5 text-on-ink sm:p-6", COVER_RATIO, className)}>
      <p className="font-display text-xl font-semibold tracking-display sm:text-2xl">{project.name[lang]}</p>
    </div>
  );
}
