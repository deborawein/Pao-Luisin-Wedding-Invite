import { useCallback, useEffect, useRef, useState } from "react";

export function useCarousel(images, intervalMs) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const clearRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoRotate = useCallback(() => {
    clearRotation();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, intervalMs);
  }, [clearRotation, images.length, intervalMs]);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % images.length);
    startAutoRotate();
  }, [images.length, startAutoRotate]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
    startAutoRotate();
  }, [images.length, startAutoRotate]);

  useEffect(() => {
    startAutoRotate();
    return clearRotation;
  }, [startAutoRotate, clearRotation]);

  return { currentIndex, goToNext, goToPrevious };
}
