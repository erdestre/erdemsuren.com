import { Arrow, DiagramFigure, Node } from "./parts.jsx";
import { VIEWS } from "./views.js";

// BELBİM headless CMS, generic and NDA-safe: no product, site, host or internal names, no screenshots. (The case
// study itself names the two public sites and shows their public home pages; the diagram stays generic.)
// Source: fact-sheet §2.2-1 (LinkedIn experience entry): headless CMS backend on Umbraco with versioned content and
// state-based publishing; Clean Architecture (Domain / Application / Infrastructure); idempotent REST APIs;
// LDAP / Active Directory authentication; Next.js 15 front end with a service layer (API calls, caching), SSG and ISR,
// API-based TR/EN translations, a component map for schema-driven rendering, static export behind a CDN, accessibility
// features and client-side search.
const COPY = {
  tr: {
    title: "BELBİM headless CMS ve Next.js akışı",
    desc: "Genel içerik akışı. Editörler içeriği, Umbraco üzerinde geliştirdiğim headless CMS'te hazırlıyor. İçerik sürümleniyor ve durum tabanlı bir yayın akışından geçiyor; arka uç Domain, Application ve Infrastructure katmanlarından oluşan Clean Architecture ile yazıldı. Girişler LDAP / Active Directory üzerinden merkezi olarak doğrulanıyor. İçerik ve çeviriler, idempotent bir REST içerik API'siyle sunuluyor. Next.js 15 arayüzü bu API'yi bir servis katmanı ve önbellek üzerinden çağırıyor, sayfaları SSG ve ISR ile üretiyor, bileşenleri şemaya göre bir bileşen haritasıyla çiziyor. Sayfalar CDN arkasından statik olarak yayınlanıyor; ziyaretçiler siteyi Türkçe ve İngilizce, erişilebilirlik seçenekleri ve site içi aramayla kullanıyor.",
    caption: "Genel mimari; kurum içi sistemlerin adları, adresleri ve ekranları paylaşılmıyor.",
    editors: "Editörler",
    editorsLine: "içerik hazırlar",
    cms: "Headless CMS · Umbraco",
    cmsLine: ".NET · Clean Architecture",
    cmsLines: ["sürümlenen içerik", "durum tabanlı yayın akışı"],
    ad: "LDAP / Active Directory",
    adLine: "merkezi kimlik doğrulama",
    adTall: "LDAP / AD",
    adLineTall: "kimlik doğrulama",
    api: "İçerik API'si",
    apiLines: ["REST · idempotent", "içerik ve çeviriler"],
    next: "Next.js 15 arayüzü",
    nextLines: ["SSG ve ISR", "servis katmanı ve önbellek", "şemaya göre bileşen haritası"],
    cdnLine: "statik yayın",
    visitors: "Ziyaretçiler",
    visitorsLines: ["Türkçe ve İngilizce", "erişilebilirlik ve arama"],
  },
  en: {
    title: "BELBİM headless CMS and Next.js flow",
    desc: "Generic content flow. Editors prepare content in the headless CMS I build on Umbraco. Content is versioned and passes through a state-based publishing workflow; the back end follows a Clean Architecture with Domain, Application and Infrastructure layers. Sign-in is authenticated centrally through LDAP / Active Directory. Content and translations are served by an idempotent REST content API. The Next.js 15 front end calls this API through a service layer with caching, generates pages with SSG and ISR, and renders components from the content schema with a component map. Pages are delivered statically behind a CDN; visitors use the site in Turkish and English, with accessibility options and site search.",
    caption: "Generic architecture; no names, addresses or screens of internal systems.",
    editors: "Editors",
    editorsLine: "prepare content",
    cms: "Headless CMS · Umbraco",
    cmsLine: ".NET · Clean Architecture",
    cmsLines: ["versioned content", "state-based publishing"],
    ad: "LDAP / Active Directory",
    adLine: "central authentication",
    adTall: "LDAP / AD",
    adLineTall: "authentication",
    api: "Content API",
    apiLines: ["REST · idempotent", "content and translations"],
    next: "Next.js 15 front end",
    nextLines: ["SSG and ISR", "service layer and caching", "schema-driven component map"],
    cdnLine: "static delivery",
    visitors: "Visitors",
    visitorsLines: ["Turkish and English", "accessibility and search"],
  },
};

