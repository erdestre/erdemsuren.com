// Services page copy (/hizmetler/, /en/services/). Structure: master plan §B.2 + §F.4 (base copy from
// discovery/lens-freelance.md §6), adjusted to the owner decisions:
// - pricing is only "Kapsama göre sabit, yazılı teklif" / "Fixed written quote based on scope"; the free intro call
//   has no duration; no prices, no response-time promise, no invoicing details;
// - AI: Claude Code is named and the May 2026 disclosure line is the plan's exact wording (§F.1); he owns
//   architecture, review, tests and release;
// - mobile appears only as a qualified capability (FAQ), never as a service card;
// - no payment, e-invoice or shipping provider names (capability level only).
// Facts: discovery/fact-sheet.md §2.2 (Eribitech, İGDAŞ), §2.3 (tenure), §3.1 (degree), §4 (skills, AI, DevOps);
// owner facts of 2026-10-30: he built belbim.istanbul and istanbulkart.istanbul at BELBİM, is on the İstanbulkart
// mobile app team (no technologies or role named), and sets up and runs the servers his own products run on.
//
// Shape notes:
// - `items[]` also feeds the JSON-LD OfferCatalog (src/seo/jsonld.js reads `title` and `text`).
// - `proof` = project slugs from src/content/projects.js; a slug that does not exist yet is skipped.
// - optional item flags: `ai` (lime AI badge), `wide` (full-width card), `audience`, `note`.
// - `facts[].descriptor` renders common[lang].descriptor as the lime AI pill instead of `value`.

