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

  const renderCard = (event, variant = "mobile") => {
    const isMobile = variant === "mobile";
    const baseLayout = isMobile
      ? "flex flex-col items-center gap-5"
      : "flex h-full flex-col items-center gap-6";
    const shellPadding = isMobile ? "px-5 py-7" : "px-9 py-10";
    const shadow = isMobile ? "shadow-md" : "shadow-xl";
    const imageSize = isMobile ? "w-56 h-56" : "w-56 h-56";
    const cardMargin = isMobile ? "mx-4" : "";

    return (
      <article
        key={`${variant}-${event.title}`}
        className={[
          baseLayout,
          "overflow-hidden rounded-3xl text-center text-[var(--brand-cream)]",
          "backdrop-blur-sm border border-white/5 bg-white/5",
          shellPadding,
          shadow,
          "shadow-black/20",
          cardMargin,
        ].join(" ")}
      >
        <h3 className="text-2xl uppercase tracking-[0.3em] text-[var(--brand-cafe)]">
          {event.title}
        </h3>

        <img
          src={event.img}
          alt={event.venueScript}
          className={[imageSize, "object-contain drop-shadow-md mx-auto mt-6"].join(" ")}
        />

        <p className="mt-6 font-halimum text-3xl leading-tight text-[var(--brand-cream)] max-w-sm mx-auto">
          {event.venueScript}
        </p>

        <div className="mt-4 flex items-center justify-center gap-3 text-lg">
          <LocationIcon className="w-5 h-5 text-[var(--brand-sage)]" />
          <span>{event.address}</span>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 text-lg">
          <ClockIcon className="w-5 h-5 text-[var(--brand-sage)]" />
          <span className="tracking-wide">{event.time}</span>
        </div>

        <a
          href={event.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full px-6 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft hover-brand-sage border border-transparent"
        >
          Ver ubicación
        </a>
      </article>
    );
  };

  return (
    <section id="sectionAgenda" className="bg-[var(--brand-sage)]/50 text-[var(--ink)]">
      <div className="relative">
        <div aria-hidden className="absolute inset-0 -z-30 bg-[var(--brand-deep)]/55" />
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(34,78,50,0.35)_0%,_rgba(17,44,27,0.58)_55%,_rgba(10,28,17,0.72)_100%)]"
        />

        <div className="relative z-10 itin-wrap mx-auto max-w-3xl md:max-w-6xl px-3 md:px-6">
          <header className="mt-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--brand-forest)]/55">Nuestra</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-halimum text-[var(--brand-cafe)]">Agenda</h2>
          </header>

          <div className="mobile-itinerary md:!hidden space-y-6 py-16">
            {events.map((event) => renderCard(event, "mobile"))}
          </div>

          <div className="desktop-itinerary hidden md:grid md:grid-cols-2 md:gap-12 pt-20 pb-20">
            {events.map((event) => renderCard(event, "desktop"))}
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
