import { Section } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX, ArrowUpRight } from "lucide-react";

import g1 from "@/assets/covers/Albums/NL/no-limits-cover.jpg";
import g2 from "@/assets/covers/Albums/NL/Aimless.jpeg";
import g3 from "@/assets/covers/Albums/NL/B_W.jpg";
import g4 from "@/assets/covers/Albums/YYR/yyr.jpg";
import g5 from "@/assets/covers/Albums/YYR/alone_with_the_moon.jpg";
import g6 from "@/assets/covers/Albums/YYR/heaven_voices.jpg";
import g7 from "@/assets/covers/Albums/WWR/wwr.jpg";
import g8 from "@/assets/covers/Singles/FallingToPieces.jpg";
import g9 from "@/assets/covers/Singles/Think.jpg";
import g10 from "@/assets/covers/Singles/WY.jpg";
import g11 from "@/assets/covers/Singles/sky_bleu.jpg";
import g12 from "@/assets/about-me-section.jpg";

type Tile = {
  src: string;
  video?: string;
  title: string;
  album: string;
  date: string;
  note: string;
  featured?: boolean; // larger tile in bento
  wide?: boolean;     // 2-col span
  tall?: boolean;     // 2-row span
};

const tiles: Tile[] = [
  { src: g4,  title: "Yin Yang Revolution",   album: "EP",         date: "2020", note: "Lo-fi, Ambient y Trap.",                          featured: true },
  { src: g8,  title: "Falling to Pieces",      album: "Single",     date: "2026", note: "Una nueva era electrónica empieza aquí.",         tall: true },
  { src: g11, title: "Sky Bleu",               album: "Single",     date: "2022", note: "Lo-fi / Future Bass." },
  { src: g5,  title: "Alone With The Moon",    album: "YYR",        date: "2020", note: "Una pieza solitaria, escrita bajo la luna." },
  { src: g6,  title: "Heaven Voices",          album: "YYR",        date: "2020", note: "Voces etéreas suspendidas en el aire." },
  { src: g2,  title: "Aimless",                album: "No Limits",  date: "2022", note: "Sin rumbo, dejándose llevar.",                   wide: true },
  { src: g3,  title: "B & W",                  album: "No Limits",  date: "2022", note: "Contraste puro." },
  { src: g10, title: "With Youxxx",            album: "Single",     date: "2022", note: "House emocional." },
  { src: g9,  title: "Things I Want To Say",   album: "Single",     date: "2023", note: "Released independently." },
  { src: g12, title: "Mood Reference",         album: "Atmosphere", date: "2024", note: "La atmósfera que inspira cada tema.",            wide: true },
];

export function Gallery() {
  const { t } = useI18n();
  const [open, setOpen] = useState<Tile | null>(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section
      id="gallery"
      eyebrow={t.gallery.eyebrow}
      title={t.gallery.title}
      subtitle={t.gallery.subtitle}
    >
      {/* Header bar */}
      <div className="mb-10 flex items-end justify-between border-b border-white/8 pb-5">
        <p className="text-[11px] uppercase tracking-[0.38em] text-white/35">
          Visual archive · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/35">
          {String(tiles.length).padStart(2, "0")} frames
        </p>
      </div>

      {/* ── Bento grid ── */}
      <div
        className="grid gap-3 md:gap-4"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "clamp(140px, 18vw, 260px)",
        }}
      >
        {tiles.map((tile, i) => {
          // Build grid-column / grid-row spans
          let colSpan = "span 4";   // default: 4 of 12
          let rowSpan = "span 1";

          if (tile.featured) { colSpan = "span 5"; rowSpan = "span 2"; }
          else if (tile.wide && tile.tall) { colSpan = "span 6"; rowSpan = "span 2"; }
          else if (tile.wide)  { colSpan = "span 6"; }
          else if (tile.tall)  { colSpan = "span 3"; rowSpan = "span 2"; }

          return (
            <motion.button
              key={tile.title + i}
              onClick={() => setOpen(tile)}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              style={{ gridColumn: colSpan, gridRow: rowSpan }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black text-left"
            >
              {/* Image / video */}
              {tile.video ? (
                <video
                  src={tile.video}
                  poster={tile.src}
                  autoPlay muted loop playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={tile.src}
                  alt={tile.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-[1.07] group-hover:grayscale-0"
                />
              )}

              {/* Gradient overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />

              {/* Shine on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0) 50%, transparent 60%)" }}
                animate={hovered === i
                  ? { background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)" }
                  : { background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0) 50%, transparent 60%)" }
                }
                transition={{ duration: 0.5 }}
              />

              {/* Video badge */}
              {tile.video && (
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                  <Play className="h-2 w-2" fill="currentColor" /> Video
                </span>
              )}

              {/* Metadata — always visible, slides up on hover */}
              <div className="absolute inset-x-4 bottom-4">
                {/* Index number */}
                <p className="mb-1.5 font-mono text-[9px] text-white/30 transition-opacity duration-300 group-hover:text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <motion.div
                  animate={hovered === i ? { y: 0, opacity: 1 } : { y: 8, opacity: 0.7 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/50">
                    {tile.album} · {tile.date}
                  </p>
                  <h3
                    className="mt-0.5 font-display font-semibold text-white leading-tight"
                    style={{ fontSize: tile.featured ? "1.25rem" : "0.875rem" }}
                  >
                    {tile.title}
                  </h3>
                  <p
                    className="mt-1.5 text-white/55 leading-snug transition-all duration-500"
                    style={{
                      fontSize: "0.72rem",
                      maxHeight: hovered === i ? "3rem" : "0",
                      overflow: "hidden",
                      opacity: hovered === i ? 1 : 0,
                    }}
                  >
                    {tile.note}
                  </p>
                </motion.div>
              </div>

              {/* Arrow icon — top right on hover */}
              <motion.div
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={hovered === i ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpen(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/92 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 32 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media */}
              <div className="relative aspect-video bg-black">
                {open.video ? (
                  <video
                    src={open.video}
                    poster={open.src}
                    autoPlay loop playsInline muted={muted}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={open.src}
                    alt={open.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                {/* Controls */}
                <div className="absolute right-4 top-4 z-20 flex gap-2">
                  {open.video && (
                    <button
                      onClick={() => setMuted((m) => !m)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:text-white"
                    >
                      {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Lightbox metadata */}
                <div className="absolute inset-x-7 bottom-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/55">
                    {open.album} · {open.date}
                  </p>
                  <h2 className="mt-1 font-music text-4xl text-white sm:text-6xl leading-none">
                    {open.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-white/60 leading-relaxed">
                    {open.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}