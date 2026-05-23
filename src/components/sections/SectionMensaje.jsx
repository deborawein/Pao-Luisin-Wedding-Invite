import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function SectionMensaje() {
  const videoRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

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
        // Autoplay may be blocked by the browser.
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="sectionMensaje"
      className="relative grid min-h-screen place-items-center px-6 text-[var(--brand-cream)]"
    >
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

      <div className="absolute inset-0 z-0 bg-[var(--brand-deep)]/55" />

      <div className="relative z-0 max-w-3xl text-center">
        <p className="text-2xl font-light leading-relaxed italic md:text-5xl md:font-thin">
          “La distancia fue la prueba, <br className="hidden sm:block" />
          el amor fue la respuesta”
        </p>

        {prefersReducedMotion && (
          <p className="mt-4 text-sm text-[var(--brand-cream)]/80">
            La reproducción automática está pausada porque tu dispositivo
            solicita reducir las animaciones.
          </p>
        )}
      </div>
    </section>
  );
}
