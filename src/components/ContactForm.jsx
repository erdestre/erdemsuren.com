import { useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiCheck, FiCheckCircle, FiChevronDown, FiClock } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { CONTACT } from "../content/common.js";
import contact from "../content/contact.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { cx } from "../lib/cx.js";
import { CONTACT_TOPIC_QUERY, CONTACT_TOPICS, pathFor } from "../routes.js";
import { Button } from "./ui/Button.jsx";
import SmartLink from "./ui/SmartLink.jsx";

// Same EmailJS service, template and public key as the previous form (all three are public by design).
// Template variables: the original four keep their names, so the current template keeps working:
//   title      = the chosen topic (+ company or project type), e.g. "Freelance proje – E-ticaret"
//   from_name, from_email
//   message    = the visitor's message, then a short block with the topic and the optional details
// Added for a future template (the current one ignores them): topic, company, role_or_link, project_type,
// timeline, page_lang, reply_to, user_message (the message without the details block).
const EMAILJS = {
  serviceId: "service_0z10bnu",
  templateId: "template_vncbt3k",
  publicKey: "I5JljJHN_NPG_M_j4",
};

// Client-side rate limit: one successful submission per minute, kept in memory only. EmailJS's own `limitRate`
// option is not used because it writes to localStorage (the privacy notice says only the language is stored).
const RATE_LIMIT_MS = 60_000;
let lastSentAt = 0;

const MESSAGE_MIN = 20;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Validation order = focus order on a failed submit.
const CHECKED = ["topic", "name", "email", "message"];
const EMPTY = { name: "", email: "", company: "", role: "", projectType: "", timeline: "", message: "" };

const LABEL = "block text-[15px] font-medium text-ink";
// Inputs sit on the surface card: field-border is 3.18:1 there (WCAG 1.4.11). Focus = the global 2px cobalt ring.
const CONTROL =
  "block w-full min-w-0 rounded-lg border border-field-border bg-surface px-4 py-3 text-base text-ink transition-colors hover:border-ink focus-visible:border-accent aria-[invalid=true]:border-error";
const OPTION =
  "flex min-h-12 flex-auto cursor-pointer items-center gap-3 whitespace-nowrap rounded-lg border border-field-border bg-surface px-4 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-ink has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent";

// "?tip=proje", "?topic=project", also "?tip=iş" or "?tip=Diğer" → topic key; anything else → null.
function topicFromSearch(search) {
  const params = new URLSearchParams(search);
  for (const { param, values } of Object.values(CONTACT_TOPIC_QUERY)) {
    const raw = params.get(param);
    if (!raw) continue;
    const value = raw
      .toLowerCase()
      .replace(/ı/g, "i")
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .trim();
    const topic = CONTACT_TOPICS.find((key) => values[key] === value);
    if (topic) return topic;
  }
  return null;
}

// Returns { field: errorKey } (keys into form.errors, so a language switch re-renders them in the new language).
function validate(values, topic) {
  const errors = {};
  if (!topic) errors.topic = "topic";
  if (!values.name.trim()) errors.name = "name";
  const email = values.email.trim();
  if (!email) errors.email = "emailMissing";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "emailInvalid";
  const message = values.message.trim();
  if (!message) errors.message = "messageMissing";
  else if (message.length < MESSAGE_MIN) errors.message = "messageShort";
  return errors;
}

function templateParams(values, topic, lang, t) {
  const v = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]));
  const job = topic === "job";
  const project = topic === "project";
  const topicLabel = t.topics[topic];
  const company = job ? v.company : "";
  const role = job ? v.role : "";
  const projectType = project ? v.projectType : "";
  const timeline = project ? v.timeline : "";
  const details = [
    [t.mail.topic, topicLabel],
    [t.mail.company, company],
    [t.mail.role, role],
    [t.mail.projectType, projectType],
    [t.mail.timeline, timeline],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  const subjectDetail = company || projectType;

  return {
    title: subjectDetail ? `${topicLabel} – ${subjectDetail}` : topicLabel,
    from_name: v.name,
    from_email: v.email,
    message: `${v.message}\n\n—\n${details}`,
    topic: topicLabel,
    company,
    role_or_link: role,
    project_type: projectType,
    timeline,
    page_lang: lang,
    reply_to: v.email,
    user_message: v.message,
  };
}

