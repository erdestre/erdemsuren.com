// About page copy. Shapes: experience[{ org, role, period, location, summary, current?, kind?, caseStudy? }]
// (About shows one `summary` line per role; `kind: "break"` = career break with empty org/location; `caseStudy` =
// { slug, label }), education[{ school, degree, period }], certifications[{ name, issuer, date }] (an unknown date is
// "", never invented), languages[{ name, level }]. The CV page keeps its own, longer copy in cv.js: when a title,
// date or employer changes, update both files (and home.js, projects.js) so every page says the same.
//
// Sources: discovery/fact-sheet.md §2 (roles, recommended dates and titles: C1, C3, C5, C7, C15), §3 (education,
// training, languages: C12), §4 (skill depth); master plan §F.0 (experience, skills, certifications, principles),
// §F.5 (About) and §H.1 (CV bullets). Owner decisions override both: Eribitech founder "2025 – present" with no
// month and no metrics, co-developer unnamed, AI disclosure without percentages, mobile only as qualified
// capabilities, Drift Max downloads "per the studio", certificates itemized, no count.
// Owner facts of 2026-10-30: at BELBİM he built belbim.istanbul and istanbulkart.istanbul and is on the İstanbulkart
// mobile app team (no technologies or role named); his own products run on servers he set up and runs himself.

