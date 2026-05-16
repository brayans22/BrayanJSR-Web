import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import aboutMe from "@/assets/about-me-section.jpg";

export function About() {
  const { t } = useI18n();

  const stats = [
    { value: "25+", label: t.about.stat1 },
    { value: "3", label: "Albums" },
    { value: "4", label: t.about.stat3 },
  ];

  return (
    <Section
      id="about"
      eyebrow={t.about.eyebrow}
      className="relative bg-cover bg-center bg-no-repeat bg-[url('@/assets/textures/paper.jpg')]"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-white">

        {/* Blank title */}
        <h2 className="text-3xl font-bold text-white mb-10">
          {t.about.title}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <Reveal className="space-y-6 text-white/80 sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
            <p className="font-display text-white">{t.about.p5}</p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass p-5">
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img
              src={aboutMe}
              alt="Atmospheric night highway under blue lights"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </Reveal>

        </div>
      </div>
    </Section>
  );
}