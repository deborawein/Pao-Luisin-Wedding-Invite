// SectionStart.jsx
import Logo from "../assets/logo.svg";

export default function SectionStart() {
    return (
        <section
            id="sectionStart"
            className="relative min-h-[100dvh] -mt-16 pt-16 grid place-items-center bg-cover bg-center text-mainbeige"
            style={{ backgroundImage: "url('/src/assets/cover.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative text-center">
                <img
                    src={Logo}
                    alt="Pao & Luisin"
                    className="w-[min(80vw,680px)] mx-auto"
                />

            </div>

            {/* Bottom text */}
            <div className="absolute bottom-24 w-full">{/* was bottom-22 (not a Tailwind size) */}
                <div className="mx-auto max-w-lg">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                        <div className="flex justify-end">
                            <span className="uppercase tracking-[0.35em] text-sm md:text-base font-light">
                                Sabado
                            </span>
                        </div>
                        <div className="px-4">
                            <div className="flex items-center gap-4">
                                <span className="h-8 w-px bg-white/70" />
                                <span className="text-4xl md:text-5xl font-light leading-none">10</span>
                                <span className="h-8 w-px bg-white/70" />
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <span className="uppercase tracking-[0.35em] text-sm md:text-base font-light">
                                Enero
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
