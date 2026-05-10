import { Section } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const frames = [
  {
    src: g1,
    title: "Night Drive",
    place: "Lisbon, PT",
    date: "2024",
    album: "What Was Real?",
    note: "Cityscape captured during late-night sessions. The blue glow inspired the album's mood.",
  },
  {
    src: g2,
    title: "Synth Hours",
    place: "Studio",
    date: "2023",
    album: "No Limits",
    note: "Hands on the keys. Where most of the textures of No Limits were born.",
  },
  {
    src: g3,
    title: "Empty Stage",
    place: "Margarita, VE",
    date: "2022",
    album: "Yin Yang Revolution",
    note: "Silent rehearsal under blue lights — a reminder that quiet shapes the loudest moments.",
  },
  {
    src: g4,
    title: "Streetlight",
    place: "Portugal",
    date: "2024",
    album: "Singles",
    note: "Walking home after the session. Almost the cover of an unreleased single.",
  },
];

export function Gallery() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % frames.length);
  const prev = () => setI((p) => (p - 1 + frames.length) % frames.length);
  const cur = frames[i];

  return (
    <Section
      id="gallery"
      eyebrow={t.gallery.eyebrow}
      title={t.gallery.title}
      subtitle={t.gallery.subtitle}
    >
      {/* Cinematic film frame */}
      <div className="relative">
        {/* Top film perforations */}
        <div className="mb-3 flex h-4 items-center gap-2 opacity-50">
          {Array.from({ length: 24 }).map((_, k) => (
            <span key={k} className="h-3 w-5 rounded-sm bg-white/10" />
          ))}
        </div>

        <div className="relative grid gap-6 md:grid-cols-[1.6fr_1fr]">
          {/* Viewer */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={cur.src}
                src={cur.src}
                alt={cur.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
            </AnimatePresence>

            {/* Vignette + scan line */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-white/5" />

            {/* Frame counter */}
            <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/70">
              {String(i + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
            </div>
            <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/70">
              ● REC
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Info card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between rounded-2xl glass p-6"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  {cur.album} · {cur.date}
                </p>
                <h3 className="mt-2 font-editorial text-3xl text-foreground">{cur.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {cur.place}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{cur.note}</p>
              </div>
              <div className="mt-6 flex gap-2">
                {frames.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to frame ${k + 1}`}
                    className={`h-px w-8 transition-all ${
                      k === i ? "bg-foreground h-[2px]" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom film perforations */}
        <div className="mt-3 flex h-4 items-center gap-2 opacity-50">
          {Array.from({ length: 24 }).map((_, k) => (
            <span key={k} className="h-3 w-5 rounded-sm bg-white/10" />
          ))}
        </div>
      </div>

      {/* Strip thumbnails */}
      <div className="mt-8 grid grid-cols-4 gap-3">
        {frames.map((f, k) => (
          <button
            key={f.title}
            onClick={() => setI(k)}
            className={`group relative aspect-[4/3] overflow-hidden rounded-lg border transition-all ${
              k === i ? "border-white" : "border-white/10 hover:border-white/30"
            }`}
          >
            <img
              src={f.src}
              alt={f.title}
              className={`h-full w-full object-cover transition-all duration-500 ${
                k === i ? "" : "grayscale opacity-60 group-hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>
    </Section>
  );
}