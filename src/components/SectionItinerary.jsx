import React from "react";

export default function SectionItinerary() {
  const events = [
    {
      title: "CEREMONIA RELIGIOSA",
      img: "/itinerary/ceremonia.png",
      venueScript: "Urbanización Prados del Este",
      address: "Avenida 7 #5–54",
      time: "04:30PM",
      mapUrl: "https://maps.google.com/?q=Avenida+7+5-54+Cúcuta",
    },
    {
      title: "RECEPCIÓN",
      img: "/itinerary/reception.png",
      venueScript: "Los Cabos",
      address: "Cl. 11 #2E–75",
      time: "07:30PM",
      mapUrl: "https://maps.google.com/?q=Cl+11+2E-75+Cúcuta",
    },
  ];

  return (
    <section id="sectionItinerary" className="bg-[var(--brand-sage)]/50 text-[var(--ink)]">
  <div className="itin-wrap mx-auto max-w-3xl md:max-w-6xl px-6">
    <div className="itinerary-grid">
      {events.map((e, i) => (
        <article key={i} className="itinerary-item text-center">
              <h3 className="uppercase text-lg md:text-xl">{e.title}</h3>

              <img
                src={e.img}
                alt={e.venueScript}
                className="mt-4 w-60 h-60 md:w-64 md:h-64 object-contain drop-shadow-md"
              />

              <p className="font-halimum text-[7.2vw] md:text-3xl leading-none text-[var(--brand-cafe)] mt-6">
                {e.venueScript}
              </p>

              <p className="mt-3 text-base md:text-lg">{e.address}</p>

              <div className="mt-2 flex items-center gap-2 text-base md:text-lg">
                <ClockIcon className="w-5 h-5 text-[var(--brand-forest)]/70" />
                <span className="tracking-wide">{e.time}</span>
              </div>

              <a
                href={e.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-full px-5 py-2
                           bg-[var(--brand-cafe)] text-[var(--paper)]
                           hover:opacity-90 transition"
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
