// Long case-study copy (master plan §B.2 case-study template, §F.3), keyed by project slug, TR and EN.
// Only the case-study page (src/pages/ProjectDetail.jsx, its own chunk) imports this module, so the cards, routes,
// meta and JSON-LD in the main bundle never carry it. Card-level fields (title, summary, outcomeLine, period, role,
// status, stack, links, image/cover) stay in src/content/projects.js; the same honesty rules apply here:
// facts from discovery/fact-sheet.md and the owner decisions only, unknown → omitted.
// - `context`, `did` (bullets) and `outcome` (bullets) are arrays of paragraphs/items per language;
// - `didNote`, `outcome`, `imageAlt`, `caption` and `screens` are optional. A project with one screenshot (its card
//   `image`) has `imageAlt`/`caption`; a case study with several (BELBİM: one per site) lists them as
//   `screens: [{ image, alt, caption }]` instead, where `image` is a key in projectImages.js.

import { PROJECT_SLUGS } from "./projectSlugs.js";

export const PROJECT_DETAILS = {
  eribi: {
    context: {
      tr: [
        "Amaç, ajansların, müşterilerinin mağazalarını tek bir panelden açıp yönetebilmesi. Her mağazanın kendi veritabanı, vitrini ve yönetim paneli var; ödeme, e-fatura, yurt içi ve yurt dışı kargo, pazaryeri senkronizasyonu, otomatik SSL'li özel alan adı, tema ve sayfa oluşturucu ile abonelik faturalaması platformun içinde geliyor.",
        "Platformda kurulan ilk vitrin, demo verileriyle hazırlanan Han\u00a0Tasarım mağazasıydı.",
      ],
      en: [
        "The goal is to let agencies open and run their clients' stores from one panel. Every store gets its own database, storefront and admin; payments, e-invoicing, domestic and international shipping, marketplace sync, custom domains with automatic SSL, a theme and page builder, and subscription billing come built in.",
        "The first storefront on the platform was Han\u00a0Tasarım, a store set up with demo data.",
      ],
    },
    did: {
      tr: [
        ".NET 8 ile platformun çekirdeğini kurdum: mağaza API'si, ajans API'si, kimlik doğrulama, abonelik ve faturalama motoru. Her kiracının ayrı veritabanı, önbelleği ve dosya alanı var.",
        "Yeni mağaza kurulumunu tek akışa bağladım: kiracı veritabanı, Cloudflare DNS kaydı, Let's Encrypt sertifikası ve IIS sitesi otomatik oluşuyor.",
        "Ödeme, e-fatura, bildirim, yurt içi ve yurt dışı kargo, alan adı, pazaryeri, ERP ve yapay zekâ entegrasyonlarını YARP tabanlı bir API gateway arkasında dokuz ayrı servise ayırdım. Her geçiş bir özellik bayrağının arkasında ve tek ayarla geri alınabiliyor.",
        "Next.js ile iş ortağı panelini, başvuru hunisini ve eribitech.com'u geliştirdim.",
        "Ağustos 2026'da tüm ekosistemi SQL Server'dan PostgreSQL 17'ye taşıdım; eski veritabanlarını son yedeklerini aldıktan sonra kapattım.",
      ],
      en: [
        "Built the platform core in .NET 8: a store API, an agency API, authentication and a subscription and billing engine. Each tenant has its own database, cache and file storage.",
        "Turned store provisioning into one flow: the tenant database, Cloudflare DNS record, Let's Encrypt certificate and IIS site are created automatically.",
        "Split the payment, e-invoice, notification, domestic and international shipping, domain, marketplace, ERP and AI integrations into nine services behind a YARP API gateway. Each cutover sits behind a feature flag and can be switched off with one setting.",
        "Built the partner panel, the onboarding funnel and eribitech.com with Next.js.",
        "Migrated the whole ecosystem from SQL Server to PostgreSQL 17 in August 2026 and retired the old databases after a final backup.",
      ],
    },
    didNote: {
      tr: "Mağaza vitrinini ve pazaryeri entegrasyonunu bir ekip arkadaşımla birlikte geliştirdik.",
      en: "I built the storefront and the marketplace integration together with a teammate.",
    },
    outcome: {
      tr: [
        "Platform ayrı test ve canlı sunucularda, otomatik dağıtımla çalışıyor.",
        "DIA ERP entegrasyonu Eylül 2026'dan beri test ve canlı ortamda çalışıyor.",
      ],
      en: [
        "The platform runs on separate test and production servers with automated deploys.",
        "The integration with DIA, a Turkish ERP, has run in test and production since September 2026.",
      ],
    },
    imageAlt: {
      tr: "eribitech.com ana sayfası: Eribi maskotu, “Siteniz, reklamınız, içeriğiniz: tek ekipten, yazılı fiyatla.” başlığı ve Teklif Al düğmesi",
      en: "eribitech.com home page: the Eribi mascot, a Turkish headline offering a website, ads and content from one team at a written price, and a quote button",
    },
    caption: {
      tr: "eribitech.com ana sayfası, Ekim 2026. Eribitech'in KOBİ'lere yönelik ajans hizmetinde e-ticaret siteleri kendi altyapısı Eribi üzerinde kuruluyor.",
      en: "The eribitech.com home page, October 2026. Eribitech's agency service for small businesses builds its clients' online stores on its own Eribi platform.",
    },
  },
  "ai-native-delivery": {
    context: {
      tr: [
        "Mayıs 2026'dan bu yana commit'lerimin çoğu Claude Code ile birlikte yazıldı. Ajanlarla daha hızlı ilerliyorum; bu hızın kaliteden götürmemesi için ajanların çalıştığı ortamı en az kod kadar önemsiyorum.",
        "Ajanlar benim kurduğum düzende çalışıyor: net katmanlar, proje belgeleri, testler, ayrı test ve canlı sunucular, otomatik dağıtım. Mimari, kod incelemesi, testler ve canlıya alma kararı bende.",
      ],
      en: [
        "Since May 2026, most of my commits have been co-written with Claude Code. Agents let me move faster; to keep that speed from costing quality, I treat the environment the agents work in as seriously as the code.",
        "The agents work inside a setup I built: clear layers, project docs, tests, separate test and production servers and automated deploys. Architecture, code review, tests and the release decision stay with me.",
      ],
    },
    did: {
      tr: [
        "Test ve canlı ortam için iki ayrı fiziksel Windows sunucu kurdum; 1 Ekim 2026'da iki ortamın eşdeğerliğini denetledim.",
        "GitHub Actions ve self-hosted runner'larla otomatik dağıtım kurdum; 21 depoda dağıtım hattı var. Tek yapılandırma dosyasıyla çalışan bir PowerShell betiği .NET uygulamalarını IIS'e, Next.js uygulamalarını PM2'ye dağıtıyor.",
        "Bakım için 80'i aşkın iş akışı kurdum: PostgreSQL yedekleme ve geri yükleme tatbikatı, IIS ve PM2 tanılama, gizli anahtar yenileme, PageSpeed ölçümü.",
        "Cloudflare'de DNS'i, Origin CA sertifikalarıyla uçtan uca şifrelemeyi (Full strict), kiracı alan adları için Cloudflare for SaaS'ı ve test ortamının önündeki Cloudflare Access'i yapılandırdım.",
        "Riskli geçişleri özellik bayraklarının arkasına koydum; canlıdaki bir değişiklik tek ayarla kapatılabiliyor. Veritabanı işlerinde önce yedek alıp geri yükleme tatbikatı yapıyorum.",
        "Çok ajanlı çalışıyorum: işi parçalara bölen bir koordinatör ajan diğer ajanlara iş emri veriyor. Geliştirme aşamasındaki Eribi Hub mobil uygulamasının planı 64 iş emriyle yürüdü.",
      ],
      en: [
        "Set up two separate physical Windows servers for test and production, and audited their equivalence on 1 October 2026.",
        "Automated deployment with GitHub Actions on self-hosted runners; 21 repositories have a deploy pipeline. One config-driven PowerShell script deploys .NET apps to IIS and Next.js apps to PM2.",
        "Built more than 80 maintenance workflows: PostgreSQL backups and restore drills, IIS and PM2 diagnostics, secret rotation and PageSpeed measurement.",
        "Configured Cloudflare: DNS, end-to-end encryption in Full (strict) mode with Origin CA certificates, Cloudflare for SaaS for tenant domains and Cloudflare Access in front of the test environment.",
        "Put risky cutovers behind feature flags, so a change in production can be switched off with one setting; for database work, backups and restore drills come first.",
        "Introduced multi-agent work: a coordinator agent splits the work and issues task orders to the others. The plan for the Eribi Hub mobile app, still in development, ran on 64 task orders.",
      ],
    },
    outcome: {
      tr: [
        "Canlı sunucunun boştaki bellek kullanımını ölçtüm ve çoğunlukla .NET DATAS GC moduyla %72'den %60'a indirdim (Ağustos 2026).",
        "Ağustos 2026'da tüm veritabanlarını SQL Server'dan PostgreSQL 17'ye, yedekleme ve geri yükleme tatbikatı iş akışlarıyla taşıdım.",
      ],
      en: [
        "Measured the production server's idle memory use and cut it from 72% to 60%, mainly with .NET DATAS GC mode (August 2026).",
        "Migrated every database from SQL Server to PostgreSQL 17 in August 2026, backed by backup and restore-drill workflows.",
      ],
    },
  },
  "eribi-growth": {
    context: {
      tr: [
        "Bir ajansın yeni müşteri bulması üç adımdan oluşuyor: aday firmaları bulmak, sitelerindeki eksikleri görmek ve kişiye özel bir ilk mesaj yazmak. Growth bu üç adımı tek panelde topluyor.",
      ],
      en: [
        "Winning a new client takes an agency three steps: finding candidate companies, spotting what their websites lack and writing a personal first message. Growth brings the three steps into one panel.",
      ],
    },
    did: {
      tr: [
        "Aday firmaları sektöre ve şehre göre bulan, farklı kaynaklardan (Google Places, web tarama, CSV) gelen kayıtları tek listede toplayan modülü geliştirdim.",
        "Adayın web sitesini teknik, SEO, e-ticaret ve kullanıcı deneyimi açısından inceleyen bir site analiz aracı yazdım; bulgular Anthropic Claude ile rapora dönüşüyor.",
        "Yapay zekâyla kişiye özel ilk e-postayı hazırlayan akışı kurdum; gönderimler arka plan işleriyle ve DKIM imzasıyla yapılıyor.",
        "Backend'i .NET 8, PostgreSQL ve Hangfire ile geliştirdim; Next.js 15 arayüzü API'ye bir sunucu katmanı (BFF) üzerinden bağlanıyor.",
      ],
      en: [
        "Built the module that finds companies by sector and city and merges leads from several sources (Google Places, web crawling, CSV) into one list.",
        "Wrote a site analyzer that checks a lead's website for technical, SEO, e-commerce and UX issues; Anthropic Claude turns the findings into a report.",
        "Built the flow that drafts a personal first email with AI; emails go out through background jobs with DKIM signing.",
        "Built the back end with .NET 8, PostgreSQL and Hangfire; the Next.js 15 front end reaches the API through a server-side layer (BFF).",
      ],
    },
    outcome: {
      tr: [
        "Firma bulma, site analizi ve yapay zekâyla ilk e-posta growth.eribitech.com'da yayında. Sıralı takip e-postaları sitede “planlandı” olarak işaretli.",
      ],
      en: [
        "Lead search, site analysis and the AI-written first email are live at growth.eribitech.com. Follow-up sequences are marked as planned on the site.",
      ],
    },
    imageAlt: {
      tr: "growth.eribitech.com ana sayfası: “Müşteri bul, ilk mesajı Ribi AI yazsın.” başlığı ile firma bulma, site analizi, Ribi AI mesaj ve takip kartları",
      en: "growth.eribitech.com home page: a Turkish headline about finding clients and letting Ribi AI write the first message, with cards for lead search, site analysis, AI message and follow-up",
    },
    caption: {
      tr: "growth.eribitech.com ana sayfası, Ekim 2026. Ribi AI, Eribi'nin yapay zekâ asistanının adı; takip kartında “planlandı” etiketi var.",
      en: "The growth.eribitech.com home page, October 2026. Ribi AI is the name of Eribi's AI assistant; the follow-up card is labeled as planned.",
    },
  },
  "eribi-creative": {
    context: {
      tr: [
        "Creative, Eribi iş ortaklarının müşterileri için ürün görseli, kısa video ve ses üretebildiği stüdyo. İş ortağı paneline bağlı çalışıyor; bağımsız bir hesapla da kullanılabiliyor.",
      ],
      en: [
        "Creative is the studio where Eribi partners can produce product images, short videos and audio for their clients. It is connected to the partner panel and can also be used with a standalone account.",
      ],
    },
    did: {
      tr: [
        "fal.ai modelleriyle görsel, video ve ses üretimini kurdum: tek fotoğraftan ürün çekimi, kısa tanıtım videosu, seslendirme ve müzik, sanal manken.",
        "Uzun süren üretimleri arka planda kuyruk ve webhook'larla tamamlanacak şekilde kurguladım.",
        "Her üretimi haftalık kullanım hakkından düşen bir ölçüm sistemi ve ortak bir medya kütüphanesi kurdum.",
        "İş ortağı panelinden tek oturum açmayı (SSO) ve müşterinin içerikleri tek bir bağlantı üzerinden onaylamasını sağlayan akışı geliştirdim.",
      ],
      en: [
        "Set up image, video and audio generation with fal.ai models: product shots from a single photo, short promo videos, voice-over and music, and virtual fashion models that show clothing.",
        "Moved long-running generations to background jobs with queues and webhooks.",
        "Built metering that charges every generation against a weekly allowance, and a shared media library.",
        "Built single sign-on from the partner panel, and an approval link that lets the agency's client sign off on the content.",
      ],
    },
    imageAlt: {
      tr: "creative.eribitech.com ana sayfası: “Markan için görsel, video ve ses.” başlığı ile ürün stüdyosu, video, ses, sanal manken ve onay linki kartları",
      en: "creative.eribitech.com home page: a Turkish headline about images, video and audio for your brand, with cards for product studio, video, audio, virtual model and approval link",
    },
    caption: {
      tr: "creative.eribitech.com ana sayfası, Ekim 2026.",
      en: "The creative.eribitech.com home page, October 2026.",
    },
  },
  "belbim-headless-cms": {
    context: {
      tr: [
        "BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş.'de Uzman Yazılım Geliştirici olarak çalışıyorum. Burada belbim.istanbul ve istanbulkart.istanbul kurumsal sitelerini geliştirdim. Editörler içeriği Umbraco üzerinde geliştirdiğim headless CMS'te hazırlıyor; siteler bu içeriği API üzerinden alan Next.js 15 uygulamaları.",
        "İşveren projesi olduğu için kurum içi ekranları ve gizli ayrıntıları paylaşmıyorum. Ekran görüntüleri yalnızca sitelerin herkese açık ana sayfalarını gösteriyor.",
      ],
      en: [
        "I work at BELBİM Elektronik Para ve Ödeme Hizmetleri A.Ş. as a Software Development Specialist. There I built the corporate websites belbim.istanbul and istanbulkart.istanbul. Editors prepare the content in a headless CMS I build on Umbraco; the sites are Next.js 15 apps that read that content through an API.",
        "This is employer work, so I share no internal screens or confidential details. The screenshots show only the sites' public home pages.",
      ],
    },
    did: {
      tr: [
        "Sitelerin arayüzlerini Next.js 15, React 19 ve TypeScript ile API öncelikli olarak geliştirdim: SSG ve ISR, CDN arkasında statik yayın, API tabanlı çevirilerle Türkçe ve İngilizce içerik.",
        "Umbraco üzerinde headless CMS backend'ini geliştirdim: sürümlenen içerik ve durum tabanlı yayın akışları.",
        "Eski bir Umbraco sistemini katmanlı Clean Architecture'a (Domain / Application / Infrastructure) taşıyorum; Repository, Strategy, Composition ve Result desenlerini uyguluyorum.",
        "LDAP / Active Directory ile merkezi kimlik doğrulamayı entegre ettim.",
        "Yazı boyutu, yüksek kontrast, karanlık mod ve sesli okuma gibi WCAG odaklı erişilebilirlik özellikleri, bir çerez onay sistemi ve istemci tarafında tam metin arama ekledim.",
        "İstanbulkart mobil uygulamasını geliştiren ekipte yer alıyorum.",
      ],
      en: [
        "Built the sites' API-first front ends with Next.js 15, React 19 and TypeScript: SSG and ISR, static export behind a CDN, and Turkish and English content with API-based translations.",
        "Built the headless CMS back end on Umbraco, with versioned content and state-based publishing workflows.",
        "Migrating a legacy Umbraco system to a layered Clean Architecture (Domain / Application / Infrastructure), applying the Repository, Strategy, Composition and Result patterns.",
        "Integrated LDAP / Active Directory for central authentication.",
        "Added WCAG-oriented accessibility features (font scaling, high contrast, dark mode, text-to-speech), a cookie-consent system and client-side full-text search.",
        "Member of the team developing the İstanbulkart mobile app.",
      ],
    },
    outcome: {
      tr: ["belbim.istanbul ve istanbulkart.istanbul yayında; ikisi de içeriğini headless CMS'ten alan Next.js siteleri."],
      en: ["belbim.istanbul and istanbulkart.istanbul are live, both as Next.js sites that get their content from the headless CMS."],
    },
    // One screenshot per site, in the order of `liveUrls` (projects.js); public home pages only.
    screens: [
      {
        image: "belbim",
        alt: {
          tr: "belbim.istanbul ana sayfası: üst menü, “Öğrenci İstanbulkart Plus'a kart bedeli ödemeden sahip ol!” başlığı, bir telefon ve İstanbulkart Plus kartı",
          en: "belbim.istanbul home page: the site header and a Turkish headline offering the Student İstanbulkart Plus with no card fee, next to a phone and an İstanbulkart Plus card",
        },
        caption: { tr: "belbim.istanbul ana sayfası, Ekim 2026.", en: "The belbim.istanbul home page, October 2026." },
      },
      {
        image: "istanbulkart",
        alt: {
          tr: "istanbulkart.istanbul ana sayfası: üst menü, “Sanal İstanbulkart Plus ile Online Alışverişte Kontrol Sende!” başlığı ve sanal kartı gösteren bir telefon",
          en: "istanbulkart.istanbul home page: the site header and a Turkish headline about staying in control of online shopping with the virtual İstanbulkart Plus, next to a phone showing a virtual card",
        },
        caption: {
          tr: "istanbulkart.istanbul ana sayfası, Ekim 2026.",
          en: "The istanbulkart.istanbul home page, October 2026.",
        },
      },
    ],
  },
  "igdas-field-operations": {
    context: {
      tr: [
        "İGDAŞ'ın (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.) saha ekipleri işlerini 7/24 kullanılan bir operasyon otomasyon platformuyla yürütüyor. Platform Active Directory, SQL Server ve SAP ile entegre çalışıyor.",
        "İşveren projesi olduğu için ekran görüntüsü ve gizli ayrıntı paylaşmıyorum; mimariyi ve rolümü anlatıyorum.",
      ],
      en: [
        "Field teams at İGDAŞ (İstanbul Gaz Dağıtım San. ve Tic. A.Ş.) run their work through an operations-automation platform that is in use around the clock. It is integrated with Active Directory, SQL Server and SAP.",
        "This is employer work, so I share no screenshots or confidential details; I describe the architecture and my role.",
      ],
    },
    did: {
      tr: [
        "Saha iş akışlarını (talep → atama → uygulama → tamamlama → raporlama) deterministik durum makineleri olarak modelledim.",
        "Anlık ve periyodik (haftalık, aylık) işler için kural tabanlı planlama geliştirdim.",
        "Merkez depo, araç deposu ve saha tüketimi arasındaki stok akışlarını eşzamanlı kullanımda tutarlı kalacak şekilde tasarladım; araçları hareketli stok noktaları olarak modelledim.",
        "SAP S/4HANA entegrasyonunda (senkronizasyon, doğrulama, yeniden deneme, hata kurtarma) ve Active Directory ile kimlik doğrulamada çalıştım.",
        "Teknik şartname onay iş akışının ve revir randevu ile tıbbi malzeme takip sisteminin (TMT) geliştirilmesinde, ayrıca kurumsal web sitesinin yenilenmesinde görev aldım.",
        "Raporlama için veri yoğun SQL sorguları yazdım; saha operasyonları sisteminin KVKK denetim sürecinde yer aldım.",
      ],
      en: [
        "Modeled the field workflows (intake → assignment → execution → completion → reporting) as deterministic state machines.",
        "Built rule-based scheduling for on-demand and recurring (weekly, monthly) jobs.",
        "Designed inventory flows between central warehouses, vehicle depots and field consumption to stay consistent under concurrent use, with vehicles modeled as mobile stock points.",
        "Worked on the SAP S/4HANA integration (sync, validation, retries, failure recovery) and on Active Directory authentication.",
        "Contributed to the technical-specification approval workflow, the infirmary appointment and medical-supply tracking system, and the redevelopment of the corporate website.",
        "Wrote data-heavy SQL for reporting and took part in the KVKK (Turkish data-protection law) audit of the field-operations system.",
      ],
    },
    outcome: {
      tr: ["İGDAŞ'ın SAP S/4HANA dönüşümü 2024'te canlıya alındı; bu süreçte platformun SAP entegrasyonu üzerinde çalıştım."],
      en: ["İGDAŞ's SAP S/4HANA transformation went live in 2024; during it I worked on the platform's SAP integration."],
    },
  },
  "drift-max": {
    context: {
      tr: [
        "Drift Max Pro ve Drift Max City, Tiramisu Studios'un mobil yarış oyunları. Stüdyonun verilerine göre Drift Max Pro 120 milyonu, Drift Max City 25 milyonu aşkın kez indirildi. Bu rakamlar oyunların toplamı; kişisel etkimi değil, ekibin çalıştığı ölçeği gösteriyor.",
        "Eylül – Kasım 2022'de stajyer olarak, Aralık 2022'den Temmuz 2023'e kadar uzaktan ve tam zamanlı Oyun Geliştirici olarak çalıştım.",
      ],
      en: [
        "Drift Max Pro and Drift Max City are Tiramisu Studios' mobile racing games. Per the studio, Drift Max Pro has more than 120 million downloads and Drift Max City more than 25 million. These are the games' totals: they show the scale the team worked at, not my personal impact.",
        "I was an intern from September to November 2022, then a remote, full-time Game Developer from December 2022 to July 2023.",
      ],
    },
    did: {
      tr: [
        "Trafik sistemini object pooling ile geliştirip optimize ettim; çalışma zamanı performansı ve bellek kullanımı iyileşti.",
        "Drift Max City'nin açık dünya haritasında tekrar eden seviye tasarımı işlerini otomatikleştiren Unity editör araçları yazdım.",
        "Harita yükleme ve kurtarma mekanizmalarını iyileştirdim; daha verimli bir occlusion culling sistemiyle GPU yükünü azalttım.",
        "Stajda, araçların performansını ve görünümünü yükselten modüler bir mağaza sistemine sahip 3D drift yarış oyunu prototipi geliştirdim.",
      ],
      en: [
        "Built and optimized the traffic system with object pooling, improving runtime performance and memory use.",
        "Wrote Unity editor tools that automate repetitive level-design work on Drift Max City's open-world map.",
        "Improved map loading and recovery, and reduced GPU load with a more efficient occlusion-culling system.",
        "As an intern, built a 3D drift-racing prototype with a modular shop for performance and visual upgrades.",
      ],
    },
  },
  darkpost: {
    context: {
      tr: [
        "DarkPost Agency, e-ticaret mağazalarını sahiplerinin markasıyla açıp günlük operasyonlarını yürüten bir pazarlama ve e-ticaret ajansı; aynı zamanda bir Eribi iş ortağı.",
      ],
      en: [
        "DarkPost Agency is a marketing and e-commerce agency that opens online stores under its clients' own brands and runs their day-to-day operations. It is also an Eribi partner.",
      ],
    },
    did: {
      tr: [
        "Next.js 16 ile hizmet ve paket sayfalarını, canlı paket listesini ve tek sayfalık mağaza başvuru formunu geliştirdim.",
        "Başvurular, API anahtarını tarayıcıya göstermeyen bir sunucu katmanı üzerinden Eribi iş ortağı API'sine iletiliyor; form verisi zod ile doğrulanıyor.",
        "Siteyi sıkı bir içerik güvenliği politikasıyla (CSP) yayına aldım; IIS ve PM2 üzerinde çalışıyor.",
      ],
      en: [
        "Built the service and package pages, the live package list and the one-page store application form with Next.js 16.",
        "Routed applications to the Eribi partner API through a server-side layer (BFF), so the API key never reaches the browser; zod validates the form data.",
        "Launched the site under a strict content security policy (CSP); it runs on IIS and PM2.",
      ],
    },
    outcome: {
      tr: [
        "Müşteri geri bildirimiyle başvuru formu 22 alandan 10 alana, sayfa metni yaklaşık 2.800 kelimeden 1.450 kelimeye indi.",
        "Site, 3 Eylül 2026'da 301 yönlendirmeleriyle darkpost.com.tr adresine taşındı.",
      ],
      en: [
        "After client feedback, the application form went from 22 fields to 10 and the copy from about 2,800 words to 1,450.",
        "The site moved to darkpost.com.tr on 3 September 2026, with 301 redirects.",
      ],
    },
    imageAlt: {
      tr: "darkpost.com.tr ana sayfası: “Mağazanız sizin, işletmesi bizde” başlığı, Hemen başlayın ve Hizmetleri incele düğmeleri ve bir sipariş paneli çizimi",
      en: "darkpost.com.tr home page: a Turkish headline saying the store is yours and the operations are theirs, two call-to-action buttons and an illustration of an order panel",
    },
    caption: { tr: "darkpost.com.tr ana sayfası, Ekim 2026.", en: "The darkpost.com.tr home page, October 2026." },
  },
  "olser-bilisim": {
    context: {
      tr: [
        "Olser Bilişim, başta mali müşavirler olmak üzere finans sektöründe çalışanlara yazılım, doküman ve elektronik tablo sunan bir firma. Site firmanın çalışmalarını tanıtıyor; içerik bir yönetim panelinden güncelleniyor.",
      ],
      en: [
        "Olser Bilişim offers software, documents and spreadsheets, mainly to accountants and others in the finance sector. The site presents the firm's work; its content is managed from an admin panel.",
      ],
    },
    did: {
      tr: [
        "İlk sürümü React 18, Vite ve Tailwind CSS 4 ile, .NET 8 tabanlı bir API üzerinde geliştirdim.",
        "Projeler bölümünü kategori ve proje yönetimiyle panelden yönetilebilir hâle getirdim; bir iletişim formu ekledim.",
        "2026'da siteyi Next.js 16 ile yeniden yazdım; bu sürüm henüz yayına alınmadı.",
      ],
      en: [
        "Built the first version with React 18, Vite and Tailwind CSS 4 on top of a .NET 8 API.",
        "Made the projects section manageable from the admin panel, with categories and projects, and added a contact form.",
        "Rewrote the site in Next.js 16 in 2026. That version is not deployed yet; olserbilisim.com still runs the first build.",
      ],
    },
    imageAlt: {
      tr: "olserbilisim.com ana sayfası: “Hesaplı Çözümler” başlıklı karşılama görseli, Hoş Geldiniz ve Referanslarımız bölümleri",
      en: "olserbilisim.com home page: a hero banner reading “Hesaplı Çözümler” (“affordable solutions”), followed by the welcome and references sections",
    },
    caption: { tr: "olserbilisim.com ana sayfası, Ekim 2026.", en: "The olserbilisim.com home page, October 2026." },
  },
  odis: {
    context: {
      tr: [
        "Bir içeriğin yaşa göre sınıflandırılması, birden çok rolün sırayla çalıştığı bir süreç. ODİS bu süreci başvurudan karara kadar tek bir iş akışında modelliyor. 3–14 Şubat 2026 arasında geliştirdiğim bir prototip; kullanımda olan bir sistem değil.",
      ],
      en: [
        "Rating a piece of content by age involves several roles working in sequence. ODİS models that process in one workflow, from application to decision. It is a prototype I built between 3 and 14 February 2026, not a system in use.",
      ],
    },
    did: {
      tr: [
        "Başvuru sahiplerinin beyan formu ve kanıt dosyalarıyla başvurduğu akışı kurdum.",
        "Başvuruyu kod incelemesi, oyun incelemesi, pedagojik değerlendirme ve hukuki karar adımlarından geçiren çok rollü iş akışını modelledim: inceleme kriterleri, rol bazlı erişim, bildirimler ve denetim kaydı.",
        "Backend'i .NET 8 ve Clean Architecture ile (ASP.NET Identity, JWT, FluentValidation), arayüzü Next.js 16, TanStack Query ve React Hook Form ile geliştirdim.",
      ],
      en: [
        "Built the application flow, in which applicants submit a declaration form and evidence files.",
        "Modeled the multi-role workflow that takes an application through code review, game review, a pedagogical assessment and a legal decision, with review criteria, role-based access, notifications and an audit log.",
        "Built the back end with .NET 8 in Clean Architecture (ASP.NET Identity, JWT, FluentValidation) and the front end with Next.js 16, TanStack Query and React Hook Form.",
      ],
    },
  },
};

// Every published case study needs its context and "what I did" (a missing one fails the prerender).
const missing = PROJECT_SLUGS.filter((slug) => !PROJECT_DETAILS[slug]?.context || !PROJECT_DETAILS[slug]?.did);
if (missing.length) throw new Error(`src/content/projectDetails.js: no context/did for ${missing.join(", ")}`);

export function getProjectDetails(slug) {
  return PROJECT_DETAILS[slug] ?? null;
}
