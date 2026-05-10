import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import loading from "@/assets/Loading.jpg";

export function Merch() {
  const { t } = useI18n();

  const items = [
    { name: "Not Available", price: "—", img: loading, soon: true },
    { name: "Not Available", price: "—", img: loading, soon: true },
    { name: "Not Availabler", price: "—", img: loading, soon: true },
  ];

  return (
    <Section
      id="merch"
      eyebrow={t.merch.eyebrow}
      title={t.merch.title}
      subtitle={t.merch.subtitle}
    >
      <div className="mb-10 rounded-2xl glass p-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {t.merch.unavailable}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <div className="group overflow-hidden rounded-3xl glass">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </div>
                <button
                  disabled={item.soon}
                  className={
                    "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 " +
                    (item.soon
                      ? "cursor-not-allowed bg-white/5 text-muted-foreground"
                      : "bg-primary text-primary-foreground hover:shadow-[0_0_30px_var(--glow-soft)]")
                  }
                >
                  {item.soon ? t.merch.soon : t.merch.buy}
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}