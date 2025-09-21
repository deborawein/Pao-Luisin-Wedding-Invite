export default function SectionQuoteVideo() {
  return (
    <section
      id="sectionQuoteVideo"
      className="relative min-h-screen grid place-items-center text-[var(--brand-cream)]
      "
    >
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/quoteVideo.mp4"
        poster="/quoteVideo.jpg"   // <-- from /public
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark overlay ABOVE the video */}
      <div className="absolute inset-0 z-0 bg-[var(--brand-deep)]/60" />

      {/* Centered quote ABOVE the overlay */}
      <p className="relative z-0 px-6 max-w-3xl text-center text-2xl md:text-5xl leading-relaxed font-light md:font-thin italic">
        “La distancia fue la prueba, <br className="hidden sm:block" />
        el amor fue la respuesta”
      </p>
    </section>
  );
}