import Logo from "@/assets/logo.svg";
import {
  HERO_CAROUSEL_IMAGES,
  HERO_CAROUSEL_INTERVAL_MS,
} from "@/config/wedding";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/cn";

export default function SectionInicio() {
  const { currentIndex, goToNext, goToPrevious } = useCarousel(
    HERO_CAROUSEL_IMAGES,
    HERO_CAROUSEL_INTERVAL_MS,
  );

  return (
    <section
      id="sectionInicio"
      className="relative min-h-[100dvh] -mt-16 grid place-items-center overflow-hidden pt-16 text-[var(--brand-cream)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {HERO_CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-lg font-extralight text-[var(--brand-cream)] shadow-lg transition-all hover:bg-black/30 hover:text-black md:left-10"
        aria-label="Imagem anterior"
      >
        <span aria-hidden="true">&#8249;</span>
      </button>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />

      <div className="relative z-20 text-center">
        <img
          src={Logo}
          alt="Pao & Luisin"
          className="mx-auto w-[min(80vw,680px)]"
        />
      </div>

      <div className="absolute bottom-24 z-20 w-full">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <div className="flex justify-end">
              <span className="text-sm font-light uppercase tracking-[0.35em] md:text-base">
                Cúcuta
              </span>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-4">
                <span className="h-8 w-px bg-white/70" />
              </div>
            </div>
            <div className="flex justify-start">
              <span className="text-sm font-light uppercase tracking-[0.35em] md:text-base">
                Colombia
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-6 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-lg font-extralight text-[var(--brand-cream)] shadow-lg transition-all hover:bg-black/20 hover:text-black md:right-10"
        aria-label="Próxima imagem"
      >
        <span aria-hidden="true">&#8250;</span>
      </button>
    </section>
  );
}
