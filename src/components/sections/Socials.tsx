import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const SOCIALS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.7.7 0 01-1 .2c-2.7-1.6-6-2-9.9-1.1a.7.7 0 11-.3-1.4c4.2-.9 7.9-.5 10.9 1.3.4.2.5.6.3 1zm1.2-2.7a.9.9 0 01-1.2.3c-3-1.8-7.7-2.4-11.3-1.3a.9.9 0 11-.5-1.7c4.1-1.2 9.2-.6 12.7 1.5.4.3.5.8.3 1.2zm.1-2.8c-3.6-2.1-9.6-2.3-13-1.3a1.1 1.1 0 11-.6-2.1c4-1.2 10.6-.9 14.7 1.5a1.1 1.1 0 11-1.1 1.9z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brayan.ssai/",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8s-.6.8-.8 1.3c-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3s.8.6 1.3.8c.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8s.6-.8.8-1.3c.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3s-.8-.6-1.3-.8c-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5-2.1a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCJFxCCwR1itxL6G-LqnSFGA",
    path: "M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/om/artist/brayanjsr/1504884733",
    path: "M19.5 5.5c0-1.4-1.1-2.5-2.5-2.5h-10C5.6 3 4.5 4.1 4.5 5.5v13C4.5 19.9 5.6 21 7 21h10c1.4 0 2.5-1.1 2.5-2.5v-13zM15 7.2v7.6c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.3 0 .5 0 .8.1V9.4l-4 .9v6.3c0 1.2-1 2.2-2.2 2.2S5.2 17.8 5.2 16.6s1-2.2 2.2-2.2c.3 0 .5 0 .8.1V8.3L15 7.2z",
  },
  {
    name: "Deezer",
    href: "https://www.deezer.com/en/artist/89741282",
    path: "M18 4h4v3h-4V4zm0 4.5h4v3h-4v-3zM12 9h4v3h-4V9zm6 0h4v3h-4V9zM2 13.5h4v3H2v-3zm6 0h4v3H8v-3zm4 0h4v3h-4v-3zm6 0h4v3h-4v-3zM2 18h4v3H2v-3zm6 0h4v3H8v-3zm4 0h4v3h-4v-3zm6 0h4v3h-4v-3z",
  },
  {
    name: "Amazon Music",
    href: "https://www.amazon.com/music/player/artists/B088K566ZC/brayanjsr",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zm5.6 15.4c-3.4 2.5-8.4 2.6-11.6.1-.3-.2 0-.5.3-.4 3.5 1.5 7.4 1.4 10.7-.2.5-.2.9.4.6.5zm1.4-1.7c-.4-.5-2.6-.2-3.6-.1-.3 0-.4-.2-.1-.4 1.7-1.2 4.5-.9 4.8-.5.3.4-.1 3.2-1.7 4.5-.2.2-.5.1-.4-.2.4-.9 1.4-2.8 1-3.3z",
  },
];

export function Socials() {
  const { t } = useI18n();

  return (
    <Section
      id="socials"
      eyebrow={t.socials.eyebrow}
      title={t.socials.title}
      subtitle={t.socials.subtitle}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {SOCIALS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group relative mx-auto flex flex-col items-center justify-center gap-3"
            >
              <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <span className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-all duration-500 group-hover:from-white/5 group-hover:to-transparent" />
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:scale-110"
                >
                  <path d={s.path} />
                </svg>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-foreground">
                {s.name}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}