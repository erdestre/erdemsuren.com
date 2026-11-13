// JSON-LD (@graph) per page. Facts only:
// - every page: WebSite, Person (jobTitle = the site title's short form, worksFor BELBİM, alumniOf Bahçeşehir,
//   sameAs LinkedIn + GitHub only) and Organization Eribitech (founder → Person);
// - per page: ProfilePage (cv), CollectionPage + hasPart (projects), ContactPage (contact), CreativeWork (project
//   pages). BreadcrumbList only where a breadcrumb is visible (project pages: Home › Projects › project).
// Page data comes from the page itself, so this module (main bundle) never imports page copy: the projects index
// passes its project list (<Seo projects>) and a project page its project (<Seo project>).
// Never: ProfessionalService/LocalBusiness, Review/AggregateRating, FAQPage, SearchAction, telephone.
import common, { CONTACT, PERSON } from "../content/common.js";
import { PROJECT_IMAGES } from "../content/projectImages.js";
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
    jobTitle: "Full-Stack Yazılım Mühendisi",
    description:
      "Backend, frontend, mobil ve DevOps. BELBİM'de headless CMS'i, belbim.istanbul ve istanbulkart.istanbul'u geliştirdi. Eribitech'in kurucusu.",
    university: "Bahçeşehir Üniversitesi",
    languages: ["Türkçe", "İngilizce"],
    multiTenancy: "Çok kiracılı mimari",
  },
  en: {
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Back end, front end, mobile and DevOps. Built the headless CMS, belbim.istanbul and istanbulkart.istanbul at BELBİM. Founder of Eribitech.",
    university: "Bahçeşehir University",
    languages: ["Turkish", "English"],
    multiTenancy: "Multi-tenancy",
  },
};

const PAGE_TYPES = {
  home: "WebPage",
  projects: "CollectionPage",
  project: "WebPage",
  cv: "ProfilePage",
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
      "Microsoft SQL Server",
      "PostgreSQL",
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

// Host name of an absolute URL ("https://eribitech.com" → "eribitech.com").
const hostOf = (url) => new URL(url).host;

// The project page is a write-up by Erdem about a product or site (`about`), never that site itself (no sameAs: the
// Eribitech Organization already owns https://eribitech.com). Employer work (`employer`: BELBİM, İGDAŞ) lists him
// as a contributor, not as the author. A page about several live sites (`liveUrls`) is `about` each of them.
function creativeWorkNode(project, lang, url) {
  const image = project.image ? PROJECT_IMAGES[project.image] : null;
  const node = {
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.name[lang],
    description: project.line[lang],
    url,
    inLanguage: lang,
    ...(project.employer ? { contributor: { "@id": ID.person } } : { author: { "@id": ID.person } }),
    keywords: project.stack.join(", "),
  };
  if (image) node.image = absoluteUrl(image.large);
  const sites = (project.liveUrls ?? []).map((site) => ({ "@type": "WebSite", name: hostOf(site), url: site }));
  if (sites.length) node.about = sites.length === 1 ? sites[0] : sites;
  return node;
}

/**
 * @param {{ page: string, lang: "tr" | "en", params?: object, title: string, description: string,
 *   projects?: object[], project?: object }} input
 *   projects – projects index: every project (slug, name) for CollectionPage.hasPart;
 *   project  – project page: the project (slug, name, line, stack, image, liveUrls, employer) for CreativeWork.
 */
export function buildJsonLd({ page, lang, params, title, description, projects, project }) {
  const graph = [websiteNode(), personNode(lang), eribitechNode()];

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
    if (page === "contact" || page === "cv") webPage.mainEntity = { "@id": ID.person };
    if (page === "projects") {
      if (!projects?.length) throw new Error("JSON-LD: the projects page must pass its projects to <Seo projects={…}>");
      webPage.hasPart = projects.map((item) => ({
        "@type": "CreativeWork",
        "@id": `${projectUrl(item.slug, lang)}#project`,
        name: item.name[lang],
        url: projectUrl(item.slug, lang),
      }));
    }
    graph.push(webPage);

    // Project pages: the CreativeWork and the BreadcrumbList that mirrors the visible <Breadcrumbs> trail.
    if (page === "project") {
      if (!project) throw new Error("JSON-LD: a project page must pass its project to <Seo project={…}>");
      const nav = common[lang].nav;
      const work = creativeWorkNode(project, lang, url);
      webPage.mainEntity = { "@id": work["@id"] };
      graph.push(work);
      graph.push(
        breadcrumbNode([
          { name: nav.home, url: absoluteUrl(pathFor("home", lang)) },
          { name: nav.projects, url: absoluteUrl(pathFor("projects", lang)) },
          { name: project.name[lang], url },
        ]),
      );
    }
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// Safe inside <script>: "<" is escaped so the payload can never close the tag.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
