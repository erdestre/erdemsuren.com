// Projects page (/projeler/, /en/projects/): every project on its own card, one line on what it does.
// No detail pages: details live in the CV. Facts only; employer work links public pages only.
// - `id`: the card's anchor on the projects page (#id). Stable once published (the home page links to it).
// - `kind`: short label, a key of KINDS below.
// - `image`: cover key in projectImages.js, or null (an ink cover with the name; GitHub items get a terminal cover).
// - `link`: the public page (live site, store page or repository), or null.

export const PROJECT_GROUPS = [
  {
    id: "belbim",
    org: "BELBİM",
    items: [
      {
        id: "belbim-cms",
        kind: "system",
        image: "belbim-cms",
        link: null,
        name: { tr: "Headless CMS", en: "Headless CMS" },
        line: {
          tr: "BELBİM'in iki kurumsal sitesini yöneten içerik sistemi.",
          en: "The content system behind BELBİM's two corporate websites.",
        },
      },
      {
        id: "belbim-istanbul",
        kind: "web",
        image: "belbim",
        link: "https://belbim.istanbul",
        name: { tr: "belbim.istanbul", en: "belbim.istanbul" },
        line: { tr: "BELBİM'in kurumsal web sitesi.", en: "BELBİM's corporate website." },
      },
      {
        id: "istanbulkart-istanbul",
        kind: "web",
        image: "istanbulkart",
        link: "https://istanbulkart.istanbul",
        name: { tr: "istanbulkart.istanbul", en: "istanbulkart.istanbul" },
        line: { tr: "İstanbulkart'ın resmi web sitesi.", en: "İstanbulkart's official website." },
      },
      {
        id: "istanbulkart-mobile",
        kind: "mobile",
        image: "istanbulkart-mobile",
        link: null,
        name: { tr: "İstanbulkart mobil", en: "İstanbulkart mobile" },
        line: {
          tr: "İstanbul'un toplu ulaşım kartı uygulaması. React Native.",
          en: "The app for İstanbul's transit card. React Native.",
        },
      },
    ],
  },
  {
    id: "eribitech",
    org: "Eribitech",
    items: [
      {
        id: "eribi",
        kind: "platform",
        image: "eribi",
        link: "https://eribitech.com",
        name: { tr: "Eribi", en: "Eribi" },
        line: {
          tr: "Ajanslar için e-ticaret platformu: mağaza, ödeme, kargo, e-fatura.",
          en: "E-commerce platform for agencies: stores, payments, shipping, e-invoices.",
        },
      },
      {
        id: "eribi-growth",
        kind: "webapp",
        image: "eribi-growth",
        link: "https://growth.eribitech.com",
        name: { tr: "Eribi Growth", en: "Eribi Growth" },
        line: { tr: "Müşteri bulma, site analizi ve rapor aracı.", en: "Lead discovery, site analysis and reports." },
      },
      {
        id: "eribi-creative",
        kind: "webapp",
        image: "eribi-creative",
        link: "https://creative.eribitech.com",
        name: { tr: "Eribi Creative", en: "Eribi Creative" },
        line: { tr: "Görsel, video ve ses üretim aracı.", en: "Image, video and audio production." },
      },
      {
        id: "devops",
        kind: "system",
        image: "devops",
        link: null,
        name: { tr: "Altyapı ve DevOps", en: "Infrastructure and DevOps" },
        line: {
          tr: "Kendi sunucularım: test ve canlı ortam, otomatik yayın.",
          en: "My own servers: test and production, automated deploys.",
        },
      },
    ],
  },
  {
    id: "igdas",
    org: "İGDAŞ",
    items: [
      {
        id: "igdas-field-operations",
        kind: "system",
        image: "igdas-field-operations",
        link: null,
        name: { tr: "Operasyon Otomasyon Sistemi", en: "Operations Automation System" },
        line: {
          tr: "Saha ekiplerinin iş emri, planlama ve stok sistemi. 7/24.",
          en: "Work orders, scheduling and inventory for field teams. 24/7.",
        },
      },
      {
        id: "igdas-tmt",
        kind: "system",
        image: "igdas-tmt",
        link: null,
        name: { tr: "Tıbbi Malzeme Takip (TMT)", en: "Medical Supply Tracking (TMT)" },
        line: {
          tr: "Revir randevuları ve tıbbi malzeme takibi.",
          en: "Infirmary appointments and medical supply tracking.",
        },
      },
    ],
  },
  {
    id: "tiramisu",
    org: "Tiramisu Studios",
    items: [
      {
        id: "drift-max-pro",
        kind: "game",
        image: "drift-max-pro",
        link: "https://play.google.com/store/apps/details?id=com.tiramisu.driftmax2",
        name: { tr: "Drift Max Pro", en: "Drift Max Pro" },
        line: { tr: "Mobil drift yarış oyunu. 120M+ indirme.", en: "Mobile drift racing game. 120M+ downloads." },
      },
      {
        id: "drift-max-city",
        kind: "game",
        image: "drift-max-city",
        link: "https://play.google.com/store/apps/details?id=tr.com.tiramisu.driftmaxcity",
        name: { tr: "Drift Max City", en: "Drift Max City" },
        line: { tr: "Şehirde geçen drift yarış oyunu. 25M+ indirme.", en: "Drift racing in the city. 25M+ downloads." },
      },
    ],
  },
  {
    id: "github",
    org: "GitHub",
    items: [
      {
        id: "net-api",
        kind: "code",
        image: null,
        repo: "NetCoreApiWeb",
        link: "https://github.com/erdestre/NetCoreApiWeb-NLayer-CleanArchitectureBestPractices",
        name: { tr: ".NET 8 Web API", en: ".NET 8 Web API" },
        line: {
          tr: "Katmanlı mimaride örnek API: doğrulama, hata yönetimi, audit.",
          en: "Reference API in N-layer architecture: validation, error handling, auditing.",
        },
      },
      {
        id: "reactivities",
        kind: "code",
        image: null,
        repo: "Reactivities",
        link: "https://github.com/erdestre/Reactivities",
        name: { tr: "Reactivities", en: "Reactivities" },
        line: { tr: "Etkinlik uygulaması: .NET API ve React istemci.", en: "Activities app: .NET API and React client." },
      },
      {
        id: "city-surfers",
        kind: "game",
        image: null,
        repo: "CitySurfers",
        link: "https://github.com/erdestre/Unity-CitySurfers",
        name: { tr: "City Surfers", en: "City Surfers" },
        line: { tr: "Unity'de sonsuz koşu oyunu. 3 kişilik ekip.", en: "Endless runner in Unity. A team of three." },
      },
      {
        id: "car-project",
        kind: "game",
        image: null,
        repo: "Car-Project",
        link: "https://github.com/erdestre/Unity-Car-Project",
        name: { tr: "Car Project", en: "Car Project" },
        line: {
          tr: "Unity'de araba yarışı: kontrolcü, yarışlar, yükseltme marketi.",
          en: "Car racing in Unity: controller, races, upgrade market.",
        },
      },
    ],
  },
];

