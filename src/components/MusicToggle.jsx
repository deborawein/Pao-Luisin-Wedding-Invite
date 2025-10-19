import { useEffect, useRef, useState } from "react";

export default function MusicToggle({
  src = "/music/mama-linda-sample.mp3",
  startVolume = 0.6,
}) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = startVolume;
  }, [startVolume]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  // Nudge play again on iOS when tab becomes visible
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible" && playing) {
        audioRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop playsInline />

      {/* Floating control */}
      <div
        className="
          fixed
          bottom-[max(1rem,env(safe-area-inset-bottom))]
          right-[calc(env(safe-area-inset-right,0px)+1.25rem)]
          md:right-[calc(env(safe-area-inset-right,0px)+2.25rem)]
          z-50
          flex items-center gap-2 md:gap-3
          text-[var(--paper)]
          pointer-events-none
        "
      >
        {!playing && (
          <span
            className="
              pointer-events-auto
              text-[0.7rem] md:text-xs font-light
              uppercase tracking-[0.2em]
              drop-shadow
            "
          >
            Clic para escuchar
          </span>
        )}

        <button
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? "Parar música" : "Tocar música"}
          className="
            pointer-events-auto
            relative
            size-12 rounded-full
            grid place-items-center
            bg-[var(--brand-cafe)] text-[var(--paper)]
            shadow-lg hover:opacity-95 active:scale-95 transition
          "
        >
          {/* Pulse ring when playing */}
          {playing && (
            <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[var(--brand-caramel)]/60 animate-ping" />
          )}

          {/* Icon */}
          {playing ? (
            // Pause
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            // Play
            <svg viewBox="0 0 24 24" className="w-7 h-7 translate-x-[1px]" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          <span className="sr-only">{playing ? "Parar música" : "Tocar música"}</span>
        </button>
      </div>
    </>
  );
}
