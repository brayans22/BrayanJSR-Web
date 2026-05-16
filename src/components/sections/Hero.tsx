import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/textures/paper.jpg";

const SPOTIFY_URL =
  "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black"
    >
      {/* FULL BACKGROUND IMAGE (FIXED) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Portrait of BrayanJSR"
          className="h-full w-full object-cover object-center"
        />
        {/* overlay suave para legibilidad */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* scan line */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground"
        >
          <span className="block h-px w-8 bg-foreground/60" />
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-hero text-[20vw] leading-[0.82] text-foreground sm:text-8xl md:text-[10rem] lg:text-[13rem]"
        >
          Brayan
          <br />
          <span className="font-editorial italic font-normal text-gradient">
            JSR
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="h-2 w-2 rounded-full bg-primary-foreground" />
            {t.hero.listen}
          </a>

          <a
            href="#music"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10"
          >
            {t.hero.explore}
          </a>

          <a
            href="#socials"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {t.hero.socials} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}