const about = {
  tr: {
    heading: "Hakkımda",
    lead: "Ben Erdem Süren, İstanbul'da yaşayan bir full-stack yazılım mühendisiyim. İş yazılımlarını .NET ve React/Next.js ile uçtan uca geliştirip canlıda işletiyorum; yapay zekâ kod ajanlarıyla çalışıyorum.",
    facts: {
      nowLabel: "Şu an",
      now: "BELBİM'de Uzman Yazılım Geliştirici",
      companyLabel: "İşimle paralel",
      locationLabel: "Konum",
    },

    story: {
      eyebrow: "Hikâyem",
      heading: "Oyunlardan kurumsal yazılıma ve kendi platformuma",
      paragraphs: [
        "Yazılıma oyun geliştirerek başladım. Bahçeşehir Üniversitesi'nde Bilgisayar Mühendisliği (İngilizce) okurken 10'u aşkın geliştirici, sanatçı ve tasarımcıdan oluşan bir ekip kurdum ve bağımsız bir oyun projesini yönettim. Ardından Tiramisu Studios'ta, stüdyonun Drift Max mobil yarış oyunlarında ekibin bir parçası olarak performans ve editör araçları üzerinde çalıştım.",
        "2023'ün ikinci yarısında odağımı .NET ile backend geliştirmeye çevirdim ve Aralık 2023'te İGDAŞ'ta işe başladım. Orada saha ekiplerinin 7/24 kullandığı operasyon otomasyonu platformunda iş akışlarını durum makineleriyle modelledim; SAP S/4HANA ve Active Directory entegrasyonlarında görev aldım.",
        "Temmuz 2025'ten beri BELBİM'de Uzman Yazılım Geliştirici olarak çalışıyorum. Burada belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim. İstanbulkart mobil uygulamasının ekibinde de yer alıyorum.",
        "2025'ten bu yana kurucusu olduğum Eribitech'te kendi ürünlerimi de geliştiriyorum. Bunların merkezinde, ajansların müşterileri için çevrimiçi mağaza açıp yönetebileceği çok kiracılı e-ticaret platformu Eribi var. Ürünleri ayrı test ve canlı sunucularda, kendi kurduğum otomatik dağıtım hattıyla işletiyorum.",
      ],
    },

    eribitech: {
      eyebrow: "Kendi şirketim",
      heading: "Eribitech",
      paragraphs: [
        "Eribitech'i kurdum ve tam zamanlı işimle paralel yürütüyorum.",
        "Mimari, backend, arayüzler ve altyapı bende. Mağaza vitrinini ve pazaryeri entegrasyonunu bir ekip arkadaşımla birlikte geliştirdik.",
      ],
      productsHeading: "Ürünler",
      products: [
        {
          slug: "eribi",
          name: "Eribi",
          text: "Ajansların müşterileri için mağaza açıp yönetebileceği çok kiracılı e-ticaret platformu.",
        },
        {
          slug: "eribi-growth",
          name: "Eribi Growth",
          text: "Ajanslar için potansiyel müşteri bulma ve web sitesi analizi.",
        },
        {
          slug: "eribi-creative",
          name: "Eribi Creative",
          text: "Yapay zekâ modelleriyle görsel, video ve ses üreten medya stüdyosu.",
        },
      ],
      site: { href: "https://eribitech.com", label: "eribitech.com" },
    },

    howIWork: {
      heading: "Nasıl çalışıyorum",
      intro:
        "Uçtan uca sahiplik: veritabanı tasarımından arayüze, sunucudan bakıma kadar işin tamamını üstlenirim. Kendi ürünlerim, kendi kurduğum ve yönettiğim sunucularda çalışıyor: Windows Server, IIS, Cloudflare Tunnel ve self-hosted CI/CD.",
      ai: [
        "Yazılımı yapay zekâ kod ajanlarıyla (Claude Code) geliştiriyorum. Mayıs 2026'dan bu yana commit'lerimin çoğu Claude Code ile birlikte yazıldı.",
        "Ajanlarla daha hızlı ilerliyorum. Bu hızın kaliteden götürmemesi için ajanların çalıştığı ortamı en az kod kadar önemsiyorum. Mimari, kod incelemesi, testler ve canlıya alma kararı bende.",
      ],
      principlesHeading: "İlkelerim",
      principles: [
        {
          title: "Ortamı ben kuruyorum",
          text: "Ajanlar benim kurduğum düzende çalışır: net katmanlar, proje belgeleri, testler, ayrı test ve canlı sunucular, otomatik dağıtım.",
        },
        {
          title: "Mimari ve son karar bende",
          text: "Neyin, hangi sınırlar içinde yapılacağını ben belirlerim; değişiklikleri inceler, canlıya ne zaman çıkacağına ben karar veririm.",
        },
        {
          title: "Geri alınabilir değişiklikler",
          text: "Riskli geçişleri özellik bayraklarının arkasına koyarım; canlıdaki bir değişiklik tek ayarla kapatılabilir. Veritabanı işlerinde önce yedek ve geri yükleme tatbikatı gelir.",
        },
        {
          title: "Ölçerek iyileştirme",
          text: "Kararlarımı ölçüme dayandırırım: canlı sunucunun boştaki bellek kullanımını ölçtüm ve .NET ayarlarıyla %72'den %60'a indirdim; sayfa hızını otomatik iş akışlarıyla ölçüyorum.",
        },
      ],
      caseStudy: { slug: "ai-native-delivery", label: "Vaka çalışması: yapay zekâ ajanlarıyla geliştirme" },
    },

    skills: {
      eyebrow: "Teknolojiler",
      heading: "Yetkinlikler",
      intro: "Teknolojileri, onlarla ne kadar deneyimim olduğuna göre üç gruba ayırdım.",
      tiers: [
        {
          key: "core",
          level: 3,
          title: "Derinlemesine",
          note: "İşte ve canlıdaki kendi sistemlerimde düzenli olarak kullandıklarım.",
          items: [
            "C#",
            ".NET 8",
            "ASP.NET Core (Web API, MVC)",
            "Entity Framework Core",
            "SQL Server (T-SQL)",
            "REST API tasarımı",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Clean Architecture",
            "Durum makineleri",
            "Çok kiracılı mimari",
            "Windows Server ve IIS",
            "GitHub Actions",
            "Claude Code ile ajan tabanlı geliştirme",
          ],
        },
        {
          key: "working",
          level: 2,
          title: "Proje düzeyinde",
          note: "Gerçek bir işte ya da projede kullandıklarım; deneyimim daha yeni ya da daha dar.",
          items: [
            "PostgreSQL",
            "Hangfire",
            "Umbraco (headless)",
            "SAP S/4HANA entegrasyonu",
            "Active Directory / LDAP",
            "Ödeme ve e-fatura entegrasyonları",
            "Kargo ve pazaryeri entegrasyonları",
            "YARP API gateway ve mikroservisler",
            "Cloudflare",
            "PM2",
            "PowerShell",
            "xUnit",
            "Vitest, Testing Library ve Playwright",
            "LLM entegrasyonu (Gemini, Claude)",
            "fal.ai ile görsel ve video üretimi",
            "Erişilebilirlik (WCAG) ve çoklu dil",
            "Unity ile mobil oyun (ekip işi)",
          ],
        },
        {
          key: "familiar",
          level: 1,
          title: "Temel düzeyde",
          note: "Kurs, eğitim ya da küçük projelerden tanıdığım, henüz derinleşmediğim konular.",
          items: [
            "React Native ve Expo (geliştirme aşamasındaki bir uygulama)",
            "WPF ve WinForms",
            "CQRS / MediatR",
            "Alan modelleme (DDD)",
          ],
        },
      ],
    },

    experienceEyebrow: "Kariyer",
    experienceHeading: "Deneyim",
    experienceIntro: "Tüm rollerim ve tarihleri. Ayrıntılar CV'de ve vaka çalışmalarında.",
    fullCv: "CV'nin tamamı",
    experience: [
      {
        org: "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.",
        role: "Uzman Yazılım Geliştirici",
        period: "Temmuz 2025 – Günümüz",
        location: "İstanbul · hibrit · tam zamanlı",
        current: true,
        summary:
          "belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim; İstanbulkart mobil uygulamasının ekibinde de yer alıyorum.",
        caseStudy: { slug: "belbim-headless-cms", label: "Vaka çalışması: belbim.istanbul ve istanbulkart.istanbul" },
      },
      {
        org: "Eribitech",
        role: "Kurucu",
        period: "2025 – Günümüz",
        location: "İstanbul · işimle paralel",
        current: true,
        summary: "Çok kiracılı e-ticaret platformu Eribi ve yapay zekâ ürünleri (Eribi Growth, Eribi Creative).",
        caseStudy: { slug: "eribi", label: "Vaka çalışması: Eribi" },
      },
      {
        org: "İGDAŞ (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.)",
        role: "Yazılım Geliştirici",
        period: "Aralık 2023 – Temmuz 2025",
        location: "İstanbul · iş yerinde · tam zamanlı",
        summary: "Saha ekiplerinin 7/24 kullandığı operasyon otomasyonu; SAP S/4HANA ve Active Directory entegrasyonları.",
        caseStudy: { slug: "igdas-field-operations", label: "Vaka çalışması: İGDAŞ saha operasyonları otomasyonu" },
      },
      {
        kind: "break",
        org: "",
        role: "Kariyer arası",
        period: "Temmuz 2023 – Aralık 2023",
        location: "",
        summary: "Odağımı oyun geliştirmeden backend geliştirmeye çevirdim (.NET Core, ASP.NET Core MVC, WPF, WinForms).",
      },
      {
        org: "Tiramisu Studios",
        role: "Oyun Geliştirici",
        period: "Aralık 2022 – Temmuz 2023",
        location: "Uzaktan · tam zamanlı",
        summary: "Drift Max Pro ve Drift Max City mobil yarış oyunlarında performans ve editör araçları (ekip işi).",
        caseStudy: { slug: "drift-max", label: "Vaka çalışması: Drift Max" },
      },
      {
        org: "Tiramisu Studios",
        role: "Oyun Geliştirme Stajyeri",
        period: "Eylül 2022 – Kasım 2022",
        location: "Uzaktan",
        summary: "Modüler yükseltme mağazasına sahip bir 3D drift yarış oyunu prototipi.",
      },
      {
        org: "Perspactive Studios (bağımsız oyun projesi)",
        role: "Kurucu ve Oyun Geliştirici",
        period: "Mart 2021 – Eylül 2022",
        location: "Türkiye",
        summary: "10'u aşkın kişilik bir ekiple geliştirdiğimiz, yayımlanmamış 2D roguelite platform oyunu.",
      },
    ],

    backgroundEyebrow: "Arka plan",
    backgroundHeading: "Eğitim, sertifikalar ve diller",
    educationHeading: "Eğitim",
    education: [
      {
        school: "Bahçeşehir Üniversitesi",
        degree: "Bilgisayar Mühendisliği, lisans (İngilizce eğitim)",
        period: "2017 – 2022",
      },
    ],
    certificationsHeading: "Sertifikalar ve eğitimler",
    certifications: [
      {
        name: "C# ve ASP.NET Core MVC: WinForms, WPF, .NET ve ASP.NET içeren 260 saatlik sertifikalı kurs",
        issuer: "C ve Sistem Programcıları Derneği (CSD)",
        date: "Ağustos 2024",
      },
      {
        name: "Mikroservis Mimarisi",
        issuer: "BT Akademi (BELBİM) · kurum içi eğitim",
        date: "",
      },
      {
        name: "React ve React Native",
        issuer: "BT Akademi (BELBİM) · kurum içi eğitim",
        date: "",
      },
      {
        name: ".NET 8 API/Web, N-Katmanlı ve Clean Architecture",
        issuer: "Udemy · Fatih Çakıroğlu",
        date: "2024",
      },
      {
        name: "SQL Server Database Administration",
        issuer: "Udemy · Imran Afzal",
        date: "2024",
      },
    ],
    languagesHeading: "Diller",
    languages: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "İngilizce", level: "Profesyonel çalışma düzeyi (İngilizce lisans eğitimi)" },
    ],

    closing: {
      heading: "Tanışalım",
      text: "Bir pozisyon ya da proje hakkında konuşmak isterseniz e-posta gönderebilir ya da LinkedIn'den yazabilirsiniz.",
    },
  },

  en: {
    heading: "About me",
    lead: "I'm Erdem Süren, a full-stack software engineer based in Istanbul. I build and run business software end to end with .NET and React/Next.js, and I work with AI coding agents.",
    facts: {
      nowLabel: "Now",
      now: "Software Development Specialist at BELBİM",
      companyLabel: "Alongside my job",
      locationLabel: "Based in",
    },

    story: {
      eyebrow: "My story",
      heading: "From games to enterprise software and my own platform",
      paragraphs: [
        "I got into software by making games. While studying Computer Engineering (English-medium) at Bahçeşehir University, I put together a team of more than 10 developers, artists and designers and led an independent game project. Then, at Tiramisu Studios, I worked on performance and editor tooling for the studio's Drift Max mobile racing games as part of the team.",
        "In the second half of 2023 I moved my focus to backend development with .NET, and in December 2023 I joined İGDAŞ. There I modeled the workflows of a 24/7 operations-automation platform for field teams as state machines and worked on the SAP S/4HANA and Active Directory integrations.",
        "Since July 2025 I have been a Software Development Specialist at BELBİM. There I built the corporate websites belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15. I am also part of the team developing the İstanbulkart mobile app.",
        "Since 2025 I have also been building my own products at Eribitech, the company I founded. The main one is Eribi, a multi-tenant e-commerce platform built for agencies to launch and run online stores for their clients. I run the products on separate test and production servers, with an automated deployment pipeline I built myself.",
      ],
    },

    eribitech: {
      eyebrow: "My company",
      heading: "Eribitech",
      paragraphs: [
        "I founded Eribitech and run it alongside my full-time job.",
        "I own the architecture, back end, front ends and infrastructure. I built the storefront and the marketplace integration together with a teammate.",
      ],
      productsHeading: "Products",
      products: [
        {
          slug: "eribi",
          name: "Eribi",
          text: "A multi-tenant e-commerce platform built for agencies to launch and run stores for their clients.",
        },
        {
          slug: "eribi-growth",
          name: "Eribi Growth",
          text: "Lead discovery and website analysis for agencies.",
        },
        {
          slug: "eribi-creative",
          name: "Eribi Creative",
          text: "A media studio that generates images, video and audio with AI models.",
        },
      ],
      site: { href: "https://eribitech.com", label: "eribitech.com" },
    },

    howIWork: {
      heading: "How I work",
      intro:
        "End-to-end ownership: I take on the whole job, from database design to the interface and from the server to maintenance. My own products run on servers I set up and run myself: Windows Server, IIS, Cloudflare Tunnel and self-hosted CI/CD.",
      ai: [
        "I build software with AI coding agents (Claude Code). Since May 2026, most of my commits have been co-written with Claude Code.",
        "Agents let me move faster. To keep that speed from costing quality, I treat the environment they work in as seriously as the code. The architecture, the review, the tests and the release stay with me.",
      ],
      principlesHeading: "My principles",
      principles: [
        {
          title: "I build the environment",
          text: "Agents work inside a setup I build: clear layers, project docs, tests, separate test and production servers and automated deploys.",
        },
        {
          title: "I own architecture and release",
          text: "I decide what gets built and within which boundaries; I review the changes and decide when they go live.",
        },
        {
          title: "Changes I can roll back",
          text: "Risky cutovers sit behind feature flags, so a change in production can be switched off with one setting. For database work, backups and restore drills come first.",
        },
        {
          title: "Measure, then improve",
          text: "I base decisions on measurements: I measured the production server's idle memory use and cut it from 72% to 60% by tuning .NET, and I measure page speed with automated workflows.",
        },
      ],
      caseStudy: { slug: "ai-native-delivery", label: "Case study: AI-native delivery" },
    },

    skills: {
      eyebrow: "Stack",
      heading: "Skills",
      intro: "Grouped by how deeply I have used them.",
      tiers: [
        {
          key: "core",
          level: 3,
          title: "Core",
          note: "What I have used regularly at work and in my own production systems.",
          items: [
            "C#",
            ".NET 8",
            "ASP.NET Core (Web API, MVC)",
            "Entity Framework Core",
            "SQL Server (T-SQL)",
            "REST API design",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Clean Architecture",
            "State machines",
            "Multi-tenancy",
            "Windows Server and IIS",
            "GitHub Actions",
            "Agentic coding with Claude Code",
          ],
        },
        {
          key: "working",
          level: 2,
          title: "Working knowledge",
          note: "Used in a real job or project; my experience is more recent or narrower.",
          items: [
            "PostgreSQL",
            "Hangfire",
            "Umbraco (headless)",
            "SAP S/4HANA integration",
            "Active Directory / LDAP",
            "Payment and e-invoice integrations",
            "Shipping and marketplace integrations",
            "YARP API gateway and microservices",
            "Cloudflare",
            "PM2",
            "PowerShell",
            "xUnit",
            "Vitest, Testing Library and Playwright",
            "LLM integration (Gemini, Claude)",
            "Image and video generation (fal.ai)",
            "Accessibility (WCAG) and i18n",
            "Unity mobile games (team work)",
          ],
        },
        {
          key: "familiar",
          level: 1,
          title: "Familiar",
          note: "Picked up through courses, training or small projects; not yet in depth.",
          items: [
            "React Native and Expo (one app in development)",
            "WPF and WinForms",
            "CQRS / MediatR",
            "Domain modeling (DDD)",
          ],
        },
      ],
    },

    experienceEyebrow: "Career",
    experienceHeading: "Experience",
    experienceIntro: "All my roles with dates. The CV and the case studies have the details.",
    fullCv: "Full CV",
    experience: [
      {
        org: "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.",
        role: "Software Development Specialist",
        period: "Jul 2025 – present",
        location: "Istanbul · hybrid · full-time",
        current: true,
        summary:
          "I built the corporate websites belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15, and I am part of the İstanbulkart mobile app team.",
        caseStudy: { slug: "belbim-headless-cms", label: "Case study: belbim.istanbul and istanbulkart.istanbul" },
      },
      {
        org: "Eribitech",
        role: "Founder",
        period: "2025 – present",
        location: "Istanbul · alongside my job",
        current: true,
        summary: "Eribi, a multi-tenant e-commerce platform, and AI products (Eribi Growth, Eribi Creative).",
        caseStudy: { slug: "eribi", label: "Case study: Eribi" },
      },
      {
        org: "İGDAŞ (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.)",
        role: "Software Developer",
        period: "Dec 2023 – Jul 2025",
        location: "Istanbul · on-site · full-time",
        summary: "24/7 operations automation for field teams; SAP S/4HANA and Active Directory integrations.",
        caseStudy: { slug: "igdas-field-operations", label: "Case study: İGDAŞ field operations automation" },
      },
      {
        kind: "break",
        org: "",
        role: "Career break",
        period: "Jul 2023 – Dec 2023",
        location: "",
        summary: "Shifted my focus from game development to backend development (.NET Core, ASP.NET Core MVC, WPF, WinForms).",
      },
      {
        org: "Tiramisu Studios",
        role: "Game Developer",
        period: "Dec 2022 – Jul 2023",
        location: "Remote · full-time",
        summary: "Performance and editor tooling on the Drift Max Pro and Drift Max City mobile racing games (team work).",
        caseStudy: { slug: "drift-max", label: "Case study: Drift Max" },
      },
      {
        org: "Tiramisu Studios",
        role: "Game Development Intern",
        period: "Sep 2022 – Nov 2022",
        location: "Remote",
        summary: "A 3D drift-racing prototype with a modular upgrade shop.",
      },
      {
        org: "Perspactive Studios (independent game project)",
        role: "Founder & Game Developer",
        period: "Mar 2021 – Sep 2022",
        location: "Türkiye",
        summary: "An unreleased 2D roguelite platformer, built with a team of more than 10.",
      },
    ],

    backgroundEyebrow: "Background",
    backgroundHeading: "Education, certifications and languages",
    educationHeading: "Education",
    education: [
      {
        school: "Bahçeşehir University",
        degree: "BSc Computer Engineering (English-medium)",
        period: "2017 – 2022",
      },
    ],
    certificationsHeading: "Certifications and training",
    certifications: [
      {
        name: "C# and ASP.NET Core MVC: 260-hour certificate program covering WinForms, WPF, .NET and ASP.NET",
        issuer: "C ve Sistem Programcıları Derneği (CSD)",
        date: "Aug 2024",
      },
      {
        name: "Microservice Architecture",
        issuer: "BT Akademi (BELBİM) · corporate training",
        date: "",
      },
      {
        name: "React and React Native",
        issuer: "BT Akademi (BELBİM) · corporate training",
        date: "",
      },
      {
        name: ".NET 8 API/Web with N-Layer and Clean Architecture",
        issuer: "Udemy · Fatih Çakıroğlu",
        date: "2024",
      },
      {
        name: "SQL Server Database Administration",
        issuer: "Udemy · Imran Afzal",
        date: "2024",
      },
    ],
    languagesHeading: "Languages",
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Professional working proficiency (English-medium degree)" },
    ],

    closing: {
      heading: "Let's talk",
      text: "Have a role or a project in mind? Email me or send me a message on LinkedIn.",
    },
  },
};

export default about;
