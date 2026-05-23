import { formatWeddingDateLong } from "../lib/formatDate.js";
import { buildWeddingIcs, formatCucutaTime } from "../lib/ics.js";

/** Data do casamento (meia-noite no fuso de Cúcuta). */
export const WEDDING_DATE_ISO = "2027-01-10T00:00:00-05:00";

/** Texto exibido em “Guarda la fecha” (derivado de WEDDING_DATE_ISO). */
export const WEDDING_DATE_LABEL = formatWeddingDateLong(WEDDING_DATE_ISO);

/** Horário do evento no calendário — sempre hora de Cúcuta, Colombia. */
export const WEDDING_EVENT_START = { hour: 15, minute: 30 };
export const WEDDING_EVENT_END = { hour: 23, minute: 0 };

const ICS_START_LABEL = formatCucutaTime(
  WEDDING_EVENT_START.hour,
  WEDDING_EVENT_START.minute,
  WEDDING_DATE_ISO,
);
const ICS_END_LABEL = formatCucutaTime(
  WEDDING_EVENT_END.hour,
  WEDDING_EVENT_END.minute,
  WEDDING_DATE_ISO,
);

export const ICS_EVENT = buildWeddingIcs({
  dateIso: WEDDING_DATE_ISO,
  startHour: WEDDING_EVENT_START.hour,
  startMinute: WEDDING_EVENT_START.minute,
  endHour: WEDDING_EVENT_END.hour,
  endMinute: WEDDING_EVENT_END.minute,
  summary: "Boda de Pao & Luisi",
  location: "Av. 7 #5-54, Cúcuta, Colombia",
  description: `Celebración de nuestra boda en Urbanización Prados del Este y recepción en Hotel Casino Internacional.\nHorario: ${ICS_START_LABEL} - ${ICS_END_LABEL} (hora de Cúcuta)`,
});

export const HERO_CAROUSEL_IMAGES = [
  "/inicio/carrosel1.jpg",
  "/inicio/carrosel2.jpg",
  "/inicio/carrosel3.jpg",
  "/inicio/carrosel4.jpg",
];

export const HERO_CAROUSEL_INTERVAL_MS = 2000;

export const RSVP_DEADLINE_LABEL = "20/11/2025";
export const RSVP_FORM_URL = "https://tally.so/r/3E9PV4";

export const MUSIC_SRC = "/music/mama-linda-sample.mp3";
