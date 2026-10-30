import { useContext, useEffect } from "react";
import { useLang } from "../i18n/LanguageContext.jsx";
import { absoluteUrl, LANGS, pathFor } from "../routes.js";
import { HeadContext } from "./HeadContext.js";
import { buildJsonLd, serializeJsonLd } from "./jsonld.js";
import { getMeta, SITE_NAME } from "./meta.js";

const OG_LOCALE = { tr: "tr_TR", en: "en_US" };
// Describes what the OG image shows (public/og/og-{tr,en}.png: name, title, descriptor pill, Eribitech role).
const OG_IMAGE_ALT = {
  tr: "Erdem Süren · Full-Stack Yazılım Mühendisi · .NET & React/Next.js · Yapay zekâ ile uçtan uca · Eribitech Kurucusu",
  en: "Erdem Süren · Full-Stack Software Engineer · .NET & React/Next.js · AI-native, end to end · Founder, Eribitech",
};
const JSONLD_ID = "ld-json";

// Keeps <script type="application/ld+json" id="ld-json"> in <head> in sync after client-side navigation.
// (On first load the prerendered script is already there with the same content.)
function useJsonLdScript(json) {
  useEffect(() => {
    let script = document.getElementById(JSONLD_ID);
    if (!json) {
      script?.remove();
      return;
    }
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = JSONLD_ID;
      document.head.appendChild(script);
    }
    if (script.textContent !== json) script.textContent = json;
  }, [json]);
}

/**
 * Per-page head tags, rendered with React 19's native <title>/<meta>/<link> hoisting.
 * @param {{ page: "home"|"about"|"projects"|"project"|"services"|"cv"|"contact"|"privacy"|"notFound", params?: object,
 *   offers?: object[], projects?: object[], project?: object }} props
 *   Page data for the JSON-LD (see seo/jsonld.js): `offers` on services (its service cards), `projects` on the
 *   projects index (every project), `project` on a case study (that project).
 */
export default function Seo({ page, params, offers, projects, project }) {
  const lang = useLang();
  const collector = useContext(HeadContext);
  const isNotFound = page === "notFound";
  const { title, description } = getMeta(page, lang, params);

  const url = isNotFound ? null : absoluteUrl(pathFor(page, lang, params));
  const alternates = isNotFound
    ? []
    : LANGS.map((code) => ({ hrefLang: code, href: absoluteUrl(pathFor(page, code, params)) }));
  if (!isNotFound) {
    // x-default -> the English version of the same page: the better fallback for readers of neither language
    // (master plan §D.4/§D.6). scripts/prerender.mjs builds the same set for its checks and the sitemap.
    alternates.push({ hrefLang: "x-default", href: absoluteUrl(pathFor(page, "en", params)) });
  }
  const otherLang = LANGS.find((code) => code !== lang);
  const ogImage = absoluteUrl(`/og/og-${lang}.png`);
  const jsonLd = serializeJsonLd(buildJsonLd({ page, lang, params, title, description, offers, projects, project }));

  if (collector) {
    // Server render only (see HeadContext.js).
    collector.jsonLd = jsonLd;
    collector.status = isNotFound ? 404 : 200;
  }
  useJsonLdScript(jsonLd);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 404: noindex. Indexable pages: allow large image previews (plan §D.4; index/follow are the defaults). */}
      <meta name="robots" content={isNotFound ? "noindex" : "max-image-preview:large"} />
      {isNotFound ? null : <link rel="canonical" href={url} />}
      {alternates.map((alt) => (
        <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      <meta property="og:type" content={page === "about" ? "profile" : "website"} />
      {page === "about" ? <meta property="profile:first_name" content="Erdem" /> : null}
      {page === "about" ? <meta property="profile:last_name" content="Süren" /> : null}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:locale:alternate" content={OG_LOCALE[otherLang]} />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT[lang]} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
