export default function LocationIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M12 21s-6-5.3-6-10.2A6 6 0 0 1 12 4a6 6 0 0 1 6 6.8C18 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
