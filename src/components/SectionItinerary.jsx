import { Fragment } from "react";

export default function SectionItinerary() {
  // Details shown on the itinerary cards.
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

  const desktopRows = [
    {
      key: "title",
      cellClass: "flex items-center justify-center text-center h-full",
      render: (event) => (
        <h3 className="text-2xl uppercase tracking-[0.35em]">
          {event.title}
        </h3>
      ),
    },
    {
      key: "image",
      cellClass: "flex items-center justify-center h-full",
      render: (event) => (
        <img
          src={event.img}
          alt={event.venueScript}
          className="w-60 aspect-square object-contain drop-shadow-md"
        />
      ),
    },
    {
      key: "venue",
      cellClass: "flex items-center justify-center text-center h-full",
      render: (event) => (
        <p className="font-halimum text-3xl leading-tight text-[var(--brand-cafe)] max-w-xs">
          {event.venueScript}
        </p>
      ),
    },
    {
      key: "address",
      cellClass: "flex items-center justify-center text-center h-full",
      render: (event) => <p className="text-lg">{event.address}</p>,
    },
    {
      key: "time",
      cellClass: "flex items-center justify-center text-center h-full",
      render: (event) => (
        <div className="flex items-center justify-center gap-2 text-lg">
          <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
          <span className="tracking-wide">{event.time}</span>
        </div>
      ),
    },
    {
      key: "cta",
      cellClass: "flex items-center justify-center h-full",
      render: (event) => (
        <a
          href={event.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full px-6 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft"
        >
          Ver ubicación
        </a>
      ),
    },
  ];

  return (
    <section id="sectionItinerary" className="bg-[var(--brand-sage)]/50 text-[var(--ink)]">
      <div className="itin-wrap mx-auto max-w-3xl md:max-w-6xl px-6">
        <div className="mobile-itinerary md:!hidden">
          {events.map((event) => (
            <article key={event.title} className="itinerary-item">
              <h3 className="text-xl uppercase tracking-[0.2em]">{event.title}</h3>
              <img
                src={event.img}
                alt={event.venueScript}
                className="w-60 h-60 object-contain drop-shadow-md"
              />
              <p className="font-halimum text-3xl leading-tight text-[var(--brand-cafe)] max-w-xs mx-auto">
                {event.venueScript}
              </p>
              <p className="text-base">{event.address}</p>
              <div className="flex items-center justify-center gap-2 text-base">
                <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span className="tracking-wide">{event.time}</span>
              </div>
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full px-5 py-2 bg-[var(--brand-cafe)] text-[var(--paper)] hover:opacity-90 transition focus-no-outline focus-soft"
              >
                Ver ubicación
              </a>
            </article>
          ))}
        </div>

        <div className="desktop-itinerary hidden md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 justify-items-center items-stretch text-center">
          {desktopRows.map((row) => (
            <Fragment key={row.key}>
              {events.map((event) => (
                <div
                  key={`${row.key}-${event.title}`}
                  className={row.cellClass ?? "flex items-center justify-center text-center h-full"}
                >
                  {row.render(event)}
                </div>
              ))}
            </Fragment>
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
