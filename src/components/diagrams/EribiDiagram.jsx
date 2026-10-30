import { Arrow, Chip, DiagramFigure, Group, Label, Node } from "./parts.jsx";
import { VIEWS } from "./views.js";

// Eribi, simplified. Sources: discovery/local-work.md §2 "Architecture" (ECOSYSTEM.md, PROJECT_DOCS.md) and
// fact-sheet §2.2-A. Shown: Next.js front ends → BFF → .NET 8 core + YARP gateway → 9 services (payment, domain,
// invoice, notification, cargo, ship, AI, marketplace, ERP) → external providers; PostgreSQL 17 (database per store,
// auth/partner/Hangfire, central integration logs) and the DAS file service. Never shown: provider names, hosts, keys,
// "running in production" for the services (their cutovers sit behind feature flags).
const COPY = {
  tr: {
    title: "Eribi platform mimarisi",
    desc: "Eribi'nin sadeleştirilmiş mimarisi. Next.js ile yazılmış mağaza vitrinleri ve iş ortağı paneli, sunucu tarafındaki BFF katmanı üzerinden .NET 8 çekirdek platforma ve YARP tabanlı API gateway'e bağlanıyor. Çekirdek platform mağaza ve ajans API'lerini, kimlik doğrulamayı, abonelik ve faturalamayı, mağaza kurulumunu (DNS, SSL, IIS sitesi) ve Hangfire ile arka plan işlerini çalıştırıyor. Veriler PostgreSQL 17'de, her mağaza için ayrı bir veritabanında; dosyalar çok kiracılı DAS dosya servisinde. Gateway, çekirdek platformdan ve arayüzlerden gelen istekleri JWT doğrulaması, hız sınırı ve korelasyon kimliğiyle dokuz servise yönlendiriyor: ödeme, e-fatura, bildirim, kargo, yurt dışı kargo, alan adı, pazaryeri, ERP ve yapay zekâ. Servisler dış sağlayıcılara bağlanıyor ve çağrılarını merkezi entegrasyon loglarına yazıyor.",
    caption:
      "Sadeleştirilmiş görünüm. Servislere her geçiş bir özellik bayrağıyla açılıyor ve anında geri alınabiliyor.",
    fe: "Arayüzler · Next.js",
    store: "Mağaza vitrinleri",
    storeLine: "her mağaza kendi alan adında",
    panel: "İş ortağı paneli",
    panelLine: "ajanslar tüm mağazalarını yönetir",
    core: "Çekirdek platform · .NET 8",
    coreLines: [
      "mağaza ve ajans API'leri",
      "kimlik doğrulama",
      "abonelik ve faturalama",
      "mağaza kurulumu: DNS, SSL, IIS",
      "arka plan işleri (Hangfire)",
    ],
    gateway: "API gateway · YARP",
    gatewayLine: "JWT · hız sınırı · korelasyon kimliği",
    services: "Servisler · .NET 8",
    serviceNames: [
      "Ödeme",
      "E-fatura",
      "Bildirim",
      "Kargo",
      "Yurt dışı kargo",
      "Alan adı",
      "Pazaryeri",
      "ERP",
      "Yapay zekâ",
    ],
    external: "Dış sağlayıcılar",
    externalLine: "her servis kendi sağlayıcılarına bağlanır",
    data: "Veri ve dosyalar",
    pgLines: ["her mağazaya ayrı veritabanı", "kimlik, iş ortağı ve Hangfire", "entegrasyon logları"],
    das: "DAS dosya servisi",
    dasLine: "çok kiracılı dosya depolama",
    logs: "loglar",
  },
  en: {
    title: "Eribi platform architecture",
    desc: "Simplified architecture of Eribi. The storefronts and the partner panel, both built with Next.js, reach the .NET 8 core platform and the YARP API gateway through a server-side BFF layer. The core runs the store and agency APIs, authentication, subscriptions and billing, store provisioning (DNS, SSL, IIS site) and background jobs with Hangfire. Data lives in PostgreSQL 17, with a separate database for every store; files live in DAS, a multi-tenant file service. The gateway routes requests from the core and the front ends to nine services, with JWT validation, rate limiting and correlation IDs: payments, e-invoicing, notifications, shipping, international shipping, domains, marketplaces, ERP and AI. The services connect to external providers and write their calls to central integration logs.",
    caption: "Simplified view. Every cutover to a service sits behind a feature flag and can be switched off instantly.",
    fe: "Front ends · Next.js",
    store: "Storefronts",
    storeLine: "each store on its own domain",
    panel: "Partner panel",
    panelLine: "agencies run all their stores",
    core: "Core platform · .NET 8",
    coreLines: [
      "store and agency APIs",
      "authentication",
      "subscriptions and billing",
      "store provisioning: DNS, SSL, IIS",
      "background jobs (Hangfire)",
    ],
    gateway: "API gateway · YARP",
    gatewayLine: "JWT · rate limiting · correlation IDs",
    services: "Services · .NET 8",
    serviceNames: [
      "Payments",
      "E-invoicing",
      "Notifications",
      "Shipping",
      "Intl. shipping",
      "Domains",
      "Marketplaces",
      "ERP",
      "AI assistant",
    ],
    external: "External providers",
    externalLine: "each service talks to its own providers",
    data: "Data and files",
    pgLines: ["a database per store", "auth, partners and Hangfire", "integration logs"],
    das: "DAS file service",
    dasLine: "multi-tenant file storage",
    logs: "logs",
  },
};

