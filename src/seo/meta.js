// Per-route <title> (≤ 60 chars) and meta description (50–155 chars), TR and EN. scripts/prerender.mjs enforces
// the limits and fails on duplicates. No "Senior", no unverifiable numbers, no prices.
import { PROJECT_SLUGS } from "../content/projectSlugs.js";

export const SITE_NAME = "Erdem Süren";

export const META = {
  home: {
    tr: {
      title: "Erdem Süren | Full-Stack Yazılım Mühendisi · .NET & React",
      description:
        ".NET, React/Next.js ve SQL ile uçtan uca iş yazılımı. Yapay zekâ ajanlarıyla çalışıyorum. Projeler, CV ve iletişim.",
    },
    en: {
      title: "Erdem Süren | Full-Stack Software Engineer · .NET & React",
      description:
        "Business software end to end with .NET, React/Next.js and SQL. I work with AI coding agents. Projects, CV and contact.",
    },
  },
  projects: {
    tr: {
      title: "Projeler | Erdem Süren",
      description:
        "Eribi e-ticaret platformu, BELBİM siteleri, İGDAŞ saha operasyonları, yapay zekâ ile geliştirme ve müşteri siteleri.",
    },
    en: {
      title: "Projects | Erdem Süren",
      description:
        "The Eribi e-commerce platform, BELBİM websites, İGDAŞ field operations, AI-native delivery and client websites.",
    },
  },
  services: {
    tr: {
      title: "Freelance Yazılım Geliştirme (.NET, React) | Erdem Süren",
      description:
        "İşletmeler ve ajanslar için web uygulaması, e-ticaret, entegrasyon ve yapay zekâ özellikleri. Ücretsiz görüşme, sabit teklif.",
    },
    en: {
      title: "Freelance Full-Stack Developer (.NET, React) | Erdem Süren",
      description:
        "Web apps, e-commerce, integrations and AI features for businesses and agencies. Free intro call, fixed written quote.",
    },
  },
  cv: {
    tr: {
      title: "Erdem Süren CV (Özgeçmiş) | Full-Stack Yazılım Mühendisi",
      description:
        "BELBİM, Eribitech, İGDAŞ ve Tiramisu Studios deneyimi. .NET, React/Next.js, SQL ve DevOps. Tek sayfa, PDF olarak da var.",
    },
    en: {
      title: "Erdem Süren CV | Full-Stack Software Engineer (.NET, React)",
      description:
        "Experience at BELBİM, Eribitech, İGDAŞ and Tiramisu Studios. .NET, React/Next.js, SQL and DevOps. One page, also as a PDF.",
    },
  },
  contact: {
    tr: {
      title: "İletişim | Erdem Süren",
      description:
        "İş fırsatları ve freelance projeler için e-posta, WhatsApp, LinkedIn veya GitHub. İstanbul, Türkiye.",
    },
    en: {
      title: "Contact | Erdem Süren",
      description:
        "Email, WhatsApp, LinkedIn or GitHub, for roles and freelance projects. Based in Istanbul, Türkiye.",
    },
  },
  privacy: {
    tr: {
      title: "Gizlilik ve Kişisel Veriler | Erdem Süren",
      description:
        "Bu sitede form ve çerez yok. Bana yazarsanız verilerinizin amacı, saklama süresi ve KVKK kapsamındaki haklarınız.",
    },
    en: {
      title: "Privacy Notice | Erdem Süren",
      description:
        "No forms and no cookies on this site. If you write to me: purpose, retention and your rights under the KVKK.",
    },
  },
  notFound: {
    tr: {
      title: "Sayfa bulunamadı (404) | Erdem Süren",
      description: "Bu sayfa yok ya da taşındı. Ana sayfaya, projelere veya iletişim sayfasına dönebilirsiniz.",
    },
    en: {
      title: "Page not found (404) | Erdem Süren",
      description: "This page does not exist or has moved. Go back to the home page, the projects or the contact page.",
    },
  },
};

