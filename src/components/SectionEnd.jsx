const gallery = [
  { src: "/photo1.jpg", alt: "Pao y Luisin compartiendo una sonrisa" },
  { src: "/photo2.jpg", alt: "Pao y Luisin abrazados al aire libre" },
  { src: "/photo3.jpg", alt: "Pao y Luisin riendo en la ciudad" },
  { src: "/photo4.jpg", alt: "Pao y Luisin caminando juntos" },
  { src: "/photo5.jpg", alt: "Pao y Luisin disfrutando el atardecer" },
  { src: "/photo6.jpg", alt: "Pao y Luisin disfrutando de una vista panorámica" },
];

const puzzleShapes = [
  "polygon(0% 0%, 100% 0%, 100% 82%, 90% 100%, 0% 100%)",
  "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 18%)",
  "polygon(0% 0%, 100% 0%, 100% 100%, 13% 100%, 0% 82%)",
  "polygon(0% 0%, 92% 0%, 100% 18%, 100% 100%, 0% 100%)",
  "polygon(0% 0%, 87% 0%, 100% 18%, 100% 100%, 0% 100%)",
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 18%)",
];

export default function SectionEnd() {
  return (
    <section
      id="sectionEnd"
      className="relative min-h-screen snap-start overflow-hidden text-[var(--paper)]"
    >
      <div className="absolute inset-0" aria-hidden>
        <div className="grid h-full w-full grid-cols-3 grid-rows-2">
          {gallery.map((photo, index) => (
            <figure
              key={photo.src}
              className="relative h-full w-full overflow-hidden"
              style={{ clipPath: puzzleShapes[index % puzzleShapes.length] }}
            >
              <img
                src={photo.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                aria-hidden
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[var(--brand-deep)]/55" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24 text-center md:gap-10 md:py-32">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-cream)]/70">
          Con cada memoria, contamos los días
        </p>
        <h2 className="font-halimum text-[12vw] leading-none text-[var(--brand-cream)] md:text-[4rem]">
          ¡Los esperamos para celebrar el amor!
        </h2>
        <p className="max-w-2xl text-sm font-light leading-relaxed text-[var(--paper)]/80 md:text-lg">
          Lleguen con abrazos, risas y ganas de bailar; nosotros ponemos el resto. Cada foto es una promesa de lo que viviremos juntos.
        </p>
      </div>
    </section>
  );
}
