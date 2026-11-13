// Per-route <title> (≤ 60 chars) and meta description (50–155 chars), TR and EN. scripts/prerender.mjs enforces
// the limits and fails on duplicates. No "Senior", no unverifiable numbers, no prices.
import { PROJECT_SLUGS } from "../content/projectSlugs.js";

export const SITE_NAME = "Erdem Süren";

export const META = {
  home: {
    tr: {
      title: "Erdem Süren | Full-Stack Yazılım Mühendisi · .NET & React",
      description:
        "Backend, frontend, mobil ve DevOps. BELBİM'de CMS, iki kurumsal site ve İstanbulkart mobil backend. Eribitech'in kurucusu.",
    },
    en: {
      title: "Erdem Süren | Full-Stack Software Engineer · .NET & React",
      description:
        "Back end, front end, mobile and DevOps. CMS, two websites and the İstanbulkart mobile back end at BELBİM. Founder of Eribitech.",
    },
  },
  projects: {
    tr: {
      title: "Projeler | Erdem Süren",
      description:
        "Eribi, BELBİM CMS ve siteleri, İstanbulkart mobil, İGDAŞ Operasyon Otomasyon Sistemi, Tıbbi Malzeme Takip, altyapı ve DevOps.",
    },
    en: {
      title: "Projects | Erdem Süren",
      description:
        "Eribi, the BELBİM CMS and websites, İstanbulkart mobile, the İGDAŞ Operations Automation System, Medical Supply Tracking, DevOps.",
    },
  },
  cv: {
    tr: {
      title: "Erdem Süren CV (Özgeçmiş) | Full-Stack Yazılım Mühendisi",
      description:
        "BELBİM, Eribitech, İGDAŞ ve Tiramisu Studios. .NET, RabbitMQ, Redis, React, Next.js, SQL ve DevOps. Tek sayfa, PDF olarak da var.",
    },
    en: {
      title: "Erdem Süren CV | Full-Stack Software Engineer (.NET, React)",
      description:
        "BELBİM, Eribitech, İGDAŞ and Tiramisu Studios. .NET, RabbitMQ, Redis, React, Next.js, SQL and DevOps. One page, also as a PDF.",
    },
  },
  contact: {
    tr: {
      title: "İletişim | Erdem Süren",
      description: "İş fırsatları için e-posta, WhatsApp, LinkedIn veya GitHub. Erdem Süren, İstanbul, Türkiye.",
    },
    en: {
      title: "Contact | Erdem Süren",
      description: "Email, WhatsApp, LinkedIn or GitHub, for new roles. Erdem Süren, based in Istanbul, Türkiye.",
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
      title: "Eribi: E-Ticaret, Growth ve Creative | Erdem Süren",
      description:
        "Üç ürünlü platform: e-ticaret, Eribi Growth, Eribi Creative. Mikroservis mimarisi, YARP, .NET 8, PostgreSQL, Next.js.",
    },
    en: {
      title: "Eribi: E-Commerce, Growth and Creative | Erdem Süren",
      description:
        "A three-product platform: e-commerce, Eribi Growth, Eribi Creative. Microservices, YARP, .NET 8, PostgreSQL, Next.js.",
    },
  },
  "belbim-headless-cms": {
    tr: {
      title: "BELBİM Headless CMS ve Kurumsal Siteler | Erdem Süren",
      description:
        "BELBİM'de headless CMS (modüler monolit, Clean Architecture), belbim.istanbul ve istanbulkart.istanbul: Next.js 15.",
    },
    en: {
      title: "BELBİM Headless CMS and Websites | Erdem Süren",
      description:
        "At BELBİM: a headless CMS (modular monolith, Clean Architecture), belbim.istanbul and istanbulkart.istanbul with Next.js 15.",
    },
  },
  "istanbulkart-mobile": {
    tr: {
      title: "İstanbulkart Mobil: Backend ve Entegrasyonlar | Erdem Süren",
      description:
        "İstanbulkart mobil uygulamasının backend'i: sürüm tabanlı içerik senkronizasyonu, RabbitMQ, Redis, Hangfire, FluentValidation.",
    },
    en: {
      title: "İstanbulkart Mobile: Back End and Integrations | Erdem Süren",
      description:
        "The İstanbulkart mobile app's back end: version-based content sync, RabbitMQ, Redis, Hangfire, FluentValidation, integrations.",
    },
  },
  "igdas-field-operations": {
    tr: {
      title: "İGDAŞ Operasyon Otomasyon Sistemi | Erdem Süren",
      description:
        "Saha ekiplerinin 7/24 kullandığı sistem: durum makineleri, planlama, stok, SAP S/4HANA ve Active Directory entegrasyonu.",
    },
    en: {
      title: "İGDAŞ Operations Automation System | Erdem Süren",
      description:
        "The system field teams use 24/7: state machines, scheduling, inventory, SAP S/4HANA and Active Directory integration.",
    },
  },
  "igdas-tmt": {
    tr: {
      title: "İGDAŞ Tıbbi Malzeme Takip (TMT) | Erdem Süren",
      description: "İGDAŞ için Tıbbi Malzeme Takip uygulaması: revir randevuları, tıbbi malzeme stoğu ve takibi.",
    },
    en: {
      title: "İGDAŞ Medical Supply Tracking (TMT) | Erdem Süren",
      description: "The Medical Supply Tracking app for İGDAŞ: infirmary appointments, medical supply stock and tracking.",
    },
  },
  devops: {
    tr: {
      title: "Altyapı ve DevOps | Erdem Süren",
      description:
        "Kendi test ve canlı sunucularım: Windows Server, IIS, Cloudflare Tunnel, DNS, SSL, 100+ GitHub Actions iş akışı.",
    },
    en: {
      title: "Infrastructure and DevOps | Erdem Süren",
      description:
        "My own test and production servers: Windows Server, IIS, Cloudflare Tunnel, DNS, SSL, 100+ GitHub Actions workflows.",
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
