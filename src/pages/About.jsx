import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";
import ExperienceList from "../components/ExperienceList.jsx";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  KeepHyphens,
  Section,
  SectionHeading,
  SmartLink,
  TagList,
  TitleLine,
} from "../components/ui/index.js";
import about from "../content/about.js";
import common, { CONTACT } from "../content/common.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { cx } from "../lib/cx.js";
import { keepDots } from "../lib/text.js";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

// Standalone text link with an arrow (case studies, products), at least 44px tall on every layout. When the label
// wraps (long Turkish labels at 360–390px), its last word and the arrow stay together on the last line.
function ArrowLink({ to, onInk = false, className, children }) {
  const words = typeof children === "string" ? children.split(" ") : null;
  const last = words ? words.pop() : children;
  return (
    <Link
      to={to}
      className={cx(
        "group inline-block min-h-11 py-2.5 font-medium underline-offset-4 hover:underline",
        onInk ? "text-accent-on-ink hover:text-on-ink" : "text-accent hover:text-accent-hover",
        className,
      )}
    >
      {words?.length ? `${words.join(" ")} ` : null}
      <span className="whitespace-nowrap">
        {last}
        <FiArrowRight
          aria-hidden="true"
          className="ml-1.5 inline-block size-4 align-[-0.15em] transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      </span>
    </Link>
  );
}

// Decorative depth marker for a skill tier (3 = core … 1 = familiar). The tier title carries the meaning.
function DepthMeter({ level, max = 3 }) {
  return (
    <span aria-hidden="true" className="flex shrink-0 gap-1">
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={cx("h-2 w-4 rounded-sm", index < level ? "bg-accent" : "border border-field-border")}
        />
      ))}
    </span>
  );
}

