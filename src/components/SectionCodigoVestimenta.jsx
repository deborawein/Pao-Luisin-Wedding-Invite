const COLOR_SWATCHES = [
  "#FFE56E",
  "#68D2C6",
  "#F9A2B5",
  "#B59DFF",
  "#FFFFFF",
];

export default function SectionCodigoVestimenta() {
  return (
    <section
      id="sectionCodigoVestimenta"
      className="relative min-h-screen snap-start bg-[var(--brand-cream)]/70 text-[var(--paper)]"
    >
        <div className="absolute inset-0 -z-30 bg-[var(--brand-terra)]" />


      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-6 py-20 md:py-24 lg:py-28">
        <img
          src="/vestimenta/vestimenta.png"
          alt="Moño y zapato"
          className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
        />

        <h2 className="mt-16 text-center text-3xl md:text-[2.5rem] tracking-[0.28em] text-[var(--brand-cafe)]">
          CÓDIGO DE VESTIMENTA
        </h2>

        <div className="mt-16 flex flex-col items-center gap-4 text-center text-[6.5vw] md:text-[3.25rem] font-halimum text-[var(--paper)] leading-tight drop-shadow-[0_3px_12px_rgba(15,51,28,0.25)]">
          <span>Formal</span>
          <span>Elegante</span>
          <span>Espectacular</span>
        </div>

        <p className="mt-16 max-w-3xl text-center text-base md:text-lg tracking-[0.18em] text-[var(--brand-cafe)]/80 leading-relaxed drop-shadow-[0_2px_10px_rgba(15,51,28,0.2)]">
          Algunos colores se han destinado con cariño a personas únicas en nuestra historia, agradecemos no usarlos la noche del evento.
        </p>

        <div className="mt-16 flex flex-col items-center gap-12">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
            {COLOR_SWATCHES.slice(0, 4).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="h-12 w-12 rounded-full border border-[var(--brand-cream)]/30 shadow-[0_8px_15px_rgba(0,0,0,0.25)]"
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-5 mt-6">
            <div className="relative flex h-24 w-24 items-center justify-center  bg-[radial-gradient(circle,_rgba(240,201,135,1)_0%,_rgba(240,201,135,0)_75%)]">
              <span className="h-12 w-12 rounded-full border border-[var(--brand-cream)]/30 bg-white shadow-[0_6px_12px_rgba(15,51,28,0.2)]" />
            </div>

            <div className="flex flex-col items-center text-center text-[6.5vw] md:text-[3rem] font-halimum text-[var(--paper)] drop-shadow-[0_4px_14px_rgba(15,51,28,0.3)]">
              <span>El blanco</span>
              <span>brilla para</span>
              <span>Pao</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14 backdrop-blur-xs   ">
          <DressCard
            title="Para las chicas"
            description="Se recomienda asistir con vestidos largos, conjuntos elegantes o enterizos glamorosos, acompañados de tacones o sandalias de vestir."
            image="/vestimenta/chicas.png"
          />
          <DressCard
            title="Para los chicos"
            description="Se recomienda un estilo casual con un toque sofisticado, con blazer, camisa de vestir, pantalón de tela y zapatos formales."
            image="/vestimenta/chicos.png"
          />
        </div>

        <div className="mt-26 flex flex-col items-center gap-6 text-center">
          <img
            src="/vestimenta/bebidas.png"
            alt="Brindis"
            className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.4)]"
          />
          <div className="mt-6 text-center">
            <p className="text-2xl tracking-[0.28em] text-[var(--brand-cafe)] drop-shadow-[0_2px_8px_rgba(15,51,28,0.2)]">
              EVENTO SOLO PARA
            </p>
            <p className="mt-4 text-[7.2vw] md:text-[3.5rem] font-halimum text-[var(--brand-caramel)] drop-shadow-[0_4px_14px_rgba(15,51,28,0.3)]">
              Adultos
            </p>
          </div>
        </div>

        <div className="mt-26 flex flex-col items-center gap-6 text-center">
          <img
            src="/vestimenta/regalo.png"
            alt="Ilustración de sobres"
            className="h-46 w-auto object-contain drop-shadow-[0_18px_35px_rgba(33,17,5,0.28)]"
            loading="lazy"
          />
          <p className="mt-6 text-2xl uppercase tracking-[0.28em] text-[var(--brand-cafe)] drop-shadow-[0_2px_10px_rgba(15,51,28,0.25)]">
            El mejor regalo será disfrutar con ustedes, cualquier detalle será recibido con cariño
          </p>
          <p className="mt-4 text-[7.2vw] md:text-[3.5rem] font-halimum text-[var(--brand-caramel)] drop-shadow-[0_4px_14px_rgba(15,51,28,0.3)]">
            Lluvia de Sobres
          </p>
        </div>

      </div>
    </section>
  );
}

function DressCard({ title, description, image }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-3xl bg-[var(--brand-cafe)]/55 px-9 py-12 text-center shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
      <img
        src={image}
        alt={title}
        className="h-32 w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
      />
      <h3 className="text-xl md:text-[1.6rem] uppercase tracking-[0.26em] text-[var(--brand-cafe)]">
        {title}
      </h3>
      <p className="text-center text-base md:text-lg text-[var(--paper)]/85 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
