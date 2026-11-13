// Projects (TR and EN): a name, one line, short bullets (past tense for done work), the stack.
// Facts only (no customer, revenue or usage numbers; co-developers unnamed; employer work shows public pages only).
// - `slug`: same in both languages, never renamed once published (see projectSlugs.js).
// - `image`: card cover, a key in projectImages.js, or null for a plain name cover.
// - `screens`: project-page images; screens[i] shows liveUrls[i].
// - `employer`: work done for an employer (JSON-LD contributor, not author). `featured`: shown on the home page.

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
    stack: [".NET 8", "YARP", "PostgreSQL 17", "Hangfire", "Next.js", "TanStack Query", "GitHub Actions"],
    name: { tr: "Eribi", en: "Eribi" },
    line: {
      tr: "Üç ürünlü platform: e-ticaret, Eribi Growth, Eribi Creative.",
      en: "Three-product platform: e-commerce, Eribi Growth, Eribi Creative.",
    },
    role: { tr: "Kurucu", en: "Founder" },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    points: {
      tr: [
        "Mikroservis mimarisi: YARP API gateway arkasında 9 servis.",
        "Çok kiracılı yapı: kiracı başına veritabanı.",
        "Otomatik mağaza kurulumu: veritabanı, DNS, SSL, IIS.",
        "Ödeme, e-fatura, kargo, pazaryeri ve ERP entegrasyonları.",
        "SQL Server'dan PostgreSQL 17'ye taşıdım. Boştaki bellek %72'den %60'a indi.",
        "Eribi Growth: müşteri bulma, site analizi, rapor.",
        "Eribi Creative: görsel, video ve ses üretimi.",
      ],
      en: [
        "Microservice architecture: 9 services behind a YARP API gateway.",
        "Multi-tenant: database per tenant.",
        "Automated store setup: database, DNS, SSL, IIS.",
        "Payment, e-invoice, shipping, marketplace and ERP integrations.",
        "Migrated from SQL Server to PostgreSQL 17. Idle memory cut from 72% to 60%.",
        "Eribi Growth: lead discovery, site analysis, reports.",
        "Eribi Creative: image, video and audio generation.",
      ],
    },
  },
  {
    // Slug kept for link stability; the page covers the CMS and the two BELBİM sites.
    slug: "belbim-headless-cms",
    org: "BELBİM",
    employer: true,
    featured: true,
    liveUrls: ["https://belbim.istanbul", "https://istanbulkart.istanbul"],
    image: "belbim",
    screens: ["belbim", "istanbulkart"],
    stack: ["Next.js 15", "React 19", "TypeScript", ".NET", "Umbraco", "Tailwind CSS"],
    name: { tr: "BELBİM CMS ve siteler", en: "BELBİM CMS and websites" },
    line: {
      tr: "Headless CMS, belbim.istanbul ve istanbulkart.istanbul.",
      en: "Headless CMS, belbim.istanbul and istanbulkart.istanbul.",
    },
    role: { tr: "Uzman Yazılım Geliştirici", en: "Software Development Specialist" },
    period: { tr: "Temmuz 2025 – Günümüz", en: "Jul 2025 – present" },
    points: {
      tr: [
        "Headless CMS'i geliştirdim: modüler monolit, Clean Architecture.",
        "İki kurumsal siteyi geliştirdim: Next.js 15, SSG ve ISR.",
        "Türkçe ve İngilizce. WCAG odaklı erişilebilirlik.",
        "Sunucuların Next.js yapılandırmasını yaptım.",
        "LDAP / Active Directory ile kimlik doğrulama.",
        "Şu anda DevOps sistemini kuruyorum.",
      ],
      en: [
        "Built the headless CMS: modular monolith, Clean Architecture.",
        "Built both corporate websites: Next.js 15, SSG and ISR.",
        "Turkish and English. WCAG-focused accessibility.",
        "Configured Next.js on the servers.",
        "LDAP / Active Directory authentication.",
        "Now building the DevOps system.",
      ],
    },
  },
  {
    slug: "istanbulkart-mobile",
    org: "BELBİM",
    employer: true,
    featured: true,
    liveUrls: [],
    image: null,
    screens: [],
    stack: [".NET", "RabbitMQ", "Redis", "Hangfire", "FluentValidation"],
    name: { tr: "İstanbulkart mobil", en: "İstanbulkart mobile" },
    line: {
      tr: "İstanbulkart uygulamasının backend'i ve entegrasyonları.",
      en: "Back end and integrations of the İstanbulkart app.",
    },
    role: { tr: "Uzman Yazılım Geliştirici", en: "Software Development Specialist" },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    points: {
      tr: [
        "Sürüm tabanlı içerik senkronizasyonu kurdum.",
        "RabbitMQ, Redis, Hangfire, FluentValidation.",
        "Uygulamanın entegrasyonlarını bağladım.",
        "Güncellemeleri geliştirdim.",
      ],
      en: [
        "Built version-based content synchronization.",
        "RabbitMQ, Redis, Hangfire, FluentValidation.",
        "Connected the app's integrations.",
        "Built its updates.",
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
    stack: ["C#", "ASP.NET", "React", "SQL Server", "SAP S/4HANA", "Active Directory"],
    name: { tr: "Operasyon Otomasyon Sistemi", en: "Operations Automation System" },
    line: {
      tr: "İGDAŞ saha ekiplerinin 7/24 kullandığı sistem.",
      en: "The system İGDAŞ field teams use 24/7.",
    },
    role: { tr: "Yazılım Geliştirici", en: "Software Developer" },
    period: { tr: "Aralık 2023 – Temmuz 2025", en: "Dec 2023 – Jul 2025" },
    points: {
      tr: [
        "Sistemi geliştirdim: C#, ASP.NET, React, SQL Server.",
        "Durum makinesi iş akışları: talep, atama, uygulama, rapor.",
        "Kural tabanlı planlama: anlık ve periyodik işler.",
        "Depo, araç ve saha arasında tutarlı stok akışı.",
        "SAP S/4HANA entegrasyonu: senkronizasyon, yeniden deneme, hata kurtarma.",
        "Active Directory kimlik doğrulama. Veri yoğun SQL raporları.",
      ],
      en: [
        "Built the system: C#, ASP.NET, React, SQL Server.",
        "State-machine workflows: intake, assignment, execution, report.",
        "Rule-based scheduling: on-demand and recurring jobs.",
        "Consistent inventory flows across depots, vehicles and the field.",
        "SAP S/4HANA integration: sync, retries, failure recovery.",
        "Active Directory authentication. Data-heavy SQL reports.",
      ],
    },
  },
  {
    slug: "igdas-tmt",
    org: "İGDAŞ",
    employer: true,
    liveUrls: [],
    image: null,
    screens: [],
    stack: ["C#", "ASP.NET", "SQL Server"],
    name: { tr: "Tıbbi Malzeme Takip (TMT)", en: "Medical Supply Tracking (TMT)" },
    line: {
      tr: "İGDAŞ revir randevusu ve tıbbi malzeme takibi.",
      en: "İGDAŞ infirmary appointments and medical supply tracking.",
    },
    role: { tr: "Yazılım Geliştirici", en: "Software Developer" },
    period: { tr: "2023 – 2025", en: "2023 – 2025" },
    points: {
      tr: ["Uygulamayı geliştirdim.", "Revir randevuları.", "Tıbbi malzeme stoğu ve takibi."],
      en: ["Built the app.", "Infirmary appointments.", "Medical supply stock and tracking."],
    },
  },
  {
    slug: "devops",
    org: "Eribitech",
    liveUrls: [],
    image: null,
    screens: [],
    stack: ["GitHub Actions", "Windows Server", "IIS", "Cloudflare", "PowerShell", "PM2"],
    name: { tr: "Altyapı ve DevOps", en: "Infrastructure and DevOps" },
    line: {
      tr: "Kendi sunucularım. Test ve canlı ortam. Otomatik yayın.",
      en: "My own servers. Test and production. Automated deploys.",
    },
    role: { tr: "Kurulum ve işletim", en: "Setup and operation" },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    points: {
      tr: [
        "Test ve canlı Windows sunucularını kurdum.",
        "Ağı yapılandırdım: Cloudflare Tunnel, DNS, SSL.",
        "100+ GitHub Actions iş akışı. Self-hosted runner'lar.",
        "Yedekleme ve geri yükleme tatbikatı.",
        "Riskli değişiklik özellik bayrağı arkasında. Tek ayarla geri alınır.",
        "20+ uygulama bu düzende çalışıyor. Kod ajanları (Claude Code) da.",
      ],
      en: [
        "Set up the test and production Windows servers.",
        "Configured the network: Cloudflare Tunnel, DNS, SSL.",
        "100+ GitHub Actions workflows. Self-hosted runners.",
        "Backups and restore drills.",
        "Risky changes sit behind feature flags. One switch rolls them back.",
        "20+ applications run on this setup. So do coding agents (Claude Code).",
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
    intro: "Geliştirdiğim ve kurduğum sistemler.",
    // Card thumbnail alt. {host} = the live site's host name.
    shot: "{host} ana sayfası",
    labels: {
      did: "Neler yaptım",
      stack: "Teknolojiler",
      screens: "Ekran görüntüleri",
    },
    cta: {
      title: "Bir pozisyon mu var?",
      button: "İletişim",
    },
  },
  en: {
    heading: "Projects",
    intro: "Systems I built and run.",
    shot: "{host} home page",
    labels: {
      did: "What I did",
      stack: "Stack",
      screens: "Screenshots",
    },
    cta: {
      title: "Hiring?",
      button: "Contact",
    },
  },
};

export default projects;
