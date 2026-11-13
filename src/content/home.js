// Home page copy (/ and /en/). Name, title and availability come from common.js; featured projects from projects.js.

const home = {
  tr: {
    lead: "İş yazılımı geliştiriyorum. Fikirden canlıya. Yapay zekâ ile.",
    work: { title: "Öne çıkan işler" },
    experience: {
      title: "Deneyim",
      items: [
        { key: "belbim", org: "BELBİM", role: "Uzman Yazılım Geliştirici", period: "2025 – Günümüz" },
        { key: "eribitech", org: "Eribitech", role: "Kurucu", period: "2025 – Günümüz" },
        { key: "igdas", org: "İGDAŞ", role: "Yazılım Geliştirici", period: "2023 – 2025" },
        { key: "tiramisu", org: "Tiramisu Studios", role: "Oyun Geliştirici", period: "2022 – 2023" },
      ],
    },
    stack: { title: "Teknolojiler" },
    cta: { title: "Pozisyon ya da proje mi var?", text: "Kısa bir mesaj yeter." },
  },
  en: {
    lead: "I build business software. From idea to production. With AI.",
    work: { title: "Selected work" },
    experience: {
      title: "Experience",
      items: [
        { key: "belbim", org: "BELBİM", role: "Software Development Specialist", period: "2025 – present" },
        { key: "eribitech", org: "Eribitech", role: "Founder", period: "2025 – present" },
        { key: "igdas", org: "İGDAŞ", role: "Software Developer", period: "2023 – 2025" },
        { key: "tiramisu", org: "Tiramisu Studios", role: "Game Developer", period: "2022 – 2023" },
      ],
    },
    stack: { title: "Stack" },
    cta: { title: "Hiring, or have a project?", text: "A short message is enough." },
  },
};

// Same list in both languages.
export const HOME_STACK = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "GitHub Actions",
  "Claude Code",
];

export default home;
