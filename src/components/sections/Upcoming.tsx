import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export function Upcoming() {
  const { t } = useI18n();

  const teasers = [
    { code: "JSR / 06", date: "Q2", hue: "from-primary/30 to-aurora/20" },
    { code: "JSR / 07", date: "Q3", hue: "from-aurora/30 to-primary/10" },
    { code: "JSR / 08", date: "TBA", hue: "from-primary/20 to-accent/30" },
  ];

  return (
    <Section
      id="upcoming"
      eyebrow={t.upcoming.eyebrow}
      title={t.upcoming.title}
      subtitle={t.upcoming.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {teasers.map((teaser, i) => (
          <Reveal key={teaser.code} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1">
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70 ${teaser.hue}`}
              />
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80">
                  {teaser.code}
                </div>
                <div className="mt-8 font-display text-4xl font-semibold text-gradient">
                  {teaser.date}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.upcoming.teaser}
                </p>
                <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <button className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary">
                  {t.upcoming.notify} →
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}