import { useState } from "react";
import { FASES } from "./data";
import { ChevronDown } from "lucide-react";

const ownershipColor: Record<string, string> = {
  "100% SYSDE": "bg-primary/10 text-primary",
  "50% SYSDE / 50% Unicomer": "bg-amber-500/15 text-amber-600",
  "Unicomer (soporte bajo demanda)": "bg-emerald-100 text-emerald-700",
  "Unicomer (soporte limitado)": "bg-emerald-100 text-emerald-700",
  "Unicomer": "bg-emerald-200 text-emerald-800",
};

export function TimelineSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Plan de Fases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Roadmap de Implementación — ~5 Años
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-2xl">
            El roadmap sigue un modelo progresivo de transferencia de conocimiento: de 100% SYSDE a 100% Unicomer. 
            La transición entre fases está sujeta a un <strong className="text-foreground">Go/No-Go Decision Gate</strong> formal.
          </p>
        </div>

        {/* Gantt mini - 5 years */}
        <div className="scroll-reveal mb-14 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex text-[10px] text-muted-foreground mb-2 pl-44">
              {["Año 1", "Año 2", "Año 3", "Año 3.5", "Año 4", "Año 4.5", "Año 5"].map((y) => (
                <div key={y} className="flex-1 text-center">{y}</div>
              ))}
            </div>
            {FASES.map((fase) => {
              const positions: Record<number, [number, number]> = {
                1: [0, 2],    // Año 1-2
                2: [2, 3],    // Año 3
                3: [3, 3.7],  // Año 3.5
                4: [3.7, 4.7],// Año 4
                5: [4.7, 5.2],// Año 4.5
                6: [5.2, 6],  // Año 5
              };
              const [start, end] = positions[fase.num] || [0, 1];
              const total = 6;
              return (
                <div key={fase.num} className="flex items-center mb-1.5">
                  <span className="text-xs text-foreground font-medium w-44 shrink-0 truncate pr-2">
                    F{fase.num}. {fase.nombre.split("—")[0].trim()}
                  </span>
                  <div className="flex-1 relative h-5">
                    <div
                      className="absolute top-0.5 h-4 rounded-sm bg-primary/80 hover:bg-primary transition-colors"
                      style={{
                        left: `${(start / total) * 100}%`,
                        width: `${((end - start) / total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-0">
            {FASES.map((fase) => {
              const isOpen = expanded === fase.num;
              return (
                <div key={fase.num} className="scroll-reveal relative pl-14 md:pl-16 pb-8">
                  <div className="absolute left-3.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background timeline-dot" />

                  <button
                    onClick={() => setExpanded(isOpen ? null : fase.num)}
                    className="w-full text-left group active:scale-[0.99] transition-transform"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="text-xs text-primary font-semibold">{fase.periodo}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${ownershipColor[fase.ownership] || "bg-muted text-muted-foreground"}`}>
                            {fase.ownership}
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          Fase {fase.num}: {fase.nombre}
                        </h4>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-1.5">
                      {fase.actividades.map((act) => (
                        <li key={act} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Go/No-Go callout */}
        <div className="scroll-reveal mt-10 bg-primary/5 border border-primary/20 rounded-lg p-5">
          <h4 className="font-bold text-foreground text-sm mb-2">⚠️ Go/No-Go Decision Gate</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            La transición de la Fase 1 (País Piloto) a las fases siguientes constituye un gate formal de decisión Go/No-Go. 
            Grupo Unicomer se reserva el derecho de validar el desempeño y decidir unilateralmente si proceder. 
            Los compromisos financieros se activan exclusivamente país por país, al momento del Go-Live de cada instancia.
          </p>
        </div>
      </div>
    </section>
  );
}
