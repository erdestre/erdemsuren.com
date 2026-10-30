import { FiArrowRight } from "react-icons/fi";
import common from "../../content/common.js";
import projectsCopy from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { contactPath, pathFor } from "../../routes.js";
import { ButtonLink, Eyebrow, Section } from "../ui/index.js";

/**
 * Closing dual CTA of the projects index and every case study (master plan §B.5): "Building something similar?"
 * (contact form with the "project" topic) next to "Want this experience on your team?" (CV), on an ink band.
 * `children` render below the two cards (the case studies add their "next case study" navigation).
 */
export default function ProjectCta({ children }) {
  const lang = useLang();
  const t = projectsCopy[lang].cta;
  const c = common[lang];

  return (
    <Section as="div" tone="ink">
      <Eyebrow onInk>{c.cta.workWithMe}</Eyebrow>
      <p className="mt-3 max-w-measure text-on-ink-muted">{c.availability}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-on-ink/15 bg-ink-soft p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-on-ink">{t.project.title}</h2>
          <p className="mt-3 text-on-ink-muted">{t.project.text}</p>
          <div className="mt-auto pt-6">
            <ButtonLink to={contactPath(lang, "project")} size="lg" className="w-full sm:w-auto">
              {t.project.button}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-on-ink/15 bg-ink-soft p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-on-ink">{t.hire.title}</h2>
          <p className="mt-3 text-on-ink-muted">{t.hire.text}</p>
          <div className="mt-auto pt-6">
            <ButtonLink to={pathFor("cv", lang)} variant="inverse" size="lg" className="w-full sm:w-auto">
              {t.hire.button}
            </ButtonLink>
          </div>
        </div>
      </div>
      {children}
    </Section>
  );
}
