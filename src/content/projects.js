// Projects (TR and EN). Short on purpose: a name, one line, 3–4 short bullets, the stack.
// Facts only (no customer, revenue or usage numbers; co-developers unnamed; employer work shows public pages only).
// - `slug`: same in both languages, never renamed once published (see projectSlugs.js).
// - `image`: card cover, a key in projectImages.js, or null for a plain name cover. `screens`: detail-page images.
// - `liveUrls`: live sites, in order. `employer`: work done for an employer (JSON-LD contributor, not author).
// - `featured`: shown on the home page.

import { PROJECT_SLUGS } from "./projectSlugs.js";

export { PROJECT_SLUGS };

export const PROJECTS = [
  {
    slug: "eribi",
    org: "Eribitech",
    featured: true,
    liveUrls: ["https://eribitech.com", "https://growth.eribitech.com", "https://creative.eribitech.com"],
    image: "eribi",
    screens: ["eribi", "eribi-growth", "eribi-creative"],
    stack: [".NET 8", "Next.js", "PostgreSQL 17", "YARP", "Hangfire", "GitHub Actions"],
    name: { tr: "Eribi", en: "Eribi" },
    line: {
      tr: "Ajanslar için çok kiracılı e-ticaret platformu.",
      en: "Multi-tenant e-commerce platform for agencies.",
    },
    role: { tr: "Kurucu", en: "Founder" },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    points: {
      tr: [
        "Kiracı başına veritabanı. Otomatik mağaza kurulumu.",
        "YARP arkasında 9 servis: ödeme, e-fatura, kargo, pazaryeri, ERP, yapay zekâ.",
        "Eribi Growth: müşteri bulma ve site analizi (Claude).",
        "Eribi Creative: yapay zekâ medya stüdyosu (fal.ai).",
      ],
      en: [
        "Database per tenant. Automated store setup.",
        "9 services behind YARP: payment, e-invoice, shipping, marketplace, ERP, AI.",
        "Eribi Growth: lead discovery and site analysis (Claude).",
        "Eribi Creative: AI media studio (fal.ai).",
      ],
    },
  },
  {
    // Slug kept for link stability; the page covers the two BELBİM sites.
    slug: "belbim-headless-cms",
    org: "BELBİM",
    employer: true,
    featured: true,
    liveUrls: ["https://belbim.istanbul", "https://istanbulkart.istanbul"],
    image: "belbim",
    screens: ["belbim", "istanbulkart"],
    stack: ["Next.js 15", "Umbraco", ".NET", "TypeScript", "Tailwind CSS"],
    name: { tr: "BELBİM siteleri", en: "BELBİM websites" },
    line: {
      tr: "belbim.istanbul ve istanbulkart.istanbul.",
      en: "belbim.istanbul and istanbulkart.istanbul.",
    },
    role: { tr: "Uzman Yazılım Geliştirici", en: "Software Development Specialist" },
    period: { tr: "Temmuz 2025 – Günümüz", en: "Jul 2025 – present" },
    points: {
      tr: [
        "Umbraco headless CMS, Next.js 15.",
        "SSG ve ISR. Türkçe ve İngilizce.",
        "LDAP / Active Directory ile kimlik doğrulama.",
        "İstanbulkart mobil uygulama ekibindeyim.",
      ],
      en: [
        "Umbraco headless CMS, Next.js 15.",
        "SSG and ISR. Turkish and English.",
        "LDAP / Active Directory authentication.",
        "On the İstanbulkart mobile app team.",
      ],
    },
  },
  {
    slug: "ai-native-delivery",
    org: "Eribitech",
    featured: true,
    liveUrls: [],
    image: null,
    screens: [],
    stack: ["Claude Code", "GitHub Actions", "PowerShell", "IIS", "Cloudflare", "xUnit"],
    name: { tr: "Yapay zekâ ile geliştirme", en: "AI-native delivery" },
    line: {
      tr: "Claude Code ajanları, testler, otomatik yayın.",
      en: "Claude Code agents, tests, automated deploys.",
    },
    role: { tr: "Kurulum ve işletim", en: "Setup and operation" },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    points: {
      tr: [
        "Ajanlar kurduğum ortamda çalışır: testler, belgeler, kurallar.",
        "Ayrı test ve canlı sunucu. 100+ GitHub Actions iş akışı.",
        "Riskli değişiklik özellik bayrağı arkasında. Tek ayarla geri alınır.",
        "Mimari, inceleme ve yayın kararı bende.",
      ],
      en: [
        "Agents work inside my setup: tests, docs, rules.",
        "Separate test and production servers. 100+ GitHub Actions workflows.",
        "Risky changes sit behind feature flags. One switch rolls them back.",
        "I own the architecture, the review and the release.",
      ],
    },
  },
  {
    slug: "igdas-field-operations",
    org: "İGDAŞ",
    employer: true,
    liveUrls: [],
    image: null,
    screens: [],
    stack: ["C#", "ASP.NET", "React", "SQL Server", "SAP S/4HANA"],
    name: { tr: "İGDAŞ saha operasyonları", en: "İGDAŞ field operations" },
    line: {
      tr: "Saha ekiplerinin 7/24 kullandığı platform.",
      en: "A 24/7 platform for field teams.",
    },
    role: { tr: "Yazılım Geliştirici", en: "Software Developer" },
    period: { tr: "Aralık 2023 – Temmuz 2025", en: "Dec 2023 – Jul 2025" },
    points: {
      tr: [
        "Durum makinesi iş akışları: talep, atama, uygulama, rapor.",
        "Kural tabanlı planlama. Tutarlı stok akışları.",
        "SAP S/4HANA ve Active Directory entegrasyonları.",
        "Veri yoğun SQL raporları.",
      ],
      en: [
        "State-machine workflows: intake, assignment, execution, report.",
        "Rule-based scheduling. Consistent inventory flows.",
        "SAP S/4HANA and Active Directory integrations.",
        "Data-heavy SQL reports.",
      ],
    },
  },
  {
    slug: "darkpost",
    org: "DarkPost Agency",
    liveUrls: ["https://darkpost.com.tr"],
    image: "darkpost",
    screens: ["darkpost"],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "zod"],
    name: { tr: "DarkPost Agency", en: "DarkPost Agency" },
    line: {
      tr: "Bir ajans için kurumsal web sitesi.",
      en: "Company website for an agency.",
    },
    role: { tr: "Tek geliştirici", en: "Sole developer" },
    period: { tr: "Ağustos – Eylül 2026", en: "Aug – Sep 2026" },
    points: {
      tr: [
        "Hizmet ve paket sayfaları.",
        "Mağaza başvuru formu: 22 alandan 10 alana.",
        "API anahtarı sunucuda kalır (BFF).",
      ],
      en: [
        "Service and package pages.",
        "Store application form: from 22 fields to 10.",
        "The API key stays on the server (BFF).",
      ],
    },
  },
  {
    slug: "olser-bilisim",
    org: "Olser Bilişim",
    liveUrls: ["https://olserbilisim.com"],
    image: "olser",
    screens: ["olser"],
    stack: ["React 18", "Vite", "Tailwind CSS 4", ".NET 8"],
    name: { tr: "Olser Bilişim", en: "Olser Bilişim" },
    line: {
      tr: "Kurumsal site ve içerik paneli.",
      en: "Company website and content panel.",
    },
    role: { tr: "Tek geliştirici", en: "Sole developer" },
    period: { tr: "Mayıs 2025 – Mayıs 2026", en: "May 2025 – May 2026" },
    points: {
      tr: [
        "Mali müşavirlere yazılım üreten bir firma.",
        "React/Vite arayüz, .NET 8 API.",
        "İçerik ve SEO yönetim paneli.",
        "Next.js 16 sürümü hazır, henüz yayında değil.",
      ],
      en: [
        "A software firm serving accountants.",
        "React/Vite front end, .NET 8 API.",
        "Content and SEO admin panel.",
        "A Next.js 16 version is ready, not live yet.",
      ],
    },
  },
];

