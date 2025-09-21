const COLOR_SWATCHES = [
  "#FFE56E",
  "#68D2C6",
  "#F9A2B5",
  "#B59DFF",
  "#F5C89E",
  "#FFFFFF",
];

export default function SectionCodigoVestimenta() {
  return (
    <section
      id="sectionCodigoVestimenta"
      className="relative min-h-screen snap-start bg-[var(--brand-cafe)]/75 text-[var(--paper)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(63,33,17,0.38),_rgba(45,24,12,0.55)_55%,_rgba(27,15,7,0.7)_100%)]" aria-hidden />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 py-20 md:py-24 lg:py-28">
        <img
          src="/vestimenta/vestimenta.png"
          alt="Moño y zapato"
          className="h-40 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
        />

        <h2 className="mt-10 text-center text-3xl md:text-4xl tracking-[0.3em] text-[var(--brand-caramel)]">
          CÓDIGO DE VESTIMENTA
        </h2>

        <p className="mt-6 text-center text-[8vw] md:text-4xl font-halimum text-[var(--paper)]/95">
          Formal, Elegante, Espectacular
        </p>

        <p className="mt-6 max-w-3xl text-center text-sm md:text-base tracking-wide text-[var(--paper)]/85">
          Algunos colores se han destinado con cariño a personas únicas en nuestra historia, agradecemos no usarlos la noche del evento.
        </p>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {COLOR_SWATCHES.slice(0, 5).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="h-12 w-12 rounded-full border border-white/30 shadow-[0_8px_15px_rgba(0,0,0,0.25)]"
              />
            ))}
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-12 w-12 items-start justify-center">
              <span
                style={{ backgroundColor: COLOR_SWATCHES[5] }}
                className="h-12 w-12 rounded-full border border-white/40 shadow-[0_8px_15px_rgba(0,0,0,0.25)]"
              />
            </div>
            <p className="text-left md:text-center text-[6vw] md:text-4xl font-halimum text-[var(--paper)]/90 leading-tight">
              El blanco<br/>brilla sólo para<br/>la novia
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <DressCard
            title="Para las chicas"
            description="Vestidos largos, conjuntos elegantes o jumpsuits glamorosos en tonos cálidos, joyería sutil y tacones o sandalias de vestir."
            image="/vestimenta/chicas.png"
          />
          <DressCard
            title="Para los chicos"
            description="Suit o blazer con camisa de vestir, pantalón de tela y zapatos formales. Añade un toque de color con corbata o pañuelo."
            image="/vestimenta/chicos.png"
          />
        </div>

        <img
          src="/vestimenta/bebidas.png"
          alt="Brindis"
          className="mt-14 h-36 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
        />

        <p className="mt-6 text-center text-2xl tracking-[0.3em] text-[var(--brand-caramel)]">
          EVENTO SÓLO PARA
        </p>
        <p className="mt-3 text-center text-[8vw] md:text-4xl font-halimum text-[var(--brand-cream)]/95">
          Adultos
        </p>
      </div>
    </section>
  );
}

function DressCard({ title, description, image }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-[rgba(41,19,8,0.55)] px-8 py-10 text-center shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
      <img
        src={image}
        alt={title}
        className="h-32 w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
      />
      <h3 className="text-lg uppercase tracking-[0.3em] text-[var(--brand-caramel)]">
        {title}
      </h3>
      <p className="text-center text-sm md:text-base text-[var(--paper)]/85 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
