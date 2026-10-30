import { FiArrowRight } from "react-icons/fi";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { pathFor } from "../../routes.js";
import { ButtonLink, Section, SectionHeading } from "../ui/index.js";

// Visual weight follows depth: daily tools read strongest, familiar ones quietest. The tier label says it in text.
const TIER_TEXT = [
  "text-lg leading-relaxed font-medium text-ink",
  "leading-relaxed text-ink-soft",
  "leading-relaxed text-muted",
];

// No-break space before the dot, so a wrapped line never starts with "·".
const SEPARATOR = "\u00a0\u00b7 ";

// Items up to this length stay on one line (about 230px at 18px, well inside the 303px column at 360px).
const NOWRAP_MAX = 26;

/**
 * "Teknolojiler / Stack" by depth (master plan §B.2 #7, §F.0 tiers): three plain-text lines instead of a chip
 * wall, no counters. Mobile and Unity appear only with their qualifiers (owner decision 8).
 */
export default function StackByDepth() {
  const lang = useLang();
  const t = home[lang].stack;

  return (
    <Section labelledBy="stack-title">
      <SectionHeading
        id="stack-title"
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        action={
          // Straight to the full skills list on About (ScrollToTop scrolls to the #hash after a client navigation).
          <ButtonLink to={`${pathFor("about", lang)}#skills-title`} variant="secondary">
            {t.link}
            <FiArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        }
      />
      <dl className="mt-10 border-t border-line">
        {t.tiers.map((tier, index) => (
          <div
            key={tier.key}
            className="grid grid-cols-1 gap-3 border-b border-line py-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8"
          >
            <dt className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase md:pt-1.5">
              {tier.label}
            </dt>
            <dd className="min-w-0">
              <ul className={TIER_TEXT[index] ?? TIER_TEXT[2]}>
                {tier.items.map((item, itemIndex) => (
                  <li key={item} className="inline">
                    {/* Short names never break inside ("Entity Framework Core"); long ones may wrap at 360px. */}
                    <span className={item.length <= NOWRAP_MAX ? "whitespace-nowrap" : undefined}>{item}</span>
                    {itemIndex < tier.items.length - 1 ? (
                      <span aria-hidden="true" className="text-muted">
                        {SEPARATOR}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
