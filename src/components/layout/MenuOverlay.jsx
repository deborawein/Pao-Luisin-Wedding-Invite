import { cn } from "@/lib/cn";

export default function MenuOverlay({ open, onClose }) {
  return (
    <button
      type="button"
      aria-hidden={!open}
      aria-label="Cerrar menú"
      tabIndex={open ? 0 : -1}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-40 bg-black/70 transition-opacity duration-300",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    />
  );
}
