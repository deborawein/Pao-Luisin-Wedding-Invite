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

  return (
    <section id="sectionAgenda" className="bg-[var(--brand-sage)]/50 text-[var(--ink)]">
      <div className="itin-wrap mx-auto max-w-3xl md:max-w-6xl px-6">
        <div className="mobile-itinerary md:!hidden">
          {events.map((event) => (
            <article
              key={event.title}
              className="itinerary-item"
            >
              <h3 className="text-2xl uppercase tracking-[0.25em] text-[var(--brand-deep)]">{event.title}</h3>
              <img
                src={event.img}
                alt={event.venueScript}
                className="w-60 h-60 object-contain drop-shadow-md"
              />
              <p className="font-halimum text-3xl leading-tight text-[var(--brand-cafe)] max-w-xs mx-auto">
                {event.venueScript}
              </p>
              <div className="flex items-center justify-center gap-2 text-base">
                <LocationIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span>{event.address}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-base">
                <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span className="tracking-wide">{event.time}</span>
              </div>
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full px-5 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft hover-brand-sage border border-transparent"
              >
                Ver ubicación
              </a>
            </article>
          ))}
        </div>

        <div className="desktop-itinerary hidden md:grid md:grid-cols-2 md:gap-12">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex h-full flex-col items-center gap-6 rounded-3xl bg-[var(--brand-cream)]/90 px-8 py-10 text-center shadow-xl shadow-black/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl uppercase tracking-[0.3em] text-[var(--brand-deep)]">{event.title}</h3>
              <img
                src={event.img}
                alt={event.venueScript}
                className="w-56 h-56 object-contain drop-shadow-md"
              />
              <p className="font-halimum text-3xl leading-tight text-[var(--brand-cafe)] max-w-sm">
                {event.venueScript}
              </p>
              <div className="flex items-center justify-center gap-3 text-lg">
                <LocationIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span>{event.address}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg">
                <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span className="tracking-wide">{event.time}</span>
              </div>
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full px-6 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft hover-brand-sage border border-transparent"
              >
                Ver ubicación
              </a>
            </article>
          ))}
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
