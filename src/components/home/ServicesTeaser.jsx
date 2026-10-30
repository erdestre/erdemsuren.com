import { FiArrowRight, FiCheck, FiCpu, FiGitMerge, FiLayout } from "react-icons/fi";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { pathFor } from "../../routes.js";
import { ButtonLink, Card, Section, SectionHeading } from "../ui/index.js";

const ICONS = { web: FiLayout, integration: FiGitMerge, ai: FiCpu };

/**
 * "Neler yapıyorum / What I build" (master plan §B.2 #5, §F.1): three service teasers that lead to the Services
 * page, plus the only pricing wording the owner allows (fixed written quote, free intro call; no prices, no
 * response-time promise).
 */
export default function ServicesTeaser() {
  const lang = useLang();
  const t = home[lang].services;

  return (
    <Section labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        action={
          <ButtonLink to={pathFor("services", lang)} variant="secondary">
            {t.link}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        }
      />
      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.items.map((item) => {
          const Icon = ICONS[item.key] ?? FiLayout;
          return (
            <li key={item.key} className="flex min-w-0">
              <Card className="w-full p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent"
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg leading-snug font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </Card>
            </li>
          );
        })}
      </ul>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-ink-soft">
        {t.terms.map((term) => (
          <li key={term} className="flex items-center gap-2">
            <FiCheck aria-hidden="true" className="size-4 shrink-0 text-success" />
            {term}
          </li>
        ))}
      </ul>
    </Section>
  );
}
