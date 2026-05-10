import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/hero-artist.jpg";

const SPOTIFY_URL =
  "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black"
    >
      {/* Portrait — cinematic, full bleed */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 hidden w-[62%] md:block"
      >
        <div className="relative h-full w-full">
          <img
            src={heroImg}
            alt="Portrait of BrayanJSR"
            width={1536}
            height={1536}
            className="h-full w-full object-cover object-center opacity-90 grayscale contrast-125 [mask-image:linear-gradient(to_left,black_25%,transparent_98%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
        </div>
      </motion.div>

      {/* Mobile portrait backdrop */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black" />
      </div>

      {/* Subtle horizontal scan line */}
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
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-hero text-[20vw] leading-[0.82] text-foreground sm:text-8xl md:text-[10rem] lg:text-[13rem]"
        >
          Brayan
          <br />
          <span className="font-editorial italic font-normal text-gradient">JSR</span>
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
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_var(--glow-soft)]"
          >
            <span className="h-2 w-2 rounded-full bg-primary-foreground" />
            {t.hero.listen}
          </a>
          <a
            href="#music"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10"
          >
            {t.hero.explore}
          </a>
          <a
            href="#socials"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.hero.socials} →
          </a>
        </motion.div>

        <div className="mt-24 flex justify-center pb-10 md:mt-32">
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            {t.hero.scroll}
            <span className="relative block h-10 w-px overflow-hidden bg-white/10">
              <span className="absolute left-0 top-0 block h-3 w-px bg-primary animate-scroll-down" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}