// SectionGuardaLaFecha.jsx
import { useCallback, useEffect, useState } from "react";
import Photo from "/saveTheDate.jpg";

const ICS_EVENT = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//PaoLuisin//Wedding Invite//ES",
  "CALSCALE:GREGORIAN",
  "BEGIN:VEVENT",
  "DTSTAMP:20241014T000000Z",
  "UID:pao-luisi-boda-20260110@paoluisin.com",
  "DTSTART:20260110T213000Z",
  "DTEND:20260111T040000Z",
  "SUMMARY:Boda de Pao & Luisi",
  "LOCATION:Av. 7 #5-54\\, Cúcuta\\, Colombia",
  "DESCRIPTION:Celebración de nuestra boda en Urbanización Prados del Este y recepción en Hotel Casino Internacional.\\nHorario: 4:30 p.m. - 11:00 p.m. (hora de Cúcuta)",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

export default function SectionGuardaLaFecha() {
  const EVENT_ISO = "2026-01-10T00:00:00-05:00";

  const downloadCalendar = useCallback(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    const isIOS = /iP(ad|hone|od)/i.test(navigator.userAgent);
    const isChromeIOS = /CriOS/i.test(navigator.userAgent);

    if (isIOS) {
      const calendarPath = "/pao-luisi-boda.ics";
      if (isChromeIOS) {
        window.open(calendarPath, "_blank");
      } else {
        window.location.href = calendarPath;
      }
      return;
    }

    const dataUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(ICS_EVENT)}`;
    const blob = new Blob([ICS_EVENT], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "pao-luisi-boda.ics";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section id="sectionGuardaLaFecha" className="bg-[var(--brand-cream)]/70">
      <div
        className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12 pt-16 pb-12 md:py-20 grid md:grid-cols-2 gap-10 items-center justify-items-center md:justify-items-stretch"
      >
        {/* Left column — title + sentence */}
        <div className="text-left">
          {/* Script title */}
          <h3 className="font-halimum pt-10 md:pt-0 pb-6 text-[8vw] md:text-4xl leading-none text-[var(--brand-cafe)]">
            <span className="block">¡Nos casamos</span>
            <span className="block mt-4">en Colombia!</span>
          </h3>

          <div className="max-w-prose">
            <p className="text-lg md:text-xl mt-4 leading-relaxed font-light">
              Con inmensa felicidad te invitamos a nuestra boda, donde después de tanto
              tiempo lejos de nuestros seres queridos, volvemos a abrazarnos y a celebrar
              nuestro amor frente a Dios y frente a ustedes.
            </p>
            <div className="mt-10 flex items-start text-[var(--brand-cafe)]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <span className="h-4 w-4 rounded-full bg-[var(--brand-cafe)] ring-4 ring-[var(--brand-cream)]/70 shadow-md" />
                  <span className="mt-3 h-24 w-px bg-[var(--brand-sage)]/50" />
                </div>
                <div className="text-left">
                  <span className="uppercase tracking-[0.32em] text-sm md:text-base font-light text-[var(--brand-forest)]/70">
                    Guarda la fecha
                  </span>
                  <p className="mt-3 text-xl md:text-3xl font-medium uppercase tracking-[0.28em] text-[var(--brand-cafe)]">
                    Sábado 10 de enero de 2026
                  </p>
                  <p className="mt-2 text-base md:text-lg italic text-[var(--brand-forest)]/70">
                    El inicio de toda una vida juntos con la bendición de Dios
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={downloadCalendar}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--brand-cafe)]/25 bg-[var(--brand-cafe)] px-6 py-3 text-sm sm:text-base uppercase tracking-[0.18em] text-[var(--brand-cream)] shadow-lg shadow-[var(--brand-cafe)]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cafe)]"
              >
                Añadir al calendario
              </button>
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative w-full max-w-lg md:justify-self-end">
          <div aria-hidden className="hidden -z-50 md:block absolute -right-6 -bottom-6 w-full h-full bg-[var(--brand-cafe)] rounded-lg" />
          <img
            src={Photo}
            alt="Pao & Luisin"
            className="relative w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>

      {/* === Row 2: countdown band (tinted) === */}
      <div className="relative">
        {/* overlay behind content */}
        <div className="absolute inset-0 -z-30 bg-[var(--brand-deep)]" />
        {/* content above overlay */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12 py-12 md:py-20 flex flex-col items-center justify-center text-center text-[var(--brand-cream)] min-h-[360px]">
          <h3 className="text-[10vw] md:text-5xl mb-3 font-halimum text-[var(--brand-cafe)]">Faltan</h3>
          <Countdown targetISO={EVENT_ISO} />
        </div>
      </div>
    </section>
  );
}
/* ---------- Countdown (fits narrow screens) ---------- */
function Countdown({ targetISO }) {
  const [left, setLeft] = useState(() => getLeft(targetISO));
  // Tick once per second so the widget stays live.
  useEffect(() => {
    const tick = () => setLeft(getLeft(targetISO));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return (
    <div className="mt-2 w-full flex justify-center">
      <div
        className="
          inline-grid
          grid-cols-[auto_auto_auto_auto_auto_auto_auto]
          items-end justify-center whitespace-nowrap
          gap-x-2 sm:gap-x-3 md:gap-x-6 gap-y-1
          max-w-[92vw]        /* never exceed viewport */
          max-[360px]:gap-x-1 /* tighter gaps on tiny screens */
        "
      >
        {/* Row 1: numbers + colons */}
        <Number value={left.d} width={3} />
        <Colon />
        <Number value={left.h} width={2} />
        <Colon />
        <Number value={left.m} width={2} />
        <Colon colorClass="text-[var(--brand-forest)]/55" />
        <Number value={left.s} width={2} colorClass="text-[var(--brand-forest)]/80" />

        {/* Row 2: labels under numbers */}
        <Label text="Días"     col={1} />
        <Label text="Horas"    col={3} />
        <Label text="Minutos"  col={5} />
        <Label text="Segundos" col={7} colorClass="text-[var(--brand-forest)]/65" />
      </div>
    </div>
  );
}

function getLeft(targetISO) {
  const now = new Date();
  const target = new Date(targetISO);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff / 3_600_000) % 24);
  const m = Math.floor((diff / 60_000) % 60);
  const s = Math.floor((diff / 1_000) % 60);
  return { d, h, m, s };
}

function Number({ value, width = 2, faded = false, colorClass }) {
  const txt = String(value).padStart(width, "0");
  const tone = colorClass ?? (faded ? "text-[var(--brand-cream)]/65" : "text-[var(--paper)]");
  return (
    <span
      className={[
        "row-start-1 self-end font-light leading-none text-center",
        // shrink on tiny screens, grow on larger — stays within width
        "text-[clamp(18px,7.2vw,48px)] md:text-6xl lg:text-7xl",
        tone,
      ].join(" ")}
      style={{
        fontVariantNumeric: "tabular-nums",
        minWidth: `${width}ch`,      // keeps columns aligned
      }}
    >
      {txt}
    </span>
  );
}

function Colon({ faded = false, colorClass }) {
  const tone = colorClass ?? (faded ? "text-[var(--brand-cream)]/55" : "text-[var(--paper)]");
  return (
    <span
      className={[
        "row-start-1 self-end text-center leading-none",
        "text-[clamp(16px,6.2vw,44px)] md:text-5xl lg:text-6xl",
        tone,
      ].join(" ")}
    >
      :
    </span>
  );
}

function Label({ text, col, faded = false, colorClass }) {
  const tone = colorClass ?? (faded ? "text-[var(--brand-cream)]/55" : "text-[var(--paper)]");
  return (
    <span
      className={[
        "row-start-2 justify-self-center",
        "uppercase",
        "tracking-[0.25em] md:tracking-[0.3em]",
        "text-[10px] max-[360px]:text-[9px] md:text-sm",
        tone,
      ].join(" ")}
      style={{ gridColumnStart: col }}
    >
      {text}
    </span>
  );
}
