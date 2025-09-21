import { useEffect, useRef, useState } from "react";

export default function SectionQuoteVideo() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event) => {
      const prefers = event.matches;
      setPrefersReducedMotion(prefers);
      if (prefers) {
        setIsPaused(true);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPaused) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise instanceof Promise) {
      playPromise.catch(() => {
        setIsPaused(true);
      });
    }
  }, [isPaused]);

  const handleTogglePlayback = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      id="sectionQuoteVideo"
      className="relative min-h-screen grid place-items-center text-[var(--brand-cream)] px-6"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/quoteVideo.mp4"
        poster="/quoteVideo.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
      />

      {/* Dark overlay ABOVE the video */}
      <div className="absolute inset-0 z-0 bg-[var(--brand-deep)]/60" />

      {/* Centered quote ABOVE the overlay */}
      <div className="relative z-0 max-w-3xl text-center">
        <p className="text-2xl md:text-5xl leading-relaxed font-light md:font-thin italic">
          “La distancia fue la prueba, <br className="hidden sm:block" />
          el amor fue la respuesta”
        </p>

        <button
          type="button"
          onClick={handleTogglePlayback}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--brand-cream)]/70 bg-[color:rgb(15_51_28_/_0.65)] px-5 py-2 text-sm font-medium text-[var(--brand-cream)] transition hover:bg-[color:rgb(15_51_28_/_0.85)]"
          aria-label={isPaused ? "Reproducir video de fondo" : "Pausar video de fondo"}
        >
          <span aria-hidden>
            {isPaused ? "▶" : "❚❚"}
          </span>
          <span className="sr-only">
            {isPaused ? "Reproducir" : "Pausar"}
          </span>
        </button>

        {prefersReducedMotion && (
          <p className="mt-4 text-sm text-[var(--brand-cream)]/80">
            La reproducción automática está pausada porque tu dispositivo solicita reducir las animaciones.
          </p>
        )}
      </div>
    </section>
  );
}
