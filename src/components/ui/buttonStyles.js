import { cx } from "../../lib/cx.js";

// Focus: the global :focus-visible ring in src/index.css (2px accent, 2px offset; lime signal inside ink bands).
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS = {
  // on-accent / accent 7.25:1, hover 9.80:1
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  // ink / surface 18.9:1; field-border is the UI boundary (3.18:1 on surface)
  secondary: "border border-field-border bg-surface text-ink hover:border-ink hover:bg-paper",
  // accent / paper 6.75:1, hover accent-hover / accent-soft 8.32:1
  ghost: "text-accent hover:bg-accent-soft hover:text-accent-hover",
  // on-ink / ink 17.6:1, hover on ink-soft 13.8:1
  dark: "bg-ink text-on-ink hover:bg-ink-soft",
  // For use on ink backgrounds: on-ink text, on-ink/40 border (3.6:1).
  inverse: "border border-on-ink/40 text-on-ink hover:border-on-ink hover:bg-on-ink/10",
};

// md/lg keep 44px+ tap targets; sm (40px) is for dense desktop-only places (e.g. the header CTA from lg).
const SIZES = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

/** Class string for anything that should look like a button (also usable on NavLink etc.). */
export function buttonClasses({ variant = "primary", size = "md", className } = {}) {
  return cx(BASE, VARIANTS[variant] ?? VARIANTS.primary, SIZES[size] ?? SIZES.md, className);
}
