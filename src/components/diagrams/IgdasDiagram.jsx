import { Arrow, DiagramFigure, Group, Label, Node } from "./parts.jsx";
import { VIEWS } from "./views.js";

// İGDAŞ field operations as a state machine, generic and NDA-safe: no internal system names, screens or data.
// Source: fact-sheet §2.2-2 (CV + LinkedIn): deterministic state machines intake → assignment → execution →
// completion → reporting; rule-based scheduling for on-demand and recurring (weekly, monthly) jobs; inventory across
// central warehouses, vehicle depots and field consumption, with vehicles modelled as mobile inventory; SAP S/4HANA
// integration (sync, validation, retries, failure recovery); Active Directory (authentication, user management);
// MSSQL and data-intensive SQL reports. "Approval" is not part of the evidenced field workflow, so it is not shown.
const COPY = {
  tr: {
    title: "İGDAŞ saha operasyonları iş akışı",
    desc: "Saha iş akışının durum makinesi olarak sadeleştirilmiş görünümü. İşler kural tabanlı planlamayla oluşuyor: anlık talepler ile haftalık ve aylık periyodik işler. Her iş sırasıyla talep, atama, sahada uygulama, tamamlama ve raporlama durumlarından geçiyor; geçişler deterministik. Malzeme merkez depodan araç deposuna, oradan sahadaki tüketime akıyor; araçlar hareketli stok noktası olarak modellendi. Sistem SAP S/4HANA ile senkronizasyon, doğrulama, yeniden deneme ve hata kurtarma adımlarıyla entegre; kullanıcılar Active Directory ile doğrulanıyor; veriler ve raporlar SQL Server'da.",
    caption: "Genel akış; kurum içi ekranlar, sistem adları ve veriler paylaşılmıyor.",
    schedule: "Kural tabanlı planlama",
    scheduleLine: "anlık · haftalık · aylık",
    system: "Saha operasyonları · deterministik durum makinesi",
    systemTall: "Durum makinesi",
    statesWide: ["Talep", "Atama", ["Sahada", "uygulama"], "Tamamlama", "Raporlama"],
    statesTall: ["Talep", "Atama", "Uygulama", "Tamamlama", "Raporlama"],
    inventory: "Malzeme akışı",
    inventoryTall: "Malzeme",
    stockWide: ["Merkez depo", "Araç deposu", "Saha tüketimi"],
    stockTall: [
      ["Merkez", "depo"],
      ["Araç", "deposu"],
      ["Saha", "tüketimi"],
    ],
    vehicles: "araçlar hareketli stok noktası olarak modellendi",
    material: "malzeme",
    integrations: "Entegrasyonlar",
    sapLines: ["senkronizasyon · doğrulama", "yeniden deneme · hata kurtarma"],
    adLines: ["kimlik doğrulama", "kullanıcı yönetimi"],
    sqlLines: ["veri yoğun raporlar"],
  },
  en: {
    title: "İGDAŞ field operations workflow",
    desc: "Simplified view of the field workflow as a state machine. Jobs come from rule-based scheduling: on-demand requests and weekly or monthly recurring jobs. Every job moves through intake, assignment, execution, completion and reporting, with deterministic transitions. Materials flow from the central warehouse to vehicle depots and on to consumption in the field; vehicles are modeled as mobile stock points. The system integrates with SAP S/4HANA through sync, validation, retries and failure recovery; users sign in through Active Directory; data and reports live in SQL Server.",
    caption: "Generic flow; no internal screens, system names or data.",
    schedule: "Rule-based scheduling",
    scheduleLine: "on demand · weekly · monthly",
    system: "Field operations · deterministic state machine",
    systemTall: "State machine",
    statesWide: ["Intake", "Assignment", "Execution", "Completion", "Reporting"],
    statesTall: ["Intake", "Assignment", "Execution", "Completion", "Reporting"],
    inventory: "Inventory flow",
    inventoryTall: "Inventory",
    stockWide: [["Central", "warehouse"], "Vehicle depot", "Field use"],
    stockTall: [["Central", "warehouse"], ["Vehicle", "depot"], "Field use"],
    vehicles: "vehicles are modeled as mobile stock points",
    material: "materials",
    integrations: "Integrations",
    sapLines: ["sync · validation", "retries · failure recovery"],
    adLines: ["authentication", "user management"],
    sqlLines: ["data-intensive reports"],
  },
};

