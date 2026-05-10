import { useI18n } from "@/i18n/I18nProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className="glass inline-flex items-center rounded-full p-1 text-xs font-medium"
    >
      {(["en", "es"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            className={
              "rounded-full px-3 py-1 uppercase tracking-widest transition-colors duration-300 " +
              (active
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_var(--glow-soft)]"
                : "text-muted-foreground hover:text-foreground")
            }
            aria-pressed={active}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}