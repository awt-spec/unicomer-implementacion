import { useState } from "react";
import { RIESGOS } from "./data";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export function RiesgosSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="riesgos" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Gestión de Riesgos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Matriz de riesgos del proyecto
          </h2>
        </div>

        <div className="space-y-3 stagger-children">
          {RIESGOS.map((r, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-lg border p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  r.nivel === "ALTO" ? "bg-red-100 text-red-600" :
                  r.nivel === "MEDIO" ? "bg-yellow-100 text-yellow-600" :
                  "bg-green-100 text-green-600"
                }`}>
                  <AlertTriangle size={14} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h4 className="font-semibold text-foreground text-sm">{r.riesgo}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      r.nivel === "ALTO" ? "bg-red-100 text-red-700" :
                      r.nivel === "MEDIO" ? "bg-yellow-100 text-yellow-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {r.nivel}
                    </span>
                  </div>

                  <div className="flex gap-4 text-xs text-muted-foreground mb-2">
                    <span>Probabilidad: <span className="font-medium">{r.probabilidad}</span></span>
                    <span>Impacto: <span className="font-medium">{r.impacto}</span></span>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${
                    hoveredIdx === i ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="flex items-start gap-2 text-xs text-muted-foreground bg-secondary/60 rounded p-3">
                      <ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Mitigación:</strong> {r.mitigacion}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
