const PHOTO_SOURCES = Array.from({ length: 20 }, (_, index) => ({
  src: `/slide/photo${index + 1}.jpg`,
  alt: `Sesión de fotos ${index + 1}`,
}));

export default function SectionEnd() {
  return (
    <section
      id="sectionEnd"
      className="relative min-h-screen snap-start bg-[var(--brand-cream)]/80 text-[var(--brand-deep)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(246,233,199,0.65),_rgba(206,165,120,0.6)_70%,_rgba(135,96,58,0.55)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-20 md:py-24">
        <div className="text-center md:max-w-3xl md:text-left">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-[var(--brand-cafe)]/70">
            Sesión de fotos
          </span>
          <h2 className="mt-4 font-halimum text-[12vw] leading-tight text-[var(--brand-cafe)] md:text-[4rem]">
            Recuerdos que queremos compartir
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-lg font-light leading-relaxed text-[var(--brand-deep)]/80">
            Cada imagen guarda un pedacito de nuestra historia. Disfruta de este adelanto del amor y la alegría que celebraremos juntos.
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
