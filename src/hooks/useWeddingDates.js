import { useContext } from "react";
import { WeddingDatesContext } from "@/context/weddingDatesContext";

export function useWeddingDates() {
  const value = useContext(WeddingDatesContext);
  if (!value) {
    throw new Error("useWeddingDates must be used within WeddingDatesProvider");
  }
  return value;
}
