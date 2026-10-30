import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Eyebrow } from "../components/ui/index.js";
import common from "../content/common.js";
import { useLang } from "../i18n/LanguageContext.jsx";
import { pathFor } from "../routes.js";
import Seo from "../seo/Seo.jsx";

const LINK_KEYS = ["home", "projects", "contact"];

// Must not render anything derived from the requested URL: one prerendered 404.html per language is
// served (with status 404) for every unknown path and has to hydrate cleanly for all of them.
export default function NotFound() {
  const lang = useLang();
  const t = common[lang];

  return (
    <>
      <Seo page="notFound" />
      <Container className="py-20 sm:py-28">
        <Eyebrow>{t.notFound.eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-display text-ink sm:text-5xl">
          {t.notFound.heading}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.notFound.text}</p>
        <ul className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
          {LINK_KEYS.map((key) => (
            <li key={key}>
              <Link
                to={pathFor(key, lang)}
                className="flex min-h-12 items-center justify-between gap-2 rounded-2xl border border-line bg-surface px-4 py-3 font-medium text-ink shadow-card transition-colors hover:border-accent/40 hover:text-accent"
              >
                {t.nav[key]}
                <FiArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
