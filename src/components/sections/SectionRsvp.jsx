import PrimaryButton from "@/components/ui/PrimaryButton";
import { RSVP_DEADLINE_LABEL, RSVP_FORM_URL } from "@/config/wedding";

export default function SectionRsvp() {
  return (
    <section
      id="sectionRsvp"
      className="relative min-h-screen bg-[var(--brand-cream)]/70 text-[var(--brand-deep)]"
    >
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse items-center gap-14 px-6 py-20 text-center lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-center gap-10 text-center">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--brand-forest)]/70 md:text-base">
              Confirma tu asistencia
            </p>
            <h2 className="font-halimum text-[7vw] leading-tight text-[var(--brand-cafe)] md:text-4xl">
              Celebrar contigo es un regalo
            </h2>
          </header>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--brand-forest)]/85 md:text-xl">
            Nos llena de ilusión compartir este momento tan especial contigo. Por
            favor, confírmanos tu asistencia antes de la fecha indicada.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--brand-forest)]/75">
              Confirma antes del
            </p>
            <p className="border border-[var(--brand-caramel)]/45 bg-[var(--brand-caramel)]/55 px-7 py-3 text-base font-semibold tracking-[0.22em] text-[var(--brand-cafe)] shadow-[0_10px_22px_rgba(139,94,50,0.18)] md:text-lg">
              {RSVP_DEADLINE_LABEL}
            </p>
          </div>

          <PrimaryButton
            as="a"
            href={RSVP_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6"
          >
            Confirmar asistencia
          </PrimaryButton>
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
