import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { useMemo, useState, useEffect, useRef } from "react";
import { Search, Play, Pause, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

{/* Cover Pictures Assets */}
import coverWhatWasReal       from "@/assets/covers/Albums/WWR/wwr.jpg";
import coverNoLimits          from "@/assets/covers/Albums/NL/nl.jpg";
import coverYinYangRevolution from "@/assets/covers/Albums/YYR/yyr.jpg";
import coverSkyBleu           from "@/assets/covers/Singles/sky_bleu.jpg";
import coverWithYouxx         from "@/assets/covers/Singles/WY.jpg";
import coverThink             from "@/assets/covers/Singles/Think.jpg";
import coverFallingToPieces   from "@/assets/covers/Singles/FallingToPieces.jpg";

{/* Preview Song */}
import previewWWR    from "@/assets/audio/1. What Was Real {Intro}.mp3";
import previewNL     from "@/assets/audio/Dancin’ No Sleep.mp3";
import previewThinks from "@/assets/audio/2. Nobody Knows (Mastered).mp3";
import previewYYR    from "@/assets/audio/1. BrayanJSR x Yin Yang Revolution (Original Mix).mp3";
import previewFTP    from "@/assets/audio/Falling to pieces (2 septiembre) Mastered.mp3";
import previewSBL    from "@/assets/audio/Sky Bleu.mp3";
import previewWY     from "@/assets/audio/BrayanJSR x With Youxxx (Original Mix).mp3";

const SPOTIFY_URL = "https://open.spotify.com/intl-es/artist/1DNdeBjys6meGT7oO65CnQ";

// Audio pool for tracks that don't have their own preview
const AUDIO_POOL = [previewNL, previewFTP, previewSBL];
const pickAudio = (seed: string) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return AUDIO_POOL[h % AUDIO_POOL.length];
};

const buildSpotifySearch = (q: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(q + " BrayanJSR")}`;
const buildAppleSearch = (q: string) =>
  `https://music.apple.com/search?term=${encodeURIComponent(q + " BrayanJSR")}`;
const buildYoutubeSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q + " BrayanJSR")}`;

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

type AtmosKey = "atmos-space" | "atmos-ocean" | "atmos-grain" | "atmos-think" | "atmos-wy" | "atmos-sky" | "atmos-falling";

type Track = {
  n: number;
  title: string;
  duration?: string;
  preview?: string;
  cover?: string;
};

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
  tracks: Track[];
};

type SelectedTrack = { release: Release; track: Track } | null;

const releases: Release[] = [
  {
    title: "What Was Real?",
    year: 2023,
    type: "Album",
    genre: "Lo-fi / Ambient",
    cover: coverWhatWasReal,
    atmos: "atmos-ocean",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "29/12/2026",
    copyright: "2023 © Brayan Saiago & BrayanJSR",
    description:
      "Atmósfera oceánica e introspectiva. Ocho piezas hechas para perderse de noche.",
    tracks: [
      { n: 1, title: "What Was Real?", duration: "1:03", preview: previewWWR, cover: coverWhatWasReal },
      { n: 2, title: "I'm With You", duration: "1:24" },
      { n: 3, title: "All I Need It", duration: "1:42" },
      { n: 4, title: "Nobody Knows", duration: "1:46", preview: previewThinks },
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
    cover: coverNoLimits,
    duration: "15:33",
    atmos: "atmos-space",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "22/08/2022",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
    description:
      "Un viaje espacial, futurista e infinito. Mezcla de Lo-fi, Future Bass y House experimental.",
    tracks: [
      { n: 1, title: "No Limits", duration: "1:30", cover: coverNoLimits },
      { n: 2, title: "Sky Bleu", duration: "1:15", preview: previewSBL, cover: coverSkyBleu },
      { n: 3, title: "Dancin' No Sleep", duration: "2:01", preview: previewNL },
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
    cover: coverYinYangRevolution,
    duration: "16:34",
    atmos: "atmos-grain",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "18/03/2020",
    copyright: "2020 © Brayan Saiago & BrayanJSR",
    description:
      "Sonido nostálgico y cinematográfico con elementos Lo-fi, Ambient y Trap.",
    tracks: [
      { n: 1, title: "Yin Yang Revolution", duration: "3:14", preview: previewYYR, cover: coverYinYangRevolution },
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
    cover: coverFallingToPieces,
    atmos: "atmos-falling",
    label: "BrayanJSR & Brayan Saiago",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "30/01/2026",
    copyright: "2026 © BrayanJSR",
    description:
      "Próximo single. Una nueva era electrónica y emocional empieza aquí.",
    tracks: [{ n: 1, title: "Falling To Pieces", duration: "1:27", preview: previewFTP, cover: coverFallingToPieces }],
  },
  {
    title: "Things I Want To Say",
    year: 2023,
    type: "Single",
    genre: "Electronic / House / Dance",
    cover: coverThink,
    duration: "1:43",
    atmos: "atmos-think",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "20/06/2023",
    copyright: "2023 © Brayan Saiago & BrayanJSR",
    description: "Standalone single released independently.",
    tracks: [{ n: 1, title: "Things I Want To Say", duration: "1:43", preview: previewThinks, cover: coverThink }],
  },
  {
    title: "Sky Bleu",
    year: 2022,
    type: "Single",
    genre: "Lo-fi / Future Bass",
    cover: coverSkyBleu,
    duration: "1:15",
    atmos: "atmos-sky",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "29/07/2022",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
    description: "Standalone single released independently.",
    tracks: [{ n: 1, title: "Sky Bleu", duration: "1:15", preview: previewSBL, cover: coverSkyBleu }],
  },
  {
    title: "With Youxxx",
    year: 2022,
    type: "Single",
    genre: "Electronic / House",
    cover: coverWithYouxx,
    duration: "1:50",
    atmos: "atmos-wy",
    label: "BrayanJSR",
    producer: "BrayanJSR & Brayan Saiago",
    artist: "BrayanJSR",
    releaseDate: "22/03/2026",
    copyright: "2022 © Brayan Saiago & BrayanJSR",
    description: "Standalone single released independently.",
    tracks: [{ n: 1, title: "With Youxxx", duration: "1:50", preview: previewWY, cover: coverWithYouxx }],
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

export function Music() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [genre, setGenre] = useState<(typeof GENRES)[number]>("All");
  const [year, setYear] = useState<string>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["value"]>("popular");
  const [atmos, setAtmos] = useState<AtmosKey | null>(null);
  const [detail, setDetail] = useState<SelectedTrack>(null);

  /* AUDIO STATE */
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const hoverTimeout = useRef<number | null>(null);

  /* AUDIO FUNCTIONS */
  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    fadeRef.current = window.setInterval(() => {
      if (audio.volume > 0.08) {
        audio.volume = Math.max(0, audio.volume - 0.08);
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        if (fadeRef.current) clearInterval(fadeRef.current);
      }
    }, 30);
    setPlayingId(null);
    setIsPaused(false);
    setProgress(0);
    setDuration(0);
  };

  const playPreview = async (id: string, src?: string) => {
    if (!src) return;
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(src);
      audio.volume = 0;
      audioRef.current = audio;

      audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
      audio.addEventListener("timeupdate", () => setProgress(audio.currentTime));
      audio.addEventListener("ended", () => {
        setPlayingId(null);
        setProgress(0);
      });

      await audio.play();
      setPlayingId(id);
      setIsPaused(false);

      let vol = 0;
      if (fadeRef.current) clearInterval(fadeRef.current);
      const fadeIn = window.setInterval(() => {
        vol += 0.08;
        if (vol >= 1) { vol = 1; clearInterval(fadeIn); }
        audio.volume = vol;
      }, 30);
      fadeRef.current = fadeIn;
    } catch (err) {
      console.error("playPreview error", err);
    }
  };

  const togglePause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) { audio.play(); setIsPaused(false); }
    else { audio.pause(); setIsPaused(true); }
  };

  const seekTo = (val: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = val;
    setProgress(val);
  };

  /* CLEANUP */
  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      if (fadeRef.current) clearInterval(fadeRef.current);
    };
  }, []);

  /* ID HELPERS */
  const trackId = (rTitle: string, n: number) => `${rTitle}::${n}`;
  const releaseHoverId = (rTitle: string) => `${rTitle}::hover`;

  /* HOVER HANDLERS */
  const handleReleaseHoverEnter = (release: Release) => {
    if (release.atmos) setAtmos(release.atmos);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      const first = release.tracks[0];
      const src = first?.preview ?? pickAudio(release.title + (first?.title ?? ""));
      playPreview(releaseHoverId(release.title), src);
    }, 300);
  };

  const handleReleaseHoverLeave = () => {
    setAtmos(null);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    stopAudio();
  };

  const handleTrackHoverEnter = (release: Release, track: Track) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      const src = track.preview ?? pickAudio(release.title + track.title);
      playPreview(trackId(release.title, track.n), src);
    }, 200);
  };

  const handleTrackHoverLeave = (release: Release) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    stopAudio();
    if (release.atmos) setAtmos(release.atmos);
  };

  /* FILTER & SORT */
  const allYears = useMemo(() => {
    const ys = new Set<number>();
    releases.forEach((r) => ys.add(r.year));
    return ["All", ...Array.from(ys).sort((a, b) => b - a).map(String)];
  }, []);

  const sortFn = (
    a: { title: string; year: number },
    b: { title: string; year: number }
  ) => {
    switch (sort) {
      case "year-desc": return b.year - a.year;
      case "year-asc":  return a.year - b.year;
      case "alpha-asc": return a.title.localeCompare(b.title);
      case "alpha-desc":return b.title.localeCompare(a.title);
      case "popular":
      default:
        return (POPULARITY[b.title] ?? 0) - (POPULARITY[a.title] ?? 0);
    }
  };

  const filteredReleases = useMemo<Release[]>(() => {
    const q = query.trim().toLowerCase();
    return releases
      .filter((r) => {
        if (type !== "All" && r.type !== type) return false;
        if (genre !== "All" && r.genre !== genre) return false;
        if (year !== "All" && String(r.year) !== year) return false;
        if (!q) return true;
        if (r.title.toLowerCase().includes(q)) return true;
        if (String(r.year).includes(q)) return true;
        return r.tracks.some((tr) => tr.title.toLowerCase().includes(q));
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
      {/* Hover atmosphere */}
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

      {/* FILTERS */}
      <Reveal className="mb-10 relative z-10">
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
            {
              label: t.music.type,
              value: type,
              set: (v: string) => setType(v as typeof type),
              opts: TYPES as readonly string[],
            },
            {
              label: t.music.genre,
              value: genre,
              set: (v: string) => setGenre(v as typeof genre),
              opts: GENRES as readonly string[],
            },
            {
              label: "Year",
              value: year,
              set: setYear,
              opts: allYears,
            },
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

      {/* RELEASES */}
      <div className="space-y-10 relative z-10">
        {filteredReleases.map((release, i) => {
          const hoverId = releaseHoverId(release.title);
          const isPlayingThis = playingId === hoverId;

          return (
            <Reveal key={release.title + release.year} delay={i * 0.05}>
              <motion.a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleReleaseHoverEnter(release)}
                onMouseLeave={handleReleaseHoverLeave}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", damping: 18, stiffness: 200 }}
                className="shine-sweep group relative block overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_30px_80px_-20px_rgba(255,255,255,0.08)]"
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

                    {/* Equalizer overlay */}
                    <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center gap-1 px-6 pb-4 text-white transition-opacity duration-500 ${isPlayingThis ? "opacity-90" : "opacity-0 group-hover:opacity-90"}`}>
                      {Array.from({ length: 7 }).map((_, k) => (
                        <span key={k} className="eq-bar" />
                      ))}
                    </div>

                    {/* Play button */}
                    <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                      <Play className="h-5 w-5" fill="currentColor" />
                    </div>

                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {release.type} · {release.year}
                    </div>

                    {/* Scrub bar overlay when this release is playing */}
                    {isPlayingThis && (
                      <div className="absolute inset-x-3 bottom-3 z-20 rounded-full bg-black/70 px-3 py-2 backdrop-blur-md">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-white/80">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); togglePause(); }}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform"
                            aria-label={isPaused ? "Play" : "Pause"}
                          >
                            {isPaused
                              ? <Play className="h-3 w-3" fill="currentColor" />
                              : <Pause className="h-3 w-3" fill="currentColor" />}
                          </button>
                          <span>{formatTime(progress)}</span>
                          <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.1}
                            value={progress}
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onChange={(e) => seekTo(Number(e.target.value))}
                            className="scrub flex-1"
                          />
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>
                    )}
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

                      {release.duration && (
                        <>
                          <dt className="opacity-60">Duration</dt>
                          <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.duration}</dd>
                        </>
                      )}
                      {release.label && (
                        <>
                          <dt className="opacity-60">Label</dt>
                          <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.label}</dd>
                        </>
                      )}
                      {release.producer && (
                        <>
                          <dt className="opacity-60">Producer</dt>
                          <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.producer}</dd>
                        </>
                      )}
                      {release.releaseDate && (
                        <>
                          <dt className="opacity-60">Release</dt>
                          <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.releaseDate}</dd>
                        </>
                      )}
                      {release.copyright && (
                        <>
                          <dt className="opacity-60">©</dt>
                          <dd className="col-span-1 sm:col-span-2 normal-case tracking-normal">{release.copyright}</dd>
                        </>
                      )}
                    </dl>

                    {release.tracks.length > 0 && (
                      <ol className="mt-5 divide-y divide-white/5 text-sm">
                        {release.tracks.map((tr) => {
                          const tid = trackId(release.title, tr.n);
                          const isThisPlaying = playingId === tid;
                          return (
                            <li
                              key={tr.n}
                              onMouseEnter={(e) => {
                                e.stopPropagation();
                                handleTrackHoverEnter(release, tr);
                              }}
                              onMouseLeave={(e) => {
                                e.stopPropagation();
                                handleTrackHoverLeave(release);
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setDetail({ release, track: tr });
                              }}
                              className={`group/track flex cursor-pointer items-center justify-between gap-3 py-2.5 transition-colors ${isThisPlaying ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                            >
                              <span className="flex flex-1 items-center gap-4 min-w-0">
                                <span className="w-6 text-right font-mono text-xs text-muted-foreground/60">
                                  {String(tr.n).padStart(2, "0")}
                                </span>
                                <span className="font-medium truncate">{tr.title}</span>
                                {isThisPlaying && (
                                  <span className="ml-2 flex h-3 items-end gap-[2px]">
                                    <span className="eq-bar" style={{ width: 2 }} />
                                    <span className="eq-bar" style={{ width: 2, animationDelay: "0.15s" }} />
                                    <span className="eq-bar" style={{ width: 2, animationDelay: "0.3s" }} />
                                  </span>
                                )}
                              </span>

                              {isThisPlaying ? (
                                <div className="flex flex-1 max-w-[260px] items-center gap-2 text-[10px] font-mono text-white/80">
                                  <button
                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); togglePause(); }}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform"
                                    aria-label={isPaused ? "Play" : "Pause"}
                                  >
                                    {isPaused
                                      ? <Play className="h-3 w-3" fill="currentColor" />
                                      : <Pause className="h-3 w-3" fill="currentColor" />}
                                  </button>
                                  <span className="w-9 text-right">{formatTime(progress)}</span>
                                  <input
                                    type="range"
                                    min={0}
                                    max={duration || 0}
                                    step={0.1}
                                    value={progress}
                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                    onChange={(e) => seekTo(Number(e.target.value))}
                                    className="scrub flex-1"
                                  />
                                  <span className="w-9">{formatTime(duration)}</span>
                                </div>
                              ) : (
                                tr.duration && (
                                  <span className="font-mono text-xs text-muted-foreground/60">{tr.duration}</span>
                                )
                              )}
                            </li>
                          );
                        })}
                      </ol>
                    )}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          );
        })}

        {filteredReleases.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {t.music.noResults}
          </p>
        )}
      </div>

      {/* SPOTIFY BUTTON */}
      <Reveal delay={0.1} className="mt-14 flex justify-center relative z-10">
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          {t.music.openSpotify} →
        </a>
      </Reveal>

      {/* TRACK DETAIL MODAL */}
      <AnimatePresence>
        {detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setDetail(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ y: 30, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 opacity-50 ${detail.release.atmos ?? ""}`} />

              <button
                onClick={() => setDetail(null)}
                aria-label={t.music.close}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative grid gap-0 md:grid-cols-[260px_1fr]">
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={detail.track.cover ?? detail.release.cover}
                    alt={detail.track.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    {detail.release.type} · {detail.release.year} · {t.music.details}
                  </p>
                  <h3 className="mt-2 font-music text-3xl leading-tight text-foreground sm:text-4xl">
                    {detail.track.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    From <span className="text-foreground">{detail.release.title}</span>
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    {detail.track.duration && (
                      <><dt className="opacity-60">Duration</dt><dd>{detail.track.duration}</dd></>
                    )}
                    <dt className="opacity-60">Genre</dt>
                    <dd>{detail.release.genre}</dd>
                    {detail.release.label && (
                      <><dt className="opacity-60">Label</dt><dd>{detail.release.label}</dd></>
                    )}
                    {detail.release.producer && (
                      <><dt className="opacity-60">Producer</dt><dd>{detail.release.producer}</dd></>
                    )}
                    {detail.release.releaseDate && (
                      <><dt className="opacity-60">Release</dt><dd>{detail.release.releaseDate}</dd></>
                    )}
                    {detail.release.copyright && (
                      <><dt className="opacity-60">©</dt><dd>{detail.release.copyright}</dd></>
                    )}
                  </dl>

                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {t.music.listenOn}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { name: "Spotify",     href: buildSpotifySearch(detail.track.title) },
                      { name: "Apple Music", href: buildAppleSearch(detail.track.title) },
                      { name: "YouTube",     href: buildYoutubeSearch(detail.track.title) },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                      >
                        {s.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}