// Project pages, keyed by slug. Every slug in src/content/projectSlugs.js needs an entry (else the prerender fails).
export const PROJECT_META = {
  eribi: {
    tr: {
      title: "Eribi: Çok Kiracılı E-Ticaret Platformu | Erdem Süren",
      description:
        "Ajanslar için çok kiracılı e-ticaret platformu: .NET 8, Next.js, PostgreSQL. Ödeme, e-fatura, kargo ve pazaryeri entegrasyonları.",
    },
    en: {
      title: "Eribi: Multi-Tenant Commerce Platform | Erdem Süren",
      description:
        "Multi-tenant e-commerce platform for agencies: .NET 8, Next.js, PostgreSQL. Payment, e-invoice, shipping and marketplace integrations.",
    },
  },
  "belbim-headless-cms": {
    tr: {
      title: "belbim.istanbul ve istanbulkart.istanbul | Erdem Süren",
      description:
        "BELBİM'de belbim.istanbul ve istanbulkart.istanbul: Umbraco headless CMS ve Next.js 15. İstanbulkart mobil uygulama ekibi.",
    },
    en: {
      title: "belbim.istanbul and istanbulkart.istanbul | Erdem Süren",
      description:
        "At BELBİM: belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15. On the İstanbulkart app team.",
    },
  },
  "ai-native-delivery": {
    tr: {
      title: "Yapay Zekâ Ajanlarıyla Geliştirme | Erdem Süren",
      description:
        "Claude Code ajanları, testler, ayrı test ve canlı sunucular, GitHub Actions ile otomatik yayın. Mimari ve son karar bende.",
    },
    en: {
      title: "AI-Native Delivery, Self-Hosted | Erdem Süren",
      description:
        "Claude Code agents, tests, separate test and production servers, automated GitHub Actions deploys. I own architecture and release.",
    },
  },
  "igdas-field-operations": {
    tr: {
      title: "İGDAŞ Saha Operasyonları Otomasyonu | Erdem Süren",
      description:
        "Saha ekiplerinin 7/24 kullandığı platform: durum makineleri, planlama, stok, SAP S/4HANA ve Active Directory entegrasyonu.",
    },
    en: {
      title: "İGDAŞ Field Operations Automation | Erdem Süren",
      description:
        "A 24/7 platform for field teams: state machines, scheduling, inventory, SAP S/4HANA and Active Directory integration.",
    },
  },
  darkpost: {
    tr: {
      title: "DarkPost Agency Kurumsal Web Sitesi | Erdem Süren",
      description:
        "DarkPost Agency için Next.js 16 ile kurumsal site: hizmet ve paket sayfaları, kısa bir mağaza başvuru formu.",
    },
    en: {
      title: "DarkPost Agency Website | Erdem Süren",
      description:
        "Company website for DarkPost Agency with Next.js 16: service and package pages and a short store application form.",
    },
  },
  "olser-bilisim": {
    tr: {
      title: "Olser Bilişim Kurumsal Web Sitesi | Erdem Süren",
      description:
        "Olser Bilişim için kurumsal site ve içerik paneli: React/Vite arayüz, .NET 8 API. Next.js 16 sürümü hazır.",
    },
    en: {
      title: "Olser Bilişim Company Website | Erdem Süren",
      description:
        "Company website and content panel for Olser Bilişim: React/Vite front end and .NET 8 API. A Next.js 16 version is ready.",
    },
  },
};

// Resolves { title, description } for a page key (+ params for project pages).
export function getMeta(page, lang, params) {
  if (page === "project") {
    const slug = typeof params?.slug === "string" ? params.slug.toLowerCase() : null;
    if (!PROJECT_SLUGS.includes(slug)) return META.notFound[lang];
    const meta = PROJECT_META[slug]?.[lang];
    if (!meta) throw new Error(`No meta for project "${slug}" (${lang}): add it to PROJECT_META`);
    return meta;
  }
  const meta = META[page]?.[lang];
  if (!meta) throw new Error(`No meta for page "${page}" (${lang})`);
  return meta;
}
