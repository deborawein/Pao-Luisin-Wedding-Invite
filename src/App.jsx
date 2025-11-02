// App.jsx
import React, { useState } from "react";
import LogoLine from "./assets/logo2.svg";
import SectionMensaje from "./components/SectionMensaje";
import SectionInicio from "./components/SectionInicio";
import SectionAgenda from "./components/SectionAgenda";
import SectionGuardaLaFecha from "./components/SectionGuardaLaFecha";
import SectionCodigoVestimenta from "./components/SectionCodigoVestimenta";
import SectionRsvp from "./components/SectionRsvp";
import SectionGaleria from "./components/SectionGaleria";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col">
      {/* Fixed, static background */}
      <div className="app-bg" aria-hidden />

      {/* ===== Full-screen dim overlay (below menu/UI, above content) ===== */}
      <button
        type="button"
        aria-hidden={!open}
        aria-label="Cerrar menú"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40",            // sits under the nav/menu (which will be z-50)
          "bg-black/70",                   // dim without blur
          "transition-opacity duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        ].join(" ")}
      />

      {/* Scrollable content area */}
      <main
        className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ scrollbarGutter: "stable", overscrollBehaviorY: "contain" }}
      >

        {/* STICKY NAV inside the scroll container */}
        <nav className="sticky top-0 z-50 h-16 text-[var(--paper)]">
          <div className="relative z-50 flex items-center justify-between px-4 py-3">
            <a href="#sectionStart" className="flex items-center" onClick={() => setOpen(false)}>
              <img src={LogoLine} alt="Pao & Luisin" className="h-8 w-auto sm:h-10" />
            </a>

            {/* Hamburger / X */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="main-menu"
              onClick={() => setOpen(v => !v)}
              className="relative z-50 h-10 w-10 grid place-items-center"
            >
              <span className={[
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-transform duration-200",
                open ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0",
              ].join(" ")} />
              <span className={[
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")} />
              <span className={[
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-transform duration-200",
                open ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0",
              ].join(" ")} />
            </button>
          </div>

          {/* Full-screen menu panel (above overlay) */}
          <div
            id="main-menu"
            role="menu"
            aria-hidden={!open}
            className={[
              "fixed inset-0 z-50 flex flex-col items-center justify-center px-4",
              "bg-gradient-to-b from-black via-black/95 to-black/80",
              "transition-opacity duration-300",
              open ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible",
            ].join(" ")}
          >
            <div className="flex flex-col items-center py-4 space-y-2">
              {[
                ["Top", "#sectionStart"],
                ["Invite", "#sectionSaveTheDate"],
                ["Message", "#sectionQuoteVideo"],
                ["Itinerary", "#sectionItinerary"],
                ["Details", "#sectionDetails"],
                ["RSVP", "#sectionRsvp"],
                ["Galería", "#sectionGaleria"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:underline uppercase tracking-[0.35em] text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>


        {/* Sections */}
        <MusicToggle src="/music/mama-linda-sample.mp3" autostart />
        <SectionInicio />
        <SectionGuardaLaFecha />
        <SectionAgenda />
        <SectionMensaje />
        <SectionCodigoVestimenta />
        <SectionRsvp />
        <SectionGaleria />

        <footer className="px-6 py-10 text-center text-xs uppercase tracking-[0.35em] text-[var(--paper)] bg-[var(--brand-forest)]/60 space-y-2">
          <div>© {currentYear} <a
            href="mailto:debiwein@gmail.com"
            className="underline hover:opacity-80 focus-visible:outline-none focus-soft"
            aria-label="Email Debora Weinmann"
          >Debora Weinmann</a>. Design by Lizeth Pineda.</div>
        </footer>
      </main>
    </div>
  );
}