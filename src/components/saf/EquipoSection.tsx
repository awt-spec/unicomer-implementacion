import { EQUIPO_SYSDE, EQUIPO_UNICOMER } from "./data";

const PAIS_FLAG: Record<string, string> = {
  "México": "🇲🇽", "Costa Rica": "🇨🇷", "Colombia": "🇨🇴", "Bolivia": "🇧🇴",
  "Argentina": "🇦🇷", "Perú": "🇵🇪",
};

function TeamCard({ nombre, rol, iniciales, experiencia, dedicacion, pais, accent }: {
  nombre: string; rol: string; iniciales: string; experiencia?: string; dedicacion?: string; pais?: string; accent: "red" | "gray";
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/60 transition-colors">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
        accent === "red" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      }`}>
        {iniciales}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-foreground text-sm truncate">{nombre}</p>
        <p className="text-muted-foreground text-xs">{rol}</p>
      </div>
      {(experiencia || dedicacion || pais) && (
        <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs text-muted-foreground">
          {experiencia && <span>{experiencia}</span>}
          {dedicacion && (
            <span className={`font-semibold ${dedicacion === "100%" ? "text-emerald-600" : "text-amber-600"}`}>
              {dedicacion}
            </span>
          )}
          {pais && <span>{PAIS_FLAG[pais] || ""} {pais}</span>}
        </div>
      )}
    </div>
  );
}

export function EquipoSection() {
  return (
    <section id="equipo" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Equipo de Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Estructura organizacional
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* SYSDE Team - takes 2 cols */}
          <div className="lg:col-span-2 scroll-reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <h3 className="font-bold text-foreground">Equipo SYSDE</h3>
              <span className="text-xs text-muted-foreground ml-auto">{EQUIPO_SYSDE.length} miembros</span>
            </div>
            <div className="bg-card rounded-lg border divide-y">
              {EQUIPO_SYSDE.map((m) => (
                <TeamCard key={m.nombre} {...m} accent="red" />
              ))}
            </div>
          </div>

          {/* Unicomer Team */}
          <div className="scroll-reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
              <h3 className="font-bold text-foreground">Contraparte Unicomer</h3>
            </div>
            <div className="bg-card rounded-lg border divide-y">
              {EQUIPO_UNICOMER.map((m) => (
                <TeamCard key={m.nombre} {...m} accent="gray" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
