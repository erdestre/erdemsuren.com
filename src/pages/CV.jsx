import { FiDownload } from "react-icons/fi";
import { ButtonLink, PageHeader, Section } from "../components/ui/index.js";
import cv, { CV_PDF } from "../content/cv.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import Seo from "../seo/Seo.jsx";

/** CV page: the one-page résumé as HTML (same text as the PDFs) and the two PDF downloads. */
export default function CV() {
  const lang = useLang();
  const t = cv[lang];
  const pdfLangs = lang === "tr" ? ["tr", "en"] : ["en", "tr"];

  return (
    <>
      <Seo page="cv" />
      <PageHeader title={t.heading} intro={t.intro}>
        <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </PageHeader>

      <Section as="div">
        <div className="max-w-4xl">
          <CvBlock title={t.summaryTitle}>
            <p className="text-ink-soft">{t.summary}</p>
          </CvBlock>

          <CvBlock title={t.experienceTitle}>
            <ol className="space-y-8">
              {t.experience.map((entry) => (
                <li key={entry.org}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-lg font-semibold text-ink">
                      {entry.org}
                      <span className="font-normal text-muted"> · {entry.role}</span>
                    </h3>
                    <p className="shrink-0 font-mono text-sm text-muted">{entry.period}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-soft marker:text-muted">
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </CvBlock>

          <CvBlock title={t.skillsTitle}>
            <dl className="space-y-2">
              {t.skills.map((group) => (
                <div key={group.label} className="grid grid-cols-1 gap-x-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                  <dt className="font-medium text-ink">{group.label}</dt>
                  <dd className="text-ink-soft">{group.items}</dd>
                </div>
              ))}
            </dl>
          </CvBlock>

          <CvBlock title={t.educationTitle}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold text-ink">
                {t.education.school}
                <span className="font-normal text-muted"> · {t.education.degree}</span>
              </h3>
              <p className="shrink-0 font-mono text-sm text-muted">{t.education.period}</p>
            </div>
            <p className="mt-2 text-ink-soft">{t.extra}</p>
          </CvBlock>
        </div>
      </Section>
    </>
  );
}

/** One résumé section: mono label (h2) on the left from lg, content on the right. */
function CvBlock({ title, children }) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-8 first:mt-0 first:border-t-0 first:pt-0 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-10">
      <h2 className="font-mono text-sm font-semibold tracking-[0.12em] text-accent uppercase">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