const describedBy = (...ids) => ids.filter(Boolean).join(" ") || undefined;

function Label({ htmlFor, optional, children }) {
  return (
    <label htmlFor={htmlFor} className={LABEL}>
      {children}
      {optional ? <span className="font-normal text-muted"> ({optional})</span> : null}
    </label>
  );
}

function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-error">
      <FiAlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

function Select({ id, name, value, onChange, placeholder, options }) {
  return (
    <div className="relative mt-2">
      <select id={id} name={name} value={value} onChange={onChange} className={cx(CONTROL, "appearance-none pr-11")}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FiChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  );
}

/**
 * Contact form (master plan §F.7): topic selector with conditional fields, inline validation messages in the
 * page language, a honeypot, a one-per-minute in-memory rate limit and an aria-live status region (no alert()).
 * EmailJS is loaded only when a valid form is sent, so it stays out of the entry chunk.
 * `labelledBy` = id of the visible form heading (names the form landmark).
 */
export default function ContactForm({ labelledBy, className }) {
  const lang = useLang();
  const t = contact[lang].form;
  const { search } = useLocation();
  const [topic, setTopic] = useState("");
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | rateLimited
  // Blocks a second submit while one is in flight (a double click can land before the "sending" re-render).
  const inFlight = useRef(false);
  // The prerendered form must never submit natively (before hydration, or if the JS fails): the submit button stays
  // disabled until React has hydrated, which also blocks implicit submission with Enter. Same value ("disabled") on
  // the server and in the first client render, so hydration stays clean. method="post" below is the second guard: a
  // native submit can never put the visitor's details into the URL.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  // Preselect the topic from ?tip= / ?topic= after hydration; the prerendered HTML has no topic selected.
  useEffect(() => {
    const fromQuery = topicFromSearch(search);
    if (fromQuery) setTopic(fromQuery);
  }, [search]);

  const sending = status === "sending";
  const shown = showErrors ? errors : {};
  const errorText = (field) => (shown[field] ? t.errors[shown[field]] : null);
  const job = topic === "job";
  const project = topic === "project";

  function chooseTopic(next) {
    setTopic(next);
    if (showErrors) setErrors(validate(values, next));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (showErrors) setErrors(validate(next, topic));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;

    // Honeypot: hidden from people and assistive tech. If a bot fills it, it gets a normal-looking result and
    // nothing is sent.
    if (form.elements.namedItem("website")?.value) {
      setValues(EMPTY);
      setStatus("success");
      return;
    }

    const found = validate(values, topic);
    setErrors(found);
    setShowErrors(true);
    const firstInvalid = CHECKED.find((field) => found[field]);
    if (firstInvalid) {
      setStatus("idle");
      const target =
        firstInvalid === "topic"
          ? form.querySelector('input[name="topic"]')
          : form.elements.namedItem(firstInvalid);
      target?.focus();
      return;
    }

    if (lastSentAt && Date.now() - lastSentAt < RATE_LIMIT_MS) {
      setStatus("rateLimited");
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    try {
      const { send } = await import("@emailjs/browser");
      await send(EMAILJS.serviceId, EMAILJS.templateId, templateParams(values, topic, lang, t), {
        publicKey: EMAILJS.publicKey,
        blockHeadless: true,
      });
      lastSentAt = Date.now();
      setValues(EMPTY);
      setErrors({});
      setShowErrors(false);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <form
      method="post"
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby={labelledBy}
      className={cx("relative grid grid-cols-1 gap-6", className)}
    >
      <fieldset className="min-w-0">
        <legend className={LABEL}>{t.topicLegend}</legend>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
          {CONTACT_TOPICS.map((key) => (
            <label key={key} className={OPTION}>
              <input
                type="radio"
                name="topic"
                value={key}
                checked={topic === key}
                onChange={() => chooseTopic(key)}
                aria-describedby={shown.topic ? "contact-topic-error" : undefined}
                className="size-4 shrink-0 accent-accent focus-visible:outline-none"
              />
              {t.topics[key]}
            </label>
          ))}
        </div>
        <FieldError id="contact-topic-error">{errorText("topic")}</FieldError>
      </fieldset>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="contact-name">{t.fields.name}</Label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={shown.name ? true : undefined}
            aria-describedby={shown.name ? "contact-name-error" : undefined}
            className={cx(CONTROL, "mt-2")}
          />
          <FieldError id="contact-name-error">{errorText("name")}</FieldError>
        </div>
        <div className="min-w-0">
          <Label htmlFor="contact-email">{t.fields.email}</Label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            maxLength={254}
            value={values.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={shown.email ? true : undefined}
            aria-describedby={shown.email ? "contact-email-error" : undefined}
            className={cx(CONTROL, "mt-2")}
          />
          <FieldError id="contact-email-error">{errorText("email")}</FieldError>
        </div>
      </div>

      {job ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-end">
          <div className="min-w-0">
            <Label htmlFor="contact-company" optional={t.optional}>
              {t.fields.company}
            </Label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={120}
              value={values.company}
              onChange={handleChange}
              className={cx(CONTROL, "mt-2")}
            />
          </div>
          <div className="min-w-0">
            <Label htmlFor="contact-role" optional={t.optional}>
              {t.fields.role}
            </Label>
            <input
              id="contact-role"
              name="role"
              type="text"
              autoComplete="off"
              maxLength={300}
              value={values.role}
              onChange={handleChange}
              className={cx(CONTROL, "mt-2")}
            />
          </div>
        </div>
      ) : null}

      {project ? (
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-end">
            <div className="min-w-0">
              <Label htmlFor="contact-project-type" optional={t.optional}>
                {t.fields.projectType}
              </Label>
              <Select
                id="contact-project-type"
                name="projectType"
                value={values.projectType}
                onChange={handleChange}
                placeholder={t.select}
                options={t.projectTypes}
              />
            </div>
            <div className="min-w-0">
              <Label htmlFor="contact-timeline" optional={t.optional}>
                {t.fields.timeline}
              </Label>
              <Select
                id="contact-timeline"
                name="timeline"
                value={values.timeline}
                onChange={handleChange}
                placeholder={t.select}
                options={t.timelines}
              />
            </div>
          </div>
          <ul className="flex flex-col gap-2 rounded-lg border border-accent/20 bg-accent-soft px-4 py-3 text-[15px] text-ink sm:flex-row sm:flex-wrap sm:gap-x-6">
            {t.projectNote.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <FiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="min-w-0">
        <Label htmlFor="contact-message">{t.fields.message}</Label>
        <p id="contact-message-hint" className="mt-1 text-sm text-muted">
          {t.messageHints[topic || "other"]}
        </p>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={5000}
          value={values.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={shown.message ? true : undefined}
          aria-describedby={describedBy("contact-message-hint", shown.message && "contact-message-error")}
          className={cx(CONTROL, "mt-2 min-h-36 resize-y")}
        />
        <FieldError id="contact-message-error">{errorText("message")}</FieldError>
      </div>

      {/* Honeypot: off-screen, out of the tab order and hidden from assistive tech. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-website">{t.honeypot}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {t.privacy.before}
        <SmartLink to={pathFor("privacy", lang)} className="link inline-flex min-h-11 items-center sm:min-h-0">
          {t.privacy.link}
        </SmartLink>
        {t.privacy.after}
      </p>

      <div className="min-w-0">
        <Button
          type="submit"
          size="lg"
          disabled={!ready}
          aria-disabled={sending || undefined}
          className="w-full aria-disabled:cursor-progress aria-disabled:opacity-70 sm:w-auto"
        >
          {sending ? t.sending : t.submit}
        </Button>
        <div role="status" aria-live="polite" className="text-[15px]">
          {sending ? <p className="sr-only">{t.sending}</p> : null}
          {status === "success" ? (
            <p className="mt-4 flex items-start gap-2 rounded-lg border border-success/25 bg-success/5 px-4 py-3 font-medium text-success">
              <FiCheckCircle aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span>{t.success}</span>
            </p>
          ) : null}
          {status === "rateLimited" ? (
            <p className="mt-4 flex items-start gap-2 rounded-lg border border-line bg-paper px-4 py-3 text-ink-soft">
              <FiClock aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span>{t.rateLimited}</span>
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 flex items-start gap-2 rounded-lg border border-error/25 bg-error/5 px-4 py-3 text-error">
              <FiAlertCircle aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span className="min-w-0">
                {t.error}{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium underline underline-offset-2 [overflow-wrap:anywhere]"
                >
                  {CONTACT.email}
                </a>
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
