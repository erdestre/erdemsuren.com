// Home page copy (/ and /en/). Name and title come from common.js; featured projects from projects.js.

const home = {
  tr: {
    lead: [
      "BELBİM'de headless CMS'i, belbim.istanbul ve istanbulkart.istanbul'u geliştirdim.",
      "İstanbulkart mobil backend'inde sürüm tabanlı içerik senkronizasyonu kurdum: RabbitMQ, Redis, Hangfire.",
      "Eribitech'i kurdum: üç ürünlü, mikroservis mimarili bir platform.",
      "Sunucuları kurdum, ağı yapılandırdım, yazılımı canlıya aldım.",
    ],
    work: { title: "Öne çıkan işler" },
    experience: {
      title: "Deneyim",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Uzman Yazılım Geliştirici",
          period: "2025 – Günümüz",
          text: "Headless CMS, iki kurumsal site, İstanbulkart mobil backend, DevOps.",
        },
        {
          key: "eribitech",
          org: "Eribitech",
          role: "Kurucu",
          period: "2025 – Günümüz",
          text: "Eribi: e-ticaret, Growth, Creative. Mikroservis, kendi sunucularım.",
        },
        {
          key: "igdas",
          org: "İGDAŞ",
          role: "Yazılım Geliştirici",
          period: "2023 – 2025",
          text: "Operasyon Otomasyon Sistemi, Tıbbi Malzeme Takip, SAP entegrasyonu.",
        },
        {
          key: "tiramisu",
          org: "Tiramisu Studios",
          role: "Oyun Geliştirici",
          period: "2022 – 2023",
          text: "Drift Max Pro (120M+ indirme) ve Drift Max City.",
        },
      ],
    },
    stack: { title: "Teknolojiler" },
    cta: { title: "Bir pozisyon mu var?", text: "Kısa bir mesaj yeter." },
  },
  en: {
    lead: [
      "At BELBİM I built the headless CMS, belbim.istanbul and istanbulkart.istanbul.",
      "In the İstanbulkart mobile back end I built version-based content sync: RabbitMQ, Redis, Hangfire.",
      "I founded Eribitech: a three-product platform on a microservice architecture.",
      "I set up the servers, configured the network and shipped to production.",
    ],
    work: { title: "Selected work" },
    experience: {
      title: "Experience",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Software Development Specialist",
          period: "2025 – present",
          text: "Headless CMS, two corporate websites, İstanbulkart mobile back end, DevOps.",
        },
        {
          key: "eribitech",
          org: "Eribitech",
          role: "Founder",
          period: "2025 – present",
          text: "Eribi: e-commerce, Growth, Creative. Microservices on my own servers.",
        },
        {
          key: "igdas",
          org: "İGDAŞ",
          role: "Software Developer",
          period: "2023 – 2025",
          text: "Operations Automation System, Medical Supply Tracking, SAP integration.",
        },
        {
          key: "tiramisu",
          org: "Tiramisu Studios",
          role: "Game Developer",
          period: "2022 – 2023",
          text: "Drift Max Pro (120M+ downloads) and Drift Max City.",
        },
      ],
    },
    stack: { title: "Stack" },
    cta: { title: "Hiring?", text: "A short message is enough." },
  },
};

// Same list in both languages.
export const HOME_STACK = [
  "C#",
  ".NET 8",
  "ASP.NET Core",
  "EF Core",
  "Hangfire",
  "RabbitMQ",
  "Redis",
  "FluentValidation",
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Tailwind CSS",
  "React Native",
  "SQL Server",
  "PostgreSQL",
  "GitHub Actions",
  "IIS",
  "Cloudflare",
  "Windows Server",
];

export default home;
