import Container from "../ui/Container.jsx";
import { DIAGRAMS } from "./index.js";

// DEV-ONLY page at /__diagrams/ (App.jsx mounts it only when import.meta.env.DEV, so it is not in the production
// or SSR build and never prerendered). Shows every registered diagram in both languages for visual QA, also for
// slugs whose case-study page does not exist yet.
export default function DiagramsPreview() {
  const entries = Object.entries(DIAGRAMS);
  return (
    <Container className="py-12">
      <h1 className="text-h1 font-semibold text-ink">Diagrams (dev preview)</h1>
      {entries.length === 0 ? (
        <p className="mt-6 text-muted">No diagram is registered in src/components/diagrams/index.js yet.</p>
      ) : null}
      {entries.map(([slug, Diagram]) => (
        <section key={slug} aria-labelledby={`preview-${slug}`} className="mt-14">
          <h2 id={`preview-${slug}`} className="font-mono text-sm text-muted">
            {slug}
          </h2>
          {["tr", "en"].map((lang) => (
            <div key={lang} lang={lang} className="mt-6">
              <Diagram lang={lang} />
            </div>
          ))}
        </section>
      ))}
    </Container>
  );
}
