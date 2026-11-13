// CV page: the same text as the one-page PDFs in public/files/.
// No phone number on the web CV. `slug` links an entry to its project page.

export const CV_PDF = {
  tr: "/files/erdem-suren-cv-tr.pdf",
  en: "/files/erdem-suren-cv-en.pdf",
};

const cv = {
  tr: {
    heading: "CV",
    intro: "Tek sayfa. PDF olarak da indirebilirsiniz.",
    pdf: { tr: "PDF (Türkçe)", en: "PDF (İngilizce)" },
    summaryTitle: "Özet",
    summary:
      "3+ yıl profesyonel deneyim. .NET, React/Next.js ve SQL ile uçtan uca iş yazılımı. Yapay zekâ ajanlarıyla çalışıyorum (Claude Code); mimari, inceleme ve yayın bende.",
    experienceTitle: "Deneyim",
    experience: [
      {
        org: "BELBİM",
        role: "Uzman Yazılım Geliştirici",
        period: "Tem 2025 – Günümüz",
        slug: "belbim-headless-cms",
        points: [
          "belbim.istanbul ve istanbulkart.istanbul: Umbraco headless CMS, Next.js 15.",
          "Eski CMS'i Clean Architecture ile yeniden kuruyorum.",
          "LDAP / Active Directory ile kimlik doğrulama.",
          "İstanbulkart mobil uygulama ekibindeyim.",
        ],
      },
      {
        org: "Eribitech",
        role: "Kurucu",
        period: "2025 – Günümüz",
        slug: "eribi",
        points: [
          "Eribi: ajanslar için çok kiracılı e-ticaret platformu.",
          ".NET 8, Next.js, PostgreSQL 17. YARP arkasında 9 servis.",
          "Ödeme, e-fatura, kargo, pazaryeri ve ERP entegrasyonları.",
          "100+ GitHub Actions iş akışı. Ayrı test ve canlı sunucu.",
          "Yapay zekâ ürünleri: Eribi Growth, Eribi Creative.",
        ],
      },
      {
        org: "İGDAŞ",
        role: "Yazılım Geliştirici",
        period: "Ara 2023 – Tem 2025",
        slug: "igdas-field-operations",
        points: [
          "7/24 saha operasyon platformu: C#, ASP.NET, React, SQL Server.",
          "Durum makinesi iş akışları, planlama, stok akışları.",
          "SAP S/4HANA ve Active Directory entegrasyonları.",
        ],
      },
      {
        org: "Tiramisu Studios",
        role: "Oyun Geliştirici",
        period: "Ara 2022 – Tem 2023",
        points: ["Drift Max Pro (120M+ indirme) ve Drift Max City: Unity, C#."],
      },
    ],
    clientsTitle: "Müşteri işleri",
    clients: [
      { name: "DarkPost Agency", text: "Kurumsal site. Next.js 16.", slug: "darkpost" },
      { name: "Olser Bilişim", text: "Site ve yönetim paneli. React, .NET 8.", slug: "olser-bilisim" },
    ],
    skillsTitle: "Yetkinlikler",
    skills: [
      { label: "Backend", items: "C#, .NET 8, ASP.NET Core, Entity Framework Core, Hangfire" },
      { label: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS" },
      { label: "Veri", items: "SQL Server (T-SQL), PostgreSQL" },
      { label: "DevOps", items: "GitHub Actions, IIS, Cloudflare, Windows Server, Git" },
      { label: "Yapay zekâ", items: "Claude Code, Claude API, Gemini, fal.ai" },
      { label: "Test", items: "xUnit, Moq, Vitest" },
    ],
    educationTitle: "Eğitim",
    education: { school: "Bahçeşehir Üniversitesi", degree: "Bilgisayar Mühendisliği (İngilizce)", period: "2017 – 2022" },
    languagesTitle: "Diller",
    languages: "Türkçe (ana dil) · İngilizce (iş düzeyi)",
  },
  en: {
    heading: "CV",
    intro: "One page. Also available as a PDF.",
    pdf: { tr: "PDF (Turkish)", en: "PDF (English)" },
    summaryTitle: "Summary",
    summary:
      "3+ years of professional experience. Business software end to end with .NET, React/Next.js and SQL. I work with AI coding agents (Claude Code); I own the architecture, the review and the release.",
    experienceTitle: "Experience",
    experience: [
      {
        org: "BELBİM",
        role: "Software Development Specialist",
        period: "Jul 2025 – Present",
        slug: "belbim-headless-cms",
        points: [
          "belbim.istanbul and istanbulkart.istanbul: Umbraco headless CMS, Next.js 15.",
          "Rebuilding the legacy CMS with Clean Architecture.",
          "LDAP / Active Directory authentication.",
          "On the İstanbulkart mobile app team.",
        ],
      },
      {
        org: "Eribitech",
        role: "Founder",
        period: "2025 – Present",
        slug: "eribi",
        points: [
          "Eribi: multi-tenant e-commerce platform for agencies.",
          ".NET 8, Next.js, PostgreSQL 17. 9 services behind YARP.",
          "Payment, e-invoice, shipping, marketplace and ERP integrations.",
          "100+ GitHub Actions workflows. Separate test and production servers.",
          "AI products: Eribi Growth, Eribi Creative.",
        ],
      },
      {
        org: "İGDAŞ",
        role: "Software Developer",
        period: "Dec 2023 – Jul 2025",
        slug: "igdas-field-operations",
        points: [
          "24/7 field operations platform: C#, ASP.NET, React, SQL Server.",
          "State-machine workflows, scheduling, inventory flows.",
          "SAP S/4HANA and Active Directory integrations.",
        ],
      },
      {
        org: "Tiramisu Studios",
        role: "Game Developer",
        period: "Dec 2022 – Jul 2023",
        points: ["Drift Max Pro (120M+ downloads) and Drift Max City: Unity, C#."],
      },
    ],
    clientsTitle: "Client work",
    clients: [
      { name: "DarkPost Agency", text: "Company website. Next.js 16.", slug: "darkpost" },
      { name: "Olser Bilişim", text: "Website and admin panel. React, .NET 8.", slug: "olser-bilisim" },
    ],
    skillsTitle: "Skills",
    skills: [
      { label: "Back end", items: "C#, .NET 8, ASP.NET Core, Entity Framework Core, Hangfire" },
      { label: "Front end", items: "React, Next.js, TypeScript, Tailwind CSS" },
      { label: "Data", items: "SQL Server (T-SQL), PostgreSQL" },
      { label: "DevOps", items: "GitHub Actions, IIS, Cloudflare, Windows Server, Git" },
      { label: "AI", items: "Claude Code, Claude API, Gemini, fal.ai" },
      { label: "Testing", items: "xUnit, Moq, Vitest" },
    ],
    educationTitle: "Education",
    education: { school: "Bahçeşehir University", degree: "BSc Computer Engineering (English-medium)", period: "2017 – 2022" },
    languagesTitle: "Languages",
    languages: "Turkish (native) · English (professional working proficiency)",
  },
};

export default cv;