const AI_SERVICE = 8; // index of the AI service in serviceNames (gets the lime AI marker)

export default function EribiDiagram({ lang }) {
  const t = COPY[lang] ?? COPY.tr;
  const { tall, wide } = VIEWS.eribi;
  return (
    <DiagramFigure copy={t} tall={{ size: tall, body: <Tall t={t} /> }} wide={{ size: wide, body: <Wide t={t} /> }} />
  );
}

function Wide({ t }) {
  return (
    <>
      <Group x={0} y={10} w={960} h={120} label={t.fe} />
      <Node x={16} y={34} w={448} h={80} title={t.store} lines={[t.storeLine]} />
      <Node x={496} y={34} w={448} h={80} title={t.panel} lines={[t.panelLine]} />

      <Arrow points={[176, 130, 176, 190]} />
      <Label x={188} y={166}>
        BFF
      </Label>
      <Arrow points={[700, 130, 700, 190]} />
      <Label x={712} y={166}>
        BFF
      </Label>

      <Node x={0} y={190} w={352} h={180} title={t.core} lines={t.coreLines} align="start" />
      <Node x={440} y={190} w={520} h={80} title={t.gateway} lines={[t.gatewayLine]} tone="accent" />
      <Arrow points={[352, 230, 440, 230]} />
      <Arrow points={[700, 270, 700, 304]} tone="accent" />

      <Group x={440} y={304} w={520} h={196} label={t.services} labelX={458} tone="accent" />
      {t.serviceNames.map((name, i) => (
        <Chip key={name} x={456 + (i % 3) * 167} y={330 + Math.floor(i / 3) * 52} w={154} ai={i === AI_SERVICE}>
          {name}
        </Chip>
      ))}
      <Arrow points={[700, 500, 700, 540]} />
      <Node x={440} y={540} w={520} h={80} title={t.external} lines={[t.externalLine]} tone="soft" />

      <Arrow points={[270, 370, 270, 410]} />
      <Group x={0} y={410} w={352} h={266} label={t.data} />
      <Node x={16} y={434} w={320} h={132} title="PostgreSQL 17" lines={t.pgLines} align="start" />
      <Node x={16} y={580} w={320} h={80} title={t.das} lines={[t.dasLine]} align="start" />
      <Arrow points={[440, 480, 336, 480]} tone="muted" dashed />
      <Label x={396} y={470} anchor="middle">
        {t.logs}
      </Label>
    </>
  );
}

function Tall({ t }) {
  return (
    <>
      <Group x={0} y={10} w={380} h={204} label={t.fe} />
      <Node x={16} y={34} w={348} h={80} title={t.store} lines={[t.storeLine]} />
      <Node x={16} y={122} w={348} h={80} title={t.panel} lines={[t.panelLine]} />

      <Arrow points={[166, 214, 166, 256]} />
      <Label x={178} y={241}>
        BFF
      </Label>
      {/* Front ends → gateway runs down the right edge; the core joins it. */}
      <Arrow points={[360, 214, 360, 790]} />
      <Label x={348} y={241} anchor="end">
        BFF
      </Label>

      <Node x={0} y={256} w={332} h={180} title={t.core} lines={t.coreLines} align="start" />
      <Arrow points={[332, 346, 360, 346]} head={false} />

      <Arrow points={[250, 436, 250, 474]} />
      <Group x={0} y={474} w={332} h={262} label={t.data} />
      <Node x={12} y={496} w={308} h={132} title="PostgreSQL 17" lines={t.pgLines} align="start" />
      <Node x={12} y={640} w={308} h={80} title={t.das} lines={[t.dasLine]} align="start" />

      <Node x={0} y={790} w={380} h={80} title={t.gateway} lines={[t.gatewayLine]} tone="accent" />
      <Arrow points={[290, 870, 290, 906]} tone="accent" />
      <Group x={0} y={906} w={380} h={290} label={t.services} tone="accent" />
      {t.serviceNames.map((name, i) => (
        <Chip
          key={name}
          x={i === AI_SERVICE ? 107 : 16 + (i % 2) * 182}
          y={930 + Math.floor(i / 2) * 52}
          w={166}
          ai={i === AI_SERVICE}
        >
          {name}
        </Chip>
      ))}
      <Arrow points={[190, 1196, 190, 1234]} />
      <Node x={0} y={1234} w={380} h={80} title={t.external} lines={[t.externalLine]} tone="soft" />
    </>
  );
}
