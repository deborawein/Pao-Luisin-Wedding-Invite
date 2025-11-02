export default function SectionAgenda() {
  const events = [
    {
      title: "Ceremonia Religiosa",
      img: "/itinerary/ceremonia.png",
      venueScript: "Parroquia Santa Mónica",
      addressLines: [
        "Av. 7 #5-54, Urb. Prados del Este,", 
        "Cúcuta, Colombia",
      ],
      time: "4:30pm",
      mapUrl: "https://maps.google.com/?q=Parroquia+Santa+Mónica+Cúcuta",
    },
    {
      title: "Recepción",
      img: "/itinerary/reception.png",
      venueScript: "Hotel Casino Internacional",
      addressLines: [
        "Cl. 11 #2E-75, Los Caobos",
        "Cúcuta, Colombia",
        "(Salón Mónaco)",
      ],
      time: "7:30pm",
      mapUrl: "https://maps.google.com/?q=Hotel+Casino+Internacional+Cúcuta",
    },
  ];

  const renderCard = (event) => (
    <article
      key={event.title}
      className="flex h-full w-full max-w-[430px] flex-col items-center text-center overflow-hidden rounded-3xl text-[var(--brand-forest)]/85 border border-white/15 bg-white/15 px-8 py-12 md:px-10 md:py-14 shadow-lg shadow-black/20"
    >
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex min-h-[3rem] w-full items-center justify-center">
          <h3 className="text-3xl md:text-[2.35rem] tracking-[0.28em] leading-[1.3] uppercase text-[var(--brand-cafe)]">
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
          <p className="font-halimum text-3xl leading-snug text-[var(--brand-forest)] max-w-sm text-balance text-center">
            {event.venueScript}
          </p>
        </div>

        <div className="flex min-h-[3.25rem] w-full items-start justify-center gap-3 text-lg md:text-xl">
          <LocationIcon className="mt-[6px] w-6 h-6 text-[var(--brand-sage)]/70" />
          <span className="leading-relaxed text-center max-w-sm">
            {event.addressLines?.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>

        <div className="flex min-h-[2.5rem] w-full items-center justify-center gap-3 text-lg md:text-xl">
          <ClockIcon className="w-6 h-6 text-[var(--brand-sage)]/70" />
          <span className="tracking-[0.22em] uppercase">{event.time}</span>
        </div>
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-9 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--brand-cafe)]/25 bg-[var(--brand-cafe)] px-6 py-3 text-sm sm:text-base uppercase tracking-[0.18em] text-[var(--brand-cream)] shadow-lg shadow-[var(--brand-cafe)]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cafe)]"
      >
        Ver ubicación
      </a>
    </article>
  );

  return (
    <section id="sectionAgenda" className="bg-[var(--brand-cream)]/70 text-[var(--ink)]">
      <div className="relative">

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
