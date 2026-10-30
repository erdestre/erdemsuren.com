// Per-route <title> (≤ 60 chars) and meta description (50–155 chars), TR and EN. scripts/prerender.mjs enforces
// the limits and fails on duplicates. Source: master plan §D.3, adapted to the owner decisions (one title,
// "AI-native" descriptor, Eribitech named, freelance on; no "Senior", no unverifiable numbers, no prices).
import { PROJECT_SLUGS } from "../content/projectSlugs.js";

export const SITE_NAME = "Erdem Süren";

export const META = {
  home: {
    tr: {
      title: "Erdem Süren | Full-Stack Yazılım Mühendisi · .NET & React",
      description:
        "İş yazılımlarını .NET, React/Next.js ve SQL ile uçtan uca geliştirip canlıda işletiyorum; yapay zekâ kod ajanlarıyla çalışıyorum. Projeler, CV ve iletişim.",
    },
    en: {
      title: "Erdem Süren | Full-Stack Software Engineer · .NET & React",
      description:
        "I design, build and run business software end to end with .NET, React/Next.js and SQL, working AI-native with coding agents. Projects, CV and contact.",
    },
  },
  projects: {
    tr: {
      title: "Projeler ve Vaka Çalışmaları | Erdem Süren",
      description:
        "Çok kiracılı e-ticaret platformu, yapay zekâ ürünleri, saha operasyonları otomasyonu, headless CMS ve müşteri siteleri: rolüm, kararlarım ve sonuçlar.",
    },
    en: {
      title: "Projects and Case Studies | Erdem Süren",
      description:
        "Case studies: a multi-tenant commerce platform, AI products, field-operations automation, a headless CMS and client websites, with my role and decisions.",
    },
  },
  services: {
    tr: {
      title: "Freelance Yazılım Geliştirme (.NET, React) | Erdem Süren",
      description:
        "İşletmelere özel web yazılımı: yönetim panelleri, e-ticaret, ödeme, e-fatura ve kargo entegrasyonları, yapay zekâ özellikleri; yayına alma ve bakım dâhil.",
    },
    en: {
      title: "Freelance Full-Stack Developer (.NET, React) | Erdem Süren",
      description:
        "Freelance full-stack development: web apps, admin panels, e-commerce with payment, e-invoice and shipping integrations, AI features, deployment and upkeep.",
    },
  },
  about: {
    tr: {
      title: "Hakkımda | Erdem Süren – Deneyim ve Çalışma Biçimim",
      description:
        "BELBİM'de Uzman Yazılım Geliştirici ve Eribitech'in kurucusu; daha önce İGDAŞ'ta saha operasyonları otomasyonu. Deneyimim ve yapay zekâyla çalışma biçimim.",
    },
    en: {
      title: "About Erdem Süren | Experience and How I Work",
      description:
        "Software Development Specialist at BELBİM and founder of Eribitech. Before BELBİM, I worked on field operations automation at İGDAŞ. How I work with AI.",
    },
  },
  cv: {
    tr: {
      title: "Erdem Süren CV (Özgeçmiş) | Full-Stack Yazılım Mühendisi",
      description:
        "Erdem Süren'in özgeçmişi: BELBİM, Eribitech, İGDAŞ ve Tiramisu Studios deneyimi; .NET, React/Next.js, SQL ve DevOps yetkinlikleri, eğitim ve sertifikalar.",
    },
    en: {
      title: "Erdem Süren CV | Full-Stack Software Engineer (.NET, React)",
      description:
        "Erdem Süren's CV: experience at BELBİM, Eribitech, İGDAŞ and Tiramisu Studios; .NET, React/Next.js, SQL and DevOps skills, education and certifications.",
    },
  },
  contact: {
    tr: {
      title: "İletişim | Erdem Süren – İş Fırsatları ve Projeler",
      description:
        "Tam zamanlı pozisyonlar ve freelance projeler için Erdem Süren'e e-posta, LinkedIn, WhatsApp veya iletişim formuyla ulaşın. İstanbul, Türkiye.",
    },
    en: {
      title: "Contact Erdem Süren | Roles and Freelance Projects",
      description:
        "Reach Erdem Süren about full-time roles or freelance projects by email, LinkedIn, WhatsApp or the contact form. Based in Istanbul, Türkiye (UTC+3).",
    },
  },
  privacy: {
    tr: {
      title: "Gizlilik ve Kişisel Veriler | Erdem Süren",
      description:
        "erdemsuren.com iletişim formuyla paylaştığınız kişisel verilerin hangi amaçla ve nasıl kullanıldığı, bu konuda bana nasıl ulaşabileceğiniz.",
    },
    en: {
      title: "Privacy Notice | Erdem Süren",
      description:
        "How erdemsuren.com uses the personal data you share through the contact form, why it is used and how to contact me about it.",
    },
  },
  notFound: {
    tr: {
      title: "Sayfa bulunamadı (404) | Erdem Süren",
      description:
        "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfaya, projelere veya iletişim sayfasına dönebilirsiniz.",
    },
    en: {
      title: "Page not found (404) | Erdem Süren",
      description:
        "The page you are looking for may have moved or never existed. Go back to the home page, the projects or the contact page.",
    },
  },
};

