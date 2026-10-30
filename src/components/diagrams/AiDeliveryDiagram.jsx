import { Arrow, DiagramFigure, Group, Label, Node } from "./parts.jsx";
import { VIEWS } from "./views.js";

// AI-native delivery, simplified. Sources: fact-sheet §2.2-A (Outcomes, Authorship and AI assistance) and master plan
// F.3.3. Shown: task → AI coding agents → Git → GitHub Actions, target by branch (dev → TEST, main → PROD after
// review); self-hosted runners; .NET → IIS, Next.js → PM2; the maintenance workflows; the Cloudflare edge.
// Owner decision 6: he owns architecture, review, tests and release. Never shown: server names, IPs, secrets, counts
// of commits or percentages.
const COPY = {
  tr: {
    title: "Yapay zekâ ajanlarıyla geliştirme ve dağıtım hattı",
    desc: "Geliştirme ve dağıtım akışı. Mimariyi ve görevleri ben belirliyorum. Yapay zekâ kod ajanları (Claude Code), bir koordinatör ajanın böldüğü iş emirleriyle çalışıyor; yaptıkları değişiklikler incelemem için bana dönüyor. Kod ve testler Git deposuna commit ediliyor, her push GitHub Actions'ı tetikliyor. GitHub Actions hedefi dala göre seçiyor: dev dalı TEST sunucusuna, main dalı PROD sunucusuna dağıtılıyor. Bir değişiklik TEST'te doğrulanıp incelendikten sonra main dalına alınıyor. İki sunucu fiziksel olarak ayrı Windows sunucular; ikisinde de self-hosted runner'lar çalışıyor, .NET uygulamaları IIS'te, Next.js uygulamaları PM2 ile çalışıyor, veriler PostgreSQL 17'de. Sunucular Cloudflare arkasında: Tunnel, DNS, uçtan uca TLS ve TEST'in önünde Cloudflare Access. Bakım ve izleme iş akışları iki sunucuda da yedekleme ve geri yükleme tatbikatı, IIS ve PM2 tanılaması, gizli anahtar yenileme, PageSpeed ölçümü ve sağlık kontrolü yapıyor; ölçümler bir sonraki iyileştirmeyi belirliyor.",
    caption:
      "Sadeleştirilmiş görünüm. Bu hat 20'yi aşkın uygulamayı dağıtıyor; sunucu adları, adresler ve gizli değerler gösterilmiyor.",
    me: "Ben",
    meLines: ["mimari ve görev tanımı", "inceleme · testler · yayın"],
    agents: "Yapay zekâ kod ajanları",
    agentsLines: [{ text: "Claude Code", mono: true }, "iş emirleriyle çalışır"],
    repo: "Git deposu",
    repoLines: ["kod ve testler", "xUnit · Vitest · Playwright"],
    task: "görev",
    review: "inceleme",
    actions: "GitHub Actions",
    actionsLines: ["derleme ve dağıtım", "dala göre hedef sunucu"],
    upkeep: "Bakım ve izleme iş akışları",
    upkeepLines: [
      "yedekleme, geri yükleme tatbikatı",
      "IIS ve PM2 tanılama",
      "gizli anahtar yenileme",
      "PageSpeed ölçümü, sağlık kontrolü",
    ],
    measure: "ölçüm → iyileştirme",
    servers: "İki ayrı Windows sunucu",
    serversTall: "İki ayrı sunucu",
    test: "TEST sunucusu",
    prod: "PROD sunucusu",
    serverLines: ["self-hosted runner", ".NET → IIS · Next.js → PM2", "PostgreSQL 17"],
    testBranch: "dev dalı",
    mainBranch: "main dalı",
    afterReview: "inceleme sonrası",
    edge: "Cloudflare",
    edgeLine: "Tunnel · DNS · uçtan uca TLS · TEST'in önünde Access",
    edgeLinesTall: ["Tunnel · DNS · uçtan uca TLS", "TEST'in önünde Access"],
  },
  en: {
    title: "AI-native development and delivery pipeline",
    desc: "Development and delivery flow. I set the architecture and the tasks. AI coding agents (Claude Code) work from task orders that a coordinator agent splits out, and their changes come back to me for review. Code and tests are committed to a Git repository, and every push triggers GitHub Actions. GitHub Actions picks the target by branch: the dev branch deploys to the TEST server, the main branch to the PROD server. A change moves to main only after it has been checked and reviewed on TEST. The two servers are physically separate Windows machines; both run self-hosted runners, .NET apps on IIS, Next.js apps under PM2 and PostgreSQL 17. Both sit behind Cloudflare: Tunnel, DNS, end-to-end TLS and Cloudflare Access in front of TEST. Maintenance and monitoring workflows run backups and restore drills, IIS and PM2 diagnostics, secret rotation, PageSpeed checks and health checks on both servers; the measurements decide the next improvement.",
    caption:
      "Simplified view. This pipeline deploys more than 20 applications; server names, addresses and secrets are left out.",
    me: "Me",
    meLines: ["architecture and tasks", "review · tests · release"],
    agents: "AI coding agents",
    agentsLines: [{ text: "Claude Code", mono: true }, "work from task orders"],
    repo: "Git repository",
    repoLines: ["code and tests", "xUnit · Vitest · Playwright"],
    task: "task",
    review: "review",
    actions: "GitHub Actions",
    actionsLines: ["build and deploy", "target server by branch"],
    upkeep: "Maintenance and monitoring",
    upkeepLines: ["backups and restore drills", "IIS and PM2 diagnostics", "secret rotation", "PageSpeed and health checks"],
    measure: "measure → improve",
    servers: "Two separate Windows servers",
    serversTall: "Two separate servers",
    test: "TEST server",
    prod: "PROD server",
    serverLines: ["self-hosted runner", ".NET → IIS · Next.js → PM2", "PostgreSQL 17"],
    testBranch: "dev branch",
    mainBranch: "main branch",
    afterReview: "after review",
    edge: "Cloudflare",
    edgeLine: "Tunnel · DNS · end-to-end TLS · Access in front of TEST",
    edgeLinesTall: ["Tunnel · DNS · end-to-end TLS", "Access in front of TEST"],
  },
};

