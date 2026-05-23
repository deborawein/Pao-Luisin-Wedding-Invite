import { useEffect, useRef, useState } from "react";
import { MUSIC_SRC } from "@/config/wedding";

export default function MusicToggle({ src = MUSIC_SRC, startVolume = 0.6 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = startVolume;
    }
  }, [startVolume]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && playing) {
        audioRef.current?.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop playsInline />

      <div
        className="
          pointer-events-none fixed z-50 flex items-center gap-2 text-[var(--paper)]
          bottom-[max(1rem,env(safe-area-inset-bottom))]
          right-[calc(env(safe-area-inset-right,0px)+1.25rem)]
          md:right-[calc(env(safe-area-inset-right,0px)+2.25rem)]
          md:gap-3
        "
      >
        {!playing && (
          <span className="pointer-events-auto text-[0.7rem] font-light uppercase tracking-[0.2em] drop-shadow md:text-xs">
            Tocar música
          </span>
        )}

        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Parar música" : "Tocar música"}
          className="
            pointer-events-auto relative grid size-12 place-items-center
            rounded-full bg-[var(--brand-cafe)] text-[var(--paper)]
            shadow-lg transition hover:opacity-95 active:scale-95
          "
        >
          {playing && (
            <span
              className="pointer-events-none absolute inset-0 animate-ping rounded-full ring-2 ring-[var(--brand-caramel)]/60"
              aria-hidden
            />
          )}

          {playing ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 translate-x-[1px]"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
