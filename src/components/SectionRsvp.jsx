export default function SectionRsvp() {
  return (
    <section
      id="sectionRsvp"
      className="relative min-h-screen snap-start bg-[var(--brand-cream)]/70 text-[var(--brand-deep)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_rgba(246,233,199,0.75)_75%)]" aria-hidden />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-12 px-6 py-20 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left">
        <div className="flex w-full flex-1 flex-col items-center gap-8 text-center">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--brand-forest)]/70">Confirma tu asistencia</p>
            <h2 className="text-[8vw] md:text-[2vw] font-halimum text-[var(--brand-cafe)]">
              ¡Nos encantará celebrar contigo!
            </h2>
          </header>

          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[var(--brand-forest)]/85">
            Esperamos compartir risas, abrazos y un brindis lleno de cariño con quienes han sido parte de nuestra historia.
            Ojalá puedas acompañarnos en este día tan especial.
          </p>

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-forest)]/80">Fecha límite</p>
            <p className="border border-[var(--brand-caramel)]/40 bg-[var(--brand-caramel)]/50 px-6 py-2 text-lg font-semibold tracking-[0.2em] text-[var(--brand-cafe)]">
              Confirma antes del 30/11/2025
            </p>
          </div>

          <p className="max-w-xl text-center text-2xl text-[var(--brand-forest)]/90">
            Tu presencia es el mejor regalo.<br />¡Gracias por hacernos parte de tus planes!
          </p>

          <a
            href="https://tally.so/r/3E9PV4"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-deep)]/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--paper)] transition hover:bg-[var(--brand-caramel)] lg:justify-start"
          >
            <span>Confirmar asistencia</span>
          </a>
        </div>

        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src="/rsvp/photomural.png"
            alt="Fotomural brindis"
            className="w-full max-w-md "
          />
        </div>
      </div>
    </section>
  );
}
