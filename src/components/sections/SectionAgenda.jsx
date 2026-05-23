import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { AGENDA_EVENTS } from "@/config/agenda";

export default function SectionAgenda() {
  return (
    <section id="sectionAgenda" className="bg-[var(--brand-cream)]/70 text-[var(--ink)]">
      <div className="relative">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16">
          <header className="mt-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--brand-forest)]/55">
              Nuestra
            </p>
            <h2 className="mt-3 font-halimum text-[8vw] text-[var(--brand-cafe)] md:text-4xl">
              Agenda
            </h2>
          </header>

          <div className="agenda-grid mt-12 grid w-full justify-items-center gap-8">
            {AGENDA_EVENTS.map((event) => (
              <AgendaCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaCard({ event }) {
  return (
    <article className="flex h-full w-full max-w-[430px] flex-col items-center overflow-hidden rounded-3xl border border-white/15 bg-white/15 px-8 py-12 text-center text-[var(--brand-forest)]/85 shadow-lg shadow-black/20 md:px-10 md:py-14">
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex min-h-[3rem] w-full items-center justify-center">
          <h3 className="text-3xl uppercase leading-[1.3] tracking-[0.28em] text-[var(--brand-cafe)] md:text-[2.35rem]">
            {event.title}
          </h3>
        </div>

        <div className="flex w-full items-center justify-center">
          <img
            src={event.img}
            alt={event.venueScript}
            className="h-48 w-48 object-contain drop-shadow-[0_10px_18px_rgba(15,51,28,0.25)]"
          />
        </div>

        <div className="flex h-[5.5rem] w-full items-center justify-center">
          <p className="max-w-sm text-balance text-center font-halimum text-3xl leading-snug text-[var(--brand-forest)]">
            {event.venueScript}
          </p>
        </div>

        <div className="flex min-h-[3.25rem] w-full items-start justify-center gap-3 text-lg md:text-xl">
          <LocationIcon className="mt-[6px] h-6 w-6 text-[var(--brand-sage)]/70" />
          <span className="max-w-sm text-center leading-relaxed">
            {event.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>

        <div className="flex min-h-[2.5rem] w-full items-center justify-center gap-3 text-lg md:text-xl">
          <ClockIcon className="h-6 w-6 text-[var(--brand-sage)]/70" />
          <span className="uppercase tracking-[0.22em]">{event.time}</span>
        </div>
      </div>

      <PrimaryButton
        as="a"
        href={event.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-9"
      >
        Ver ubicación
      </PrimaryButton>
    </article>
  );
}
