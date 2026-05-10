import { Section } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

{/* Gallery No Limits Album */}
import g1 from "@/assets/covers/Albums/NL/Aimless.jpeg";
import g2 from "@/assets/covers/Albums/NL/B_W.jpg";
import g3 from "@/assets/covers/Albums/NL/Chrominance.jpg";
import g4 from "@/assets/covers/Albums/NL/Chrominance Slowed.jpeg";
//import g5 from "@/assets/covers/Albums/NL/Dancin.jpeg";
//import g6 from "@/assets/covers/Albums/NL/FIS.jpeg";
//import g7 from "@/assets/covers/Albums/NL/LVF.jpeg";
import g8 from "@/assets/covers/Albums/NL/nl.jpeg";
import g9 from "@/assets/covers/Albums/NL/Sky_Bleu.jpg";
import g10 from "@/assets/covers/Albums/NL/Unknown_Footage.jpg";

{/* Gallery Yin Yang Revolution Album */}
import g11 from "@/assets/covers/Albums/YYR/alone_with_the_moon.jpg";
import g12 from "@/assets/covers/Albums/YYR/heaven_voices.jpg";
import g13 from "@/assets/covers/Albums/YYR/iglu.jpg";
import g14 from "@/assets/covers/Albums/YYR/peaceful.jpg";
import g15 from "@/assets/covers/Albums/YYR/natural_vibes.jpg";
import g16 from "@/assets/covers/Albums/YYR/tranquility_vibes.jpg";
import g17 from "@/assets/covers/Albums/YYR/yyr.jpg";


{/* Gallery What Was Real Album */}
import g18 from "@/assets/covers/Albums/WWR/wwr.jpg";



{/* Gallery Singles */}
import g25 from "@/assets/covers/Singles/FallingToPieces.jpg";

const frames = [
  {
    src: g1,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g2,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g3,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  /*
  {
    src: g5,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g6,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g7,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g8,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },*/
  {
    src: g9,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g10,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g11,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g12,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g13,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g14,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g15,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g16,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g17,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g18,
    title: "",
    place: "Unknown",
    date: "202",
    album: "",
    note: "",
  },
  {
    src: g25,
    title: "Falling to pieces",
    place: "Unknown",
    date: "2026",
    album: "Picture from Falling to Pieces Single ",
    note: "That feeling when you deep in sad",
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
        <div className="mb-4 flex h-4 items-center gap-2 opacity-40 overflow-hidden">
          {Array.from({ length: 32 }).map((_, k) => (
            <span key={k} className="h-3 w-6 rounded-sm bg-white/10" />
          ))}
        </div>

        <div className="relative grid gap-8 md:grid-cols-[2.3fr_0.7fr] items-stretch">
          {/* Main Viewer */}
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black md:min-h-[700px] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.src}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                {/* Image */}
                <motion.img
                  src={cur.src}
                  alt={cur.title}
                  initial={{
                    filter: "grayscale(100%) brightness(0.8)",
                    scale: 1.08,
                  }}
                  animate={{
                    filter: "grayscale(0%) brightness(1)",
                    scale: 1,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.78)_100%)]" />

                {/* Film grain */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

                {/* Scan line */}
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-white/10" />
              </motion.div>
            </AnimatePresence>

            {/* Frame counter */}
            <div className="absolute left-5 top-5 z-20 font-mono text-[10px] uppercase tracking-[0.45em] text-white/70">
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(frames.length).padStart(2, "0")}
            </div>

            {/* REC */}
            <div className="absolute right-5 top-5 z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-red-400">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              REC
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-3 text-white/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-3 text-white/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Info Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between rounded-3xl glass p-7 backdrop-blur-xl"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
                  {cur.album} · {cur.date}
                </p>

                <h3 className="mt-3 font-editorial text-4xl leading-tight text-foreground">
                  {cur.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  {cur.place}
                </p>

                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  {cur.note}
                </p>
              </div>

              {/* Progress indicators */}
              <div className="mt-8 flex gap-2">
                {frames.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to frame ${k + 1}`}
                    className={`transition-all duration-500 ${
                      k === i
                        ? "h-[3px] w-14 bg-white"
                        : "h-[2px] w-8 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom film perforations */}
        <div className="mt-4 flex h-4 items-center gap-2 opacity-40 overflow-hidden">
          {Array.from({ length: 32 }).map((_, k) => (
            <span key={k} className="h-3 w-6 rounded-sm bg-white/10" />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {frames.map((f, k) => (
          <button
            key={f.title}
            onClick={() => setI(k)}
            className={`group relative aspect-[5/4] overflow-hidden rounded-2xl border transition-all duration-500 ${
              k === i
                ? "border-white scale-[1.02]"
                : "border-white/10 hover:border-white/40"
            }`}
          >
            <img
              src={f.src}
              alt={f.title}
              className={`h-full w-full object-cover transition-all duration-700 ${
                k === i
                  ? "scale-105"
                  : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/0" />
          </button>
        ))}
      </div>
    </Section>
  );
}
