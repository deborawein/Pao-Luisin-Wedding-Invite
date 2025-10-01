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
          className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
        />

        <h2 className="mt-10 text-center text-3xl md:text-[2.5rem] tracking-[0.28em] text-[var(--brand-caramel)]">
          CÓDIGO DE VESTIMENTA
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4 text-center text-[6.5vw] md:text-[3.25rem] font-halimum text-[var(--paper)]/95 leading-tight">
          <span>Formal</span>
          <span>Elegante</span>
          <span>Espectacular</span>
        </div>

        <p className="mt-12 max-w-3xl text-center text-base md:text-lg tracking-[0.18em] text-[var(--paper)]/85 leading-relaxed">
          Algunos colores se han destinado con cariño a personas únicas en nuestra historia, agradecemos no usarlos la noche del evento.
        </p>

        <div className="mt-12 flex flex-col items-center gap-12">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
            {COLOR_SWATCHES.slice(0, 5).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="h-12 w-12 rounded-full border border-white/30 shadow-[0_8px_15px_rgba(0,0,0,0.25)]"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[22px] border-4 border-[rgba(139,94,50,0.85)] bg-[radial-gradient(circle,_rgba(206,165,120,0.45)_0%,_rgba(170,130,85,0.55)_55%,_rgba(114,78,39,0.75)_100%)] shadow-[0_18px_35px_rgba(33,17,5,0.35)]">
              <span className="h-12 w-12 rounded-full border border-white/60 bg-white shadow-[0_6px_12px_rgba(0,0,0,0.25)]" />
            </div>

            <div className="flex flex-col items-center gap-3 text-center text-[6.5vw] md:text-[3rem] font-halimum text-[var(--paper)]/90 leading-tight">
              <span>El blanco</span>
              <span>brilla sólo para</span>
              <span>Pao</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          <DressCard
            title="Para las chicas"
            description="Se recomienda asistir con vestidos largos, conjuntos elegantes o enterizos glamorosos, acompañados de tacones o sasndalias de vestir."
            image="/vestimenta/chicas.png"
          />
          <DressCard
            title="Para los chicos"
            description="Se recomienda un estilo casual con un toque sofisticado, con blazer, camisa de vestir, pantalón de tela y zapatos formales."
            image="/vestimenta/chicos.png"
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <img
            src="/vestimenta/bebidas.png"
            alt="Brindis"
            className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
          />
          <div className="text-center">
            <p className="text-2xl tracking-[0.28em] text-[var(--brand-caramel)]">
              EVENTO SÓLO PARA
            </p>
            <p className="mt-4 text-[7.2vw] md:text-[3.5rem] font-halimum text-[var(--brand-cream)]/95">
              Adultos
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <img
            src="/vestimenta/regalo.png"
            alt="Ilustración de sobres"
            className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.28)]"
            loading="lazy"
          />
          <p className="text-xl md:text-[1.6rem] uppercase tracking-[0.26em] text-[var(--brand-caramel)]">
            El mejor regalo será disfrutar con ustedes, cualquier detalle será recibido con cariño
          </p>
          <p className="mt-4 text-[7.2vw] md:text-[3.5rem] font-halimum text-[var(--brand-cream)]/95">
            Lluvia de sobres
          </p>
        </div>

      </div>
    </section>
  );
}

function DressCard({ title, description, image }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl bg-[rgba(41,19,8,0.55)] px-9 py-12 text-center shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
      <img
        src={image}
        alt={title}
        className="h-32 w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
      />
      <h3 className="text-xl md:text-[1.6rem] uppercase tracking-[0.26em] text-[var(--brand-caramel)]">
        {title}
      </h3>
      <p className="text-center text-base md:text-lg text-[var(--paper)]/85 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
