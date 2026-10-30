import { FiArrowRight } from "react-icons/fi";
import common from "../../content/common.js";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { keepDots } from "../../lib/text.js";
import { pathFor } from "../../routes.js";
import Avatar from "../Avatar.jsx";
import { Badge, ButtonLink, Container } from "../ui/index.js";
import ArrowLink from "./ArrowLink.jsx";
import NowCard from "./NowCard.jsx";

/**
 * Typography-led hero (master plan §A.3, §B.2 #1): small avatar + lime descriptor pill, the page's only <h1>
 * (name in the display size + the primary title), the long descriptor, the availability line and the three
 * CTAs from §B.5. The "Now" card sits on the right from lg. No photo hero, so the LCP element is the h1 text.
 */
export default function HomeHero() {
  const lang = useLang();
  const t = home[lang].hero;
  const c = common[lang];

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Decorative dot grid, fading out from the top right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(ellipse_75%_65%_at_90%_0%,var(--color-ink),transparent)]"
      />
      {/* Mobile spacing is tighter so all three actions fit the first 390×844 screen. */}
      <Container className="grid grid-cols-1 gap-12 pt-8 pb-16 sm:pt-16 sm:pb-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <Avatar size={56} alt={c.a11y.portrait} loading="eager" className="ring-1 ring-line" />
            <Badge tone="signal" dot>
              {c.descriptor}
            </Badge>
          </div>

          <h1 id="hero-title" className="mt-6 text-ink sm:mt-8">
            <span className="block text-display">{c.name}</span>{" "}
            <span className="mt-2 block text-[clamp(1.25rem,2.4vw,1.875rem)] leading-tight font-medium text-ink-soft sm:mt-3">
              {keepDots(c.title)}
            </span>
          </h1>

          <div className="mt-5 max-w-measure space-y-3 text-ink-soft sm:mt-6 sm:text-lg sm:leading-relaxed">
            <p>{t.lead}</p>
            <p>{t.ai}</p>
          </div>

          <p className="mt-5 flex items-start gap-2.5 font-medium text-ink sm:mt-6">
            <span aria-hidden="true" className="mt-[0.6em] size-2 shrink-0 rounded-full bg-success" />
            <span>{c.availability}</span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3 sm:mt-8">
            <ButtonLink to={pathFor("projects", lang)} size="lg" className="w-full sm:w-auto">
              {c.cta.projects}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink to={pathFor("contact", lang)} size="lg" variant="secondary" className="w-full sm:w-auto">
              {c.cta.workWithMe}
            </ButtonLink>
            <ArrowLink to={pathFor("cv", lang)} className="sm:ml-2">
              {c.cta.cv}
            </ArrowLink>
          </div>
        </div>

        <NowCard />
      </Container>
    </section>
  );
}
