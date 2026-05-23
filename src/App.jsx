import AppBackground from "@/components/layout/AppBackground";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import MusicToggle from "@/components/MusicToggle";
import {
  SectionAgenda,
  SectionCodigoVestimenta,
  SectionGaleria,
  SectionGuardaLaFecha,
  SectionInicio,
  SectionMensaje,
  SectionRsvp,
} from "@/components/sections";
import { WeddingDatesProvider } from "@/context/WeddingDatesProvider";

export default function App() {
  return (
    <WeddingDatesProvider>
    <div className="relative flex h-screen flex-col">
      <AppBackground />

      <main
        className="flex-1 overflow-x-hidden overflow-y-auto scroll-smooth"
        style={{ scrollbarGutter: "stable", overscrollBehaviorY: "contain" }}
      >
        <SiteHeader />

        <MusicToggle />
        <SectionInicio />
        <SectionGuardaLaFecha />
        <SectionAgenda />
        <SectionMensaje />
        <SectionCodigoVestimenta />
        <SectionRsvp />
        <SectionGaleria />

        <SiteFooter />
      </main>
    </div>
    </WeddingDatesProvider>
  );
}
