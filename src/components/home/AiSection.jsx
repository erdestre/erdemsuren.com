import home, { AI_CASE_STUDY_SLUG } from "../../content/home.js";
import { getProject } from "../../content/projects.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { pathFor } from "../../routes.js";
import { Section, SectionHeading, Terminal } from "../ui/index.js";
import ArrowLink from "./ArrowLink.jsx";

/**
 * "Yapay zekâ ile nasıl çalışıyorum / How I work with AI" ink band (master plan §B.2 #4, §F.0 principles):
 * intro, the open disclosure about Claude Code (owner decision: "most commits", no percentages), the delivery
 * pipeline as a terminal motif (no invented numbers) and four principle cards. The lime rule marks the AI note.
 */
export default function AiSection() {
  const lang = useLang();
  const t = home[lang].ai;
  const caseStudy = getProject(AI_CASE_STUDY_SLUG);

  return (
    <Section tone="ink" labelledBy="ai-title">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <SectionHeading onInk id="ai-title" eyebrow={t.eyebrow} title={t.title} description={t.intro} />
          <div className="mt-8 max-w-2xl border-l-2 border-signal pl-5">
            <p className="font-medium text-on-ink">{t.disclosure[0]}</p>
            <p className="mt-1.5 text-on-ink-muted">{t.disclosure[1]}</p>
          </div>
          {caseStudy ? (
            <ArrowLink onInk to={pathFor("project", lang, { slug: caseStudy.slug })} className="mt-6">
              {t.caseStudy}
            </ArrowLink>
          ) : null}
        </div>

        {/* The terminal is ink on an ink band: the ring keeps its window edge visible. */}
        <div className="min-w-0 rounded-xl ring-1 ring-on-ink/20">
          <Terminal {...home[lang].terminal} />
        </div>
      </div>

      <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {t.principles.map((principle, index) => (
          <li key={principle.title} className="min-w-0 rounded-xl border border-on-ink/15 bg-ink-soft p-6">
            <p aria-hidden="true" className="font-mono text-xs text-accent-on-ink">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg leading-snug font-semibold text-on-ink">{principle.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-on-ink-muted">{principle.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
