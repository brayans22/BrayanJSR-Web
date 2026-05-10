import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { useMemo, useState } from "react";
import { Search, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cover1 from "@/assets/covers/wwr.jpg";
import cover2 from "@/assets/covers/nl.jpg";
import cover3 from "@/assets/covers/yyr.jpg";
import cover4 from "@/assets/covers/yyr.jpg";

const SPOTIFY_URL = "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ";

type AtmosKey = "atmos-space" | "atmos-ocean" | "atmos-grain" | "atmos-white";

type Release = {
  title: string;
  year: number;
  type: "Album" | "EP" | "Single";
  genre: string;
  cover: string;
  duration?: string;
  atmos?: AtmosKey;
  description?: string;
  label?: string;
  producer?: string;
  artist?: string;
  releaseDate?: string;
  copyright?: string;
  tracks?: { n: number; title: string; duration?: string }[];
};

const releases: Release[] = [
  {
    title: "What Was Real?",
    year: 2023,
    type: "Album",
    genre: "Lo-fi / Ambient",
    cover: cover1,
    atmos: "atmos-ocean",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "2023-12-29",
    copyright: "2023 © Brayan Saiago & BrayanJSR",
    description:
      "Atmósfera oceánica e introspectiva. Ocho piezas hechas para perderse de noche.",
    tracks: [
      { n: 1, title: "What Was Real?", duration: "1:03" },
      { n: 2, title: "I'm With You", duration: "1:24" },
      { n: 3, title: "All I Need It", duration: "1:42" },
      { n: 4, title: "Nobody Knows", duration: "1:46" },
      { n: 5, title: "Craving", duration: "1:45" },
      { n: 6, title: "Maybe It's Love...", duration: "1:11" },
      { n: 7, title: "Piece Of Me", duration: "1:31" },
      { n: 8, title: "N22", duration: "1:12" },
    ],
  },
  {
    title: "No Limits",
    year: 2022,
    type: "Album",
    genre: "Lo-fi / Electronic / Ambient",
    cover: cover2,
    duration: "15:33",
    atmos: "atmos-white",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "2022-08-22",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
    description:
      "Un viaje espacial, futurista e infinito. Mezcla de Lo-fi, Future Bass y House experimental.",
    tracks: [
      { n: 1, title: "No Limits", duration: "1:30" },
      { n: 2, title: "Sky Bleu", duration: "1:15" },
      { n: 3, title: "Dancin' No Sleep", duration: "2:01" },
      { n: 4, title: "Unknown Footage", duration: "1:15" },
      { n: 5, title: "Chrominance", duration: "1:31" },
      { n: 6, title: "Floating In Space", duration: "1:46" },
      { n: 7, title: "Lovely Planet", duration: "1:18" },
      { n: 8, title: "Rêveur", duration: "1:45" },
      { n: 9, title: "B&W", duration: "1:07" },
      { n: 10, title: "Aimless", duration: "2:03" },
    ],
  },
  {
    title: "Yin Yang Revolution",
    year: 2020,
    type: "EP",
    genre: "Trap / Lo-fi / Ambient",
    cover: cover3,
    duration: "16:34",
    atmos: "atmos-space",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "2020-03-18",
    copyright: "2020 © Brayan Saiago & BrayanJSR",
    description:
      "Sonido nostálgico y cinematográfico con elementos Lo-fi, Ambient y Trap.",
    tracks: [
      { n: 1, title: "Yin Yang Revolution", duration: "3:14" },
      { n: 2, title: "Alone With The Moon", duration: "2:07" },
      { n: 3, title: "Iglú", duration: "2:27" },
      { n: 4, title: "Peaceful Atmosphere", duration: "2:06" },
      { n: 5, title: "Natural Vibes", duration: "2:09" },
      { n: 6, title: "Heaven Voices", duration: "2:09" },
      { n: 7, title: "Tranquility Vibes", duration: "2:22" },
    ],
  },
  {
    title: "Falling To Pieces",
    year: 2026,
    type: "Single",
    genre: "Dance / Electronic Pop",
    cover: cover4,
    atmos: "atmos-grain",
    label: "BrayanJSR & Brayan Saiago",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "2026-01-30",
    copyright: "2026 © BrayanJSR",
    description:
      "Próximo single. Una nueva era electrónica y emocional empieza aquí.",
    tracks: [{ n: 1, title: "Falling To Pieces", duration: "1:27" }],
  },
];

const singles = [
  {
    title: "Things I Want To Say",
    year: 2023,
    genre: "Electronic / House / Dance",
    duration: "1:43",
    releaseDate: "2023-06-20",
    copyright: "2023 © Brayan Saiago & BrayanJSR",
  },
  {
    title: "Sky Bleu",
    year: 2022,
    genre: "Lo-fi / Future Bass",
    duration: "1:15",
    releaseDate: "2022-07-29",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
  },
  {
    title: "With Youxxx",
    year: 2022,
    genre: "Electronic / House",
    duration: "1:50",
    releaseDate: "2022-02-22",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
  },
];

const TYPES = ["All", "Album", "EP", "Single"] as const;
const GENRES = [
  "All",
  "Trap / Lo-fi / Ambient",
  "Lo-fi / Ambient",
  "Lo-fi / Electronic / Ambient",
  "Electronic / House",
  "Electronic / House / Dance",
  "Dance / Electronic Pop",
  "Lo-fi / Future Bass",
] as const;
const SORTS = [
  { value: "popular", label: "Most played" },
  { value: "year-desc", label: "Year ↓ (newest)" },
  { value: "year-asc", label: "Year ↑ (oldest)" },
  { value: "alpha-asc", label: "A → Z" },
  { value: "alpha-desc", label: "Z → A" },
] as const;

const POPULARITY: Record<string, number> = {
  "No Limits": 100,
  "What Was Real?": 90,
  "Yin Yang Revolution": 80,
  "Falling To Pieces": 70,
  "Things I Want To Say": 65,
  "Sky Bleu": 60,
  "With Youxxx": 55,
};

const TOP_TRACKS = [
  { n: 1, title: "Sky Bleu", album: "No Limits", cover: cover2, duration: "1:15" },
  { n: 2, title: "Floating In Space", album: "No Limits", cover: cover2, duration: "1:46" },
  { n: 3, title: "Iglú", album: "Yin Yang Revolution", cover: cover3, duration: "2:27" },
  { n: 4, title: "Maybe It's Love...", album: "What Was Real?", cover: cover1, duration: "1:11" },
  { n: 5, title: "Things I Want To Say", album: "Single", cover: cover4, duration: "1:43" },
];

type CombinedRelease = Release;

export function Music() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [genre, setGenre] = useState<(typeof GENRES)[number]>("All");
  const [year, setYear] = useState<string>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["value"]>("popular");
  const [atmos, setAtmos] = useState<AtmosKey | null>(null);

  const allYears = useMemo(() => {
    const ys = new Set<number>();
    releases.forEach((r) => ys.add(r.year));
    singles.forEach((s) => ys.add(s.year));
    return ["All", ...Array.from(ys).sort((a, b) => b - a).map(String)];
  }, []);

  const sortFn = (a: { title: string; year: number }, b: { title: string; year: number }) => {
    switch (sort) {
      case "year-desc": return b.year - a.year;
      case "year-asc": return a.year - b.year;
      case "alpha-asc": return a.title.localeCompare(b.title);
      case "alpha-desc": return b.title.localeCompare(a.title);
      case "popular":
      default:
        return (POPULARITY[b.title] ?? 0) - (POPULARITY[a.title] ?? 0);
    }
  };

  const filteredReleases = useMemo<CombinedRelease[]>(() => {
    const q = query.trim().toLowerCase();
    const combined: CombinedRelease[] = [
      ...releases,
      ...singles.map<CombinedRelease>((s) => ({
        title: s.title,
        year: s.year,
        type: "Single",
        genre: s.genre,
        cover: cover4,
        duration: s.duration,
        atmos: "atmos-grain",
        releaseDate: s.releaseDate,
        upc: s.upc,
        copyright: s.copyright,
        artist: "BrayanJSR",
        producer: "BrayanJSR & Brayan Saiago",
        label: "BrayanJSR",
        description: "Standalone single released independently.",
        tracks: [{ n: 1, title: s.title, duration: s.duration }],
      })),
    ];
    return combined
      .filter((r) => {
        if (type !== "All" && r.type !== type) return false;
        if (genre !== "All" && r.genre !== genre) return false;
        if (year !== "All" && String(r.year) !== year) return false;
        if (!q) return true;
        if (r.title.toLowerCase().includes(q)) return true;
        if (String(r.year).includes(q)) return true;
        return r.tracks?.some((tr) => tr.title.toLowerCase().includes(q)) ?? false;
      })
      .slice()
      .sort(sortFn);
  }, [query, type, genre, year, sort]);

  return (
    <Section
      id="music"
      eyebrow={t.music.eyebrow}
      title={t.music.title}
      subtitle={t.music.subtitle}
    >
      {/* Hover atmosphere — fills entire viewport behind page when hovering a release */}
      <AnimatePresence mode="wait">
        {atmos && (
          <motion.div
            key={atmos}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-none fixed inset-0 z-0 ${atmos}`}
          />
        )}
      </AnimatePresence>

      {/* TOP TRACKS */}
      <Reveal className="mb-16 relative">
        <div className="mb-6 flex items-end justify-between">
          <h3 className="font-music text-4xl text-foreground sm:text-5xl">
            {t.music.topTracks}
          </h3>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Most played
          </span>
        </div>
        <ul className="divide-y divide-white/5 rounded-2xl glass">
          {TOP_TRACKS.map((tr, i) => (
            <motion.li
              key={tr.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <span className="w-5 text-right font-mono text-xs text-muted-foreground/60">
                  {String(tr.n).padStart(2, "0")}
                </span>
                <div className="relative h-12 w-12 overflow-hidden rounded-md">
                  <img src={tr.cover} alt="" className="h-full w-full object-cover" />
                  <a
                    href={SPOTIFY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label={`Play ${tr.title}`}
                  >
                    <Play className="h-4 w-4 text-white" fill="currentColor" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{tr.title}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {tr.album}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground/70">
                {tr.duration ?? "—"}
              </span>
            </motion.li>
          ))}
        </ul>
      </Reveal>

      {/* FILTERS — dropdowns */}
      <Reveal className="mb-10 relative">
        <div className="grid gap-3 rounded-2xl glass p-4 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center">
          <label className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.music.searchPlaceholder}
              className="w-full rounded-full border border-white/10 bg-black/40 py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none"
            />
          </label>
          {[
            { label: t.music.type, value: type, set: (v: string) => setType(v as typeof type), opts: TYPES as readonly string[] },
            { label: t.music.genre, value: genre, set: (v: string) => setGenre(v as typeof genre), opts: GENRES as readonly string[] },
            { label: "Year", value: year, set: setYear, opts: allYears },
          ].map((f) => (
            <select
              key={f.label}
              value={f.value}
              onChange={(e) => f.set(e.target.value)}
              className="rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground focus:border-white/30 focus:outline-none"
              aria-label={f.label}
            >
              {f.opts.map((o) => (
                <option key={o} value={o} className="bg-black text-foreground">
                  {f.label}: {o}
                </option>
              ))}
            </select>
          ))}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground focus:border-white/30 focus:outline-none"
            aria-label="Sort"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value} className="bg-black text-foreground">
                Sort: {s.label}
              </option>
            ))}
          </select>
        </div>
      </Reveal>

      {/* RELEASES — full editorial cards */}
      <div className="space-y-10 relative">
        {filteredReleases.map((release, i) => (
          <Reveal key={release.title + release.year} delay={i * 0.05}>
            <motion.a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => release.atmos && setAtmos(release.atmos)}
              onMouseLeave={() => setAtmos(null)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", damping: 18, stiffness: 200 }}
              className="group relative block overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[320px_1fr] md:gap-8 md:p-8">
                {/* COVER */}
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <motion.img
                    src={release.cover}
                    alt={`${release.title} cover art`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="h-5 w-5" fill="currentColor" />
                  </div>
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {release.type} · {release.year}
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    {release.type} · {release.year}
                  </p>
                  <h3 className="font-music text-4xl text-foreground sm:text-5xl">
                    {release.title}
                  </h3>
                  {release.description && (
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {release.description}
                    </p>
                  )}

                  <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 sm:grid-cols-3">
                    <dt className="opacity-60">Genre</dt>
                    <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.genre}</dd>
                    {release.duration && (<><dt className="opacity-60">Duration</dt><dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.duration}</dd></>)}
                    {release.label && (<><dt className="opacity-60">Label</dt><dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.label}</dd></>)}
                    {release.producer && (<><dt className="opacity-60">Producer</dt><dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.producer}</dd></>)}
                    {release.releaseDate && (<><dt className="opacity-60">Release</dt><dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.releaseDate}</dd></>)}
                    {release.copyright && (<><dt className="opacity-60">©</dt><dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.copyright}</dd></>)}
                  </dl>

                  {release.tracks && release.tracks.length > 0 && (
                    <ol className="mt-5 divide-y divide-white/5 text-sm">
                      {release.tracks.map((tr) => (
                        <li
                          key={tr.n}
                          className="flex items-center justify-between py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span className="flex items-center gap-4">
                            <span className="w-6 text-right font-mono text-xs text-muted-foreground/60">
                              {String(tr.n).padStart(2, "0")}
                            </span>
                            <span className="font-medium">{tr.title}</span>
                          </span>
                          {tr.duration && (
                            <span className="font-mono text-xs text-muted-foreground/60">
                              {tr.duration}
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}

        {filteredReleases.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {t.music.noResults}
          </p>
        )}
      </div>

      {/* SPOTIFY BUTTON */}
      <Reveal delay={0.1} className="mt-14 flex justify-center relative">
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          {t.music.openSpotify} →
        </a>
      </Reveal>
    </Section>
  );
}
