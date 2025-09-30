export default function SectionAgenda() {
  const events = [
    {
      title: "Ceremonia Religiosa",
      img: "/itinerary/ceremonia.png",
      venueScript: "Urbanización Prados del Este",
      address: "Av. 7 #5-54, Cúcuta, COL",
      time: "16:30",
      mapUrl: "https://maps.google.com/?q=Avenida+7+5-54+Cúcuta",
    },
    {
      title: "Recepción",
      img: "/itinerary/reception.png",
      venueScript: "Hotel Casino Internacional",
      address: "Cl. 11 #2E-75, Los Caobos, Cúcuta, COL",
      time: "19:30",
      mapUrl: "https://maps.google.com/?q=Cl+11+2E-75+Cúcuta",
    },
  ];

  const renderCard = (event) => (
    <article
      key={event.title}
      className="flex h-full w-full max-w-[430px] flex-col items-center text-center overflow-hidden rounded-3xl text-[var(--brand-forest)]/80 backdrop-blur-xs border border-white/10 bg-white/10 px-6 py-12 md:px-9 md:py-12 shadow-lg shadow-black/15"
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex min-h-[2.75rem] w-full items-center justify-center">
          <h3 className="text-3xl md:text-[2.4rem] tracking-[0.28em] leading-[1.35] uppercase text-[var(--brand-cafe)]">
            {event.title}
          </h3>
        </div>

        <div className="flex w-full items-center justify-center">
          <img
            src={event.img}
            alt={event.venueScript}
            className="w-56 h-56 object-contain drop-shadow-md"
          />
        </div>

        <div className="flex h-[5.75rem] w-full items-center justify-center">
          <p className="font-halimum text-3xl md:text-[2.5rem] leading-tight text-[var(--brand-forest)] max-w-sm text-balance text-center">
            {event.venueScript}
          </p>
        </div>

        <div className="flex min-h-[3rem] w-full items-start justify-center gap-3 text-xl md:text-[1.35rem]">
          <LocationIcon className="mt-[6px] w-6 h-6 text-[var(--brand-sage)]/70" />
          <span className="leading-relaxed text-center md:text-left max-w-sm">{event.address}</span>
        </div>

        <div className="flex min-h-[2.5rem] w-full items-center justify-center gap-2 text-xl md:text-[1.3rem]">
          <ClockIcon className="w-6 h-6 text-[var(--brand-sage)]/70" />
          <span className="tracking-[0.2em] uppercase">{event.time}</span>
        </div>
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--brand-cafe)]/25 bg-[var(--brand-cafe)] px-6 py-3 text-sm sm:text-base uppercase tracking-[0.18em] text-[var(--brand-cream)] shadow-lg shadow-[var(--brand-cafe)]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cafe)]"
      >
        Ver ubicación
      </a>
    </article>
  );

  return (
    <section id="sectionAgenda" className="bg-[var(--brand-cream)]/70 text-[var(--ink)]">
      <div className="relative">
        <div aria-hidden className="absolute inset-0 -z-30 bg-[var(--brand-deep)]/35" />
        <div aria-hidden className="absolute inset-0 -z-20 bg-[var(--brand-forest)]/35" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16">
          <header className="mt-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--brand-forest)]/55">Nuestra</p>
            <h2 className="mt-3 text-[8vw] md:text-4xl font-halimum text-[var(--brand-cafe)]">Agenda</h2>
          </header>

          <div className="agenda-grid mt-12 grid w-full gap-8 justify-items-center">
            {events.map((event) => renderCard(event))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function LocationIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-6-5.3-6-10.2A6 6 0 0 1 12 4a6 6 0 0 1 6 6.8C18 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