// Final state: a ring around a dot (UML).
function End({ x, y }) {
  return (
    <g>
      <circle cx={x} cy={y} r={10} strokeWidth={1.75} className="fill-none stroke-accent" />
      <circle cx={x} cy={y} r={5.5} className="fill-accent" />
    </g>
  );
}

export default function IgdasDiagram({ lang }) {
  const t = COPY[lang] ?? COPY.tr;
  const { tall, wide } = VIEWS["igdas-field-operations"];
  return (
    <DiagramFigure copy={t} tall={{ size: tall, body: <Tall t={t} /> }} wide={{ size: wide, body: <Wide t={t} /> }} />
  );
}

function Wide({ t }) {
  return (
    <>
      <Node x={0} y={0} w={320} h={80} title={t.schedule} lines={[t.scheduleLine]} />
      <Arrow points={[91, 80, 91, 176]} />

      <Group x={0} y={130} w={960} h={316} label={t.system} labelX={190} tone="accent" />
      {t.statesWide.map((state, i) => (
        <Node key={i} x={16 + i * 182} y={176} w={150} h={64} rx={32} title={state} tone="accent" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Arrow key={i} points={[166 + i * 182, 208, 198 + i * 182, 208]} tone="accent" />
      ))}
      <Arrow points={[894, 208, 924, 208]} tone="accent" />
      <End x={936} y={208} />

      <Arrow points={[455, 240, 455, 280]} tone="muted" dashed />
      <Label x={467} y={266}>
        {t.material}
      </Label>
      <Group x={136} y={280} w={688} h={150} label={t.inventory} />
      {t.stockWide.map((step, i) => (
        <Node key={i} x={152 + i * 232} y={304} w={192} h={64} title={step} />
      ))}
      <Arrow points={[344, 336, 384, 336]} />
      <Arrow points={[576, 336, 616, 336]} />
      <text x={480} y={404} fontSize={17.5} textAnchor="middle" className="fill-muted">
        {t.vehicles}
      </text>

      <Arrow points={[480, 446, 480, 490]} tone="muted" dashed head={false} />
      <Group x={0} y={490} w={960} h={148} label={t.integrations} />
      <Node x={16} y={514} w={400} h={108} title="SAP S/4HANA" lines={t.sapLines} />
      <Node x={432} y={514} w={250} h={108} title="Active Directory" lines={t.adLines} />
      <Node x={698} y={514} w={246} h={108} title="SQL Server" lines={t.sqlLines} />
    </>
  );
}

function Tall({ t }) {
  return (
    <>
      <Node x={0} y={0} w={380} h={80} title={t.schedule} lines={[t.scheduleLine]} />
      <Arrow points={[111, 80, 111, 152]} />

      <Group x={0} y={120} w={380} h={484} label={t.systemTall} labelX={136} tone="accent" />
      {t.statesTall.map((state, i) => (
        <Node key={i} x={16} y={152 + i * 84} w={190} h={52} rx={26} title={state} tone="accent" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Arrow key={i} points={[111, 204 + i * 84, 111, 236 + i * 84]} tone="accent" />
      ))}
      <Arrow points={[111, 540, 111, 566]} tone="accent" />
      <End x={111} y={578} />

      <Arrow points={[206, 346, 216, 346]} tone="muted" dashed head={false} />
      <Group x={216} y={236} w={154} h={292} label={t.inventoryTall} labelX={230} />
      {t.stockTall.map((step, i) => (
        <Node key={i} x={228} y={260 + i * 92} w={130} h={68} title={step} />
      ))}
      <Arrow points={[293, 328, 293, 352]} />
      <Arrow points={[293, 420, 293, 444]} />

      <Arrow points={[190, 604, 190, 644]} tone="muted" dashed head={false} />
      <Group x={0} y={644} w={380} h={360} label={t.integrations} />
      <Node x={16} y={668} w={348} h={108} title="SAP S/4HANA" lines={t.sapLines} />
      <Node x={16} y={788} w={348} h={108} title="Active Directory" lines={t.adLines} />
      <Node x={16} y={908} w={348} h={80} title="SQL Server" lines={t.sqlLines} />
    </>
  );
}
