import { WEDDING_TIME_ZONE } from "../config/timezone.js";
import {
  RSVP_DEADLINE_YMD,
  WEDDING_DATE_ISO,
  WEDDING_EVENT_END,
  WEDDING_EVENT_START,
} from "../config/wedding.js";
import { formatWeddingDateLong } from "./formatDate.js";
import { buildWeddingIcs, formatCucutaTime } from "./ics.js";

function getCalendarDateInZone(date, timeZone = WEDDING_TIME_ZONE) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Formato exibido no RSVP: DD/MM/YYYY */
export function formatShortDateLabel(ymd) {
  const [year, month, day] = ymd.split("-");
  return `${day}/${month}/${year}`;
}

/** RSVP aberto no dia do prazo e antes; fechado depois (fuso Cúcuta). */
export function isRsvpOpen(accessDate = new Date()) {
  const accessYmd = getCalendarDateInZone(accessDate);
  return accessYmd <= RSVP_DEADLINE_YMD;
}

export function computeWeddingSchedule(accessDate = new Date()) {
  const weddingDateIso = WEDDING_DATE_ISO;
  const weddingDateLabel = formatWeddingDateLong(weddingDateIso);
  const rsvpDeadlineLabel = formatShortDateLabel(RSVP_DEADLINE_YMD);
  const rsvpOpen = isRsvpOpen(accessDate);

  const icsStartLabel = formatCucutaTime(
    WEDDING_EVENT_START.hour,
    WEDDING_EVENT_START.minute,
    weddingDateIso,
  );
  const icsEndLabel = formatCucutaTime(
    WEDDING_EVENT_END.hour,
    WEDDING_EVENT_END.minute,
    weddingDateIso,
  );

  const icsEvent = buildWeddingIcs({
    dateIso: weddingDateIso,
    startHour: WEDDING_EVENT_START.hour,
    startMinute: WEDDING_EVENT_START.minute,
    endHour: WEDDING_EVENT_END.hour,
    endMinute: WEDDING_EVENT_END.minute,
    summary: "Boda de Pao & Luisi",
    location: "Av. 7 #5-54, Cúcuta, Colombia",
    description: `Celebración de nuestra boda en Urbanización Prados del Este y recepción en Hotel Casino Internacional.\nHorario: ${icsStartLabel} - ${icsEndLabel} (hora de Cúcuta)`,
  });

  return {
    weddingDateIso,
    weddingDateLabel,
    rsvpDeadlineLabel,
    rsvpOpen,
    icsEvent,
  };
}
