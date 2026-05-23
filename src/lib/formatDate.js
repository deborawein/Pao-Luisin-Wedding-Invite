import { WEDDING_TIME_ZONE } from "../config/timezone.js";

const WEDDING_LOCALE = "es-CO";

/**
 * Formats an ISO date as "Sábado 10 de enero de 2026" (weekday, day, month, year).
 */
export function formatWeddingDateLong(iso) {
  const formatted = new Intl.DateTimeFormat(WEDDING_LOCALE, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: WEDDING_TIME_ZONE,
  }).format(new Date(iso));

  const capitalized =
    formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return capitalized.replace(", ", " ");
}
