import { EQUIPO_SYSDE } from "./data";

const PAIS_FLAG: Record<string, string> = {
  "México": "🇲🇽", "Costa Rica": "🇨🇷", "Colombia": "🇨🇴", "Bolivia": "🇧🇴",
  "Argentina": "🇦🇷", "Perú": "🇵🇪",
};

function TeamCard({ nombre, rol, iniciales, experiencia, dedicacion, pais }: {
  nombre: string; rol: string; iniciales: string; experiencia?: string; dedicacion?: string; pais?: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/60 transition-colors">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-primary text-primary-foreground">
        {iniciales}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-foreground text-sm truncate">{nombre}</p>
        <p className="text-muted-foreground text-xs">{rol}</p>
      </div>
      <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs text-muted-foreground">
        {experiencia && <span>{experiencia}</span>}
        {dedicacion && (
          <span className={`font-semibold ${dedicacion === "100%" ? "text-emerald-600" : "text-amber-600"}`}>
            {dedicacion}
          </span>
        )}
        {pais && <span>{PAIS_FLAG[pais] || ""} {pais}</span>}
      </div>
    </div>
  );
}

export function EquipoSection() {
  return (
    <section id="equipo" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Equipo de Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Equipo SYSDE
          </h2>
          <p className="text-muted-foreground mt-2">{EQUIPO_SYSDE.length} profesionales dedicados</p>
        </div>

        <div className="scroll-reveal">
          <div className="bg-card rounded-lg border divide-y">
            {EQUIPO_SYSDE.map((m) => (
              <TeamCard key={m.nombre} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
