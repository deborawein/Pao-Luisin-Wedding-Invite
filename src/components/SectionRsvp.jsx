export default function SectionRsvp() {
  return (
    <section
      id="sectionRsvp"
      className="relative min-h-screen snap-start bg-[var(--brand-deep)]/80 text-[var(--paper)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(26,45,32,0.65),_rgba(15,33,20,0.85)_75%)]" aria-hidden />

      <div className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--brand-sage)]/70">Confirma tu asistencia</p>
          <h2 className="text-[8vw] md:text-[3vw] font-halimum text-[var(--brand-caramel)]">
            ¡Nos encantará celebrar contigo!
          </h2>
        </header>

        <p className="max-w-2xl my-10 text-base md:text-lg leading-relaxed text-[var(--paper)]/85">
          Esperamos compartir risas, abrazos y un brindis lleno de cariño con quienes han sido parte de nuestra historia.
          Ojalá puedas acompañarnos en este día tan especial.
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-sage)]/80">Fecha límite</p>
          <p className=" border border-[var(--brand-caramel)]/40 bg-[rgba(189,140,87,0.18)] px-6 py-2 text-lg font-semibold tracking-[0.2em] text-[var(--brand-caramel)]">
            Confirma antes del 30/11/2025
          </p>
        </div>

        <p className="max-w-xl mt-10 text-center font-halimum text-2xl text-[var(--paper)]/90">
          Tu presencia es el mejor regalo
        <br/>
          ¡Gracias por hacernos parte de tus planes!
        </p>

        <a
          href="https://tally.so/r/3E9PV4"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-sage)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-deep)] transition hover:bg-[var(--brand-caramel)] hover:text-[var(--paper)]"
        >
          <span>Confirmar asistencia</span>
        </a>


      </div>
    </section>
  );
}