export const PROJECTS = PROJECT_GROUPS.flatMap((group) => group.items.map((item) => ({ ...item, org: group.org })));

// Home page "Selected work": these ids, in this order.
const FEATURED_IDS = ["eribi", "istanbulkart-mobile", "belbim-istanbul"];
export const FEATURED_PROJECTS = FEATURED_IDS.map((id) => PROJECTS.find((project) => project.id === id));

if (new Set(PROJECTS.map((project) => project.id)).size !== PROJECTS.length || FEATURED_PROJECTS.includes(undefined)) {
  throw new Error("src/content/projects.js: project ids must be unique and FEATURED_IDS must exist");
}

export const KINDS = {
  web: { tr: "Web sitesi", en: "Website" },
  webapp: { tr: "Web uygulaması", en: "Web app" },
  mobile: { tr: "Mobil uygulama", en: "Mobile app" },
  platform: { tr: "Platform", en: "Platform" },
  system: { tr: "Sistem", en: "System" },
  game: { tr: "Oyun", en: "Game" },
  code: { tr: "Açık kaynak", en: "Open source" },
};

// Label of a project's public link: the store or GitHub by name, otherwise the site's host name.
export function linkLabel(url) {
  const host = new URL(url).host;
  if (host === "play.google.com") return "Google Play";
  if (host === "github.com") return "GitHub";
  return host;
}

// Page copy for /projeler/ and /en/projects/.
const projects = {
  tr: {
    heading: "Çalıştığım projeler",
    intro: "Ayrıntılar CV'de.",
    cv: "CV",
    // Card thumbnail alt. {host} = the live site's host name.
    shot: "{host} ana sayfası",
    cta: { title: "Bir pozisyon mu var?", button: "İletişim" },
  },
  en: {
    heading: "Projects I worked on",
    intro: "Details are in the CV.",
    cv: "CV",
    shot: "{host} home page",
    cta: { title: "Hiring?", button: "Contact" },
  },
};

export default projects;
