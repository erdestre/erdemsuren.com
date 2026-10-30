import common from "../../content/common.js";
import home from "../../content/home.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { keepDots } from "../../lib/text.js";

/**
 * "Şu an / Now" card in the hero's right column (master plan §B.2 #1): the three ways he works today, each as
 * label → name → role/period → one line. Static on purpose: the hero CTAs stay the only actions up here.
 */
export default function NowCard() {
  const lang = useLang();
  const t = home[lang].now;
  const c = common[lang];

  return (
    <div className="min-w-0 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <h2
          id="now-title"
          className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase"
        >
          {t.heading}
        </h2>
        <p className="font-mono text-xs text-muted">{c.location}</p>
      </div>
      {/* Stacked on phones and beside the hero (lg); three columns in between, where the card is full width. */}
      <dl className="divide-y divide-line md:grid md:grid-cols-3 md:gap-x-8 md:divide-y-0 lg:block lg:divide-y">
        {t.items.map((item) => (
          <div key={item.key} className="min-w-0 py-5 last:pb-0 md:pb-0 lg:pb-5 lg:last:pb-0">
            <dt className="font-mono text-xs text-muted">{item.label}</dt>
            <dd className="mt-1.5">
              <p className="font-display text-xl leading-snug font-semibold tracking-tight text-ink">{item.name}</p>
              <p className="mt-0.5 text-sm text-muted">{keepDots(item.meta)}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
