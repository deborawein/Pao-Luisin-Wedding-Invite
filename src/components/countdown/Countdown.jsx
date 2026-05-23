import { useEffect, useState } from "react";
import { WEDDING_DATE_ISO } from "@/config/wedding";
import { getTimeRemaining } from "@/lib/countdown";
import { cn } from "@/lib/cn";

export default function Countdown({ targetISO = WEDDING_DATE_ISO }) {
  const [remaining, setRemaining] = useState(() => getTimeRemaining(targetISO));

  useEffect(() => {
    const tick = () => setRemaining(getTimeRemaining(targetISO));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return (
    <div className="mt-2 flex w-full justify-center">
      <div
        className="
          inline-grid max-w-[92vw]
          grid-cols-[auto_auto_auto_auto_auto_auto_auto]
          items-end justify-center gap-x-2 gap-y-1 whitespace-nowrap
          sm:gap-x-3 md:gap-x-6 max-[360px]:gap-x-1
        "
      >
        <CountdownNumber value={remaining.days} width={3} />
        <CountdownColon />
        <CountdownNumber value={remaining.hours} width={2} />
        <CountdownColon />
        <CountdownNumber value={remaining.minutes} width={2} />
        <CountdownColon colorClass="text-[var(--brand-forest)]/55" />
        <CountdownNumber
          value={remaining.seconds}
          width={2}
          colorClass="text-[var(--brand-forest)]/80"
        />

        <CountdownLabel text="Días" col={1} />
        <CountdownLabel text="Horas" col={3} />
        <CountdownLabel text="Minutos" col={5} />
        <CountdownLabel
          text="Segundos"
          col={7}
          colorClass="text-[var(--brand-forest)]/65"
        />
      </div>
    </div>
  );
}

function CountdownNumber({ value, width = 2, faded = false, colorClass }) {
  const text = String(value).padStart(width, "0");
  const tone =
    colorClass ?? (faded ? "text-[var(--brand-cream)]/65" : "text-[var(--paper)]");

  return (
    <span
      className={cn(
        "row-start-1 self-end text-center font-light leading-none",
        "text-[clamp(18px,7.2vw,48px)] md:text-6xl lg:text-7xl",
        tone,
      )}
      style={{ fontVariantNumeric: "tabular-nums", minWidth: `${width}ch` }}
    >
      {text}
    </span>
  );
}

function CountdownColon({ faded = false, colorClass }) {
  const tone =
    colorClass ?? (faded ? "text-[var(--brand-cream)]/55" : "text-[var(--paper)]");

  return (
    <span
      className={cn(
        "row-start-1 self-end text-center leading-none",
        "text-[clamp(16px,6.2vw,44px)] md:text-5xl lg:text-6xl",
        tone,
      )}
    >
      :
    </span>
  );
}

function CountdownLabel({ text, col, faded = false, colorClass }) {
  const tone =
    colorClass ?? (faded ? "text-[var(--brand-cream)]/55" : "text-[var(--paper)]");

  return (
    <span
      className={cn(
        "row-start-2 justify-self-center uppercase",
        "tracking-[0.25em] md:tracking-[0.3em]",
        "text-[10px] max-[360px]:text-[9px] md:text-sm",
        tone,
      )}
      style={{ gridColumnStart: col }}
    >
      {text}
    </span>
  );
}
