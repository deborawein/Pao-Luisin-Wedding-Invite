import { WEDDING_TIME_ZONE } from "../config/timezone.js";

function escapeIcsText(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function getCalendarDateInZone(iso, timeZone = WEDDING_TIME_ZONE) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

function toIcsLocalDateTime(iso, hour, minute, timeZone = WEDDING_TIME_ZONE) {
  const ymd = getCalendarDateInZone(iso, timeZone);
  const [year, month, day] = ymd.split("-");
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  return `${year}${month}${day}T${hh}${mm}00`;
}

function formatUtcStamp(date = new Date()) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

/** Horário em espanhol (ex.: "4:30 p.m.") na hora de Cúcuta. */
export function formatCucutaTime(hour, minute, dateIso) {
  const ymd = getCalendarDateInZone(dateIso);
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  const instant = new Date(`${ymd}T${hh}:${mm}:00-05:00`);

  return new Intl.DateTimeFormat("es-CO", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: WEDDING_TIME_ZONE,
  }).format(instant);
}

/**
 * Gera o conteúdo .ics com DTSTART/DTEND em America/Bogota (Cúcuta).
 */
export function buildWeddingIcs({
  dateIso,
  startHour,
  startMinute,
  endHour,
  endMinute,
  summary,
  location,
  description,
  uidDomain = "paoluisin.com",
}) {
  const calendarDay = getCalendarDateInZone(dateIso).replace(/-/g, "");
  const dtStart = toIcsLocalDateTime(dateIso, startHour, startMinute);
  const dtEnd = toIcsLocalDateTime(dateIso, endHour, endMinute);
  const uid = `pao-luisi-boda-${calendarDay}@${uidDomain}`;
  const dtStamp = formatUtcStamp();

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PaoLuisin//Wedding Invite//ES",
    "CALSCALE:GREGORIAN",
    "BEGIN:VTIMEZONE",
    `TZID:${WEDDING_TIME_ZONE}`,
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0500",
    "TZNAME:COT",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `DTSTAMP:${dtStamp}`,
    `UID:${uid}`,
    `DTSTART;TZID=${WEDDING_TIME_ZONE}:${dtStart}`,
    `DTEND;TZID=${WEDDING_TIME_ZONE}:${dtEnd}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `LOCATION:${escapeIcsText(location)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}
