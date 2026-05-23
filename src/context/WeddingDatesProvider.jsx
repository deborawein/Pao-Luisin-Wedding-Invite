import { useMemo } from "react";
import { computeWeddingSchedule } from "@/lib/weddingDates";
import { WeddingDatesContext } from "./weddingDatesContext";

export function WeddingDatesProvider({ children }) {
  const value = useMemo(() => computeWeddingSchedule(new Date()), []);

  return (
    <WeddingDatesContext.Provider value={value}>
      {children}
    </WeddingDatesContext.Provider>
  );
}
