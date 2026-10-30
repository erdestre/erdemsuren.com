// Case studies (master plan §B.2, §B.3, §F.3) for the final set of ten slugs, TR and EN.
// Every fact is traceable to discovery/fact-sheet.md or the owner decisions; unknown → omitted. Rules:
// - `slug` is the same ASCII slug in both languages and never changes once published.
// - Links only to sites that returned HTTP 200 on 2026-10-29 (eribitech.com, growth., creative., darkpost.com.tr,
//   olserbilisim.com, the two Drift Max Google Play pages) or on 2026-10-30 (belbim.istanbul,
//   istanbulkart.istanbul). Never link code repositories.
// - No customer, revenue or usage numbers. Co-developers stay unnamed. Employer work: no internal screens or
//   confidential details; only public pages (the BELBİM sites' home pages) are shown.
// - `group` = index section (own | employer | client). `type` = badge (product | practice | employer | team |
//   client | prototype). `status` "live" adds the lime "Live" badge; `statusText` is the visible status line.
// - `image` = key in src/content/projectImages.js (real screenshots, October 2026) for the card cover, or null →
//   typographic `cover`. The case-study screens are in projectDetails.js.
// - `liveUrl` = the live site (the card cover's site). `liveUrls` (optional) = every live site, in order, when a case
//   study covers several (BELBİM); `liveUrl` is then the first one.
// - `links` is optional (extra external links; otherwise the case study links its live site or sites).
// - `featured` marks the three Home picks (Eribi, BELBİM, AI-native delivery; FEATURED_SLUGS in home.js).
// - This module holds the card-level fields only: it is in the main bundle (routes, <Seo>, cards). The long
//   case-study copy (context, what I did, outcome, screenshot alt and caption) is in projectDetails.js, which only
//   the case-study page loads.

import { PROJECT_SLUGS } from "./projectSlugs.js";

export { PROJECT_SLUGS };

