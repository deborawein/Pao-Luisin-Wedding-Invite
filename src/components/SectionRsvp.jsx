export default function SectionRsvp() {
  return (
    <section
      id="sectionRsvp"
      className="relative min-h-screen bg-[var(--brand-cream)]/70 text-[var(--brand-deep)]"
    >
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse items-center gap-14 px-6 py-20 text-center lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-center gap-10 text-center">
          <header className="space-y-4">
            <p className="text-sm md:text-base uppercase tracking-[0.32em] text-[var(--brand-forest)]/70">Confirma tu asistencia</p>
            <h2 className="text-[7vw] md:text-4xl font-halimum leading-tight text-[var(--brand-cafe)]">
              Celebrar contigo es un regalo
            </h2>
          </header>

          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--brand-forest)]/85">
            Nos llena de ilusión compartir este momento tan especial contigo. Por favor, confírmanos tu asistencia antes de la fecha indicada.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--brand-forest)]/75 "> Confirma antes del</p>
            <p className="border border-[var(--brand-caramel)]/45 bg-[var(--brand-caramel)]/55 px-7 py-3 text-base md:text-lg font-semibold tracking-[0.22em] text-[var(--brand-cafe)] shadow-[0_10px_22px_rgba(139,94,50,0.18)]">
              30/11/2025
            </p>
          </div>

          <a
            href="https://tally.so/r/3E9PV4"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--brand-cafe)]/25 bg-[var(--brand-cafe)] px-6 py-3 text-sm sm:text-base uppercase tracking-[0.18em] text-[var(--brand-cream)] shadow-lg shadow-[var(--brand-cafe)]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cafe)]"
          >
            <span>Confirmar asistencia</span>
          </a>
        </div>

        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src="/rsvp/photomural.png"
            alt="Fotomural brindis"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
