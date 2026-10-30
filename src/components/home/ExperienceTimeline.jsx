import { FiArrowRight } from "react-icons/fi";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { pathFor } from "../../routes.js";
import { Badge, ButtonLink, Section, SectionHeading } from "../ui/index.js";

/**
 * Compact experience timeline (master plan §B.2 #6): BELBİM, Eribitech in parallel, İGDAŞ, Tiramisu, then
 * "Full CV". Official titles and periods only (fact sheet §2.1); filled dots mark the current roles. The dots and
 * the rail are decorative; the period text carries the timing.
 */
export default function ExperienceTimeline() {
  const lang = useLang();
  const t = home[lang].experience;

  return (
    <Section tone="surface" labelledBy="experience-title">
      <SectionHeading
        id="experience-title"
        eyebrow={t.eyebrow}
        title={t.title}
        action={
          <ButtonLink to={pathFor("cv", lang)} variant="secondary">
            {t.link}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        }
      />
      <ol className="mt-10 max-w-4xl">
        {t.items.map((item) => (
          <li
            key={item.key}
            className="group relative grid grid-cols-1 gap-x-8 gap-y-1.5 pb-10 pl-8 last:pb-0 md:grid-cols-[13.5rem_minmax(0,1fr)]"
          >
            <span aria-hidden="true" className="absolute top-4 -bottom-1.5 left-[5px] w-px bg-line group-last:hidden" />
            <span
              aria-hidden="true"
              className={cx(
                "absolute top-1.5 left-0 size-[11px] rounded-full",
                item.current ? "bg-accent" : "border-2 border-field-border bg-surface",
              )}
            />
            {/* 13.5rem fits the longest period ("Aralık 2023 – Temmuz 2025") on one line from md. */}
            <p className="font-mono text-[13px] leading-6 text-muted">{item.period}</p>
            <div className="min-w-0">
              <h3 className="text-lg leading-6 font-semibold text-ink">{item.org}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] text-muted">
                <span>{item.role}</span>
                {item.note ? <Badge>{item.note}</Badge> : null}
              </p>
              <p className="mt-2 max-w-measure text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
