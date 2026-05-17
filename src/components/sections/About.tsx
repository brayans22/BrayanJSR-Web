import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import aboutMe from "@/assets/about-me-section.jpg";

export function About() {
  const { t } = useI18n();

  const stats = [
    { value: "25+", label: t.about.stat1 },
    { value: "3", label: "Albums / EPs" },
    { value: "4+", label: "Singles" },
  ];

  const discography = [
    { year: "2026", title: "Falling To Pieces", kind: "Single · Dance / Electronic Pop" },
    { year: "2023", title: "What Was Real?", kind: "Album · Lo-fi / Ambient" },
    { year: "2023", title: "Things I Want To Say", kind: "Single · Electronic / House" },
    { year: "2022", title: "No Limits", kind: "Album · Lo-fi / Electronic" },
    { year: "2022", title: "Sky Bleu", kind: "Single · Lo-fi / Future Bass" },
    { year: "2022", title: "With Youxxx", kind: "Single · Electronic / House" },
    { year: "2020", title: "Yin Yang Revolution", kind: "EP · Trap / Lo-fi / Ambient" },
  ];

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
          <p className="font-display text-foreground">{t.about.p5}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <img
            src={aboutMe}
            alt="Atmospheric night highway under blue lights"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal className="mt-12 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl glass p-5 text-center sm:text-left">
            <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </Reveal>

      {/* Discography — below the stats */}
      <Reveal delay={0.1} className="mt-8 rounded-3xl glass p-6 sm:p-8">
        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          Discography
        </p>
        <ol className="divide-y divide-white/5">
          {discography.map((d) => (
            <li
              key={d.title}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="font-mono text-[11px] tabular-nums text-muted-foreground/70">
                {d.year}
              </span>
              <span className="flex-1 truncate font-music text-base text-foreground sm:text-lg">
                {d.title}
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
                {d.kind}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}