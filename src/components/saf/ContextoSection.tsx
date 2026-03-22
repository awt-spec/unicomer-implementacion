import { SISTEMAS_ACTUALES, PAISES } from "./data";
import { Info } from "lucide-react";

// Map sistema name to flags from PAISES data
function getFlagsForSistema(paises: string): string {
  const flags: string[] = [];
  PAISES.forEach((p) => {
    if (paises.includes(p.pais)) {
      flags.push(p.bandera);
    }
  });
  // Handle edge cases
  if (paises.includes("Trinidad")) flags.push(PAISES.find(p => p.pais === "Trinidad y Tobago")?.bandera || "🇹🇹");
  if (paises.includes("Guyana") && !flags.includes("🇬🇾")) flags.push("🇬🇾");
  // Deduplicate
  return [...new Set(flags)].join(" ");
}

export function ContextoSection() {
  return (
    <section id="contexto" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Contexto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Situación Actual de Unicomer
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Grupo Unicomer opera con 7 sistemas core independientes. Esta fragmentación genera duplicación de desarrollos, 
            reglas de negocio inconsistentes y costos elevados de soporte.
          </p>
        </div>

        <div className="scroll-reveal space-y-3 stagger-children">
          {SISTEMAS_ACTUALES.map((s) => {
            const isSysde = s.sistema === "Sysde (legado)";
            const flags = getFlagsForSistema(s.paises);
            return (
              <div
                key={s.sistema}
                className={`scroll-reveal group bg-card rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  isSysde ? "border-primary/30 ring-1 ring-primary/10" : ""
                }`}
              >
                <div className="text-3xl shrink-0 flex gap-1">
                  {flags}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-foreground">{s.sistema}</h4>
                    {isSysde && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        Cliente actual
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{s.paises}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground tabular-nums">{s.creditos}</p>
                  <p className="text-xs text-muted-foreground">créditos vigentes</p>
                </div>
                <div className="sm:w-56 shrink-0">
                  <p className="text-xs text-muted-foreground">{s.situacion}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about SYSDE clients */}
        <div className="scroll-reveal mt-8 flex items-start gap-3 text-sm text-muted-foreground">
          <Info size={16} className="text-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            El Salvador y Nicaragua ya operan sobre plataforma Sysde, lo que convierte su migración a SAF+ en una 
            evolución controlada con menor riesgo y tiempo de implementación.
          </p>
        </div>
      </div>
    </section>
  );
}
