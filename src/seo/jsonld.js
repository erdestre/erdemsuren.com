// JSON-LD (@graph) per page: master plan §D.5 + ARCH.md §5, adapted to the owner decisions. Facts only from
// discovery/fact-sheet.md and those decisions:
// - every page: WebSite, Person (jobTitle = the site title's short form, worksFor BELBİM, alumniOf Bahçeşehir,
//   sameAs LinkedIn + GitHub only) and Organization Eribitech (founder → Person);
// - per page: ProfilePage (about), CollectionPage + hasPart (projects), ContactPage (contact), CreativeWork
//   (case studies), OfferCatalog of Service nodes (services). BreadcrumbList only where a breadcrumb is visible
//   (the case studies: Home › Projects › case study), so the markup never describes content readers cannot see.
// Page data comes from the page itself, so this module (main bundle) never imports page copy: the Services page
// passes its service cards (<Seo offers>), the projects index its project list (<Seo projects>) and a case study its
// project (<Seo project>).
// Never: ProfessionalService/LocalBusiness, Review/AggregateRating, FAQPage, SearchAction, telephone, Medium.
import common, { CONTACT, PERSON } from "../content/common.js";
import { PROJECT_IMAGES } from "../content/projectImages.js";
import { absoluteUrl, pathFor, SITE_URL } from "../routes.js";

const ID = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  eribitech: "https://eribitech.com/#org",
  services: `${SITE_URL}/#services`,
};

// Stable portrait URL (public/img/), so Person.image does not change with every avatar re-encode (hashed assets do).
const PERSON_IMAGE = `${SITE_URL}/img/erdem-suren-512.jpg`;

const PERSON_TEXT = {
  tr: {
    jobTitle: "Full-Stack Yazılım Mühendisi",
    description:
      "İş yazılımlarını .NET, React/Next.js, SQL Server ve PostgreSQL ile uçtan uca geliştiren full-stack yazılım mühendisi. Kendi ürünlerini kendi sunucularında işletiyor ve yapay zekâ kod ajanlarıyla çalışıyor.",
    university: "Bahçeşehir Üniversitesi",
    languages: ["Türkçe", "İngilizce"],
    multiTenancy: "Çok kiracılı mimari",
    llm: "LLM entegrasyonu",
    aiPractice: "Yapay zekâ destekli yazılım geliştirme",
    catalogName: "Yazılım geliştirme hizmetleri",
    city: "İstanbul",
    country: "Türkiye",
  },
  en: {
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-stack software engineer who builds business software end to end with .NET, React/Next.js, SQL Server and PostgreSQL. Runs his own products on his own servers and works AI-native with coding agents.",
    university: "Bahçeşehir University",
    languages: ["Turkish", "English"],
    multiTenancy: "Multi-tenancy",
    llm: "LLM integration",
    aiPractice: "AI-assisted software development",
    catalogName: "Software development services",
    city: "Istanbul",
    country: "Türkiye",
  },
};

const PAGE_TYPES = {
  home: "WebPage",
  projects: "CollectionPage",
  project: "WebPage",
  services: "WebPage",
  about: "ProfilePage",
  cv: "WebPage",
  contact: "ContactPage",
  privacy: "WebPage",
};

const projectUrl = (slug, lang) => absoluteUrl(pathFor("project", lang, { slug }));

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

function personNode(lang, extra = {}) {
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
    address: { "@type": "PostalAddress", addressLocality: t.city, addressCountry: "TR" },
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
      "React",
      "Next.js",
      "TypeScript",
      "Microsoft SQL Server",
      "PostgreSQL",
      "REST API",
      "Clean Architecture",
      t.multiTenancy,
      "GitHub Actions",
      "IIS",
      "Cloudflare",
      t.llm,
      t.aiPractice,
    ],
    sameAs: [CONTACT.linkedin, CONTACT.github],
    ...extra,
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

