import { FASES, PAISES } from "./data";

const faseColors: Record<number, { bg: string; border: string; dot: string }> = {
  1: { bg: "bg-primary/5", border: "border-primary/20", dot: "bg-primary" },
  2: { bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
  3: { bg: "bg-sky-50", border: "border-sky-200", dot: "bg-sky-500" },
  4: { bg: "bg-violet-50", border: "border-violet-200", dot: "bg-violet-500" },
  5: { bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
  6: { bg: "bg-teal-50", border: "border-teal-200", dot: "bg-teal-500" },
};

export function PaisesSection() {
  return (
    <section id="paises" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Cobertura Geográfica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            9 Países en 6 Fases — ~5 Años
          </h2>
        </div>

        <div className="space-y-8">
          {FASES.map((fase) => {
            const paisesFase = PAISES.filter((p) => p.fase === `Fase ${fase.num}`);
            const colors = faseColors[fase.num] || faseColors[1];

            return (
              <div key={fase.num} className="scroll-reveal">
                {/* Phase header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${colors.dot} shrink-0`} />
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Fase {fase.num} — {fase.periodo}
                    </h3>
                    <p className="text-xs text-muted-foreground">{fase.ownership}</p>
                  </div>
                </div>

                {/* Country cards */}
                <div className={`grid ${paisesFase.length === 1 ? "grid-cols-1 max-w-md" : paisesFase.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-2xl" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} gap-4 ml-6 pl-4 border-l-2 ${colors.border}`}>
                  {paisesFase.map((p) => (
                    <div
                      key={p.pais}
                      className={`${colors.bg} rounded-xl border ${colors.border} p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{p.bandera}</span>
                        <h4 className="font-bold text-foreground text-lg">{p.pais}</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Regulador</span>
                          <span className="font-medium text-foreground">{p.regulador}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Idioma</span>
                          <span className="font-medium text-foreground">{p.idioma}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