export const PROJECTS = [
  {
    slug: "eribi",
    group: "own",
    type: "product",
    org: "Eribitech",
    status: "live",
    featured: true,
    liveUrl: "https://eribitech.com",
    image: "eribi",
    stack: [
      ".NET 8",
      "Next.js",
      "PostgreSQL 17",
      "YARP",
      "Hangfire",
      "EF Core 9",
      "ASP.NET Core",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Cloudflare",
      "IIS",
      "GitHub Actions",
    ],
    title: {
      tr: "Eribi: çok kiracılı e-ticaret platformu",
      en: "Eribi: multi-tenant e-commerce platform",
    },
    summary: {
      tr: "Dijital ajansların kendi müşterileri için tek panelden çevrimiçi mağaza açıp yönetebileceği çok kiracılı bir e-ticaret altyapısı. Kurucusu olduğum Eribitech'in ana ürünü.",
      en: "A multi-tenant e-commerce platform built for digital agencies to launch and run online stores for their clients from one panel. The main product of Eribitech, the company I founded.",
    },
    outcomeLine: {
      tr: "Test ve canlı ortamda çalışıyor; DIA ERP entegrasyonu Eylül 2026'dan beri canlıda.",
      en: "Runs in test and production; the integration with DIA (a Turkish ERP) has been live since September 2026.",
    },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    role: {
      tr: "Kurucu; mimari, backend, arayüzler ve altyapı",
      en: "Founder; architecture, back end, front ends and infrastructure",
    },
    statusText: { tr: "Test ve canlı ortamda çalışıyor", en: "Running in test and production" },
  },
  {
    slug: "ai-native-delivery",
    group: "own",
    type: "practice",
    org: "Eribitech",
    status: "active",
    featured: true,
    liveUrl: null,
    image: null,
    cover: {
      kicker: { tr: "Eribitech · 2025 – Günümüz", en: "Eribitech · 2025 – present" },
      label: { tr: "Ajanlarla geliştirme", en: "AI-native delivery" },
      flow: { tr: "görev → ajan → test → CI → canlı", en: "task → agent → tests → CI → prod" },
      ai: true,
    },
    stack: [
      "Claude Code",
      "GitHub Actions",
      "PowerShell",
      "IIS",
      "PM2",
      "Cloudflare",
      "PostgreSQL 17",
      "Windows Server",
      "ARR / URL Rewrite",
      "xUnit",
      "Vitest",
    ],
    title: {
      tr: "Yapay zekâ ajanlarıyla geliştirme ve kendi altyapım",
      en: "AI-native delivery on my own servers",
    },
    summary: {
      tr: "20'yi aşkın uygulamadan oluşan Eribi ekosistemini yapay zekâ kod ajanlarıyla geliştiriyor ve kendi sunucularımda işletiyorum. Bu vaka çalışması, ajanların güvenle çalışabilmesi için kurduğum ortamı anlatıyor.",
      en: "I build the Eribi ecosystem, more than 20 applications, with AI coding agents and run it on my own servers. This case study covers the environment I set up so the agents can work safely.",
    },
    outcomeLine: {
      tr: "20'yi aşkın uygulama ayrı test ve canlı sunucularda, otomatik dağıtımla çalışıyor.",
      en: "More than 20 applications run on separate test and production servers with automated deploys.",
    },
    period: { tr: "2025 – Günümüz", en: "2025 – present" },
    role: { tr: "Tasarım, kurulum ve işletim", en: "Owner and operator" },
    statusText: { tr: "Kullanımda", en: "In use" },
  },
  {
    slug: "eribi-growth",
    group: "own",
    type: "product",
    org: "Eribitech",
    status: "live",
    liveUrl: "https://growth.eribitech.com",
    image: "eribi-growth",
    stack: [".NET 8", "Next.js 15", "PostgreSQL 17", "Anthropic Claude", "Hangfire", "EF Core", "MailKit", "React 19"],
    title: {
      tr: "Eribi Growth: müşteri bulma ve site analizi",
      en: "Eribi Growth: lead discovery and site analysis",
    },
    summary: {
      tr: "Ajansların yeni müşteri bulmasına yardımcı olan araç: sektöre ve şehre göre firma bulma, adayın web sitesini analiz etme, yapay zekâyla hazırlanan rapor ve ilk e-posta.",
      en: "A tool that helps agencies find new clients: companies by sector and city, an analysis of each lead's website, and AI-written reports and first emails.",
    },
    outcomeLine: {
      tr: "Firma bulma, site analizi ve yapay zekâyla ilk e-posta tek panelde.",
      en: "Lead search, site analysis and an AI-written first email in one panel.",
    },
    period: { tr: "Mayıs 2026 – Günümüz", en: "May 2026 – present" },
    role: { tr: "Ana geliştirici; backend ve arayüz", en: "Primary developer; back end and UI" },
    statusText: { tr: "Yayında", en: "Live" },
  },
  {
    slug: "eribi-creative",
    group: "own",
    type: "product",
    org: "Eribitech",
    status: "live",
    liveUrl: "https://creative.eribitech.com",
    image: "eribi-creative",
    stack: [".NET 8", "Next.js 15", "fal.ai", "PostgreSQL", "Hangfire", "EF Core", "SkiaSharp", "Radix UI", "TanStack Query"],
    title: {
      tr: "Eribi Creative: yapay zekâ medya stüdyosu",
      en: "Eribi Creative: AI media studio",
    },
    summary: {
      tr: "Ajansların yapay zekâ modelleriyle görsel, video ve ses üretebildiği web stüdyosu. Her üretim haftalık kullanım hakkından düşülüyor; sonuçlar ortak bir medya kütüphanesinde duruyor.",
      en: "A web studio where agencies can generate images, video and audio with AI models. Each generation counts against a weekly allowance, and the results live in a shared media library.",
    },
    outcomeLine: {
      tr: "Görsel, video ve ses üretimi; haftalık kullanım hakkı ve ortak medya kütüphanesi.",
      en: "Image, video and audio generation, with weekly allowances and a shared media library.",
    },
    period: { tr: "Eylül 2026 – Günümüz", en: "Sep 2026 – present" },
    role: { tr: "Tek geliştirici", en: "Sole developer" },
    statusText: { tr: "Yayında", en: "Live" },
  },
  {
    // The slug stays "belbim-headless-cms" so published links keep working; the case study now covers the two
    // corporate websites built on that headless CMS and his place in the İstanbulkart mobile app team.
    slug: "belbim-headless-cms",
    group: "employer",
    type: "employer",
    org: "BELBİM",
    status: "live",
    featured: true,
    liveUrl: "https://belbim.istanbul",
    liveUrls: ["https://belbim.istanbul", "https://istanbulkart.istanbul"],
    image: "belbim",
    stack: ["C#", ".NET", "Umbraco", "Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "LDAP / Active Directory"],
    title: {
      tr: "BELBİM: belbim.istanbul ve istanbulkart.istanbul",
      en: "BELBİM: belbim.istanbul and istanbulkart.istanbul",
    },
    summary: {
      tr: "BELBİM'de belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim. İstanbulkart mobil uygulamasını geliştiren ekipte de yer alıyorum.",
      en: "At BELBİM I built the corporate websites belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15. I am also part of the team developing the İstanbulkart mobile app.",
    },
    outcomeLine: {
      tr: "İki kurumsal site de yayında; İstanbulkart mobil uygulamasını geliştiren ekipte de yer alıyorum.",
      en: "Both corporate websites are live, and I am part of the team developing the İstanbulkart mobile app.",
    },
    period: { tr: "Temmuz 2025 – Günümüz", en: "Jul 2025 – present" },
    role: { tr: "Uzman Yazılım Geliştirici", en: "Software Development Specialist" },
    statusText: { tr: "İki site de yayında", en: "Both sites are live" },
  },
  {
    slug: "igdas-field-operations",
    group: "employer",
    type: "employer",
    org: "İGDAŞ",
    status: "ended",
    liveUrl: null,
    image: null,
    cover: {
      kicker: "İGDAŞ · 2023–2025",
      label: { tr: "Saha operasyonları", en: "Field operations" },
      flow: { tr: "talep → atama → uygulama → rapor", en: "intake → assign → execute → report" },
    },
    stack: ["C#", "ASP.NET", "React", "SQL Server", "SAP S/4HANA", "Active Directory"],
    title: {
      tr: "İGDAŞ: saha operasyonları otomasyonu",
      en: "İGDAŞ: field operations automation",
    },
    summary: {
      tr: "İGDAŞ'ta dört kurumsal sistemde görev aldım. En çok, saha ekiplerinin 7/24 kullandığı Operasyon Otomasyon Platformu'nun iş akışları, planlaması, stok yönetimi ve SAP entegrasyonu üzerinde çalıştım.",
      en: "At İGDAŞ I worked on four enterprise systems, mainly the Operations Automation Platform that field teams use around the clock: workflows, scheduling, inventory and the SAP integration.",
    },
    outcomeLine: {
      tr: "Saha ekiplerinin 7/24 kullandığı platformda iş akışları, planlama, stok ve SAP entegrasyonu.",
      en: "Workflows, scheduling, inventory and SAP integration on a platform field teams use around the clock.",
    },
    period: { tr: "Aralık 2023 – Temmuz 2025", en: "Dec 2023 – Jul 2025" },
    role: {
      tr: "Yazılım Geliştirici (full-stack: ASP.NET, React, SQL Server)",
      en: "Software Developer (full stack: ASP.NET, React, SQL Server)",
    },
    statusText: { tr: "Rolüm Temmuz 2025'te sona erdi", en: "My role ended in July 2025" },
  },
  {
    slug: "drift-max",
    group: "employer",
    type: "team",
    org: "Tiramisu Studios",
    status: "ended",
    liveUrl: null,
    image: null,
    cover: {
      kicker: "Tiramisu Studios · 2022–2023",
      label: "Drift Max",
      flow: { tr: "Unity · C# · performans", en: "Unity · C# · performance" },
    },
    links: [
      { href: "https://play.google.com/store/apps/details?id=com.tiramisu.driftmax2", label: "Drift Max Pro · Google Play" },
      {
        href: "https://play.google.com/store/apps/details?id=tr.com.tiramisu.driftmaxcity",
        label: "Drift Max City · Google Play",
      },
    ],
    stack: ["Unity", "C#"],
    title: {
      tr: "Drift Max: mobil yarış oyunlarında performans",
      en: "Drift Max: performance work on mobile racing games",
    },
    summary: {
      tr: "Tiramisu Studios'ta, stüdyonun mobil yarış oyunları Drift Max Pro ve Drift Max City'nin çekirdek sistemlerinde ekibin bir parçası olarak çalıştım: trafik sistemi, editör araçları ve harita performansı.",
      en: "At Tiramisu Studios I worked as part of the team on the core systems of the studio's mobile racing games Drift Max Pro and Drift Max City: the traffic system, editor tools and map performance.",
    },
    outcomeLine: {
      tr: "Ekip işi. Stüdyonun verilerine göre Drift Max Pro 120 milyonu, Drift Max City 25 milyonu aşkın kez indirildi.",
      en: "Team work. Per the studio, Drift Max Pro has 120M+ downloads and Drift Max City 25M+.",
    },
    period: { tr: "Eylül 2022 – Temmuz 2023", en: "Sep 2022 – Jul 2023" },
    role: { tr: "Oyun Geliştirici (Unity, C#); öncesinde stajyer", en: "Game Developer (Unity, C#); intern before that" },
    statusText: { tr: "Oyunlar Google Play'de yayında", en: "The games are live on Google Play" },
  },
  {
    slug: "darkpost",
    group: "client",
    type: "client",
    org: "DarkPost Agency",
    status: "live",
    liveUrl: "https://darkpost.com.tr",
    image: "darkpost",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "zod", "IIS", "PM2"],
    title: {
      tr: "DarkPost Agency kurumsal web sitesi",
      en: "DarkPost Agency website",
    },
    summary: {
      tr: "Pazarlama ve e-ticaret ajansı DarkPost Agency için kurumsal web sitesi: hizmet ve paket sayfaları, canlı paket listesi ve tek sayfalık mağaza başvuru formu.",
      en: "Company website for DarkPost Agency, a marketing and e-commerce agency: service and package pages, a live package list and a one-page store application form.",
    },
    outcomeLine: {
      tr: "Müşteri geri bildirimiyle başvuru formu 22 alandan 10 alana indi.",
      en: "After client feedback, the application form went from 22 fields to 10.",
    },
    period: { tr: "Ağustos – Eylül 2026", en: "Aug – Sep 2026" },
    role: { tr: "Tek geliştirici, tasarımdan yayına", en: "Sole developer, from design to launch" },
    statusText: { tr: "Yayında", en: "Live" },
  },
  {
    slug: "olser-bilisim",
    group: "client",
    type: "client",
    org: "Olser Bilişim",
    status: "live",
    liveUrl: "https://olserbilisim.com",
    image: "olser",
    // The live site (olserbilisim.com) still runs the React/Vite build; the Next.js 16 rewrite is not deployed yet.
    stack: ["React 18", "Vite", "Tailwind CSS 4", ".NET 8", "Next.js 16"],
    title: {
      tr: "Olser Bilişim kurumsal web sitesi",
      en: "Olser Bilişim company website",
    },
    summary: {
      tr: "Mali müşavirlere ve finans sektörüne yazılım üreten Olser Bilişim için kurumsal web sitesi ve içerik yönetim paneli.",
      en: "Company website and content management panel for Olser Bilişim, a software firm serving accountants and the finance sector.",
    },
    outcomeLine: {
      tr: "Kurumsal site ve içerik paneli; yayındaki sürümü React/Vite ile geliştirdim, Next.js 16 ile yeniden yazdığım sürüm henüz yayında değil.",
      en: "Company site and content panel on React/Vite and a .NET 8 API; a Next.js 16 rewrite is not live yet.",
    },
    period: { tr: "Mayıs 2025 – Mayıs 2026", en: "May 2025 – May 2026" },
    role: { tr: "Tek geliştirici", en: "Sole developer" },
    statusText: { tr: "Yayında", en: "Live" },
  },
  {
    slug: "odis",
    group: "client",
    type: "prototype",
    org: null,
    status: "prototype",
    liveUrl: null,
    image: null,
    cover: {
      kicker: { tr: "Şubat 2026", en: "Feb 2026" },
      label: "ODİS",
      flow: { tr: "başvuru → inceleme → karar", en: "application → review → decision" },
    },
    stack: [
      ".NET 8",
      "Clean Architecture",
      "Next.js 16",
      "EF Core",
      "SQL Server",
      "ASP.NET Identity",
      "JWT",
      "TanStack Query",
      "zustand",
      "React Hook Form",
      "zod",
    ],
    title: {
      tr: "ODİS: yaş sınıflandırma iş akışı (prototip)",
      en: "ODİS: age-rating workflow (prototype)",
    },
    summary: {
      tr: "Oyun ve dijital içeriklerin yaşa göre sınıflandırılması için çok rollü bir iş akışı prototipi: başvuru ve beyan, kod ve oyun incelemesi, pedagojik değerlendirme ve hukuki karar.",
      en: "A prototype of a multi-role workflow for classifying games and digital content by age: application and declaration, code and game review, a pedagogical assessment and a legal decision.",
    },
    outcomeLine: {
      tr: "Başvurudan hukuki karara çok rollü bir iş akışı; iki haftada geliştirdim.",
      en: "A multi-role workflow from application to legal decision, built in two weeks.",
    },
    period: { tr: "Şubat 2026", en: "Feb 2026" },
    role: { tr: "Tek geliştirici", en: "Sole developer" },
    statusText: { tr: "Yayında değil", en: "Not live" },
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

// Index groups, in page order (§B.2).
export const PROJECT_GROUPS = ["own", "employer", "client"];

// Page copy for /projeler/ and /en/projects/, plus the labels and the end-of-page CTA (§B.5) of the case studies.
const projects = {
  tr: {
    eyebrow: "Vaka çalışmaları",
    heading: "Projeler",
    intro:
      "Kendi ürünlerim, işveren projelerim ve müşteri işlerim. Her vaka çalışmasında bağlamı, rolümü ve neler yaptığımı anlatıyorum.",
    groups: {
      own: {
        title: "Kendi ürünlerim",
        description:
          "Kurucusu olduğum Eribitech'in ürünleri ve onları geliştirip işlettiğim yapay zekâ destekli çalışma düzeni.",
      },
      employer: {
        title: "İşveren projeleri",
        description:
          "Çalıştığım şirketlerdeki projeler. Kurum içi ekranları ve gizli bilgileri paylaşmıyorum; mimariyi ve rolümü anlatıyorum.",
      },
      client: {
        title: "Müşteri ve diğer işler",
        description: "Müşterilerim için geliştirdiğim siteler ve bir prototip.",
      },
    },
    type: {
      product: "Kendi ürünüm",
      practice: "Çalışma düzenim",
      employer: "İşveren projesi",
      team: "İşveren · ekip işi",
      client: "Müşteri işi",
      prototype: "Prototip",
    },
    live: "Yayında",
    ai: "Yapay zekâ",
    // Card thumbnails (the detail page uses the full imageAlt). {host} = the live site's host name.
    shot: "{host} ana sayfasının ekran görüntüsü",
    labels: {
      caseStudy: "Vaka çalışması",
      type: "Tür",
      period: "Dönem",
      role: "Rolüm",
      status: "Durum",
      context: "Bağlam",
      did: "Neler yaptım",
      architecture: "Mimari",
      outcome: "Sonuç",
      stack: "Teknolojiler",
      screens: "Ekranlar",
      links: "Bağlantılar",
      next: "Sonraki vaka çalışması",
      moreCaseStudies: "Diğer vaka çalışmaları",
    },
    cta: {
      project: {
        title: "Benzer bir proje mi planlıyorsunuz?",
        text: "Ücretsiz bir ön görüşmede ihtiyacınızı konuşalım; ardından kapsama göre sabit, yazılı bir teklif hazırlarım.",
        button: "Konuşalım",
      },
      hire: {
        title: "Bu deneyimi ekibinize katmak ister misiniz?",
        text: "Deneyimimin tamamını, eğitimimi ve sertifikalarımı CV'mde bulabilirsiniz.",
        button: "CV'mi inceleyin",
      },
    },
  },
  en: {
    eyebrow: "Case studies",
    heading: "Projects",
    intro: "My own products, employer projects and client work. Each case study covers the context, my role and what I did.",
    groups: {
      own: {
        title: "My products",
        description: "Products of Eribitech, the company I founded, and the AI-native setup I use to build and run them.",
      },
      employer: {
        title: "Employer work",
        description:
          "Projects at companies I have worked for. I share no internal screens or confidential details; I describe the architecture and my role.",
      },
      client: {
        title: "Client and other work",
        description: "Websites I built for clients, and one prototype.",
      },
    },
    type: {
      product: "My product",
      practice: "Engineering practice",
      employer: "Employer project",
      team: "Employer · team work",
      client: "Client work",
      prototype: "Prototype",
    },
    live: "Live",
    ai: "AI",
    shot: "Screenshot of the {host} home page",
    labels: {
      caseStudy: "Case study",
      type: "Type",
      period: "Period",
      role: "My role",
      status: "Status",
      context: "Context",
      did: "What I did",
      architecture: "Architecture",
      outcome: "Outcome",
      stack: "Stack",
      screens: "Screens",
      links: "Links",
      next: "Next case study",
      moreCaseStudies: "More case studies",
    },
    cta: {
      project: {
        title: "Building something similar?",
        text: "Let's talk about what you need in a free intro call; after that I prepare a fixed written quote based on scope.",
        button: "Let's talk",
      },
      hire: {
        title: "Want this experience on your team?",
        text: "My CV has the full picture: roles, education and certifications.",
        button: "View my CV",
      },
    },
  },
};

export default projects;