function breadcrumbNode(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// items = services[lang].items[] → { key, title, text } (the visible service cards; each card has id="service-<key>").
// The service is requested through the contact page, in Turkish or English (a ServiceChannel: `availableLanguage`
// is not a Service property). areaServed only on the Turkish page: the English page says nothing about where work is
// offered, so it makes no claim either.
function offerCatalogNode(lang, items = []) {
  // Same code on the server and the client: a services page without its cards fails the prerender, not the visitor.
  if (!items.length) throw new Error('JSON-LD: the services page must pass its service cards to <Seo offers={…}>');
  const t = PERSON_TEXT[lang];
  const pageUrl = absoluteUrl(pathFor("services", lang));
  const channel = {
    "@type": "ServiceChannel",
    serviceUrl: absoluteUrl(pathFor("contact", lang)),
    availableLanguage: ["tr", "en"],
  };
  const areaServed =
    lang === "tr"
      ? {
          areaServed: [
            { "@type": "City", name: t.city },
            { "@type": "Country", name: t.country },
          ],
        }
      : {};
  return {
    "@type": "OfferCatalog",
    "@id": ID.services,
    name: t.catalogName,
    itemListElement: items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.title,
        ...(item.key ? { url: `${pageUrl}#service-${item.key}` } : {}),
        description: item.text,
        provider: { "@id": ID.person },
        ...areaServed,
        availableChannel: channel,
      },
    })),
  };
}

// Host name of an absolute URL ("https://darkpost.com.tr" → "darkpost.com.tr").
const hostOf = (url) => new URL(url).host;

// The case study is a write-up by Erdem about a product or site (`about`), never that site itself (no sameAs: the
// Eribitech Organization already owns https://eribitech.com). Employer and team work (group "employer": BELBİM,
// İGDAŞ, Drift Max) lists him as a contributor, not as the author of the product. A case study about several live
// sites (`liveUrls`: BELBİM's belbim.istanbul and istanbulkart.istanbul) is `about` each of them.
function creativeWorkNode(project, lang, url) {
  const image = project.image ? PROJECT_IMAGES[project.image] : null;
  const node = {
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title[lang],
    description: project.summary[lang],
    url,
    inLanguage: lang,
    ...(project.group === "employer" ? { contributor: { "@id": ID.person } } : { author: { "@id": ID.person } }),
    keywords: project.stack.join(", "),
  };
  if (image) node.image = absoluteUrl(image.large);
  const sites = (project.liveUrls ?? (project.liveUrl ? [project.liveUrl] : [])).map((site) => ({
    "@type": "WebSite",
    name: hostOf(site),
    url: site,
  }));
  if (sites.length) node.about = sites.length === 1 ? sites[0] : sites;
  return node;
}

/**
 * @param {{ page: string, lang: "tr" | "en", params?: object, title: string, description: string,
 *   offers?: object[], projects?: object[], project?: object }} input
 *   offers   – services page: the service cards ({ key, title, text }) for the OfferCatalog;
 *   projects – projects index: every project (slug, title) for CollectionPage.hasPart;
 *   project  – case study: the project (slug, title, summary, stack, image, liveUrl, liveUrls) for CreativeWork.
 */
export function buildJsonLd({ page, lang, params, title, description, offers, projects, project }) {
  const isServices = page === "services";
  const graph = [
    websiteNode(),
    personNode(lang, isServices ? { hasOfferCatalog: { "@id": ID.services } } : {}),
    eribitechNode(),
  ];

  if (page !== "notFound") {
    const url = absoluteUrl(pathFor(page, lang, params));
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
    if (page === "about" || page === "contact" || page === "cv") webPage.mainEntity = { "@id": ID.person };
    if (page === "projects") {
      if (!projects?.length) throw new Error("JSON-LD: the projects page must pass its projects to <Seo projects={…}>");
      webPage.hasPart = projects.map((project) => ({
        "@type": "CreativeWork",
        "@id": `${projectUrl(project.slug, lang)}#project`,
        name: project.title[lang],
        url: projectUrl(project.slug, lang),
      }));
    }
    graph.push(webPage);

    // Case studies: the CreativeWork and the BreadcrumbList that mirrors the visible <Breadcrumbs> trail.
    if (page === "project") {
      if (!project) throw new Error("JSON-LD: a case study must pass its project to <Seo project={…}>");
      const nav = common[lang].nav;
      const work = creativeWorkNode(project, lang, url);
      webPage.mainEntity = { "@id": work["@id"] };
      graph.push(work);
      graph.push(
        breadcrumbNode([
          { name: nav.home, url: absoluteUrl(pathFor("home", lang)) },
          { name: nav.projects, url: absoluteUrl(pathFor("projects", lang)) },
          { name: project.title[lang], url },
        ]),
      );
    }

    if (isServices) graph.push(offerCatalogNode(lang, offers));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// Safe inside <script>: "<" is escaped so the payload can never close the tag.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