// Case-study pages, keyed by project slug (the final set; same slug in TR and EN). Every slug in
// src/content/projectSlugs.js needs an entry here: a missing one fails the prerender.
export const PROJECT_META = {
  eribi: {
    tr: {
      title: "Eribi: Çok Kiracılı E-Ticaret Platformu | Erdem Süren",
      description:
        "Ajansların müşterileri için mağaza açıp yönetebileceği çok kiracılı e-ticaret altyapısı: .NET 8, Next.js, PostgreSQL; ödeme, e-fatura, kargo entegrasyonu.",
    },
    en: {
      title: "Eribi: Multi-Tenant Commerce Platform | Erdem Süren",
      description:
        "A multi-tenant e-commerce platform built for agencies to launch and run stores: .NET 8, Next.js, PostgreSQL, payment, e-invoice and shipping integrations.",
    },
  },
  "eribi-growth": {
    tr: {
      title: "Eribi Growth: Müşteri Bulma ve Site Analizi | Erdem Süren",
      description:
        "Ajanslar için potansiyel müşteri aracı: sektöre ve şehre göre firma bulma, web sitesi analizi, yapay zekâyla hazırlanan rapor ve ilk e-posta.",
    },
    en: {
      title: "Eribi Growth: Lead Discovery and Site Analysis | Erdem Süren",
      description:
        "A lead tool for agencies: find companies by sector and city, analyze their websites and turn the findings into AI-written reports and first emails.",
    },
  },
  "eribi-creative": {
    tr: {
      title: "Eribi Creative: Yapay Zekâ Medya Stüdyosu | Erdem Süren",
      description:
        "Ajansların yapay zekâ modelleriyle görsel, video ve ses üretebildiği web stüdyosu: arka plan kuyrukları, haftalık kullanım hakkı, ortak medya kütüphanesi.",
    },
    en: {
      title: "Eribi Creative: AI Media Studio | Erdem Süren",
      description:
        "A web studio where agencies can generate images, video and audio with AI models: background queues, weekly usage allowances and a shared media library.",
    },
  },
  "ai-native-delivery": {
    tr: {
      title: "Yapay Zekâ Ajanlarıyla Geliştirme | Erdem Süren",
      description:
        "Yapay zekâ kod ajanlarının çalıştığı ortamı nasıl kurdum: ayrı test ve canlı sunucular, GitHub Actions ile otomatik dağıtım, inceleme ve geri alma düzeni.",
    },
    en: {
      title: "AI-Native Delivery, Self-Hosted | Erdem Süren",
      description:
        "How I set up the environment my AI coding agents work in: separate test and production servers, automated GitHub Actions deploys, review and rollback.",
    },
  },
  // Slug kept for link stability; the case study covers the two BELBİM sites (a "BELBİM: " prefix would pass 60).
  "belbim-headless-cms": {
    tr: {
      title: "belbim.istanbul ve istanbulkart.istanbul | Erdem Süren",
      description:
        "BELBİM'de belbim.istanbul ve istanbulkart.istanbul sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim; İstanbulkart mobil uygulama ekibindeyim.",
    },
    en: {
      title: "belbim.istanbul and istanbulkart.istanbul | Erdem Süren",
      description:
        "At BELBİM I built belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15, and I am on the İstanbulkart mobile app team.",
    },
  },
  "igdas-field-operations": {
    tr: {
      title: "İGDAŞ Saha Operasyonları Otomasyonu | Erdem Süren",
      description:
        "Saha ekiplerinin 7/24 kullandığı otomasyon sistemi: durum makineleri, kural tabanlı planlama, stok akışları, SAP S/4HANA ve Active Directory entegrasyonu.",
    },
    en: {
      title: "İGDAŞ Field Operations Automation | Erdem Süren",
      description:
        "A 24/7 operations-automation system for field teams: state machines, rule-based scheduling, inventory flows, SAP S/4HANA and Active Directory integration.",
    },
  },
  "drift-max": {
    tr: {
      title: "Drift Max Oyunlarında Performans | Erdem Süren",
      description:
        "Tiramisu Studios'ta Drift Max City ve Drift Max Pro üzerinde ekip çalışması: object pooling ile trafik sistemi, Unity editör araçları ve occlusion culling.",
    },
    en: {
      title: "Performance Work on Drift Max | Erdem Süren",
      description:
        "Team work at Tiramisu Studios on Drift Max City and Drift Max Pro: a pooled traffic system, Unity editor tooling and more efficient occlusion culling.",
    },
  },
  darkpost: {
    tr: {
      title: "DarkPost Agency Kurumsal Web Sitesi | Erdem Süren",
      description:
        "Pazarlama ve e-ticaret ajansı DarkPost Agency için Next.js ile geliştirdiğim kurumsal site: paket sayfaları ve Eribi'ye bağlı mağaza başvuru formu.",
    },
    en: {
      title: "DarkPost Agency Website | Erdem Süren",
      description:
        "Company website I built with Next.js for DarkPost Agency, a marketing and e-commerce agency: package pages and a store application form linked to Eribi.",
    },
  },
  "olser-bilisim": {
    tr: {
      title: "Olser Bilişim Kurumsal Web Sitesi | Erdem Süren",
      description:
        "Mali müşavirlere yazılım üreten Olser Bilişim için kurumsal site ve içerik paneli: React/Vite ve .NET 8 ile canlıda; Next.js 16 sürümü henüz yayında değil.",
    },
    en: {
      title: "Olser Bilişim Company Website | Erdem Süren",
      description:
        "Website and admin panel for Olser Bilişim, a software firm serving accountants: live on React/Vite and .NET 8; a Next.js 16 rewrite is not deployed yet.",
    },
  },
  odis: {
    tr: {
      title: "ODİS: Yaş Sınıflandırma İş Akışı Prototipi | Erdem Süren",
      description:
        "Oyun ve dijital içerikler için çok rollü yaş sınıflandırma iş akışı prototipi: başvuru, kod ve oyun incelemesi, pedagojik değerlendirme ve hukuki onay.",
    },
    en: {
      title: "ODİS: Age-Rating Workflow Prototype | Erdem Süren",
      description:
        "A prototype of a multi-role age-rating workflow for games and digital content: application, code and game review, pedagogical and legal steps.",
    },
  },
};

// Resolves { title, description } for a page key (+ params for project pages).
export function getMeta(page, lang, params) {
  if (page === "project") {
    const slug = typeof params?.slug === "string" ? params.slug.toLowerCase() : null;
    if (!PROJECT_SLUGS.includes(slug)) return META.notFound[lang];
    const meta = PROJECT_META[slug]?.[lang];
    if (!meta) throw new Error(`No meta for case study "${slug}" (${lang}): add it to PROJECT_META`);
    return meta;
  }
  const meta = META[page]?.[lang];
  if (!meta) throw new Error(`No meta for page "${page}" (${lang})`);
  return meta;
}
