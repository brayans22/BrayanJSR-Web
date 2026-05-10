import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export function Tour() {
  const { t } = useI18n();

  return (
    <Section id="tour" eyebrow={t.tour.eyebrow} title={t.tour.title}>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass p-12 sm:p-20">
          <div className="aurora-blob -top-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-primary/30" />
          <div className="relative text-center">
            <p className="font-display text-3xl font-semibold text-gradient sm:text-5xl">
              {t.tour.empty}
            </p>
            <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground">
              {t.tour.emptySub}
            </p>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.3em] text-primary/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              2026
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}