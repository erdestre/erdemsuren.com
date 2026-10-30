// CV page: the HTML résumé. The text mirrors the PDF editions in public/files/ (sources:
// scratchpad/deliverables/cv/src/erdem-suren-cv-{tr,en}.html, facts and sources in deliverables/cv/NOTES.md §4),
// with the owner decisions of 2026-10-29 on top: Eribitech "2025 – Günümüz" / "2025 – present" (no month); every
// other date is the fact-sheet default (discovery/fact-sheet.md §2.1, C5, C7). No phone number on the web CV.
// Case-study links are slugs; CV.jsx renders a link only when the slug exists in the route table.
// BELBİM bullets (2026-10-30): the two public sites, the Clean Architecture and LDAP / Active Directory bullets, then
// the İstanbulkart mobile app team; the same four, in the same order, as the PDF sources.

// Public PDF editions (web editions, without the phone number).
export const CV_PDF = {
  tr: "/files/erdem-suren-cv-tr.pdf",
  en: "/files/erdem-suren-cv-en.pdf",
};

const cv = {
  tr: {
    updated: "Son güncelleme: Ekim 2026",
    heading: "Özgeçmiş",
    intro:
      "Deneyimimi, projelerimi ve yetkinliklerimi bu sayfada bulabilirsiniz. Türkçe ya da İngilizce PDF sürümünü indirebilir veya sayfayı yazdırabilirsiniz.",
    pdf: { tr: "PDF indir (Türkçe)", en: "PDF indir (İngilizce)" },
    print: "Yazdır / PDF olarak kaydet",
    caseStudy: "Vaka çalışması",
    caseStudies: "Vaka çalışmaları",

    summaryHeading: "Özet",
    summary: [
      "3 yılı aşkın profesyonel deneyime sahip bir full-stack yazılım mühendisiyim; son 3 yıla yakın süreyi İGDAŞ ve BELBİM'de kurumsal sistemlerde çalışarak geçirdim. İş yazılımlarını uçtan uca geliştirip canlıda işletiyorum: .NET API'ler, React/Next.js arayüzler, SQL Server ve PostgreSQL, IIS ve Cloudflare üzerinde kendi CI/CD hattım.",
      "Yapay zekâ ile çalışıyorum: Claude Code ajanlarını kurduğum ortamda (testler, ayrı test ve canlı sunucular, otomatik dağıtım) yönetiyorum; mimari, kod incelemesi ve canlıya alma kararı bende. Tam zamanlı işimin yanında Eribitech'i kurdum; çok kiracılı e-ticaret platformu Eribi'yi geliştirip kendi kurduğum ve yönettiğim sunucularda işletiyorum.",
    ],

    experienceHeading: "Deneyim",
    experience: [
      {
        heading: "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.",
        aside: "İstanbul · Hibrit",
        roles: [
          {
            title: "Uzman Yazılım Geliştirici",
            period: "Temmuz 2025 – Günümüz",
            points: [
              "belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim: SSG ve ISR, TR/EN dil desteği, WCAG odaklı erişilebilirlik özellikleri.",
              "Eski bir Umbraco sistemini katmanlı Clean Architecture (Domain / Application / Infrastructure) ile headless CMS'e dönüştürüyorum: sürümlenen içerik, durum tabanlı yayın; Repository, Strategy ve Result desenleri.",
              "LDAP / Active Directory entegrasyonuyla merkezi kimlik doğrulama ve erişim kontrolü sağladım.",
              "İstanbulkart mobil uygulamasını geliştiren ekipte yer alıyorum.",
            ],
          },
        ],
        caseStudies: [{ slug: "belbim-headless-cms", label: "belbim.istanbul ve istanbulkart.istanbul" }],
      },
      {
        heading: "Eribitech",
        website: { href: "https://eribitech.com", label: "eribitech.com" },
        aside: "İstanbul · tam zamanlı işimle paralel",
        roles: [
          {
            title: "Kurucu",
            period: "2025 – Günümüz",
            points: [
              "Ajansların müşterileri için mağaza açıp yönetebildiği çok kiracılı e-ticaret platformu Eribi'yi tasarlayıp geliştirdim: .NET 8 çekirdek, kiracı başına veritabanı, otomatik mağaza kurulumu (veritabanı, Cloudflare DNS, SSL, IIS), abonelik faturalaması, Next.js ile iş ortağı paneli ve vitrin (vitrin bir ekip arkadaşımla birlikte).",
              "Ödeme, e-fatura, bildirim, yurt içi ve yurt dışı kargo, alan adı, pazaryeri, ERP ve yapay zekâ entegrasyonlarını YARP API gateway arkasında 9 servise ayırdım (pazaryeri servisini de aynı ekip arkadaşımla birlikte geliştirdik); her geçiş bir özellik bayrağıyla anında geri alınabiliyor.",
              "Platformu Cloudflare arkasında ayrı test ve canlı Windows sunucularda, 100'ü aşkın GitHub Actions iş akışıyla (dağıtım, yedekleme, geri yükleme tatbikatı) işletiyorum.",
              "Platformu SQL Server'dan PostgreSQL 17'ye taşıdım (Ağustos 2026); ölçümden sonra canlı sunucunun boştaki bellek kullanımını %72'den %60'a indirdim.",
              "Yapay zekâ özellikleri geliştirdim: tool use destekli, SSE ile canlı yanıt veren ve kredi takibi yapan Gemini tabanlı bir asistan; fal.ai ile bir medya stüdyosu; Claude ile web sitesi analiz raporları.",
              "Mayıs 2026'dan bu yana Eribitech'teki commit'lerimin çoğunu Claude Code ile birlikte yazıyorum.",
            ],
          },
        ],
        caseStudies: [
          { slug: "eribi", label: "Eribi" },
          { slug: "eribi-growth", label: "Eribi Growth" },
          { slug: "eribi-creative", label: "Eribi Creative" },
          { slug: "ai-native-delivery", label: "Yapay zekâ ajanlarıyla geliştirme" },
        ],
      },
      {
        heading: "İGDAŞ (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.)",
        aside: "İstanbul · İş yerinde",
        roles: [
          {
            title: "Yazılım Geliştirici",
            period: "Aralık 2023 – Temmuz 2025",
            points: [
              "Ağırlıklı olarak saha ekiplerinin 7/24 kullandığı Operasyon Otomasyon Platformu olmak üzere dört kurumsal sistemde çalıştım (C#, ASP.NET, React, SQL Server).",
              "Saha iş akışlarını (talep, atama, uygulama, tamamlama, raporlama) deterministik durum makineleriyle modelledim.",
              "Anlık ve periyodik işler için kural tabanlı bir planlama yapısı kurdum; merkez depo, araç deposu ve saha tüketimi arasındaki stok akışlarını eşzamanlı kullanımda da tutarlı kalacak şekilde geliştirdim.",
              "SAP S/4HANA entegrasyonunda (senkronizasyon, doğrulama, yeniden deneme, hata kurtarma) ve Active Directory kimlik doğrulamasında çalıştım; veri yoğun SQL raporları yazdım; KVKK denetiminde yer aldım.",
              "Revir randevu ve tıbbi malzeme takip sisteminde (TMT), teknik şartname onay iş akışında ve kurumsal web sitesinin yenilenmesinde görev aldım.",
            ],
          },
        ],
        caseStudies: [{ slug: "igdas-field-operations", label: "İGDAŞ saha operasyonları otomasyonu" }],
      },
      {
        heading: "Kariyer arası",
        aside: "Temmuz 2023 – Aralık 2023",
        note: "Oyun geliştirmeden .NET backend'e bilinçli olarak geçtim: .NET Core, ASP.NET Core MVC, WPF, WinForms.",
      },
      {
        heading: "Tiramisu Studios",
        aside: "Uzaktan",
        roles: [
          {
            title: "Oyun Geliştirici",
            period: "Aralık 2022 – Temmuz 2023",
            points: [
              "Stüdyo ekibiyle Unity ve C# kullanarak Drift Max Pro (120M+ indirme) ve Drift Max City (25M+ indirme) mobil yarış oyunlarının çekirdek sistemlerinde çalıştım; indirme sayıları stüdyonun açıkladığı rakamlardır.",
              "Trafik sistemini object pooling ile optimize ettim, Drift Max City açık dünya haritası için Unity editör araçları yazdım, harita yükleme ve occlusion culling iyileştirmeleriyle GPU yükünü azalttım.",
            ],
          },
          {
            title: "Oyun Geliştirme Stajyeri",
            period: "Eylül 2022 – Kasım 2022",
            points: ["Modüler bir araç yükseltme mağazasıyla 3D drift yarış oyunu prototipi geliştirdim."],
          },
        ],
        caseStudies: [{ slug: "drift-max", label: "Drift Max" }],
      },
      {
        heading: "Perspactive Studios (bağımsız oyun projesi, yayımlanmadı)",
        aside: "Türkiye",
        roles: [
          {
            title: "Kurucu ve Oyun Geliştirici",
            period: "Mart 2021 – Eylül 2022",
            points: [
              "Unity/C# ile geliştirilen 2D roguelite “The Delusion: Burdens of the Past” için 10+ kişilik ekibi (geliştirici, sanatçı, tasarımcı) kurup yönettim; vizyon, kapsam ve plan bendeydi; düşman yapay zekâsını, oyuncu mekaniklerini ve envanter sistemini geliştirdim.",
            ],
          },
        ],
      },
    ],

    projectsHeading: "Öne çıkan projeler",
    projects: [
      {
        slug: "darkpost",
        name: "DarkPost Agency",
        title: "DarkPost Agency — kurumsal web sitesi",
        period: "Ağustos 2026 – Eylül 2026",
        kind: "Müşteri işi",
        website: { href: "https://darkpost.com.tr", label: "darkpost.com.tr" },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "zod"],
        text: "Tek geliştiriciydim. Mağaza başvuru formu, API anahtarını tarayıcıya göstermeyen sunucu tarafı bir BFF üzerinden Eribi iş ortağı API'sine bağlanıyor; müşteri geri bildirimiyle formu 22 alandan 10 alana indirdim.",
      },
      {
        slug: "olser-bilisim",
        name: "Olser Bilişim",
        title: "Olser Bilişim — kurumsal web sitesi ve yönetim paneli",
        period: "Mayıs 2025 – Mayıs 2026",
        kind: "Müşteri işi",
        website: { href: "https://olserbilisim.com", label: "olserbilisim.com" },
        stack: [".NET 8 Web API", "React 18", "Vite", "Tailwind CSS 4", "Next.js 16"],
        text: "Mali müşavirlere yazılım geliştiren bir firmanın kurumsal sitesini ve içerik yönetim panelini tek başıma geliştirdim: önce React/Vite ve .NET 8 API ile, ardından Next.js 16 ile (bu sürüm henüz yayında değil).",
      },
      {
        slug: "odis",
        name: "ODİS",
        title: "ODİS — yaş sınıflandırma iş akışı",
        period: "Şubat 2026",
        kind: "Prototip",
        prototype: true,
        stack: [
          ".NET 8 (Clean Architecture)",
          "EF Core",
          "SQL Server",
          "ASP.NET Identity",
          "JWT",
          "Next.js 16",
          "TanStack Query",
        ],
        text: "Oyun ve dijital içeriklerin yaşa göre sınıflandırılması için çok rollü bir prototipi tek başıma geliştirdim: başvuru, kanıt yükleme, kod ve oyun incelemesi, pedagojik değerlendirme, hukuki karar ve denetim kaydı.",
      },
    ],

    skillsHeading: "Yetkinlikler",
    skills: [
      {
        label: "Backend",
        items: "C#, .NET 8, ASP.NET Core (Web API, MVC), Entity Framework Core, REST API, Hangfire, Umbraco",
      },
      {
        label: "Frontend",
        items: "React, Next.js (App Router, SSG/ISR), TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3",
      },
      { label: "Veritabanı", items: "Microsoft SQL Server (T-SQL), PostgreSQL 17" },
      {
        label: "Mimari",
        items:
          "Clean Architecture, N-katmanlı ve çok kiracılı mimari, durum makineleri, mikroservisler, tasarım desenleri",
      },
      {
        label: "Entegrasyon",
        items: "SAP S/4HANA, Active Directory / LDAP; ödeme, e-fatura, kargo ve pazaryeri API'leri",
      },
      {
        label: "DevOps",
        items: "CI/CD (GitHub Actions, self-hosted runner), IIS, Cloudflare, PM2, PowerShell, Windows Server, Git",
      },
      {
        label: "Yapay zekâ",
        items: "Claude Code ile ajan tabanlı geliştirme; Gemini, Claude API ve fal.ai entegrasyonları",
      },
      { label: "Test", items: "xUnit, Moq, FluentAssertions, Vitest, Testing Library" },
    ],

    educationHeading: "Eğitim",
    education: [
      {
        school: "Bahçeşehir Üniversitesi",
        degree: "Bilgisayar Mühendisliği, Lisans (İngilizce)",
        location: "İstanbul",
        period: "2017 – 2022",
      },
    ],

    certificationsHeading: "Sertifikalar ve eğitimler",
    certifications: [
      {
        name: "C# ve ASP.NET Core MVC (260 saatlik sertifikalı kurs)",
        issuer: "C ve Sistem Programcıları Derneği",
        date: "Ağustos 2024",
      },
      { name: "Mikroservis Mimarisi (kurum içi eğitim)", issuer: "BT Akademi (BELBİM)" },
      { name: "React ve React Native (kurum içi eğitim)", issuer: "BT Akademi (BELBİM)" },
      { name: ".NET 8 API/Web, N-Katmanlı ve Clean Architecture", issuer: "Udemy", date: "2024" },
      { name: "SQL Server Database Administration", issuer: "Udemy", date: "2024" },
    ],

    languagesHeading: "Diller",
    languages: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "İngilizce", level: "Profesyonel çalışma düzeyi (İngilizce lisans eğitimi)" },
    ],

    contactHeading: "Bir pozisyon ya\u00a0da proje mi var?",
    contactText: "E-posta, LinkedIn ya da iletişim formu üzerinden bana ulaşabilirsiniz.",
  },

  en: {
    updated: "Last updated: October 2026",
    heading: "CV",
    intro:
      "My experience, projects and skills in one place. You can download the PDF in English or Turkish, or print this page.",
    pdf: { en: "Download PDF (English)", tr: "Download PDF (Turkish)" },
    print: "Print / save as PDF",
    caseStudy: "Case study",
    caseStudies: "Case studies",

    summaryHeading: "Summary",
    summary: [
      "Full-stack software engineer with more than 3 years of professional experience, nearly 3 of them on enterprise systems at İGDAŞ and BELBİM. I build and run business software end to end: .NET APIs, React/Next.js front ends, SQL Server and PostgreSQL, and self-hosted CI/CD on IIS and Cloudflare.",
      "I work AI-native: I direct Claude Code agents inside an environment I set up (tests, separate test and production servers, automated deploys) and own the architecture, the review and the release. Alongside my full-time role I founded Eribitech and built Eribi, a multi-tenant e-commerce platform I operate in production on servers I set up and run myself.",
    ],

    experienceHeading: "Experience",
    experience: [
      {
        heading: "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.",
        aside: "Istanbul · Hybrid",
        roles: [
          {
            title: "Software Development Specialist",
            period: "Jul 2025 – present",
            points: [
              "Built the corporate websites belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15: SSG and ISR, Turkish/English content, WCAG-focused accessibility features.",
              "Rebuilding a legacy Umbraco system as a headless CMS in layered Clean Architecture (Domain / Application / Infrastructure): versioned content, state-based publishing, Repository, Strategy and Result patterns.",
              "Integrated LDAP / Active Directory authentication for centralized access control.",
              "Member of the team developing the İstanbulkart mobile app.",
            ],
          },
        ],
        caseStudies: [{ slug: "belbim-headless-cms", label: "belbim.istanbul and istanbulkart.istanbul" }],
      },
      {
        heading: "Eribitech",
        website: { href: "https://eribitech.com", label: "eribitech.com" },
        aside: "Istanbul · alongside full-time employment",
        roles: [
          {
            title: "Founder",
            period: "2025 – present",
            points: [
              "Designed and built Eribi, a multi-tenant e-commerce platform for agencies to run their clients' stores: .NET 8 core with a database per tenant, automated store provisioning (database, Cloudflare DNS, SSL, IIS), subscription billing, Next.js partner panel and storefront (storefront co-developed with a teammate).",
              "Split the payment, e-invoice, notification, domestic and international shipping, domain, marketplace, ERP and AI integrations into 9 services behind a YARP API gateway (the marketplace service co-built with the same teammate); every cutover sits behind a feature flag with instant rollback.",
              "Operate the platform on separate test and production Windows servers behind Cloudflare, with 100+ GitHub Actions workflows on self-hosted runners (deploys, backups, restore drills).",
              "Migrated it from SQL Server to PostgreSQL 17 (Aug 2026) and cut production idle memory use from 72% to 60% after measuring it.",
              "Built AI features: a Gemini tool-use assistant with SSE streaming and credit metering, an AI media studio on fal.ai and Claude-generated website analysis reports.",
              "AI-native delivery: since May 2026, most of my commits at Eribitech have been co-written with Claude Code.",
            ],
          },
        ],
        caseStudies: [
          { slug: "eribi", label: "Eribi" },
          { slug: "eribi-growth", label: "Eribi Growth" },
          { slug: "eribi-creative", label: "Eribi Creative" },
          { slug: "ai-native-delivery", label: "AI-native delivery" },
        ],
      },
      {
        heading: "İGDAŞ (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.)",
        aside: "Istanbul · On-site",
        roles: [
          {
            title: "Software Developer",
            period: "Dec 2023 – Jul 2025",
            points: [
              "Worked on four enterprise systems, mainly the 24/7 Operations Automation Platform used by field teams (C#, ASP.NET, React, SQL Server).",
              "Modeled field-operation workflows (intake, assignment, execution, completion, reporting) as deterministic state machines.",
              "Built rule-based scheduling for on-demand and recurring jobs, and inventory flows across central warehouses, vehicle depots and field consumption that stay consistent under concurrent use.",
              "Worked on the SAP S/4HANA integration (sync, validation, retries, failure recovery) and Active Directory authentication; wrote data-intensive SQL reports; took part in the KVKK (data protection) audit.",
              "Contributed to the infirmary appointment and medical-supply system, the technical-specification approval workflow and the redevelopment of the corporate website.",
            ],
          },
        ],
        caseStudies: [{ slug: "igdas-field-operations", label: "İGDAŞ field operations automation" }],
      },
      {
        heading: "Career break",
        aside: "Jul 2023 – Dec 2023",
        note: "Deliberate move from game development to .NET backend: .NET Core, ASP.NET Core MVC, WPF, WinForms.",
      },
      {
        heading: "Tiramisu Studios",
        aside: "Remote",
        roles: [
          {
            title: "Game Developer",
            period: "Dec 2022 – Jul 2023",
            points: [
              "Worked in Unity and C# with the studio team on core systems of the mobile racing games Drift Max Pro (120M+ downloads) and Drift Max City (25M+ downloads); download figures as published by the studio.",
              "Optimized the traffic system with object pooling, built Unity editor tools for the Drift Max City open-world map, and improved map loading and occlusion culling to reduce GPU load.",
            ],
          },
          {
            title: "Game Development Intern",
            period: "Sep 2022 – Nov 2022",
            points: ["Prototyped a 3D drift-racing game with a modular shop for vehicle performance and visual upgrades."],
          },
        ],
        caseStudies: [{ slug: "drift-max", label: "Drift Max" }],
      },
      {
        heading: "Perspactive Studios (independent game project, unreleased)",
        aside: "Türkiye",
        roles: [
          {
            title: "Founder & Game Developer",
            period: "Mar 2021 – Sep 2022",
            points: [
              "Started and led a 10+ person team (developers, artists, designers) on “The Delusion: Burdens of the Past”, a 2D roguelite in Unity/C#; set the vision, scope and plan; built enemy AI, player mechanics and inventory.",
            ],
          },
        ],
      },
    ],

    projectsHeading: "Selected projects",
    projects: [
      {
        slug: "darkpost",
        name: "DarkPost Agency",
        title: "DarkPost Agency — company website",
        period: "Aug 2026 – Sep 2026",
        kind: "Client work",
        website: { href: "https://darkpost.com.tr", label: "darkpost.com.tr" },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "zod"],
        text: "Sole developer. The store application form posts to the Eribi partner API via a server-side BFF, so the browser never sees the API key; after client feedback I cut the form from 22 to 10 fields.",
      },
      {
        slug: "olser-bilisim",
        name: "Olser Bilişim",
        title: "Olser Bilişim — company website and admin panel",
        period: "May 2025 – May 2026",
        kind: "Client work",
        website: { href: "https://olserbilisim.com", label: "olserbilisim.com" },
        stack: [".NET 8 Web API", "React 18", "Vite", "Tailwind CSS 4", "Next.js 16"],
        text: "Sole developer of the website and content admin panel of a software company serving accountants and the finance sector: first built with React/Vite on a .NET 8 API, then rewritten in Next.js 16 (not deployed yet).",
      },
      {
        slug: "odis",
        name: "ODİS",
        title: "ODİS — age-rating workflow",
        period: "Feb 2026",
        kind: "Prototype",
        prototype: true,
        stack: [
          ".NET 8 (Clean Architecture)",
          "EF Core",
          "SQL Server",
          "ASP.NET Identity",
          "JWT",
          "Next.js 16",
          "TanStack Query",
        ],
        text: "Sole developer of a multi-role prototype for rating games and digital content by age: application, evidence uploads, code and game review, pedagogical assessment, legal decision and audit log.",
      },
    ],

    skillsHeading: "Skills",
    skills: [
      {
        label: "Backend",
        items: "C#, .NET 8, ASP.NET Core (Web API, MVC), Entity Framework Core, REST APIs, Hangfire, Umbraco",
      },
      {
        label: "Frontend",
        items: "React, Next.js (App Router, SSG/ISR), TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3",
      },
      { label: "Data", items: "Microsoft SQL Server (T-SQL), PostgreSQL 17" },
      {
        label: "Architecture",
        items: "Clean Architecture, N-layer, multi-tenancy, state machines, microservices, design patterns",
      },
      {
        label: "Integrations",
        items: "SAP S/4HANA, Active Directory / LDAP; payment, e-invoice, shipping and marketplace APIs",
      },
      {
        label: "DevOps",
        items: "CI/CD (GitHub Actions, self-hosted runners), IIS, Cloudflare, PM2, PowerShell, Windows Server, Git",
      },
      {
        label: "AI",
        items: "Agentic development with Claude Code; LLM integration (Gemini tool use, SSE streaming, Claude API), fal.ai",
      },
      { label: "Testing", items: "xUnit, Moq, FluentAssertions, Vitest, Testing Library" },
    ],

    educationHeading: "Education",
    education: [
      {
        school: "Bahçeşehir University",
        degree: "BSc in Computer Engineering (English-medium)",
        location: "Istanbul",
        period: "2017 – 2022",
      },
    ],

    certificationsHeading: "Certifications and training",
    certifications: [
      {
        name: "C# and ASP.NET Core MVC (260-hour certificate program)",
        issuer: "C ve Sistem Programcıları Derneği",
        date: "Aug 2024",
      },
      { name: "Microservice Architecture (corporate training)", issuer: "BT Akademi (BELBİM)" },
      { name: "React and React Native (corporate training)", issuer: "BT Akademi (BELBİM)" },
      { name: ".NET 8 API/Web with N-Layer and Clean Architecture", issuer: "Udemy", date: "2024" },
      { name: "SQL Server Database Administration", issuer: "Udemy", date: "2024" },
    ],

    languagesHeading: "Languages",
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Professional working proficiency (English-medium degree)" },
    ],

    contactHeading: "Hiring, or have a project?",
    contactText: "You can reach me by email, on LinkedIn or through the contact form.",
  },
};

export default cv;
