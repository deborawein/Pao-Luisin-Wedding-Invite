import { createElement } from "react";
import { cn } from "@/lib/cn";

const BASE_CLASS =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--brand-cafe)]/25 bg-[var(--brand-cafe)] px-6 py-3 text-sm sm:text-base uppercase tracking-[0.18em] text-[var(--brand-cream)] shadow-lg shadow-[var(--brand-cafe)]/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cafe)]";

const DISABLED_CLASS =
  "pointer-events-none cursor-not-allowed opacity-50 hover:translate-y-0 hover:bg-[var(--brand-cafe)]";

export default function PrimaryButton({
  as = "button",
  className,
  disabled = false,
  children,
  ...props
}) {
  return createElement(
    as,
    {
      className: cn(BASE_CLASS, disabled && DISABLED_CLASS, className),
      disabled: as === "button" ? disabled : undefined,
      "aria-disabled": disabled || undefined,
      ...props,
    },
    children,
  );
}
