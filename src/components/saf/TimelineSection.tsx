import { useState } from "react";
import { FASES } from "./data";
import { ChevronDown } from "lucide-react";

export function TimelineSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Plan de Fases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Timeline de Implementación
          </h2>
        </div>

        {/* Gantt mini */}
        <div className="scroll-reveal mb-14 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex text-[10px] text-muted-foreground mb-2 pl-36">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className="flex-1 text-center">M{i + 1}</div>
              ))}
            </div>
            {FASES.map((fase) => {
              const match = fase.meses.match(/M(\d+)–M(\d+)/);
              const start = match ? parseInt(match[1]) - 1 : 0;
              const end = match ? parseInt(match[2]) : 24;
              return (
                <div key={fase.num} className="flex items-center mb-1.5">
                  <span className="text-xs text-foreground font-medium w-36 shrink-0 truncate pr-2">
                    F{fase.num}. {fase.nombre}
                  </span>
                  <div className="flex-1 relative h-5">
                    <div
                      className="absolute top-0.5 h-4 rounded-sm bg-primary/80 hover:bg-primary transition-colors"
                      style={{
                        left: `${(start / 24) * 100}%`,
                        width: `${((end - start) / 24) * 100}%`,
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
          {/* Red thread */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-0">
            {FASES.map((fase) => {
              const isOpen = expanded === fase.num;
              return (
                <div key={fase.num} className="scroll-reveal relative pl-14 md:pl-16 pb-8">
                  {/* Dot */}
                  <div className="absolute left-3.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background timeline-dot" />

                  <button
                    onClick={() => setExpanded(isOpen ? null : fase.num)}
                    className="w-full text-left group active:scale-[0.99] transition-transform"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-primary font-semibold">{fase.meses}</span>
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
      </div>
    </section>
  );
}