export default function AiDeliveryDiagram({ lang }) {
  const t = COPY[lang] ?? COPY.tr;
  const { tall, wide } = VIEWS["ai-native-delivery"];
  return (
    <DiagramFigure copy={t} tall={{ size: tall, body: <Tall t={t} /> }} wide={{ size: wide, body: <Wide t={t} /> }} />
  );
}

function Wide({ t }) {
  return (
    <>
      <Node x={0} y={0} w={230} h={110} title={t.me} lines={t.meLines} tone="accent" />
      <Node x={340} y={0} w={280} h={110} title={t.agents} lines={t.agentsLines} ai />
      <Node x={690} y={0} w={270} h={110} title={t.repo} lines={t.repoLines} />
      <Arrow points={[230, 36, 340, 36]} />
      <Label x={285} y={26} anchor="middle">
        {t.task}
      </Label>
      <Arrow points={[340, 76, 230, 76]} />
      <Label x={285} y={100} anchor="middle">
        {t.review}
      </Label>
      <Arrow points={[620, 55, 690, 55]} />
      <Label x={655} y={45} anchor="middle">
        commit
      </Label>

      <Arrow points={[825, 110, 825, 170]} />
      <Label x={837} y={146}>
        push
      </Label>
      <Node x={600} y={170} w={360} h={108} title={t.actions} lines={t.actionsLines} />
      <Node x={0} y={170} w={500} h={154} title={t.upkeep} lines={t.upkeepLines} align="start" />
      <Arrow points={[120, 170, 120, 110]} tone="muted" dashed />
      <Label x={132} y={146}>
        {t.measure}
      </Label>

      <Group x={0} y={384} w={960} h={276} label={t.servers} labelX={400} />
      <Arrow points={[120, 324, 120, 384]} tone="muted" dashed />
      <Arrow points={[640, 278, 640, 350, 230, 350, 230, 406]} />
      <Label x={242} y={374}>
        {t.testBranch}
      </Label>
      <Arrow points={[880, 278, 880, 406]} />
      <Label x={868} y={374} anchor="end">
        {t.mainBranch}
      </Label>
      <Node x={16} y={406} w={360} h={132} title={t.test} lines={t.serverLines} />
      <Node x={584} y={406} w={360} h={132} title={t.prod} lines={t.serverLines} />
      <Arrow points={[376, 472, 584, 472]} tone="accent" />
      <Label x={480} y={462} anchor="middle" tone="accent">
        {t.afterReview}
      </Label>
      <Node x={16} y={564} w={928} h={80} title={t.edge} lines={[t.edgeLine]} tone="soft" />
      <Arrow points={[196, 564, 196, 538]} />
      <Arrow points={[764, 564, 764, 538]} />
    </>
  );
}

function Tall({ t }) {
  return (
    <>
      <Node x={28} y={0} w={352} h={110} title={t.me} lines={t.meLines} tone="accent" />
      <Arrow points={[160, 110, 160, 168]} />
      <Label x={148} y={145} anchor="end">
        {t.task}
      </Label>
      <Arrow points={[248, 168, 248, 110]} />
      <Label x={260} y={145}>
        {t.review}
      </Label>
      <Node x={28} y={168} w={352} h={110} title={t.agents} lines={t.agentsLines} ai />
      <Arrow points={[204, 278, 204, 320]} />
      <Label x={216} y={305}>
        commit
      </Label>
      <Node x={28} y={320} w={352} h={110} title={t.repo} lines={t.repoLines} />
      <Arrow points={[204, 430, 204, 472]} />
      <Label x={216} y={457}>
        push
      </Label>
      <Node x={28} y={472} w={352} h={108} title={t.actions} lines={t.actionsLines} />

      <Group x={28} y={640} w={352} h={490} label={t.serversTall} labelX={46} />
      <Arrow points={[320, 580, 320, 664]} />
      <Label x={308} y={616} anchor="end">
        {t.testBranch}
      </Label>
      <Node x={44} y={664} w={320} h={132} title={t.test} lines={t.serverLines} />
      <Arrow points={[228, 796, 228, 852]} tone="accent" />
      <Label x={216} y={830} anchor="end" tone="accent">
        {t.afterReview}
      </Label>
      <Label x={240} y={830}>
        {t.mainBranch}
      </Label>
      <Node x={44} y={852} w={320} h={132} title={t.prod} lines={t.serverLines} />
      {/* Both servers sit behind Cloudflare: one arrow up to PROD only would wrongly suggest TEST does not. */}
      <Node x={44} y={1006} w={320} h={108} title={t.edge} lines={t.edgeLinesTall} tone="soft" />

      <Arrow points={[204, 1186, 204, 1130]} tone="muted" dashed />
      <Node x={28} y={1186} w={352} h={146} title={t.upkeep} lines={t.upkeepLines} align="start" />
      {/* Measure → improve: from the maintenance workflows back to me, along the left edge. */}
      <Arrow points={[28, 1259, 8, 1259, 8, 55, 28, 55]} tone="muted" dashed />
    </>
  );
}
