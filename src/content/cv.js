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
      "4 yıla yakın deneyim; 3 yılı İGDAŞ ve BELBİM'de kurumsal sistemlerde. Backend, frontend, mobil ve DevOps. Sunucuları kurdum, ağı yapılandırdım, yazılımı canlıya aldım. Eribitech'i kurdum: 3 ürünlü, mikroservis mimarili bir platform.",
    experienceTitle: "Deneyim",
    experience: [
      {
        org: "BELBİM",
        role: "Uzman Yazılım Geliştirici",
        period: "Tem 2025 – Günümüz",
        slug: "belbim-headless-cms",
        points: [
          "Headless CMS'i geliştirdim: modüler monolit, Clean Architecture.",
          "belbim.istanbul ve istanbulkart.istanbul'u geliştirdim: Next.js 15, SSG/ISR, TR/EN.",
          "Sunucuların Next.js yapılandırmasını yaptım.",
          "İstanbulkart mobil backend: sürüm tabanlı içerik senkronizasyonu. RabbitMQ, Redis, Hangfire.",
          "İstanbulkart mobil uygulamasının entegrasyonlarını bağladım, güncellemelerini geliştirdim.",
          "FluentValidation, LDAP / Active Directory. Şu anda DevOps sistemini kuruyorum.",
        ],
      },
      {
        org: "Eribitech",
        role: "Kurucu",
        period: "2025 – Günümüz",
        slug: "eribi",
        points: [
          "Eribi'yi kurdum: e-ticaret, Eribi Growth, Eribi Creative. 3 ürün, tek platform.",
          "Mikroservis mimarisi: YARP API gateway arkasında 9 servis. .NET 8, Next.js, TanStack Query.",
          "Çok kiracılı yapı: kiracı başına veritabanı, otomatik mağaza kurulumu (DNS, SSL, IIS).",
          "Ödeme, e-fatura, kargo, pazaryeri ve ERP entegrasyonları.",
          "SQL Server'dan PostgreSQL 17'ye taşıdım. Boştaki bellek %72'den %60'a indi.",
          "Test ve canlı sunucuları kurdum: Windows Server, IIS, Cloudflare. 100+ GitHub Actions iş akışı.",
        ],
      },
      {
        org: "İGDAŞ",
        role: "Yazılım Geliştirici",
        period: "Ara 2023 – Tem 2025",
        slug: "igdas-field-operations",
        points: [
          "Operasyon Otomasyon Sistemi'ni geliştirdim: saha ekipleri 7/24 kullanıyor.",
          "Durum makinesi iş akışları, kural tabanlı planlama, tutarlı stok akışları.",
          "SAP S/4HANA entegrasyonu: senkronizasyon, doğrulama, yeniden deneme, hata kurtarma.",
          "Tıbbi Malzeme Takip (TMT) uygulamasını geliştirdim: revir randevusu, malzeme takibi.",
          "Active Directory kimlik doğrulama. Veri yoğun SQL raporları. KVKK denetimi.",
        ],
      },
      {
        org: "Tiramisu Studios",
        role: "Oyun Geliştirici",
        period: "Ara 2022 – Tem 2023",
        points: [
          "Drift Max Pro (120M+ indirme) ve Drift Max City (25M+ indirme): Unity, C#.",
          "Object pooling ile trafik sistemi. Unity editör araçları. Occlusion culling ile daha az GPU yükü.",
        ],
      },
      {
        org: "Perspactive Studios",
        role: "Kurucu",
        period: "Mar 2021 – Eyl 2022",
        points: ["10+ kişilik oyun ekibini kurdum ve yönettim. Unity, C#."],
      },
    ],
    skillsTitle: "Yetkinlikler",
    skills: [
      { label: "Backend", items: "C#, .NET 8, ASP.NET Core, EF Core, Hangfire, RabbitMQ, Redis, FluentValidation" },
      { label: "Mimari", items: "Mikroservis, modüler monolit, Clean Architecture, YARP, Umbraco (headless), durum makineleri" },
      { label: "Frontend ve mobil", items: "React, Next.js, TypeScript, TanStack Query, Tailwind CSS, React Native, Expo" },
      { label: "Veri", items: "SQL Server (T-SQL), PostgreSQL, Redis" },
      { label: "DevOps", items: "GitHub Actions, IIS, Windows Server, Cloudflare, PowerShell, PM2, ağ yapılandırması" },
      { label: "Entegrasyon", items: "SAP S/4HANA, Active Directory / LDAP, ödeme, e-fatura, kargo, pazaryeri, ERP" },
      { label: "Test ve araçlar", items: "xUnit, Moq, FluentAssertions, Vitest, Git, Claude Code" },
    ],
    educationTitle: "Eğitim ve diller",
    education: { school: "Bahçeşehir Üniversitesi", degree: "Bilgisayar Mühendisliği (İngilizce)", period: "2017 – 2022" },
    extra: "Sertifika: C# ve ASP.NET Core MVC, 260 saat (2024). Türkçe (ana dil) · İngilizce (iş düzeyi).",
  },
  en: {
    heading: "CV",
    intro: "One page. Also available as a PDF.",
    pdf: { tr: "PDF (Turkish)", en: "PDF (English)" },
    summaryTitle: "Summary",
    summary:
      "Almost 4 years of experience; 3 on enterprise systems at İGDAŞ and BELBİM. Back end, front end, mobile, DevOps. I set up servers, configured networks and shipped to production. Founder of Eribitech: a three-product microservice platform.",
    experienceTitle: "Experience",
    experience: [
      {
        org: "BELBİM",
        role: "Software Development Specialist",
        period: "Jul 2025 – Present",
        slug: "belbim-headless-cms",
        points: [
          "Built the headless CMS: modular monolith, Clean Architecture.",
          "Built belbim.istanbul and istanbulkart.istanbul: Next.js 15, SSG/ISR, TR/EN.",
          "Configured Next.js on the servers.",
          "İstanbulkart mobile back end: version-based content synchronization. RabbitMQ, Redis, Hangfire.",
          "Connected the İstanbulkart mobile app's integrations and built its updates.",
          "FluentValidation, LDAP / Active Directory. Now building the DevOps system.",
        ],
      },
      {
        org: "Eribitech",
        role: "Founder",
        period: "2025 – Present",
        slug: "eribi",
        points: [
          "Built Eribi: e-commerce, Eribi Growth, Eribi Creative. Three products, one platform.",
          "Microservice architecture: 9 services behind a YARP API gateway. .NET 8, Next.js, TanStack Query.",
          "Multi-tenant: database per tenant, automated store setup (DNS, SSL, IIS).",
          "Payment, e-invoice, shipping, marketplace and ERP integrations.",
          "Migrated from SQL Server to PostgreSQL 17. Idle memory cut from 72% to 60%.",
          "Set up the test and production servers: Windows Server, IIS, Cloudflare. 100+ GitHub Actions workflows.",
        ],
      },
      {
        org: "İGDAŞ",
        role: "Software Developer",
        period: "Dec 2023 – Jul 2025",
        slug: "igdas-field-operations",
        points: [
          "Built the Operations Automation System that field teams use 24/7.",
          "State-machine workflows, rule-based scheduling, consistent inventory flows.",
          "SAP S/4HANA integration: sync, validation, retries, failure recovery.",
          "Built the Medical Supply Tracking (TMT) app: infirmary appointments, supply tracking.",
          "Active Directory authentication. Data-heavy SQL reports. KVKK audit.",
        ],
      },
      {
        org: "Tiramisu Studios",
        role: "Game Developer",
        period: "Dec 2022 – Jul 2023",
        points: [
          "Drift Max Pro (120M+ downloads) and Drift Max City (25M+ downloads): Unity, C#.",
          "Traffic system with object pooling. Unity editor tools. Less GPU load with occlusion culling.",
        ],
      },
      {
        org: "Perspactive Studios",
        role: "Founder",
        period: "Mar 2021 – Sep 2022",
        points: ["Built and led a game team of 10+. Unity, C#."],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { label: "Back end", items: "C#, .NET 8, ASP.NET Core, EF Core, Hangfire, RabbitMQ, Redis, FluentValidation" },
      { label: "Architecture", items: "Microservices, modular monolith, Clean Architecture, YARP, Umbraco (headless), state machines" },
      { label: "Front end and mobile", items: "React, Next.js, TypeScript, TanStack Query, Tailwind CSS, React Native, Expo" },
      { label: "Data", items: "SQL Server (T-SQL), PostgreSQL, Redis" },
      { label: "DevOps", items: "GitHub Actions, IIS, Windows Server, Cloudflare, PowerShell, PM2, network configuration" },
      { label: "Integrations", items: "SAP S/4HANA, Active Directory / LDAP, payment, e-invoice, shipping, marketplaces, ERP" },
      { label: "Testing and tools", items: "xUnit, Moq, FluentAssertions, Vitest, Git, Claude Code" },
    ],
    educationTitle: "Education and languages",
    education: { school: "Bahçeşehir University", degree: "BSc Computer Engineering (English-medium)", period: "2017 – 2022" },
    extra: "Certificate: C# and ASP.NET Core MVC, 260 h (2024). Turkish (native) · English (professional).",
  },
};

export default cv;
