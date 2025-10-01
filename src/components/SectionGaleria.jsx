const PHOTO_SOURCES = Array.from({ length: 20 }, (_, index) => ({
  src: `/slide/photo${index + 1}.jpg`,
  alt: `Sesión de fotos ${index + 1}`,
}));

export default function SectionGaleria() {
  return (
    <section
      id="sectionGaleria"
      className="relative min-h-screen snap-start bg-[var(--brand-cream)]/70 text-[var(--brand-deep)]"
    >
      <div className="absolute inset-0 -z-30 bg-[var(--brand-deep)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-20 md:py-24">
        <div className="text-center md:max-w-3xl md:text-left">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-[var(--brand-cafe)]/70">
            Desde Melbourne, con cariño
          </span>
          <h2 className="mt-4 font-halimum text-[12vw] leading-tight text-[var(--brand-cafe)] md:text-[4rem]">
            Los extrañamos y contamos los días
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-lg font-light leading-relaxed text-[var(--brand-deep)]/80">
            Entre cafés, caminatas por la ciudad y recuerdos compartidos, soñamos con tenerlos cerca otra vez. Hasta que podamos abrazarlos y celebrar juntos.
          </p>
        </div>

        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {PHOTO_SOURCES.map((photo) => (
            <figure
              key={photo.src}
              className="mb-3 break-inside-avoid overflow-hidden bg-white/60 shadow-[0_18px_35px_rgba(15,51,28,0.18)]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="block w-full h-auto"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
