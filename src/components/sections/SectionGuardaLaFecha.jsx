import Countdown from "@/components/countdown/Countdown";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { WEDDING_DATE_LABEL } from "@/config/wedding";
import { downloadWeddingCalendar } from "@/lib/calendar";

const SAVE_THE_DATE_IMAGE = "/saveTheDate.jpg";

export default function SectionGuardaLaFecha() {
  return (
    <section id="sectionGuardaLaFecha" className="bg-[var(--brand-cream)]/70">
      <div className="mx-auto grid max-w-6xl items-center justify-items-center gap-10 px-6 pt-16 pb-12 md:grid-cols-2 md:justify-items-stretch md:px-10 md:py-20 lg:px-12">
        <div className="text-left">
          <h3 className="font-halimum pt-10 pb-6 text-[8vw] leading-none text-[var(--brand-cafe)] md:pt-0 md:text-4xl">
            <span className="block">¡Nos casamos</span>
            <span className="mt-4 block">en Colombia!</span>
          </h3>

          <div className="max-w-prose">
            <p className="mt-4 text-lg leading-relaxed font-light md:text-xl">
              Con inmensa felicidad te invitamos a nuestra boda, donde después de
              tanto tiempo lejos de nuestros seres queridos, volvemos a abrazarnos
              y a celebrar nuestro amor frente a Dios y frente a ustedes.
            </p>

            <div className="mt-10 flex items-start text-[var(--brand-cafe)]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="h-4 w-4 rounded-full bg-[var(--brand-cafe)] ring-4 ring-[var(--brand-cream)]/70 shadow-md" />
                  <span className="mt-3 h-24 w-px bg-[var(--brand-sage)]/50" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-light uppercase tracking-[0.32em] text-[var(--brand-forest)]/70 md:text-base">
                    Guarda la fecha
                  </span>
                  <p className="mt-3 text-xl font-medium uppercase tracking-[0.28em] text-[var(--brand-cafe)] md:text-3xl">
                    {WEDDING_DATE_LABEL}
                  </p>
                  <p className="mt-2 text-base italic text-[var(--brand-forest)]/70 md:text-lg">
                    El inicio de toda una vida juntos con la bendición de Dios
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <PrimaryButton type="button" onClick={downloadWeddingCalendar}>
                Añadir al calendario
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg md:justify-self-end">
          <div
            aria-hidden
            className="absolute -right-6 -bottom-6 hidden -z-50 h-full w-full rounded-lg bg-[var(--brand-cafe)] md:block"
          />
          <img
            src={SAVE_THE_DATE_IMAGE}
            alt="Pao & Luisin"
            className="relative h-auto w-full rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-30 bg-[var(--brand-deep)]" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-6xl flex-col items-center justify-center px-6 py-12 text-center text-[var(--brand-cream)] md:px-10 md:py-20 lg:px-12">
          <h3 className="mb-3 font-halimum text-[10vw] text-[var(--brand-cafe)] md:text-5xl">
            Faltan
          </h3>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
