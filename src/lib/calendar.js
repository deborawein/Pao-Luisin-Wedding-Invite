export function downloadWeddingCalendar(icsEvent) {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return;
  }

  if (!icsEvent) {
    return;
  }

  const isIOS = /iP(ad|hone|od)/i.test(navigator.userAgent);
  const isChromeIOS = /CriOS/i.test(navigator.userAgent);

  const blob = new Blob([icsEvent], { type: "text/calendar;charset=utf-8" });

  if (isIOS) {
    const url = URL.createObjectURL(blob);
    if (isChromeIOS) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return;
  }

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "pao-luisi-boda.ics";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
