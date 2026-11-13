// JSON-LD (@graph) per page. Facts only:
// - every page: WebSite, Person (jobTitle = the site title, worksFor BELBİM, alumniOf Bahçeşehir,
//   sameAs LinkedIn + GitHub only) and Organization Eribitech (founder → Person);
// - per page: ProfilePage (cv), CollectionPage + hasPart (projects: one CreativeWork per project card),
//   ContactPage (contact). There are no project pages and no breadcrumbs.
// Page data comes from the page itself, so this module (main bundle) never imports page copy: the projects page
// passes its project list (<Seo projects>).
// Never: ProfessionalService/LocalBusiness, Review/AggregateRating, FAQPage, SearchAction, telephone.
import { CONTACT, PERSON } from "../content/common.js";
import { absoluteUrl, pathFor, SITE_URL } from "../routes.js";

const ID = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  eribitech: "https://eribitech.com/#org",
};

// Stable portrait URL (public/img/), so Person.image does not change with every avatar re-encode (hashed assets do).
const PERSON_IMAGE = `${SITE_URL}/img/erdem-suren-512.jpg`;

const PERSON_TEXT = {
  tr: {
    jobTitle: "Product Engineer",
    description:
      "Sistemleri uçtan uca kurdu: mimari, backend, web, React Native mobil, DevOps. BELBİM'de headless CMS'i ve iki kurumsal siteyi geliştirdi, İstanbulkart mobil uygulamasında çalıştı. Eribitech'in kurucusu.",
    university: "Bahçeşehir Üniversitesi",
    languages: ["Türkçe", "İngilizce"],
    multiTenancy: "Çok kiracılı mimari",
  },
  en: {
    jobTitle: "Product Engineer",
    description:
      "Builds systems end to end: architecture, back end, web, React Native mobile, DevOps. Built the headless CMS and two corporate websites at BELBİM and works on the İstanbulkart mobile app. Founder of Eribitech.",
    university: "Bahçeşehir University",
    languages: ["Turkish", "English"],
    multiTenancy: "Multi-tenancy",
  },
};

const PAGE_TYPES = {
  home: "WebPage",
  projects: "CollectionPage",
  cv: "ProfilePage",
  contact: "ContactPage",
  privacy: "WebPage",
};

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: `${SITE_URL}/`,
    name: PERSON.name,
    alternateName: [PERSON.alternateName, "erdemsuren.com"],
    inLanguage: ["tr", "en"],
    publisher: { "@id": ID.person },
  };
}

function personNode(lang) {
  const t = PERSON_TEXT[lang];
  return {
    "@type": "Person",
    "@id": ID.person,
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    url: absoluteUrl(pathFor("home", lang)),
    image: PERSON_IMAGE,
    jobTitle: t.jobTitle,
    description: t.description,
    email: CONTACT.email,
    address: { "@type": "PostalAddress", addressLocality: lang === "tr" ? "İstanbul" : "Istanbul", addressCountry: "TR" },
    worksFor: {
      "@type": "Organization",
      name: "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.",
      alternateName: "BELBİM",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: t.university },
    knowsLanguage: [
      { "@type": "Language", name: t.languages[0], alternateName: "tr" },
      { "@type": "Language", name: t.languages[1], alternateName: "en" },
    ],
    knowsAbout: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "Hangfire",
      "RabbitMQ",
      "Redis",
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Expo",
      "Microsoft SQL Server",
      "PostgreSQL",
      "Software architecture",
      "Microservices",
      "Clean Architecture",
      t.multiTenancy,
      "DevOps",
      "GitHub Actions",
      "IIS",
      "Cloudflare",
    ],
    sameAs: [CONTACT.linkedin, CONTACT.github],
  };
}

function eribitechNode() {
  return {
    "@type": "Organization",
    "@id": ID.eribitech,
    name: "Eribitech",
    url: "https://eribitech.com/",
    founder: { "@id": ID.person },
  };
}

// Own work (Eribitech, GitHub) lists Erdem as the author; employer work (BELBİM, İGDAŞ, Tiramisu) as a contributor.
// `url` is the project's public page when it has one; the @id is its card on the projects page.
const OWN_ORGS = ["Eribitech", "GitHub"];

/**
 * @param {{ page: string, lang: "tr" | "en", title: string, description: string, projects?: object[] }} input
 *   projects – projects page: every project card (id, org, name, line, link) for CollectionPage.hasPart.
 */
export function buildJsonLd({ page, lang, title, description, projects }) {
  const graph = [websiteNode(), personNode(lang), eribitechNode()];

  if (page !== "notFound") {
    const url = absoluteUrl(pathFor(page, lang));
    const webPage = {
      "@type": PAGE_TYPES[page] ?? "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { "@id": ID.website },
    };
    if (page === "home") webPage.about = { "@id": ID.person };
    if (page === "contact" || page === "cv") webPage.mainEntity = { "@id": ID.person };
    if (page === "projects") {
      if (!projects?.length) throw new Error("JSON-LD: the projects page must pass its projects to <Seo projects={…}>");
      webPage.hasPart = projects.map((item) => ({
        "@type": "CreativeWork",
        "@id": `${url}#${item.id}`,
        name: item.name[lang],
        description: item.line[lang],
        ...(item.link ? { url: item.link } : {}),
        ...(OWN_ORGS.includes(item.org) ? { author: { "@id": ID.person } } : { contributor: { "@id": ID.person } }),
      }));
    }
    graph.push(webPage);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// Safe inside <script>: "<" is escaped so the payload can never close the tag.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