// The route table reads the slug list from projectSlugs.js; both must name the same projects in the same order.
if (PROJECTS.map((project) => project.slug).join() !== PROJECT_SLUGS.join()) {
  throw new Error("src/content/projects.js and src/content/projectSlugs.js list different projects");
}

export function getProject(slug) {
  if (typeof slug !== "string") return null;
  const key = slug.toLowerCase();
  return PROJECTS.find((project) => project.slug === key) ?? null;
}

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

// Page copy for /projeler/ and /en/projects/ and the labels of the project pages.
const projects = {
  tr: {
    heading: "Projeler",
    intro: "Ürünlerim, işveren ve müşteri işlerim.",
    // Card thumbnail alt. {host} = the live site's host name.
    shot: "{host} ana sayfası",
    labels: {
      did: "Neler yaptım",
      stack: "Teknolojiler",
      screens: "Ekran görüntüleri",
    },
    cta: {
      title: "Benzer bir iş mi var?",
      button: "İletişim",
    },
  },
  en: {
    heading: "Projects",
    intro: "My products, employer and client work.",
    shot: "{host} home page",
    labels: {
      did: "What I did",
      stack: "Stack",
      screens: "Screenshots",
    },
    cta: {
      title: "Building something similar?",
      button: "Contact",
    },
  },
};

export default projects;
