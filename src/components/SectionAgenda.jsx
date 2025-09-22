export default function SectionAgenda() {
  const events = [
    {
      title: "Ceremonia Religiosa",
      img: "/itinerary/ceremonia.png",
      venueScript: "Urbanización Prados del Este",
      address: "Avenida 7 #5–54",
      time: "04:30PM",
      mapUrl: "https://maps.google.com/?q=Avenida+7+5-54+Cúcuta",
    },
    {
      title: "Recepción",
      img: "/itinerary/reception.png",
      venueScript: "Los Cabos",
      address: "Cl. 11 #2E–75",
      time: "07:30PM",
      mapUrl: "https://maps.google.com/?q=Cl+11+2E-75+Cúcuta",
    },
  ];

  const renderCard = (event) => (
    <article
      key={event.title}
      className="flex h-full w-full max-w-[430px] flex-col items-center text-center overflow-hidden rounded-3xl text-[var(--brand-cream)] backdrop-blur-xs border border-white/10 bg-white/10 px-5 py-10 md:px-8 md:py-10 shadow-lg shadow-black/20"
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex min-h-[2.75rem] w-full items-center justify-center">
          <h3 className="text-3xl md:text-4xl tracking-[0.3em] uppercase text-[var(--brand-cafe)]">
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

        <div className="flex h-[5.25rem] w-full items-center justify-center">
          <p className="font-halimum text-3xl leading-tight text-[var(--brand-cream)] max-w-sm text-balance text-center">
            {event.venueScript}
          </p>
        </div>

        <div className="flex min-h-[2.75rem] w-full items-center justify-center gap-3 text-lg">
          <LocationIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
          <span>{event.address}</span>
        </div>

        <div className="flex min-h-[2.5rem] w-full items-center justify-center gap-2 text-lg">
          <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
          <span className="tracking-wide">{event.time}</span>
        </div>
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full px-6 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft hover-brand-sage border border-transparent shadow-[0_8px_15px_rgba(0,0,0,0.15)]"
      >
        Ver ubicación
      </a>
    </article>
  );

  return (
    <section id="sectionAgenda" className="bg-[var(--brand-sage)]/50 text-[var(--ink)]">
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
