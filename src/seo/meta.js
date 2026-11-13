// Per-route <title> (≤ 60 chars) and meta description (50–155 chars), TR and EN. scripts/prerender.mjs enforces
// the limits and fails on duplicates. No "Senior", no unverifiable numbers, no prices.

export const SITE_NAME = "Erdem Süren";

export const META = {
  home: {
    tr: {
      title: "Erdem Süren | Product Engineer · .NET, Next.js, React Native",
      description:
        "Sistemleri uçtan uca kurdum: mimari, backend, web, React Native mobil, DevOps. BELBİM'de CMS, iki site ve İstanbulkart mobil. Eribitech'in kurucusu.",
    },
    en: {
      title: "Erdem Süren | Product Engineer: .NET, Next.js, React Native",
      description:
        "Systems built end to end: architecture, back end, web, React Native mobile, DevOps. CMS, two sites and İstanbulkart mobile at BELBİM. Eribitech founder.",
    },
  },
  projects: {
    tr: {
      title: "Çalıştığım Projeler | Erdem Süren",
      description:
        "BELBİM, Eribitech, İGDAŞ, Tiramisu Studios ve GitHub'daki projelerim. Her biri tek satırda: ne işe yarıyor.",
    },
    en: {
      title: "Projects I Worked On | Erdem Süren",
      description: "Projects at BELBİM, Eribitech, İGDAŞ, Tiramisu Studios and on GitHub. One line each on what they do.",
    },
  },
  cv: {
    tr: {
      title: "Erdem Süren CV (Özgeçmiş) | Product Engineer",
      description:
        "BELBİM, Eribitech, İGDAŞ ve Tiramisu Studios. .NET, React Native, Next.js, RabbitMQ, Redis, SQL, DevOps. Tek sayfa, PDF olarak da var.",
    },
    en: {
      title: "Erdem Süren CV | Product Engineer (.NET, React Native)",
      description:
        "BELBİM, Eribitech, İGDAŞ and Tiramisu Studios. .NET, React Native, Next.js, RabbitMQ, Redis, SQL, DevOps. One page, also as a PDF.",
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

// Resolves { title, description } for a page key.
export function getMeta(page, lang) {
  const meta = META[page]?.[lang];
  if (!meta) throw new Error(`No meta for page "${page}" (${lang})`);
  return meta;
}
