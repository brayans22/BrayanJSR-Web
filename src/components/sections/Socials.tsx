import { Section } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { useState } from "react";

const SOCIALS = [
  {
    name: "Spotify",
    handle: "@brayanjsr",
    href: "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ",
    accent: "from-emerald-500/40 to-emerald-700/10",
    glow: "rgba(34,197,94,0.45)",
    cta: "Listen now",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.7.7 0 01-1 .2c-2.7-1.6-6-2-9.9-1.1a.7.7 0 11-.3-1.4c4.2-.9 7.9-.5 10.9 1.3.4.2.5.6.3 1zm1.2-2.7a.9.9 0 01-1.2.3c-3-1.8-7.7-2.4-11.3-1.3a.9.9 0 11-.5-1.7c4.1-1.2 9.2-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-2.8c-3.6-2.1-9.6-2.3-13-1.3a1.1 1.1 0 11-.6-2.1c4-1.2 10.6-.9 14.7 1.5a1.1 1.1 0 11-1.1 1.9z",
  },
  {
    name: "Instagram",
    handle: "@brayan.ssai",
    href: "https://www.instagram.com/brayan.ssai/",
    accent: "from-pink-500/40 via-fuchsia-500/30 to-orange-500/20",
    glow: "rgba(236,72,153,0.5)",
    cta: "Follow",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8s-.6.8-.8 1.3c-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3s.8.6 1.3.8c.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8s.6-.8.8-1.3c.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3s-.8-.6-1.3-.8c-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5-2.1a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z",
  },
  {
    name: "YouTube",
    handle: "BrayanJSR",
    href: "https://www.youtube.com/channel/UCJFxCCwR1itxL6G-LqnSFGA",
    accent: "from-red-500/40 to-red-700/10",
    glow: "rgba(239,68,68,0.5)",
    cta: "Watch",
    path: "M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z",
  },
  {
    name: "Apple Music",
    handle: "BrayanJSR",
    href: "https://music.apple.com/om/artist/brayanjsr/1504884733",
    accent: "from-rose-400/40 to-pink-600/10",
    glow: "rgba(244,114,182,0.45)",
    cta: "Listen",
    path: "M19.5 5.5c0-1.4-1.1-2.5-2.5-2.5h-10C5.6 3 4.5 4.1 4.5 5.5v13C4.5 19.9 5.6 21 7 21h10c1.4 0 2.5-1.1 2.5-2.5v-13zM15 7.2v7.6c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.3 0 .5 0 .8.1V9.4l-4 .9v6.3c0 1.2-1 2.2-2.2 2.2S5.2 17.8 5.2 16.6s1-2.2 2.2-2.2c.3 0 .5 0 .8.1V8.3L15 7.2z",
  },
  {
    name: "Deezer",
    handle: "BrayanJSR",
    href: "https://www.deezer.com/en/artist/89741282",
    accent: "from-violet-500/40 to-indigo-700/10",
    glow: "rgba(139,92,246,0.5)",
    cta: "Stream",
    path: "M18 4h4v3h-4V4zm0 4.5h4v3h-4v-3zM12 9h4v3h-4V9zm6 0h4v3h-4V9zM2 13.5h4v3H2v-3zm6 0h4v3H8v-3zm4 0h4v3h-4v-3zm6 0h4v3h-4v-3zM2 18h4v3H2v-3zm6 0h4v3H8v-3zm4 0h4v3h-4v-3zm6 0h4v3h-4v-3z",
  },
  {
    name: "Amazon Music",
    handle: "BrayanJSR",
    href: "https://www.amazon.com/music/player/artists/B088K566ZC/brayanjsr",
    accent: "from-sky-400/40 to-cyan-700/10",
    glow: "rgba(56,189,248,0.5)",
    cta: "Listen",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zm5.6 15.4c-3.4 2.5-8.4 2.6-11.6.1-.3-.2 0-.5.3-.4 3.5 1.5 7.4 1.4 10.7-.2.5-.2.9.4.6.5zm1.4-1.7c-.4-.5-2.6-.2-3.6-.1-.3 0-.4-.2-.1-.4 1.7-1.2 4.5-.9 4.8-.5.3.4-.1 3.2-1.7 4.5-.2.2-.5.1-.4-.2.4-.9 1.4-2.8 1-3.3z",
  },
];

export function Socials() {
  const { t } = useI18n();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section id="socials" eyebrow={t.socials.eyebrow} title={t.socials.title} subtitle={t.socials.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOCIALS.map((s, i) => {
          const isHover = hovered === s.name;
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-500"
              style={{
                boxShadow: isHover ? `0 25px 60px -20px ${s.glow}` : undefined,
              }}
            >
              {/* animated gradient bg */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${s.accent}`}
              />
              <div className="pointer-events-none absolute -inset-px rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-white/30" />

              {/* floating orb */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-60"
                style={{ background: s.glow }}
                animate={isHover ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.span
                    className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                    animate={isHover ? { rotate: [0, -6, 6, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-foreground">
                      <path d={s.path} />
                    </svg>
                  </motion.span>

                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-foreground">{s.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                      {s.handle}
                    </p>
                  </div>
                </div>

                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="relative mt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.35em]">
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  {s.cta}
                </span>
                {/* live equalizer */}
                <span className="flex h-4 items-end gap-[3px]">
                  {[0, 1, 2, 3, 4].map((b) => (
                    <motion.span
                      key={b}
                      className="block w-[3px] rounded-sm bg-white/60"
                      initial={{ height: "20%" }}
                      animate={isHover ? { height: ["20%", "100%", "40%", "80%", "30%"] } : { height: "20%" }}
                      transition={{ duration: 1, repeat: Infinity, delay: b * 0.1, ease: "easeInOut" }}
                    />
                  ))}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