const services = {
  tr: {
    eyebrow: "Freelance hizmetler",
    heading: "İşletmenize özel web yazılımı, e-ticaret ve entegrasyon",
    intro:
      "Excel tablolarına, e-postalara ve WhatsApp gruplarına dağılmış işlerinizi tek bir sisteme topluyor; web sitenizi, mağazanızı ve kullandığınız servisleri birbirine bağlıyorum. Analizden yayına, sunucudan bakıma kadar tek muhatabınız benim.",
    cta: {
      introCall: "Ücretsiz ön görüşme isteyin",
    },
    terms: "Ücretsiz ön görüşme; ardından kapsama göre sabit, yazılı teklif.",
    facts: [
      {
        key: "education",
        label: "Eğitim",
        value: "Bilgisayar Mühendisliği",
        detail: "Bahçeşehir Üniversitesi · İngilizce lisans",
      },
      {
        key: "experience",
        label: "Deneyim",
        value: "3+ yıl profesyonel yazılım geliştirme",
        detail:
          "BELBİM'de belbim.istanbul ve istanbulkart.istanbul kurumsal siteleri; İGDAŞ'ta SAP S/4HANA ve Active Directory entegrasyonları",
      },
      {
        key: "product",
        label: "Kendi ürünüm",
        value: "Eribi",
        detail: "Tasarlayıp geliştirdiğim ve işlettiğim e-ticaret platformu",
      },
      {
        key: "ai",
        label: "Çalışma biçimi",
        descriptor: true,
        detail: "Yapay zekâ kod ajanları (Claude Code), testler ve kod incelemesi",
      },
    ],
    list: {
      eyebrow: "Hizmetler",
      title: "Neler yapabilirim?",
      description:
        "Kurumsal siteden e-ticarete, yönetim panelinden yapay zekâ özelliklerine kadar: tasarlıyor, geliştiriyor, yayına alıyor ve bakımını yapıyorum.",
    },
    aiBadge: "Yapay zekâ",
    proofLabel: { one: "İlgili çalışma", other: "İlgili çalışmalar" },
    items: [
      {
        key: "web",
        title: "Kurumsal web sitesi",
        text: "İşinizi doğru anlatan, telefonda hızlı açılan bir site.",
        points: [
          "Mobil uyumlu tasarım, hızlı açılış ve temel SEO ayarları",
          "Teklif ve iletişim formu, WhatsApp bağlantısı",
          "İsteğe bağlı içerik yönetimi: haberler, blog, referanslar",
          "Alan adı, SSL ve barındırma kurulumu",
        ],
        proof: ["darkpost", "olser-bilisim"],
      },
      {
        key: "ecommerce",
        title: "E-ticaret altyapısı",
        text: "Mağazanız kendi platformum Eribi üzerinde ya da size özel olarak kurulsun; sipariş, ödeme, fatura ve kargo tek panelden yönetilsin.",
        points: [
          "Ürün, kategori ve stok yönetimi",
          "Ödeme, e-fatura ve kargo entegrasyonları",
          "Pazaryeri ürün ve sipariş senkronizasyonu",
          "Özel alan adı, otomatik SSL ve yönetim paneli",
        ],
        note: "Standart bir mağaza için hazır bir altyapı çoğu zaman daha ekonomiktir; ihtiyacınız buysa bunu açıkça söylerim.",
        proof: ["eribi"],
      },
      {
        key: "panels",
        title: "Yönetim paneli ve süreç otomasyonu",
        text: "Excel'de ve elle yürüyen işleri, rol ve yetkileri olan tek bir panele taşıyın.",
        points: [
          "Kullanıcı, rol ve yetki yönetimi",
          "Talep, onay ve iş emri akışları",
          "Stok, envanter ve randevu takibi",
          "Raporlar, Excel ve PDF çıktıları",
        ],
        proof: ["igdas-field-operations", "odis"],
      },
      {
        key: "integrations",
        title: "API ve entegrasyonlar",
        text: "Kullandığınız sistemler birbiriyle konuşsun; aynı veriyi üç ayrı yere elle girmeyin.",
        points: [
          "Ödeme, e-fatura, kargo, pazaryeri ve ERP entegrasyonları",
          "Doğrulama, yeniden deneme ve hata kurtarma içeren veri senkronizasyonu",
          "Active Directory / LDAP ile kurumsal oturum açma",
          "Belgelenmiş REST API'ler",
        ],
        proof: ["eribi", "igdas-field-operations"],
      },
      {
        key: "ai",
        ai: true,
        title: "Yapay zekâ özellikleri",
        text: "Ürününüze ya da iş akışınıza yapay zekâyı, maliyeti ve riski kontrol altında tutarak ekleyin.",
        points: [
          "Sisteminizdeki verilere ve işlemlere araçlar (tool use) üzerinden erişen asistanlar",
          "Görsel, video, metin ve rapor üretimi; uzun işler için arka plan kuyrukları",
          "Kullanım hakkı, kredi ve maliyet takibi",
          "Önce test ortamında deneme, canlıda kademeli açılış",
        ],
        note: "Gemini tabanlı bir asistan servisi, fal.ai ile bir medya stüdyosu ve Claude ile analiz raporları geliştirdim.",
        proof: ["eribi-creative", "eribi-growth"],
      },
      {
        key: "ops",
        title: "Bakım, barındırma ve teknik destek",
        text: "Siteniz ve sistemleriniz çalışır, güncel ve yedekli kalsın.",
        points: [
          "Sunucu, alan adı, SSL ve Cloudflare yönetimi",
          "Güvenlik ve sürüm güncellemeleri",
          "Düzenli yedekleme ve geri yükleme testi",
          "Otomatik dağıtım (CI/CD), hata düzeltme ve küçük geliştirmeler",
        ],
        proof: ["ai-native-delivery"],
      },
      {
        key: "ai-setup",
        ai: true,
        wide: true,
        audience: "Yazılım ekipleri ve ajanslar için",
        title: "Yapay zekâ ile geliştirme ortamı",
        text: "Ekibiniz kod ajanlarını güvenle kullanabilsin: ajanların çalıştığı düzeni, testleri ve yayın hattını birlikte kuralım.",
        points: [
          "Depo düzeni, proje belgeleri ve ajanlar için çalışma kuralları",
          "Test altyapısı ve otomatik kontroller (CI)",
          "Ayrı test ve canlı ortamlar, otomatik dağıtım ve geri alma",
          "İnceleme süreci: ajanın yazdığı kod nasıl kontrol edilir",
        ],
        note: "Kendi platformum Eribi'yi bu düzenle geliştiriyor ve işletiyorum.",
        proof: ["ai-native-delivery"],
      },
    ],
    work: {
      eyebrow: "Seçili işler",
      title: "Yaptığım işlerden örnekler",
      description:
        "Müşteri işlerinden ve kendi ürünlerimden seçtiklerim; her projede rolümü ve kullandığım teknolojileri görebilirsiniz.",
      slugs: ["eribi", "darkpost", "olser-bilisim", "ai-native-delivery"],
    },
    process: {
      eyebrow: "Süreç",
      title: "Nasıl çalışıyoruz?",
      description: "Her adımı yazılı olarak netleştiriyoruz; neyi ne zaman göreceğinizi baştan bilirsiniz.",
      steps: [
        {
          title: "Ücretsiz ön görüşme",
          text: "İhtiyacınızı, hedefinizi ve bütçe aralığınızı konuşuyoruz; gerekirse mevcut sisteminize birlikte bakıyoruz.",
        },
        {
          title: "Kapsama göre sabit, yazılı teklif",
          text: "Yapılacak işleri, aşamaları, takvimi ve fiyatı yazılı olarak iletiyorum.",
        },
        {
          title: "Tasarım ve onay",
          text: "Ekranları, geliştirmeye başlamadan önce birlikte netleştiriyoruz.",
        },
        {
          title: "Geliştirme ve demolar",
          text: "Çalışan sürümü test ortamında düzenli olarak görüyor, geri bildiriminizi veriyorsunuz.",
        },
        {
          title: "Yayın ve destek",
          text: "Sistemi yayına alıyor, ekibinize kullanımını gösteriyorum; isterseniz bakım ve destekle devam ediyoruz.",
        },
      ],
    },
    why: {
      eyebrow: "Çalışma ilkelerim",
      title: "Neden benimle?",
      items: [
        {
          key: "owner",
          title: "Tek muhatap",
          text: "Analiz, tasarım, yazılım, sunucu ve bakım aynı kişide; sorumluluk dağılmaz, bilgi kaybolmaz. Kendi ürünlerim de kendi kurduğum ve yönettiğim sunucularda çalışıyor: Windows Server, IIS, Cloudflare Tunnel ve self-hosted CI/CD.",
        },
        {
          key: "discipline",
          title: "Kurumsal disiplin, işinize uygun ölçekte",
          text: "Büyük kurumlarda kullandığım yöntemleri (test ortamı, yedekleme, denetim kaydı) işletmenizin ölçeğine ve bütçesine uyarlıyorum.",
        },
        {
          key: "progress",
          title: "Şeffaf ilerleme",
          text: "Çalışan sürümü geliştirme boyunca test ortamında görürsünüz; sürprizler teslim gününe kalmaz.",
        },
        {
          key: "ai",
          ai: true,
          title: "Yapay zekâ ile, kontrol bende",
          text: "Yapay zekâ kod ajanlarıyla (Claude Code) çalışıyorum. Mayıs 2026'dan bu yana commit'lerimin çoğu Claude Code ile birlikte yazıldı. Mimari, kod incelemesi, testler ve canlıya alma bende.",
        },
      ],
      terminal: {
        title: "~/teslimat",
        label: "Bir işi nasıl teslim ettiğimi özetleyen terminal görünümü",
        command: "erdem --teslimat",
        lines: [
          { key: "görev", text: "Kapsamı küçük, test edilebilir görevlere bölüyorum." },
          { key: "ajan", text: "Kodu Claude Code ile birlikte yazıyorum." },
          { key: "test", text: "xUnit · Vitest · Playwright" },
          { key: "ci", text: "GitHub Actions → test ortamı" },
          { key: "inceleme", text: "Kodu inceleyip onaylıyorum." },
          { key: "yayın", text: "Canlıya çıkış; riskli değişiklikler özellik bayrağının arkasında." },
        ],
        result: "önce test ortamı, sonra canlı",
      },
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      more: "Sorunuzun cevabı burada yoksa bana e-posta gönderebilirsiniz:",
      items: [
        {
          q: "Nasıl başlıyoruz?",
          a: "Ne yapmak istediğinizi iletişim formundan ya da WhatsApp'tan kısaca yazın. Ücretsiz bir ön görüşmede ihtiyacınızı netleştiriyoruz; ardından kapsama göre sabit, yazılı bir teklif hazırlıyorum.",
        },
        {
          q: "Fiyatı nasıl belirliyorsunuz?",
          a: "Her iş için kapsama göre sabit, yazılı teklif veriyorum. Teklifte kapsam, aşamalar ve takvim de yazılı olarak yer alıyor. Kapsam değişirse yeni kalemleri yine yazılı olarak netleştiriyoruz.",
        },
        {
          q: "Ne kadar sürer?",
          a: "Süre kapsama göre değişiyor. Takvimi, teklifte aşamalarıyla birlikte yazılı olarak netleştiriyoruz.",
        },
        {
          q: "Hazır bir altyapı mı, özel yazılım mı?",
          a: "Standart ihtiyaçlarda hazır bir çözümü öneririm; e-ticarette kendi platformum Eribi de bir seçenek. İş akışınız size özelse ya da birden fazla sistemi birbirine bağlamanız gerekiyorsa özel yazılım uzun vadede daha ekonomik olabilir.",
        },
        {
          q: "Yayından sonra ne oluyor?",
          a: "İsterseniz bakım ve destekle devam ediyoruz: güncellemeler, yedekleme, hata düzeltme ve küçük geliştirmeler. Bu kapsamı da yazılı olarak belirliyoruz.",
        },
        {
          q: "Yapay zekâ araçları kullanıyor musunuz?",
          a: "Evet, her gün. Yapay zekâ kod ajanlarıyla (Claude Code) çalışıyorum; Mayıs 2026'dan bu yana commit'lerimin çoğu Claude Code ile birlikte yazıldı. Ajanlar, testleri ve otomatik dağıtımı olan bir ortamda çalışıyor; mimari kararlar, kod incelemesi, testler ve canlıya alma bende. Kodunuz ve verileriniz için hangi araçların kullanılabileceğini sözleşmede birlikte belirliyoruz.",
        },
        {
          q: "KVKK'ya uygun mu?",
          a: "Formlar, aydınlatma metni bağlantısı, çerez bilgilendirmesi ve veri saklama için gerekli teknik altyapıyı kuruyorum. Hukuki metinlerin son kontrolünü hukuk danışmanınızın yapmasını öneririm.",
        },
        {
          q: "Mobil uygulama da geliştiriyor musunuz?",
          a: "BELBİM'de İstanbulkart mobil uygulamasını geliştiren ekipte yer alıyorum; Expo ile geliştirdiğim bir mobil uygulama ise henüz geliştirme aşamasında. Daha önce Tiramisu Studios'ta, ekibin bir parçası olarak Unity ile Drift Max mobil oyunları üzerinde çalıştım. Bugün çoğu proje için telefonda hızlı açılan, mobil uyumlu bir web uygulaması öneriyorum.",
        },
        {
          q: "İngilizce de çalışıyor musunuz?",
          a: "Evet. Türkçe ve İngilizce çalışıyorum; lisans eğitimimi İngilizce aldım. İstanbul'dayım (UTC+3).",
        },
      ],
    },
    closing: {
      eyebrow: "Sonraki adım",
      title: "Projenizi konuşalım",
      text: "Ne yapmak istediğinizi kısaca yazın. Ücretsiz ön görüşmede neyin mümkün olduğunu, yaklaşık süreyi ve bütçeyi birlikte netleştirelim.",
    },
  },
  en: {
    eyebrow: "Freelance services",
    heading: "Web apps, e-commerce and integrations for your business",
    intro:
      "I bring work that is scattered across spreadsheets, email threads and chat groups into one system, and connect your website, your store and the services you already use. From analysis to launch, and from the server to maintenance, you work with one person: me.",
    cta: {
      introCall: "Request a free intro call",
    },
    terms: "A free intro call, then a fixed written quote based on scope.",
    facts: [
      {
        key: "education",
        label: "Education",
        value: "BSc Computer Engineering",
        detail: "Bahçeşehir University · taught in English",
      },
      {
        key: "experience",
        label: "Experience",
        value: "3+ years building production software",
        detail:
          "The belbim.istanbul and istanbulkart.istanbul websites at BELBİM; SAP S/4HANA and Active Directory integrations at İGDAŞ",
      },
      {
        key: "product",
        label: "My product",
        value: "Eribi",
        detail: "The e-commerce platform I designed, built and run",
      },
      {
        key: "ai",
        label: "How I work",
        descriptor: true,
        detail: "AI coding agents (Claude Code), with tests and code review",
      },
    ],
    list: {
      eyebrow: "Services",
      title: "What I can build for you",
      description:
        "From company websites and online stores to admin panels and AI features: I design, build, launch and maintain them.",
    },
    aiBadge: "AI",
    proofLabel: { one: "Related work", other: "Related work" },
    items: [
      {
        key: "web",
        title: "Company websites",
        text: "A fast, mobile-friendly site that explains your business clearly.",
        points: [
          "Responsive design, fast loading and SEO basics",
          "Quote and contact forms, plus a WhatsApp link",
          "Optional content management: news, blog, client logos and case studies",
          "Domain, SSL and hosting setup",
        ],
        proof: ["darkpost", "olser-bilisim"],
      },
      {
        key: "ecommerce",
        title: "E-commerce stores",
        text: "Your store on my own platform, Eribi, or built for you, with orders, payments, invoices and shipping managed from one panel.",
        points: [
          "Product, category and stock management",
          "Payment, e-invoicing and shipping integrations",
          "Marketplace product and order sync",
          "Custom domain, automatic SSL and an admin panel",
        ],
        note: "For a standard store, a ready-made platform is often the cheaper choice. If that is what you need, I will say so.",
        proof: ["eribi"],
      },
      {
        key: "panels",
        title: "Admin panels and process automation",
        text: "Role-based panels that replace spreadsheets and manual hand-offs.",
        points: [
          "User, role and permission management",
          "Request, approval and work-order flows",
          "Stock, inventory and appointment tracking",
          "Reports with Excel and PDF exports",
        ],
        proof: ["igdas-field-operations", "odis"],
      },
      {
        key: "integrations",
        title: "APIs and integrations",
        text: "Your systems talk to each other, so nobody types the same data into three places.",
        points: [
          "Payment, e-invoicing, shipping, marketplace and ERP integrations",
          "Data sync with validation, retries and failure recovery",
          "Company sign-in with Active Directory / LDAP",
          "Documented REST APIs",
        ],
        proof: ["eribi", "igdas-field-operations"],
      },
      {
        key: "ai",
        ai: true,
        title: "AI features",
        text: "Add AI to your product or workflow with cost and risk under control.",
        points: [
          "Assistants that can look up your data and take actions through tool calls",
          "Image, video, text and report generation, with background queues for long jobs",
          "Usage allowances, credits and cost tracking",
          "A trial in a test environment first, then a gradual rollout in production",
        ],
        note: "I built a Gemini-based assistant service, a media studio on fal.ai and Claude-written analysis reports.",
        proof: ["eribi-creative", "eribi-growth"],
      },
      {
        key: "ops",
        title: "Maintenance, hosting and support",
        text: "Your site and systems stay up, up to date and backed up.",
        points: [
          "Servers, domains, SSL and Cloudflare",
          "Security and version updates",
          "Regular backups and restore tests",
          "Automated deployments (CI/CD), bug fixes and small improvements",
        ],
        proof: ["ai-native-delivery"],
      },
      {
        key: "ai-setup",
        ai: true,
        wide: true,
        audience: "For software teams and agencies",
        title: "AI-ready engineering setup",
        text: "Let your team use coding agents safely: we set up the structure the agents work in, the tests and the release pipeline together.",
        points: [
          "Repository layout, project docs and working rules for agents",
          "Test setup and automated checks (CI)",
          "Separate test and production environments, automated deploys and rollback",
          "A review process for agent-written code",
        ],
        note: "This is how I build and run my own platform, Eribi.",
        proof: ["ai-native-delivery"],
      },
    ],
    work: {
      eyebrow: "Selected work",
      title: "Examples of my work",
      description: "Client work and my own products, each with my role and the stack I used.",
      slugs: ["eribi", "darkpost", "olser-bilisim", "ai-native-delivery"],
    },
    process: {
      eyebrow: "Process",
      title: "How we work together",
      description: "We agree on each step in writing, so you know from the start what you will see and when.",
      steps: [
        {
          title: "Free intro call",
          text: "We talk through what you need, your goals and your budget range, and look at your current setup if there is one.",
        },
        {
          title: "Fixed written quote based on scope",
          text: "I send you the work items, milestones, schedule and price in writing.",
        },
        {
          title: "Design and sign-off",
          text: "We agree on the screens before development starts.",
        },
        {
          title: "Build and demos",
          text: "You see the working version in a test environment as it grows and give feedback along the way.",
        },
        {
          title: "Launch and support",
          text: "I deploy it and show your team how to use it; maintenance and support can continue from there.",
        },
      ],
    },
    why: {
      eyebrow: "How I work",
      title: "Why work with me",
      items: [
        {
          key: "owner",
          title: "One point of contact",
          text: "Analysis, design, code, servers and maintenance sit with one person, so responsibility stays clear and nothing gets lost in hand-offs. My own products run on servers I set up and run myself: Windows Server, IIS, Cloudflare Tunnel and self-hosted CI/CD.",
        },
        {
          key: "discipline",
          title: "Enterprise discipline, sized for you",
          text: "I bring the practices I use in large organizations (test environments, backups, audit logs) and scale them to your business and budget.",
        },
        {
          key: "progress",
          title: "Visible progress",
          text: "You see the working version in a test environment as it grows, so nothing is left as a surprise for delivery day.",
        },
        {
          key: "ai",
          ai: true,
          title: "AI-native, with me in charge",
          text: "I build with AI coding agents (Claude Code). Since May 2026, most of my commits have been co-written with Claude Code. Architecture, code review, tests and releases stay with me.",
        },
      ],
      terminal: {
        title: "~/delivery",
        label: "Terminal-style summary of how I deliver a project",
        command: "erdem --deliver",
        lines: [
          { key: "task", text: "Break the scope into small, testable tasks." },
          { key: "agent", text: "Write the code together with Claude Code." },
          { key: "test", text: "xUnit · Vitest · Playwright" },
          { key: "ci", text: "GitHub Actions → test environment" },
          { key: "review", text: "Review and approve the code myself." },
          { key: "release", text: "Ship to production; risky changes sit behind feature flags." },
        ],
        result: "test environment first, then production",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      more: "If your question is not answered here, email me:",
      items: [
        {
          q: "How do we start?",
          a: "Tell me briefly what you need through the contact form or on WhatsApp. We clarify it in a free intro call, and then I send you a fixed written quote based on scope.",
        },
        {
          q: "How do you price a project?",
          a: "Every project gets a fixed written quote based on scope. The quote also sets out the scope, the milestones and the schedule in writing. If the scope changes, we agree on the additions in writing too.",
        },
        {
          q: "How long does it take?",
          a: "It depends on the scope. We agree on the schedule and its milestones in writing, as part of the quote.",
        },
        {
          q: "Ready-made platform or custom software?",
          a: "For standard needs I recommend a ready-made solution; for e-commerce, my own platform Eribi is one option. If your workflow is specific to you, or you need several systems connected, custom software can be cheaper in the long run.",
        },
        {
          q: "What happens after launch?",
          a: "If you like, we continue with maintenance and support: updates, backups, bug fixes and small improvements. We agree on that scope in writing as well.",
        },
        {
          q: "Do you use AI tools?",
          a: "Yes, every day. I build with AI coding agents (Claude Code), and since May 2026 most of my commits have been co-written with Claude Code. The agents work inside an environment with tests and automated deployment; architecture decisions, code review, tests and releases stay with me. We agree in the contract which tools may touch your code and data.",
        },
        {
          q: "What about data protection (KVKK in Türkiye, GDPR in the EU)?",
          a: "I set up the technical side: forms, links to the privacy notice, cookie consent and data retention. I recommend having the legal texts reviewed by your own legal adviser.",
        },
        {
          q: "Do you build mobile apps?",
          a: "At BELBİM I am part of the team developing the İstanbulkart mobile app, and I am building a separate mobile app with Expo that is still in development. Earlier, at Tiramisu Studios, I worked on the Drift Max mobile games in Unity as part of the team. For most projects today, I recommend a fast, mobile-friendly web app.",
        },
        {
          q: "Do you work in English?",
          a: "Yes. I work in Turkish and English, and my degree was taught in English. I am based in Istanbul (UTC+3).",
        },
      ],
    },
    closing: {
      eyebrow: "Next step",
      title: "Have a product to build or systems to connect?",
      text: "Tell me briefly what you are working on. In a free intro call we can work out what is possible, a rough timeline and the budget.",
    },
  },
};

export default services;
