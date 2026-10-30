import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import Container from "../ui/Container.jsx";

/**
 * Proof strip (master plan §B.2 #2): four sourced facts, each with the employer or product name and the
 * relationship ("İşveren" / "Kendi ürünüm"), so employers never read as clients. No logos, no counters.
 */
export default function ProofStrip() {
  const lang = useLang();
  const t = home[lang].proof;

  return (
    <section aria-labelledby="proof-title" className="border-y border-line bg-surface">
      <Container className="py-10 lg:py-12">
        <h2 id="proof-title" className="sr-only">
          {t.heading}
        </h2>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <li key={item.text} className="min-w-0 border-t-2 border-ink pt-4">
              <p className="font-mono text-xs text-muted">
                <span className="font-semibold text-ink">{item.org}</span> · {item.tag}
              </p>
              <p className="mt-2 leading-snug font-medium text-ink">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
