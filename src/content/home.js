// Home page copy (/ and /en/). Identity strings (name, title, descriptor, availability, CTAs) come from
// common.js; everything else is here. Sources (discovery/): master-plan.md §B.2 (sections), §B.5 (CTAs),
// §F.0 (principles, skill tiers), §F.1 (home copy); fact-sheet.md §2.2 (roles, dates, outcomes), §4 (skill
// depth). The owner decisions in the task brief override the plan: no "Senior", no metrics for Eribi, no
// response-time promise or prices, AI use stated openly (no percentages), mobile only as a qualified skill.
// Owner facts of 2026-10-30: at BELBİM he built belbim.istanbul and istanbulkart.istanbul and is on the İstanbulkart
// mobile app team (team membership only: no technologies or role named).

// "Selected work" cards, in display order (read from src/content/projects.js; missing slugs are skipped). İGDAŞ left
// the Home selection on 2026-10-30 for the BELBİM sites; it stays on the projects page.
export const FEATURED_SLUGS = ["eribi", "belbim-headless-cms", "ai-native-delivery"];
// Case study linked from the "How I work with AI" band (shown only once the slug exists).
export const AI_CASE_STUDY_SLUG = "ai-native-delivery";

const home = {
  tr: {
    hero: {
      lead: "İş yazılımlarını uçtan uca tasarlıyor, geliştiriyor ve canlıda işletiyorum: .NET API'ler, React/Next.js arayüzler, SQL Server ve PostgreSQL veritabanları ve bunları yayına alan CI/CD hattı.",
      ai: "Yapay zekâ kod ajanlarıyla (Claude Code) çalışıyorum. Ajanların çalıştığı ortamı ben kuruyorum; mimari, kod incelemesi ve canlıya alma kararı bende.",
    },
    now: {
      heading: "Şu an",
      items: [
        {
          key: "job",
          label: "Tam zamanlı",
          name: "BELBİM",
          meta: "Uzman Yazılım Geliştirici · Temmuz 2025'ten beri",
          text: "belbim.istanbul ve istanbulkart.istanbul sitelerini geliştirdim; İstanbulkart mobil uygulama ekibindeyim.",
        },
        {
          key: "company",
          label: "Kendi şirketim",
          name: "Eribitech",
          meta: "Kurucu · 2025'ten beri",
          text: "Çok kiracılı e-ticaret platformu Eribi ve yapay zekâ ürünleri.",
        },
        {
          key: "freelance",
          label: "Freelance",
          name: "Seçili projeler",
          meta: "Kapsama göre sabit, yazılı teklif",
          text: "Son işlerim: DarkPost Agency ve Olser Bilişim web siteleri.",
        },
      ],
    },
    proof: {
      heading: "Öne çıkan deneyimler",
      items: [
        { org: "İGDAŞ", tag: "İşveren", text: "7/24 saha operasyonları için durum makinesi tabanlı iş akışları" },
        { org: "İGDAŞ", tag: "İşveren", text: "SAP S/4HANA ve Active Directory entegrasyonları" },
        { org: "BELBİM", tag: "İşveren", text: "belbim.istanbul ve istanbulkart.istanbul kurumsal siteleri: headless CMS, Next.js 15, SSG/ISR" },
        { org: "Eribi", tag: "Kendi ürünüm", text: "Ayrı test ve canlı sunucular, GitHub Actions ile otomatik dağıtım" },
      ],
    },
    work: {
      eyebrow: "Vaka çalışmaları",
      title: "Öne çıkan işler",
      description: "Her birinde rolümü, verdiğim kararları ve sonucu anlatıyorum.",
    },
    ai: {
      eyebrow: "Çalışma biçimi",
      title: "Yapay zekâ ile nasıl çalışıyorum",
      intro:
        "Yapay zekâ kod ajanlarını her gün kullanıyorum. Farkı ajanın kendisi değil, çalıştığı ortam yaratıyor. Bu ortamı ben kuruyor, ajanları yönetiyor ve canlıya çıkan her işin sorumluluğunu alıyorum.",
      disclosure: [
        "Mayıs 2026'dan bu yana commit'lerimin çoğu Claude Code ile birlikte yazıldı.",
        "Mimariden, kod incelemesinden, testlerden ve canlıya almadan ben sorumluyum.",
      ],
      caseStudy: "Vaka çalışması: yapay zekâ ajanlarıyla geliştirme",
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
    },
    // Rendered by the "How I work with AI" band (AiSection) through the shared <Terminal> (title, label, command, lines, result).
    // Pipeline order follows the AI-delivery case study: task → agent → tests → GitHub Actions → TEST → review → PROD.
    terminal: {
      title: "~/teslim-hatti",
      label: "Yapay zekâ ajanlarıyla teslim hattımı özetleyen terminal görünümü",
      command: "erdem --nasil-calisiyorum",
      lines: [
        { key: "görev", text: "Kapsamı ve sınırları ben belirliyorum." },
        { key: "ajan", text: "Claude Code, proje belgeleri ve kurallar içinde çalışıyor." },
        { key: "test", text: "xUnit · Vitest · Playwright" },
        { key: "dağıtım", text: "GitHub Actions → TEST sunucusu" },
        { key: "inceleme", text: "Değişiklikleri ben inceliyorum." },
        { key: "canlı", text: "PROD · riskli geçişler özellik bayrağı arkasında" },
      ],
      result: "canlıya alma kararı bende",
    },
    services: {
      eyebrow: "Freelance",
      title: "Neler yapıyorum",
      description: "İşletmeler ve ajanslar için seçili projeler alıyorum.",
      items: [
        {
          key: "web",
          title: "Web uygulamaları ve e-ticaret",
          text: "Yönetim panelleri, kurumsal siteler ve ödeme, e-fatura, kargo entegrasyonlu mağazalar.",
        },
        {
          key: "integration",
          title: "Entegrasyon ve otomasyon",
          text: "Kullandığınız sistemleri birbirine bağlıyor, tablolarda ve e-postada yürüyen işleri tek bir panele taşıyorum.",
        },
        {
          key: "ai",
          title: "Yapay zekâ özellikleri ve işletim",
          text: "Ürününüze yapay zekâ asistanı, içerik ya da rapor üretimi ekliyor; yayına alma, sunucu ve bakımı üstleniyorum.",
        },
      ],
      terms: ["Kapsama göre sabit, yazılı teklif", "Ücretsiz ön görüşme"],
      link: "Hizmetler ve çalışma süreci",
    },
    experience: {
      eyebrow: "Kariyer",
      title: "Deneyim",
      link: "CV'nin tamamı",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Uzman Yazılım Geliştirici",
          period: "Temmuz 2025 – Günümüz",
          current: true,
          text: "belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini Umbraco headless CMS ve Next.js 15 ile geliştirdim; İstanbulkart mobil uygulamasını geliştiren ekipte yer alıyorum.",
        },
        {
          key: "eribitech",
          org: "Eribitech",
          role: "Kurucu",
          note: "İşimle paralel",
          period: "2025 – Günümüz",
          current: true,
          text: "Eribi, Eribi Growth ve Eribi Creative: mimari, backend, arayüzler ve altyapı.",
        },
        {
          key: "igdas",
          org: "İGDAŞ",
          role: "Yazılım Geliştirici",
          period: "Aralık 2023 – Temmuz 2025",
          text: "Saha iş akışlarını durum makineleriyle modelledim; planlama, stok akışları, raporlama ve SAP S/4HANA entegrasyonunda çalıştım.",
        },
        {
          key: "tiramisu",
          org: "Tiramisu Studios",
          role: "Oyun Geliştirici",
          period: "Aralık 2022 – Temmuz 2023",
          text: "Unity ile Drift Max Pro ve Drift Max City mobil oyunlarında, ekibin bir parçası olarak trafik sistemi, editör araçları ve occlusion culling üzerinde çalıştım.",
        },
      ],
    },
    stack: {
      eyebrow: "Derinliğe göre",
      title: "Teknolojiler",
      description: "Onlarla ne kadar deneyimim olduğuna göre üç grupta topladım.",
      // Same tier names and placement as About (about.js skills), from the fact sheet's depth ratings (§4).
      link: "Tüm yetkinlikler",
      tiers: [
        {
          key: "daily",
          label: "Derinlemesine",
          items: [
            "C# ve .NET 8",
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "IIS ve Windows Server",
            "GitHub Actions",
            "Claude Code",
          ],
        },
        {
          key: "projects",
          label: "Proje düzeyinde",
          items: [
            "PostgreSQL",
            "Hangfire",
            "YARP",
            "Umbraco (headless)",
            "SAP S/4HANA ve Active Directory entegrasyonları",
            "Cloudflare",
            "PowerShell ve PM2",
            "xUnit, Vitest, Playwright",
            "Gemini, Claude ve fal.ai API'leri",
            "Unity (mobil oyunlar, ekip işi)",
          ],
        },
        {
          key: "familiar",
          label: "Temel düzeyde",
          items: [
            "React Native ve Expo (geliştirme aşamasında bir uygulama)",
            "WPF ve WinForms",
            "CQRS ve MediatR",
          ],
        },
      ],
    },
    cta: {
      title: "Bir pozisyon ya\u00a0da proje mi var?",
      text: "Kısa bir mesaj yeterli.",
      hiring: {
        eyebrow: "İşe alım",
        title: "Ekibinize katılabilirim",
        text: "Tam zamanlı pozisyonlara açığım. Deneyimimi ve projelerimi CV'mde bulabilirsiniz.",
        linkedin: "LinkedIn profilim",
      },
      project: {
        eyebrow: "Freelance",
        title: "Projenizi konuşalım",
        text: "Seçili freelance projeler alıyorum. Kapsama göre sabit, yazılı teklif veriyorum; ilk adım ücretsiz ön görüşme.",
        action: "Projenizi anlatın",
      },
    },
  },
  en: {
    hero: {
      lead: "I design, build and run business software end to end: .NET APIs, React/Next.js front ends, SQL Server and PostgreSQL databases, and the CI/CD that ships them.",
      ai: "I build with AI coding agents (Claude Code). I set up the environment they work in; the architecture, the code review and the release decision stay with me.",
    },
    now: {
      heading: "Now",
      items: [
        {
          key: "job",
          label: "Full-time",
          name: "BELBİM",
          meta: "Software Development Specialist · since July 2025",
          text: "I built the belbim.istanbul and istanbulkart.istanbul websites and am on the İstanbulkart mobile app team.",
        },
        {
          key: "company",
          label: "My company",
          name: "Eribitech",
          meta: "Founder · since 2025",
          text: "Eribi, a multi-tenant e-commerce platform, and AI products.",
        },
        {
          key: "freelance",
          label: "Freelance",
          name: "Selected projects",
          meta: "Fixed written quote based on scope",
          text: "Recent work: the DarkPost Agency and Olser Bilişim websites.",
        },
      ],
    },
    proof: {
      heading: "Track record",
      items: [
        { org: "İGDAŞ", tag: "Employer", text: "State-machine workflows for 24/7 field operations" },
        { org: "İGDAŞ", tag: "Employer", text: "SAP S/4HANA and Active Directory integrations" },
        { org: "BELBİM", tag: "Employer", text: "The belbim.istanbul and istanbulkart.istanbul websites: headless CMS, Next.js 15, SSG/ISR" },
        { org: "Eribi", tag: "My product", text: "Separate test and production servers, automated deploys with GitHub Actions" },
      ],
    },
    work: {
      eyebrow: "Case studies",
      title: "Selected work",
      description: "Each one covers my role, the decisions I made and the outcome.",
    },
    ai: {
      eyebrow: "Way of working",
      title: "How I work with AI",
      intro:
        "I use AI coding agents every day. The difference comes from the environment they work in, not from the agent. I build that environment, direct the agents and take responsibility for everything that ships.",
      disclosure: [
        "Since May 2026, most of my commits have been co-written with Claude Code.",
        "I own the architecture, the code review, the tests and the release.",
      ],
      caseStudy: "Case study: AI-native delivery",
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
    },
    terminal: {
      title: "~/delivery-pipeline",
      label: "Terminal-style summary of how I ship with AI coding agents",
      command: "erdem --how-i-work",
      lines: [
        { key: "task", text: "I set the scope and the boundaries." },
        { key: "agent", text: "Claude Code works inside the project docs and rules." },
        { key: "tests", text: "xUnit · Vitest · Playwright" },
        { key: "deploy", text: "GitHub Actions → TEST server" },
        { key: "review", text: "I review the changes." },
        { key: "prod", text: "PROD · risky cutovers behind feature flags" },
      ],
      result: "the release decision stays with me",
    },
    services: {
      eyebrow: "Freelance",
      title: "What I build",
      description: "I take on selected projects for businesses and agencies.",
      items: [
        {
          key: "web",
          title: "Web apps and e-commerce",
          text: "Admin panels, company websites and stores with payment, e-invoice and shipping integrations.",
        },
        {
          key: "integration",
          title: "Integrations and automation",
          text: "I connect the systems you already use and move work that lives in spreadsheets and email into one panel.",
        },
        {
          key: "ai",
          title: "AI features and operations",
          text: "I add AI assistants and content or report generation to your product, and take care of deployment, servers and maintenance.",
        },
      ],
      terms: ["Fixed written quote based on scope", "Free intro call"],
      link: "Services and how I work",
    },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      link: "Full CV",
      items: [
        {
          key: "belbim",
          org: "BELBİM",
          role: "Software Development Specialist",
          period: "Jul 2025 – present",
          current: true,
          text: "I built the corporate websites belbim.istanbul and istanbulkart.istanbul with an Umbraco headless CMS and Next.js 15, and I am part of the team developing the İstanbulkart mobile app.",
        },
        {
          key: "eribitech",
          org: "Eribitech",
          role: "Founder",
          note: "Alongside my job",
          period: "2025 – present",
          current: true,
          text: "Eribi, Eribi Growth and Eribi Creative: architecture, back end, front ends and infrastructure.",
        },
        {
          key: "igdas",
          org: "İGDAŞ",
          role: "Software Developer",
          period: "Dec 2023 – Jul 2025",
          text: "I modeled field workflows as state machines and worked on scheduling, inventory flows, reporting and the SAP S/4HANA integration.",
        },
        {
          key: "tiramisu",
          org: "Tiramisu Studios",
          role: "Game Developer",
          period: "Dec 2022 – Jul 2023",
          text: "As part of the team, I worked on the traffic system, editor tools and occlusion culling of the Drift Max Pro and Drift Max City mobile games in Unity.",
        },
      ],
    },
    stack: {
      eyebrow: "By depth",
      title: "Stack",
      description: "Grouped by how deeply I have used them.",
      link: "All skills",
      tiers: [
        {
          key: "daily",
          label: "Core",
          items: [
            "C# and .NET 8",
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "IIS and Windows Server",
            "GitHub Actions",
            "Claude Code",
          ],
        },
        {
          key: "projects",
          label: "Working knowledge",
          items: [
            "PostgreSQL",
            "Hangfire",
            "YARP",
            "Umbraco (headless)",
            "SAP S/4HANA and Active Directory integrations",
            "Cloudflare",
            "PowerShell and PM2",
            "xUnit, Vitest, Playwright",
            "Gemini, Claude and fal.ai APIs",
            "Unity (mobile games, team work)",
          ],
        },
        {
          key: "familiar",
          label: "Familiar",
          items: ["React Native and Expo (one app in development)", "WPF and WinForms", "CQRS and MediatR"],
        },
      ],
    },
    cta: {
      title: "Hiring, or have a project?",
      text: "A short message is enough.",
      hiring: {
        eyebrow: "Hiring",
        title: "I can join your team",
        text: "I'm open to full-time roles. My CV covers my experience and projects.",
        linkedin: "LinkedIn profile",
      },
      project: {
        eyebrow: "Freelance",
        title: "Let's talk about your project",
        text: "I take on selected freelance projects, with a fixed written quote based on scope. The first step is a free intro call.",
        action: "Discuss your project",
      },
    },
  },
};

export default home;
