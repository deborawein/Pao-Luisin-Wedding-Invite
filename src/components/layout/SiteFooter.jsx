const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="space-y-2 bg-[var(--brand-forest)]/60 px-6 py-10 text-center text-xs uppercase tracking-[0.35em] text-[var(--paper)]">
      <div>
        © {CURRENT_YEAR}{" "}
        <a
          href="mailto:debiwein@gmail.com"
          className="underline hover:opacity-80 focus-visible:outline-none focus-soft"
          aria-label="Email Debora Weinmann"
        >
          Debora Weinmann
        </a>
        . Design by Lizeth Pineda.
      </div>
    </footer>
  );
}
