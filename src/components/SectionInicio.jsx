// SectionInicio.jsx
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";

const CAROUSEL_IMAGES = [
    "/inicio/carrosel1.jpg",
    "/inicio/carrosel2.jpg",
    "/inicio/carrosel3.jpg",
    "/inicio/carrosel4.jpg",
];
const ROTATION_INTERVAL_MS = 2000;

export default function SectionInicio() {
    const [currentImage, setCurrentImage] = useState(0);
    const intervalRef = useRef(null);

    const startAutoRotate = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentImage((index) => (index + 1) % CAROUSEL_IMAGES.length);
        }, ROTATION_INTERVAL_MS);
    }, []);

    const restartAutoRotate = useCallback(() => {
        startAutoRotate();
    }, [startAutoRotate]);

    const goToNextImage = useCallback(() => {
        setCurrentImage((index) => (index + 1) % CAROUSEL_IMAGES.length);
        restartAutoRotate();
    }, [restartAutoRotate]);

    const goToPreviousImage = useCallback(() => {
        setCurrentImage((index) =>
            (index - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
        );
        restartAutoRotate();
    }, [restartAutoRotate]);

    useEffect(() => {
        startAutoRotate();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [startAutoRotate]);

    return (
        <section
            id="sectionInicio"
            className="relative min-h-[100dvh] -mt-16 pt-16 grid place-items-center overflow-hidden text-[var(--brand-cream)]"
        >
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {CAROUSEL_IMAGES.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                            index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ))}
            </div>

            <button
                type="button"
                onClick={goToPreviousImage}
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full  bg-black/20 text-lg font-extralight text-[var(--brand-cream)]  shadow-lg  transition-all hover:bg-black/30 hover:text-black"
                aria-label="Imagem anterior"
            >
                <span aria-hidden="true">&#8249;</span>
            </button>

            <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />

            <div className="relative z-20 text-center">
                <img
                    src={Logo}
                    alt="Pao & Luisin"
                    className="w-[min(80vw,680px)] mx-auto"
                />

            </div>

            {/* Bottom text */}
            <div className="absolute bottom-24 z-20 w-full">{/* was bottom-22 (not a Tailwind size) */}
                <div className="mx-auto max-w-lg">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                        <div className="flex justify-end">
                            <span className="uppercase tracking-[0.35em] text-sm md:text-base font-light">
                                Cúcuta
                            </span>
                        </div>
                        <div className="px-4">
                            <div className="flex items-center gap-4">
                                <span className="h-8 w-px bg-white/70" />
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <span className="uppercase tracking-[0.35em] text-sm md:text-base font-light">
                                Colombia
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full bg-black/20 text-lg font-extralight text-[var(--brand-cream)] shadow-lg transition-all hover:bg-black/20 hover:text-black"
                aria-label="Proxima imagem"
            >
                <span aria-hidden="true">&#8250;</span>
            </button>
        </section>
    );
}
