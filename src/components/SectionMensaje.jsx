import { useEffect, useRef, useState } from "react";

export default function SectionMensaje() {
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Honor the user's reduced-motion setting and stop playback if necessary.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event) => {
      const prefers = event.matches;
      setPrefersReducedMotion(prefers);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Respect reduced-motion preference.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise instanceof Promise) {
      playPromise.catch(() => {
        // ignore autoplay rejection silently
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="sectionMensaje"
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
      <div className="absolute inset-0 z-0 bg-[var(--brand-deep)]/75" />

      {/* Centered quote ABOVE the overlay */}
      <div className="relative z-0 max-w-3xl text-center">
        <p className="text-2xl md:text-5xl leading-relaxed font-light md:font-thin italic">
          “La distancia fue la prueba, <br className="hidden sm:block" />
          el amor fue la respuesta”
        </p>

        {prefersReducedMotion && (
          <p className="mt-4 text-sm text-[var(--brand-cream)]/80">
            La reproducción automática está pausada porque tu dispositivo solicita reducir las animaciones.
          </p>
        )}
      </div>
    </section>
  );
}
