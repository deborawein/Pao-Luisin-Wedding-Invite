import { useCallback, useState } from "react";
import LogoLine from "@/assets/logo2.svg";
import { NAV_ITEMS } from "@/config/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { cn } from "@/lib/cn";
import MenuOverlay from "./MenuOverlay";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEscapeKey(menuOpen, closeMenu);

  return (
    <>
      <MenuOverlay open={menuOpen} onClose={closeMenu} />

      <nav className="sticky top-0 z-50 h-16 text-[var(--paper)] bg-gradient-to-b from-black/50 via-black/20 to-transparent">
        <div className="relative z-[60] flex items-center justify-between px-4 py-3">
          <a
            href="#sectionInicio"
            className="flex items-center focus-no-outline"
            onClick={closeMenu}
          >
            <img
              src={LogoLine}
              alt="Pao & Luisin"
              className="h-8 w-auto sm:h-10"
            />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={toggleMenu}
            className="relative z-50 grid h-10 w-10 place-items-center focus:outline-none focus-visible:outline-none focus-no-outline focus-soft"
          >
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-transform duration-200",
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-[var(--paper)] transition-transform duration-200",
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0",
              )}
            />
          </button>
        </div>

        <div
          id="main-menu"
          role="menu"
          aria-hidden={!menuOpen}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center px-4",
            "bg-gradient-to-b from-black via-black/95 to-black/80",
            "transition-opacity duration-300",
            menuOpen
              ? "visible pointer-events-auto opacity-100"
              : "invisible pointer-events-none opacity-0",
          )}
        >
          <div className="flex w-full max-w-md flex-col items-center space-y-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                role="menuitem"
                className="focus-no-outline focus-soft hover-brand-sage w-full py-3 text-center text-sm uppercase tracking-[0.35em]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
