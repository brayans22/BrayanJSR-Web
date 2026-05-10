import { useI18n } from "@/i18n/I18nProvider";

const SOCIAL_LINKS = [
  { name: "Spotify", href: "https://open.spotify.com/artist/1DNdeBjys6meGT7oO65CnQ" },
  { name: "Instagram", href: "https://www.instagram.com/brayan.ssai/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCJFxCCwR1itxL6G-LqnSFGA" },
  { name: "Apple Music", href: "https://music.apple.com/om/artist/brayanjsr/1504884733" },
  { name: "Amazon Music", href: "https://www.amazon.com/music/player/artists/B088K566ZC/brayanjsr" },
  { name: "Deezer", href: "https://www.deezer.com/en/artist/89741282" },
];

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-14">
      <div className="aurora-blob -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 bg-primary/20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <div className="font-display text-2xl font-semibold tracking-tight">
          BRAYAN<span className="text-primary glow-text">JSR</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <a href="#music" className="hover:text-foreground transition-colors">{t.nav.music}</a>
          <a href="#merch" className="hover:text-foreground transition-colors">{t.nav.merch}</a>
          <a href="#tour" className="hover:text-foreground transition-colors">{t.nav.tour}</a>
          <a href="#socials" className="hover:text-foreground transition-colors">{t.nav.socials}</a>
        </div>
        <div className="text-xs text-muted-foreground/70">
          Copyright © Brayan Saiago {year}. {t.footer.rights}
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Privacy Policy · Terms and Conditions
        </div>
      </div>
    </footer>
  );
}