export default function About() {
  const lang = useLang();
  const t = about[lang];
  const c = common[lang];
  const caseStudyPath = (slug) => pathFor("project", lang, { slug });

  const facts = [
    { label: t.facts.nowLabel, value: t.facts.now },
    { label: t.facts.companyLabel, value: c.role },
    { label: t.facts.locationLabel, value: c.location },
  ];

  return (
    <>
      <Seo page="about" />

      {/* Header: the page's only <h1>. Mobile: portrait, text, facts. md+: text left, portrait and facts right. */}
      <header className="border-b border-line">
        <Container className="grid grid-cols-1 gap-8 py-14 sm:py-20 md:grid-cols-[minmax(0,1fr)_15rem] md:grid-rows-[auto_1fr] md:gap-x-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-x-16">
          <div className="md:row-span-2">
            {/* The title keeps its casing (".NET & React/Next.js"), so this eyebrow is not uppercased. */}
            <Eyebrow caps={false}>
              <TitleLine text={c.title} />
            </Eyebrow>
            <h1 className="mt-3 text-h1 font-semibold text-ink">{t.heading}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.lead}</p>
            <p className="mt-4 max-w-2xl font-medium text-ink">{c.availability}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={pathFor("cv", lang)} size="lg" className="w-full sm:w-auto">
                {c.cta.cv}
              </ButtonLink>
              <ButtonLink href={`mailto:${CONTACT.email}`} variant="secondary" size="lg" className="w-full sm:w-auto">
                {c.cta.email}
              </ButtonLink>
            </div>
          </div>
          <Avatar
            size={160}
            alt={c.a11y.portrait}
            loading="eager"
            className="order-first ring-1 ring-line md:order-none md:col-start-2 md:row-start-1"
          />
          <dl className="grid gap-4 rounded-xl border border-line bg-surface p-5 md:col-start-2 md:self-start">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs text-muted">{fact.label}</dt>
                <dd className="mt-1 text-[15px] leading-snug font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* Story (from games to enterprise software and Eribitech) + the Eribitech note beside it. */}
      <Section labelledBy="story-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading id="story-title" eyebrow={t.story.eyebrow} title={t.story.heading} />
            <div className="mt-8 max-w-measure space-y-5 text-ink-soft">
              {t.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <KeepHyphens text={paragraph} />
                </p>
              ))}
            </div>
          </div>

          <aside aria-labelledby="eribitech-title" className="lg:pt-2">
            <Card className="p-6 sm:p-8">
              <Eyebrow>{t.eribitech.eyebrow}</Eyebrow>
              <h2 id="eribitech-title" className="mt-3 text-2xl font-semibold text-ink">
                {t.eribitech.heading}
              </h2>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                {t.eribitech.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <h3 className="mt-6 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
                {t.eribitech.productsHeading}
              </h3>
              <ul className="mt-2 divide-y divide-line">
                {t.eribitech.products.map((product) => (
                  <li key={product.slug} className="py-3">
                    <ArrowLink to={caseStudyPath(product.slug)}>{product.name}</ArrowLink>
                    <p className="text-sm leading-relaxed text-muted">{product.text}</p>
                  </li>
                ))}
              </ul>
              <SmartLink
                href={t.eribitech.site.href}
                external
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-ink-soft underline-offset-4 hover:text-accent hover:underline"
              >
                {t.eribitech.site.label}
                <FiArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </SmartLink>
            </Card>
          </aside>
        </div>
      </Section>

      {/* How I work: ownership, AI disclosure (owner decision 6) and the four principles. Ink band. */}
      <Section tone="ink" labelledBy="how-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <Badge tone="signal">{c.descriptor}</Badge>
            <SectionHeading
              id="how-title"
              onInk
              title={t.howIWork.heading}
              description={t.howIWork.intro}
              className="mt-5"
            />
            <div className="mt-6 max-w-xl space-y-4">
              {t.howIWork.ai.map((paragraph) => (
                <p key={paragraph} className="text-on-ink">
                  {paragraph}
                </p>
              ))}
            </div>
            <ArrowLink to={caseStudyPath(t.howIWork.caseStudy.slug)} onInk className="mt-6">
              {t.howIWork.caseStudy.label}
            </ArrowLink>
          </div>

          <ul aria-label={t.howIWork.principlesHeading} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.howIWork.principles.map((principle, index) => (
              <li key={principle.title} className="rounded-xl border border-on-ink/10 bg-ink-soft p-6">
                <p aria-hidden="true" className="font-mono text-xs text-accent-on-ink">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-on-ink">{principle.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-ink-muted">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Skills by depth: three evidence-based tiers (fact sheet §4), no counts. */}
      <Section tone="surface" labelledBy="skills-title">
        <SectionHeading
          id="skills-title"
          eyebrow={t.skills.eyebrow}
          title={t.skills.heading}
          description={t.skills.intro}
        />
        <div className="mt-10 divide-y divide-line border-y border-line">
          {t.skills.tiers.map((tier) => (
            <div
              key={tier.key}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-10"
            >
              <div>
                <div className="flex items-center gap-3">
                  <DepthMeter level={tier.level} />
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{tier.title}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{tier.note}</p>
              </div>
              {/* self-start: a stretched flex-wrap list would spread its rows over the taller note column. */}
              <TagList items={tier.items} label={tier.title} className="self-start md:pt-1" />
            </div>
          ))}
        </div>
      </Section>

      {/* Experience: every role with dates (fact sheet §2.1 defaults), one line each; details on the CV. */}
      <Section labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          eyebrow={t.experienceEyebrow}
          title={t.experienceHeading}
          description={t.experienceIntro}
          action={
            <ButtonLink to={pathFor("cv", lang)} variant="secondary">
              {t.fullCv}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          }
        />
        <ExperienceList
          items={t.experience}
          summary
          className="mt-10 max-w-3xl"
          renderExtra={(item) =>
            item.caseStudy ? (
              <ArrowLink to={caseStudyPath(item.caseStudy.slug)} className="mt-1 text-[15px]">
                {item.caseStudy.label}
              </ArrowLink>
            ) : null
          }
        />
      </Section>

      {/* Education, certificates and training (itemized, never counted), languages. */}
      <Section labelledBy="background-title" className="border-t border-line">
        <SectionHeading id="background-title" eyebrow={t.backgroundEyebrow} title={t.backgroundHeading} />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:grid-rows-[auto_1fr]">
          <Card className="p-6 sm:p-8">
            <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
              {t.educationHeading}
            </h3>
            <ul className="mt-4 space-y-4">
              {t.education.map((item) => (
                <li key={item.school}>
                  <p className="font-semibold text-ink">{item.school}</p>
                  <p className="mt-1 text-[15px] text-ink-soft">{item.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
              {t.certificationsHeading}
            </h3>
            <ul className="mt-2 divide-y divide-line">
              {t.certifications.map((item) => (
                <li key={item.name} className="py-4 last:pb-0">
                  <p className="font-semibold leading-snug text-ink">{item.name}</p>
                  <p className="mt-1 text-[15px] text-ink-soft">{keepDots(item.issuer)}</p>
                  {item.date ? <p className="mt-1 font-mono text-xs text-muted">{item.date}</p> : null}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 sm:p-8">
            <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
              {t.languagesHeading}
            </h3>
            <dl className="mt-4 space-y-4">
              {t.languages.map((item) => (
                <div key={item.name}>
                  <dt className="font-semibold text-ink">{item.name}</dt>
                  <dd className="mt-1 text-[15px] text-ink-soft">{item.level}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Section>

      {/* Closing: email (shown as text too, so it can be copied) and LinkedIn (master plan §B.5, About). */}
      <Section labelledBy="about-closing-title" className="pt-0 lg:pt-0">
        <div className="flex flex-col gap-8 rounded-2xl bg-ink px-6 py-10 text-on-ink sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 max-w-xl">
            <h2 id="about-closing-title" className="text-2xl font-semibold sm:text-3xl">
              {t.closing.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-on-ink-muted">{t.closing.text}</p>
            <p className="mt-4 font-mono text-sm text-on-ink [overflow-wrap:anywhere]">{CONTACT.email}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${CONTACT.email}`} size="lg" className="w-full sm:w-auto">
              {c.cta.email}
            </ButtonLink>
            <ButtonLink href={CONTACT.linkedin} external variant="inverse" size="lg" className="w-full sm:w-auto">
              {c.cta.linkedin}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
