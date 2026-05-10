import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-brayanjsr.png";

const SECTIONS = [
  "home",
  "about",
  "music",
  "upcoming",
  "merch",
  "tour",
  "gallery",
  "socials",
] as const;

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop vertical sidebar — Rihanna-style */}
      <motion.aside
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 left-0 z-50 hidden w-[120px] flex-col items-center justify-between border-r border-white/10 bg-black/80 py-8 backdrop-blur-xl md:flex"
      >
        <button
          onClick={() => go("home")}
          aria-label="BrayanJSR home"
          className="transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="BrayanJSR logo" className="h-12 w-12 object-contain invert" />
        </button>

        <nav className="flex flex-col items-center gap-5 text-[11px] uppercase tracking-[0.3em]">
          {SECTIONS.map((id) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className={cn(
                  "relative py-1 transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t.nav[id as keyof typeof t.nav]}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-1/2 h-px w-6 -translate-x-1/2 bg-foreground"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-4">
          <LanguageToggle />
          <span className="block h-10 w-px bg-white/10" />
          <span className="rotate-180 text-[10px] uppercase tracking-[0.4em] text-muted-foreground [writing-mode:vertical-rl]">
            © BrayanJSR
          </span>
        </div>
      </motion.aside>

      {/* Mobile top bar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl md:hidden"
      >
        <button
          onClick={() => go("home")}
          aria-label="BrayanJSR home"
          className="flex items-center gap-2"
        >
          <img src={logo} alt="BrayanJSR logo" className="h-8 w-8 object-contain invert" />
          <span className="font-display text-base font-semibold uppercase tracking-[0.3em]">
            BRAYAN<span className="text-primary">JSR</span>
          </span>
        </button>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-full"
          >
            <span className="relative block h-3 w-4">
              <span className={cn("absolute left-0 top-0 h-px w-full bg-foreground transition-transform", open && "translate-y-1.5 rotate-45")} />
              <span className={cn("absolute left-0 top-1.5 h-px w-full bg-foreground transition-opacity", open && "opacity-0")} />
              <span className={cn("absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform", open && "-translate-y-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu drawer */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -8, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-[64px] z-40 md:hidden"
      >
        <div className="mx-5 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="rounded-xl px-3 py-2 text-left text-xs uppercase tracking-[0.25em] text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              {t.nav[id as keyof typeof t.nav]}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}