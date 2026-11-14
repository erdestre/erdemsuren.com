// Home page copy (/ and /en/). Name, title, stack and focus come from common.js; featured projects from projects.js.

const home = {
  tr: {
    lead: [
      "Sistemleri uçtan uca kurdum: mimari, backend, web, mobil, sunucu.",
      "BELBİM'de headless CMS'i, belbim.istanbul ve istanbulkart.istanbul'u geliştirdim.",
      "İstanbulkart mobil (React Native): entegrasyonları bağladım, güncellemeleri geliştirdim.",
      "Eribitech'i kurdum: üç ürünlü, mikroservis mimarili bir platform.",
      "Şu anda BELBİM'in DevOps sistemini kuruyorum.",
    ],
    // Accessible name of the animated system map in the hero.
    mapLabel:
      "Kurduğum sistemlerin şeması: React Native ve Next.js istemcileri, YARP gateway, .NET servisleri, RabbitMQ, Redis ve PostgreSQL; GitHub Actions ile IIS ve Cloudflare'a yayın.",
    map: { services: ".NET servisleri", deploy: "yayın", window: "sistem haritası" },
    stats: {
      label: "Rakamlarla",
      items: [
        { value: 5, suffix: " yıl", label: "yazılım deneyimi" },
        { value: 9, suffix: "M", label: "İstanbulkart'la günlük yolculuk" },
        { text: "7/24", label: "İGDAŞ 187 Doğalgaz Acil iş emirleri" },
        { value: 120, suffix: "M+", label: "Drift Max Pro indirmesi" },
        { value: 9, suffix: "", label: "mikroservis, YARP arkasında" },
        { value: 100, suffix: "+", label: "CI/CD iş akışı" },
      ],
    },
    work: { title: "Öne çıkan işler" },
    layers: {
      title: "Uçtan uca sistem",
      text: "Mimariden canlıya kadar her katmanı kurdum.",
      items: [
        {
          key: "architecture",
          title: "Mimari",
          tags: ["Mikroservis", "Modüler monolit", "Clean Architecture", "YARP gateway", "Çok kiracılı yapı"],
        },
        {
          key: "backend",
          title: "Backend ve veri",
          tags: [".NET 8", "ASP.NET Core", "EF Core", "RabbitMQ", "Redis", "Hangfire", "FluentValidation", "SQL Server", "PostgreSQL"],
        },
        {
          key: "client",
          title: "Mobil ve web",
          tags: ["React Native", "Expo", "Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS"],
        },
        {
          key: "ops",
          title: "DevOps ve altyapı",
          tags: ["GitHub Actions", "Windows Server", "IIS", "Cloudflare", "Ağ yapılandırması", "PowerShell"],
        },
      ],
    },
    experience: {
      title: "Deneyim",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Uzman Yazılım Geliştirici",
          period: "2025 – Günümüz",
          text: "Headless CMS, iki kurumsal site, İstanbulkart mobil (React Native) ve backend'i, DevOps.",
        },
        {
          key: "eribitech",
          org: "Eribitech",
          role: "Kurucu",
          period: "2025 – Günümüz",
          text: "Eribi: e-ticaret, Growth, Creative. Mikroservis mimarisi, kendi sunucularım.",
        },
        {
          key: "igdas",
          org: "İGDAŞ",
          role: "Yazılım Geliştirici",
          period: "2023 – 2025",
          text: "Operasyon Otomasyon Sistemi (187 Doğalgaz Acil, 7/24), Tıbbi Malzeme Takip, SAP entegrasyonu.",
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
    cta: { title: "Bir pozisyon mu var?", text: "Kısa bir mesaj yeter." },
  },
  en: {
    lead: [
      "Systems built end to end: architecture, back end, web, mobile, servers.",
      "At BELBİM I built the headless CMS, belbim.istanbul and istanbulkart.istanbul.",
      "İstanbulkart mobile (React Native): connected the integrations, built the updates.",
      "Founded Eribitech: a three-product platform on a microservice architecture.",
      "Now building BELBİM's DevOps system.",
    ],
    mapLabel:
      "Map of the systems I build: React Native and Next.js clients, a YARP gateway, .NET services, RabbitMQ, Redis and PostgreSQL; delivery with GitHub Actions to IIS and Cloudflare.",
    map: { services: ".NET services", deploy: "deploy", window: "system map" },
    stats: {
      label: "In numbers",
      items: [
        { value: 5, suffix: " years", label: "of software development" },
        { value: 9, suffix: "M", label: "daily trips on İstanbulkart" },
        { text: "24/7", label: "İGDAŞ 187 gas-emergency work orders" },
        { value: 120, suffix: "M+", label: "Drift Max Pro downloads" },
        { value: 9, suffix: "", label: "microservices behind YARP" },
        { value: 100, suffix: "+", label: "CI/CD workflows" },
      ],
    },
    work: { title: "Selected work" },
    layers: {
      title: "End-to-end systems",
      text: "From architecture to production, I built every layer.",
      items: [
        {
          key: "architecture",
          title: "Architecture",
          tags: ["Microservices", "Modular monolith", "Clean Architecture", "YARP gateway", "Multi-tenancy"],
        },
        {
          key: "backend",
          title: "Back end and data",
          tags: [".NET 8", "ASP.NET Core", "EF Core", "RabbitMQ", "Redis", "Hangfire", "FluentValidation", "SQL Server", "PostgreSQL"],
        },
        {
          key: "client",
          title: "Mobile and web",
          tags: ["React Native", "Expo", "Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS"],
        },
        {
          key: "ops",
          title: "DevOps and infrastructure",
          tags: ["GitHub Actions", "Windows Server", "IIS", "Cloudflare", "Networking", "PowerShell"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Software Development Specialist",
          period: "2025 – present",
          text: "Headless CMS, two corporate websites, İstanbulkart mobile (React Native) and its back end, DevOps.",
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
          text: "Operations Automation System (187 gas emergency, 24/7), Medical Supply Tracking, SAP integration.",
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
    cta: { title: "Hiring?", text: "A short message is enough." },
  },
};

export default home;
