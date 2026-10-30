import {
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";
import {
  Badge,
  Button,
  ButtonLink,
  Container,
  PageHeader,
  Section,
  SectionHeading,
  SmartLink,
  TitleLine,
} from "../components/ui/index.js";
import common, { CONTACT } from "../content/common.js";
import cv, { CV_PDF } from "../content/cv.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { keepDots } from "../lib/text.js";
import { pathFor, PROJECT_SLUGS, SITE_URL } from "../routes.js";
import Seo from "../seo/Seo.jsx";
// Print layout for this page only (A4, résumé alone). Every rule is scoped to the .cv-* hooks used below.
import "../styles/cv-print.css";

// "https://www.linkedin.com/in/erdemsurentr/" -> "linkedin.com/in/erdemsurentr" (printed CVs show the address).
const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Case studies exist per slug in the route table; a slug that is not published (yet) renders no link.
const hasCaseStudy = (slug) => PROJECT_SLUGS.includes(slug);

const CONTACT_LINK =
  "inline-flex min-h-11 items-center gap-2 text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline";
const TEXT_LINK =
  "inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline";
const META = "cv-meta shrink-0 font-mono text-sm text-muted";
const ROW = "cv-row flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between";

/**
 * CV page (master plan §B.2 "CV", §F.6): h1, PDF downloads (TR + EN) and print, then the HTML résumé in the PDF's
 * order: summary, experience, selected projects, skills, education, certifications and training, languages.
 * The résumé (.cv-doc) is also the print layout (src/styles/cv-print.css).
 */
export default function CV() {
  const lang = useLang();
  const t = cv[lang];
  const c = common[lang];
  const pdfLangs = lang === "tr" ? ["tr", "en"] : ["en", "tr"];

  return (
    <>
      <Seo page="cv" />

      <PageHeader eyebrow={t.updated} title={t.heading} intro={t.intro} className="cv-noprint">
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {/* The label names each PDF's language. No hrefLang here: on this site <a hrefLang> marks the TR/EN
              toggle links only (review-tools/check-toggle.mjs counts them). */}
          {pdfLangs.map((code, index) => (
            <ButtonLink
              key={code}
              href={CV_PDF[code]}
              download=""
              type="application/pdf"
              variant={index === 0 ? "primary" : "secondary"}
              size="lg"
            >
              <FiDownload aria-hidden="true" className="size-4" />
              {t.pdf[code]}
            </ButtonLink>
          ))}
          <Button variant="ghost" size="lg" onClick={() => window.print()}>
            <FiPrinter aria-hidden="true" className="size-4" />
            {t.print}
          </Button>
        </div>
      </PageHeader>

      <div className="cv-print-flat py-10 sm:py-14 lg:py-20">
        <Container className="cv-print-flat">
          <article
            aria-labelledby="cv-name"
            className="cv-doc sm:rounded-xl sm:border sm:border-line sm:bg-surface sm:p-10 sm:shadow-card lg:p-14"
          >
            <header className="cv-head">
              <p
                id="cv-name"
                className="cv-name font-display text-3xl font-semibold tracking-display text-ink sm:text-4xl"
              >
                {c.name}
              </p>
              <p className="cv-title mt-2 text-lg font-medium text-ink-soft">
                <TitleLine text={c.title} />
              </p>
              <p className="cv-descriptor mt-3">
                <Badge tone="signal">{c.descriptor}</Badge>
              </p>
              <ul className="cv-contact mt-4 flex flex-wrap gap-x-6 text-[15px] text-muted">
                <li className="inline-flex min-h-11 items-center gap-2">
                  <FiMapPin aria-hidden="true" className="size-4 shrink-0 text-muted" />
                  {c.location}
                </li>
                <li className="min-w-0">
                  <SmartLink href={`mailto:${CONTACT.email}`} className={CONTACT_LINK}>
                    <FiMail aria-hidden="true" className="size-4 shrink-0 text-muted" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{CONTACT.email}</span>
                  </SmartLink>
                </li>
                <li className="min-w-0">
                  <SmartLink href={CONTACT.linkedin} external className={CONTACT_LINK}>
                    <FiLinkedin aria-hidden="true" className="size-4 shrink-0 text-muted" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{displayUrl(CONTACT.linkedin)}</span>
                  </SmartLink>
                </li>
                <li className="min-w-0">
                  <SmartLink href={CONTACT.github} external className={CONTACT_LINK}>
                    <FiGithub aria-hidden="true" className="size-4 shrink-0 text-muted" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{displayUrl(CONTACT.github)}</span>
                  </SmartLink>
                </li>
                {/* On paper the reader cannot click through, so the printout names the site instead. */}
                <li className="cv-print-only">{displayUrl(SITE_URL)}</li>
              </ul>
            </header>

            <CvSection title={t.summaryHeading}>
              <div className="space-y-4">
                {t.summary.map((paragraph) => (
                  <p key={paragraph} className="cv-text text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CvSection>

            <CvSection title={t.experienceHeading}>
              <ol className="space-y-10">
                {t.experience.map((entry) => (
                  <li key={entry.heading} className="cv-entry">
                    <div className={`cv-entry-head ${ROW}`}>
                      <div className="flex min-w-0 flex-wrap items-baseline gap-x-3">
                        <h3 className="cv-h3 text-lg font-semibold text-ink">{entry.heading}</h3>
                        {entry.website ? (
                          <SmartLink href={entry.website.href} external className={`cv-org-link ${TEXT_LINK}`}>
                            {entry.website.label}
                            <FiArrowUpRight aria-hidden="true" className="size-3.5" />
                          </SmartLink>
                        ) : null}
                      </div>
                      {entry.aside ? <p className={META}>{keepDots(entry.aside)}</p> : null}
                    </div>

                    {entry.roles?.map((role) => (
                      <div key={role.title} className="cv-role-block mt-4">
                        <div className={`cv-role-row ${ROW}`}>
                          <p className="cv-role font-medium text-ink">{role.title}</p>
                          <p className={META}>{role.period}</p>
                        </div>
                        <ul className="cv-bullets mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft marker:text-muted">
                          {role.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {entry.note ? <p className="cv-note mt-2 text-base text-ink-soft">{entry.note}</p> : null}

                    <CaseStudyLinks items={entry.caseStudies} lang={lang} labels={t} />
                  </li>
                ))}
              </ol>
            </CvSection>

            <CvSection title={t.projectsHeading}>
              <ol className="space-y-10">
                {t.projects.map((project) => (
                  <li key={project.slug} className="cv-entry">
                    <div className="cv-entry-head">
                      <div className={ROW}>
                        <h3 className="cv-h3 text-lg font-semibold text-ink">{project.title}</h3>
                        <p className={META}>{project.period}</p>
                      </div>
                      <p className="cv-sub mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                        <Badge tone={project.prototype ? "draft" : "neutral"}>{project.kind}</Badge>
                        {project.website ? <span className="cv-print-only">{project.website.label}</span> : null}
                        <span className="font-mono">{project.stack.join(", ")}</span>
                      </p>
                    </div>
                    <p className="cv-text mt-3 text-base leading-relaxed text-ink-soft">{project.text}</p>
                    <div className="cv-noprint mt-2 flex flex-wrap gap-x-6">
                      {hasCaseStudy(project.slug) ? (
                        <SmartLink to={pathFor("project", lang, { slug: project.slug })} className={TEXT_LINK}>
                          {t.caseStudy}
                          <span className="sr-only">: {project.name}</span>
                          <FiArrowRight aria-hidden="true" className="size-3.5" />
                        </SmartLink>
                      ) : null}
                      {project.website ? (
                        <SmartLink href={project.website.href} external className={TEXT_LINK}>
                          {project.website.label}
                          <FiArrowUpRight aria-hidden="true" className="size-3.5" />
                        </SmartLink>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
              <SmartLink to={pathFor("projects", lang)} className={`cv-noprint mt-6 ${TEXT_LINK}`}>
                {c.cta.allProjects}
                <FiArrowRight aria-hidden="true" className="size-3.5" />
              </SmartLink>
            </CvSection>

            <CvSection title={t.skillsHeading}>
              <dl className="cv-skills space-y-3">
                {t.skills.map((group) => (
                  <div key={group.label} className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-[9rem_minmax(0,1fr)]">
                    <dt className="font-medium text-ink">{group.label}</dt>
                    <dd className="text-ink-soft">{group.items}</dd>
                  </div>
                ))}
              </dl>
            </CvSection>

            <CvSection title={t.educationHeading}>
              {t.education.map((item) => (
                <div key={item.school} className="cv-entry">
                  <div className={`cv-entry-head ${ROW}`}>
                    <h3 className="cv-h3 text-lg font-semibold text-ink">{item.school}</h3>
                    <p className={META}>{keepDots(`${item.location} · ${item.period}`)}</p>
                  </div>
                  <p className="cv-role mt-1 text-ink-soft">{item.degree}</p>
                </div>
              ))}
            </CvSection>

            <CvSection title={t.certificationsHeading}>
              <ul className="cv-certs space-y-4">
                {t.certifications.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="mt-0.5 text-[15px] text-muted">
                      {keepDots([item.issuer, item.date].filter(Boolean).join(" · "))}
                    </p>
                  </li>
                ))}
              </ul>
            </CvSection>

            <CvSection title={t.languagesHeading}>
              <ul className="cv-langs space-y-2">
                {t.languages.map((item) => (
                  <li key={item.name}>
                    <span className="font-medium text-ink">{item.name}</span>
                    <span className="text-ink-soft"> — {item.level}</span>
                  </li>
                ))}
              </ul>
            </CvSection>
          </article>
        </Container>
      </div>

      <Section tone="ink" labelledBy="cv-contact-title" className="cv-noprint">
        <SectionHeading
          id="cv-contact-title"
          title={t.contactHeading}
          description={`${c.availability} ${t.contactText}`}
          onInk
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${CONTACT.email}`} size="lg">
            <FiMail aria-hidden="true" className="size-4" />
            {c.cta.email}
          </ButtonLink>
          <ButtonLink href={CONTACT.linkedin} external variant="inverse" size="lg">
            {c.cta.linkedin}
          </ButtonLink>
          <ButtonLink to={pathFor("contact", lang)} variant="inverse" size="lg">
            {c.cta.contactForm}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}

/** One résumé section: mono label (h2) in a left column from lg, content on the right; one column on paper. */
function CvSection({ title, children }) {
  return (
    <section className="cv-section mt-10 grid grid-cols-1 gap-5 border-t border-line pt-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10">
      <h2 className="cv-h2 font-mono text-sm font-semibold tracking-[0.12em] text-accent uppercase lg:sticky lg:top-24 lg:self-start">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Links from an experience entry to its case studies (screen only; slugs without a page are skipped). */
function CaseStudyLinks({ items, lang, labels }) {
  const links = (items ?? []).filter((item) => hasCaseStudy(item.slug));
  if (!links.length) return null;
  return (
    <div className="cv-noprint mt-3 flex flex-wrap items-center gap-x-4">
      <span className="text-sm text-muted">{links.length > 1 ? labels.caseStudies : labels.caseStudy}:</span>
      <ul className="flex flex-wrap gap-x-5">
        {links.map((item) => (
          <li key={item.slug}>
            <SmartLink to={pathFor("project", lang, { slug: item.slug })} className={TEXT_LINK}>
              {item.label}
              <FiArrowRight aria-hidden="true" className="size-3.5" />
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
