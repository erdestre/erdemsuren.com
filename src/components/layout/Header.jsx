import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import common from "../../content/common.js";
import { useLang } from "../../i18n/LanguageContext.jsx";
import { cx } from "../../lib/cx.js";
import { matchRoute, NAV_KEYS, pathFor } from "../../routes.js";
import Avatar from "../Avatar.jsx";
import { ButtonLink } from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { currentFor } from "./navCurrent.js";

const DESKTOP_QUERY = "(min-width: 1024px)";
const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export default function Header() {
  const lang = useLang();
  const t = common[lang];
  const { pathname } = useLocation();
  const match = matchRoute(pathname);

  // The menu is "open on" the pathname where it was opened, so any navigation closes it without an effect.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn !== null && openOn === pathname;
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const header = headerRef.current;
    const button = buttonRef.current;
    const frame = window.requestAnimationFrame(() =>
      panelRef.current?.querySelector("a[href]")?.focus({ preventScroll: true }),
    );

    // Scroll lock. While the root has overflow:hidden, Chrome scrolls the page when anything in the sticky bar
    // gets focus (Esc, Tab), so the position is saved here and restored on close. scrollbar-gutter keeps a
    // classic (space-taking) scrollbar's gutter, so the page does not reflow and shift when the lock starts.
    const root = document.documentElement;
    const previous = { overflow: root.style.overflow, gutter: root.style.scrollbarGutter, y: window.scrollY };
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";

    // Focus trap inside the header (bar + open panel) while the menu is open; Esc closes it.
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenOn(null);
        button?.focus({ preventScroll: true });
        return;
      }
      if (event.key !== "Tab" || !header) return;
      const items = [...header.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.getClientRects().length > 0 && !el.closest("[inert]"),
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !items.includes(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !items.includes(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event) => {
      if (event.matches) setOpenOn(null);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      root.style.overflow = previous.overflow;
      root.style.scrollbarGutter = previous.gutter;
      // Back to where the reader was. After a menu link click, <ScrollToTop> runs next and scrolls to the top.
      if (window.scrollY !== previous.y) window.scrollTo({ top: previous.y, left: 0, behavior: "instant" });
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-line">
      {/* Translucent bar background on its own layer: a backdrop-filter on <header> itself would become the
          containing block of the fixed backdrop below and break it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-paper/95 supports-[backdrop-filter]:bg-paper/90 supports-[backdrop-filter]:backdrop-blur-md"
      />
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          to={pathFor("home", lang)}
          aria-label={t.a11y.homeLink}
          // On the home page itself the path does not change, so close an open menu explicitly.
          onClick={() => setOpenOn(null)}
          className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-lg pr-2"
        >
          <Avatar size={32} alt="" loading="eager" fetchPriority="low" />
          <span className="truncate font-display text-base font-semibold tracking-tight text-ink">{t.name}</span>
        </Link>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_KEYS.map((key) => {
              const current = currentFor(key, match);
              return (
                <li key={key}>
                  <Link
                    to={pathFor(key, lang)}
                    aria-current={current}
                    className={cx(
                      "inline-flex h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors",
                      current ? "bg-ink/[0.06] text-ink" : "text-muted hover:bg-ink/[0.04] hover:text-ink",
                    )}
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          {/* Wrapper controls visibility: `hidden` on the button itself would fight its own inline-flex. */}
          <div className="hidden lg:block">
            {/* Contact is not in the menu list; this CTA is its menu item, so it carries aria-current. */}
            <ButtonLink to={pathFor("contact", lang)} size="sm" aria-current={currentFor("contact", match)}>
              {t.cta.workWithMe}
            </ButtonLink>
          </div>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:bg-paper lg:hidden"
          >
            <span className="sr-only">{open ? t.a11y.closeMenu : t.a11y.openMenu}</span>
            {open ? <FiX aria-hidden="true" className="size-5" /> : <FiMenu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Backdrop below the bar (click closes; keyboard users have Esc and the toggle button). */}
      <div
        aria-hidden="true"
        onClick={() => setOpenOn(null)}
        className={cx(
          "fixed inset-x-0 top-16 bottom-0 -z-10 bg-ink/25 transition-opacity duration-200 lg:hidden motion-reduce:transition-none",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={cx(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-paper shadow-lift duration-200 ease-out lg:hidden motion-reduce:transition-none",
          open
            ? "visible translate-y-0 opacity-100 transition-[opacity,translate]"
            : "invisible -translate-y-2 opacity-0 transition-[opacity,translate,visibility]",
        )}
      >
        <Container className="py-4">
          <nav aria-label={t.a11y.mobileNav}>
            <ul className="divide-y divide-line">
              {NAV_KEYS.map((key) => {
                const current = currentFor(key, match);
                return (
                  <li key={key}>
                    <Link
                      to={pathFor(key, lang)}
                      aria-current={current}
                      onClick={() => setOpenOn(null)}
                      className={cx(
                        "flex min-h-12 items-center justify-between py-3 text-base font-medium",
                        current ? "text-accent" : "text-ink hover:text-accent",
                      )}
                    >
                      {t.nav[key]}
                      {current ? <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ButtonLink
            to={pathFor("contact", lang)}
            size="lg"
            aria-current={currentFor("contact", match)}
            onClick={() => setOpenOn(null)}
            className="mt-4 mb-2 w-full"
          >
            {t.cta.workWithMe}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
