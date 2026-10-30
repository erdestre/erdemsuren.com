import { FiArrowRight, FiLinkedin, FiMail } from "react-icons/fi";
import common, { CONTACT } from "../../content/common.js";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { contactPath, pathFor } from "../../routes.js";
import { ButtonLink, Eyebrow, Section, SmartLink } from "../ui/index.js";

/**
 * Dual CTA band (master plan §B.2 #8, §B.5): hiring on the left (CV, e-mail, LinkedIn), freelance on the right
 * (contact form preset to "project", services). No WhatsApp or phone here: those live on Contact and Services.
 */
export default function CtaBand() {
  const lang = useLang();
  const t = home[lang].cta;
  const c = common[lang];

  return (
    // Follows the Stack section on the same paper ground: a shorter top padding keeps the two from drifting apart.
    <Section labelledBy="cta-title" className="pt-4 lg:pt-8">
      <div className="max-w-2xl">
        <h2 id="cta-title" className="text-h2 font-semibold text-ink">
          {t.title}
        </h2>
        <p className="mt-3 text-muted">{t.text}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col rounded-xl border border-line bg-surface p-6 sm:p-10">
          <Eyebrow>{t.hiring.eyebrow}</Eyebrow>
          <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-tight text-ink">
            {t.hiring.title}
          </h3>
          <p className="mt-3 text-muted">{t.hiring.text}</p>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <ButtonLink to={pathFor("cv", lang)} size="lg" className="w-full sm:w-auto">
              {c.cta.cv}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href={`mailto:${CONTACT.email}`} size="lg" variant="secondary" className="w-full sm:w-auto">
              <FiMail aria-hidden="true" className="size-4" />
              {c.cta.email}
            </ButtonLink>
          </div>
          <p className="mt-3">
            <SmartLink href={CONTACT.linkedin} external className="link inline-flex min-h-11 items-center gap-2 font-medium">
              <FiLinkedin aria-hidden="true" className="size-4 shrink-0" />
              {t.hiring.linkedin}
            </SmartLink>
          </p>
        </div>

        <div className="flex min-w-0 flex-col rounded-xl bg-ink p-6 text-on-ink sm:p-10">
          <Eyebrow onInk>{t.project.eyebrow}</Eyebrow>
          <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-tight text-on-ink">
            {t.project.title}
          </h3>
          <p className="mt-3 text-on-ink-muted">{t.project.text}</p>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <ButtonLink to={contactPath(lang, "project")} size="lg" className="w-full sm:w-auto">
              {t.project.action}
              <FiArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink to={pathFor("services", lang)} size="lg" variant="inverse" className="w-full sm:w-auto">
              {c.cta.services}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