const LAYERS = ["Domain", "Application", "Infrastructure"];

export default function BelbimDiagram({ lang }) {
  const t = COPY[lang] ?? COPY.tr;
  const { tall, wide } = VIEWS["belbim-headless-cms"];
  return (
    <DiagramFigure copy={t} tall={{ size: tall, body: <Tall t={t} /> }} wide={{ size: wide, body: <Wide t={t} /> }} />
  );
}

// The CMS box: title, subtitle, the three Clean Architecture layers and two feature lines (270 units tall).
function Cms({ x, y, w, t }) {
  return (
    <g>
      <Node x={x} y={y} w={w} h={270} />
      <Node x={x} y={y + 8} w={w} h={66} title={t.cms} lines={[t.cmsLine]} align="start" tone="none" />
      {LAYERS.map((layer, i) => (
        <g key={layer}>
          <rect
            x={x + 16}
            y={y + 84 + i * 38}
            width={w - 32}
            height={32}
            rx={6}
            strokeWidth={1.25}
            className="fill-paper stroke-muted"
          />
          <text
            x={x + w / 2}
            y={y + 84 + i * 38 + 22.3}
            fontSize={17.5}
            textAnchor="middle"
            className="fill-ink font-mono"
          >
            {layer}
          </text>
        </g>
      ))}
      <Node x={x} y={y + 196} w={w} h={66} lines={t.cmsLines} align="start" tone="none" />
    </g>
  );
}

function Wide({ t }) {
  return (
    <>
      <Node x={0} y={0} w={300} h={80} title={t.editors} lines={[t.editorsLine]} />
      <Arrow points={[150, 80, 150, 120]} />
      <Cms x={0} y={120} w={300} t={t} />
      <Arrow points={[150, 430, 150, 390]} />
      <Node x={0} y={430} w={300} h={80} title={t.ad} lines={[t.adLine]} />

      <Arrow points={[300, 254, 350, 254]} />
      <Node x={350} y={200} w={260} h={108} title={t.api} lines={t.apiLines} tone="accent" />
      <Arrow points={[610, 254, 660, 254]} tone="accent" />

      <Node x={660} y={188} w={300} h={132} title={t.next} lines={t.nextLines} />
      <Arrow points={[810, 320, 810, 360]} />
      <Node x={660} y={360} w={300} h={80} title="CDN" lines={[t.cdnLine]} />
      <Arrow points={[810, 440, 810, 480]} />
      <Node x={660} y={480} w={300} h={108} title={t.visitors} lines={t.visitorsLines} tone="soft" />
    </>
  );
}

function Tall({ t }) {
  return (
    <>
      <Node x={0} y={0} w={182} h={80} title={t.editors} lines={[t.editorsLine]} />
      <Node x={198} y={0} w={182} h={80} title={t.adTall} lines={[t.adLineTall]} />
      <Arrow points={[91, 80, 91, 120]} />
      <Arrow points={[289, 80, 289, 120]} />
      <Cms x={0} y={120} w={380} t={t} />
      <Arrow points={[190, 390, 190, 430]} />
      <Node x={0} y={430} w={380} h={108} title={t.api} lines={t.apiLines} tone="accent" />
      <Arrow points={[190, 538, 190, 578]} tone="accent" />
      <Node x={0} y={578} w={380} h={132} title={t.next} lines={t.nextLines} />
      <Arrow points={[190, 710, 190, 750]} />
      <Node x={0} y={750} w={380} h={80} title="CDN" lines={[t.cdnLine]} />
      <Arrow points={[190, 830, 190, 870]} />
      <Node x={0} y={870} w={380} h={108} title={t.visitors} lines={t.visitorsLines} tone="soft" />
    </>
  );
}
