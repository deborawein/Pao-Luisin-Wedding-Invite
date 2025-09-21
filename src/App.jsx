// App.jsx
import React, { useEffect, useRef, useState } from "react";
import LogoLine from "./assets/logo2.svg";
import SectionQuoteVideo from "./components/SectionQuoteVideo";
import SectionStart from "./components/SectionStart";
import SectionItinerary from "./components/SectionItinerary";
import SectionSaveTheDate from "./components/SectionSaveTheDate";
import SectionDetails from "./components/SectionDetails";
import SectionRsvp from "./components/SectionRsvp";
import SectionEnd from "./components/SectionEnd";

export default function App() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const hasMounted = useRef(false);

  // Allow ESC to dismiss the menu when it's visible.
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Trap focus between the toggle and first link after initial render.
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (open) {
      firstLinkRef.current?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [open]);

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
        className="flex-1 overflow-y-auto scroll-smooth"
        style={{ scrollbarGutter: "stable", overscrollBehaviorY: "contain" }}
      >

        {/* STICKY NAV inside the scroll container */}
        <nav className="sticky top-0 z-50 h-16 text-[var(--paper)] bg-gradient-to-b from-black/50 via-black/20 to-transparent">
          <div className="relative z-[60] flex items-center justify-between px-4 py-3">
            <a
              href="#sectionStart"
              className="flex items-center focus-no-outline"
              onClick={() => setOpen(false)}
            >
              <img src={LogoLine} alt="Pao & Luisin" className="h-8 w-auto sm:h-10" />
            </a>

            {/* Hamburger / X */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="main-menu"
              onClick={() => setOpen(v => !v)}
              ref={toggleRef}
              className="relative z-50 grid h-10 w-10 place-items-center focus:outline-none focus-visible:outline-none focus-no-outline focus-soft"
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
            <div className="flex w-full max-w-md flex-col items-center space-y-4">
              {[ 
                ["Top", "#sectionStart"],
                ["Invite", "#sectionSaveTheDate"],
                ["Message", "#sectionQuoteVideo"],
                ["Itinerary", "#sectionItinerary"],
                ["Details", "#sectionDetails"],
                ["RSVP", "#sectionRsvp"],
                ["End", "#sectionEnd"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  ref={href === "#sectionStart" ? firstLinkRef : undefined}
                  role="menuitem"
                  className="focus-no-outline focus-soft hover-brand-sage w-full text-center py-3 uppercase tracking-[0.35em] text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Sections */}
        <SectionStart />
        <SectionSaveTheDate />
        <SectionQuoteVideo />
        <SectionItinerary />
        <SectionDetails />
        <SectionRsvp />
        <SectionEnd />
      </main>
    </div>
  );
}
