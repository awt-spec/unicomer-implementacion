import { useState } from "react";
import { FASES, ENTREGABLES } from "./data";
import { ChevronRight, Users, Shield, FileText, CheckCircle2 } from "lucide-react";
import { HondurasCronograma } from "./HondurasCronograma";

const ownershipColor: Record<string, string> = {
  "100% SYSDE": "bg-primary/10 text-primary border-primary/20",
  "50% SYSDE / 50% Unicomer": "bg-amber-500/10 text-amber-600 border-amber-300",
  "Unicomer + soporte activo ilimitado SYSDE": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const barColors: Record<number, string> = {
  1: "from-primary to-primary/70",
  2: "from-amber-500 to-amber-400",
  3: "from-sky-500 to-sky-400",
  4: "from-violet-500 to-violet-400",
  5: "from-emerald-500 to-emerald-400",
  6: "from-teal-500 to-teal-400",
};

const positions: Record<number, [number, number]> = {
  1: [0, 2],
  2: [2, 3],
  3: [3, 3.7],
  4: [3.7, 4.7],
  5: [4.7, 5.2],
  6: [5.2, 6],
};

const TOTAL = 6;
const YEAR_LABELS = ["Año 1", "Año 2", "Año 3", "Año 3.5", "Año 4", "Año 4.5", "Año 5"];

// Cada país pasa por todas las etapas del ciclo de implementación
const ALL_ENTREGABLE_PHASES = ["I. Planificación", "II. Build", "III. Testing", "IV. Go-Live", "V. Soporte"];
const FASE_ENTREGABLES: Record<number, string[]> = {
  1: ALL_ENTREGABLE_PHASES,
  2: ALL_ENTREGABLE_PHASES,
  3: ALL_ENTREGABLE_PHASES,
  4: ALL_ENTREGABLE_PHASES,
  5: ALL_ENTREGABLE_PHASES,
  6: ALL_ENTREGABLE_PHASES,
};

const faseEntregableColor: Record<string, string> = {
  "I. Planificación": "bg-primary/10 text-primary",
  "II. Build": "bg-amber-50 text-amber-600",
  "III. Testing": "bg-sky-50 text-sky-600",
  "IV. Go-Live": "bg-emerald-50 text-emerald-600",
  "V. Soporte": "bg-violet-50 text-violet-600",
};

export function TimelineSection() {
  const [selected, setSelected] = useState<number>(1);
  const [showEntregables, setShowEntregables] = useState(false);
  const selectedFase = FASES.find((f) => f.num === selected)!;
  
  const relevantEntregables = ENTREGABLES.filter(e => 
    FASE_ENTREGABLES[selected]?.includes(e.fase)
  );

  return (
    <section id="timeline" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Plan de Fases</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Roadmap de Implementación — ~5 Años
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-2xl">
            El roadmap sigue un modelo progresivo de transferencia de conocimiento: de 100% SYSDE a 100% Unicomer.
            Haz clic en una fase para ver el detalle y los entregables asociados.
          </p>
        </div>

        {/* Interactive Gantt */}
        <div className="scroll-reveal mb-8">
          <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Year labels */}
              <div className="flex text-xs text-muted-foreground mb-4 pl-48 md:pl-56">
                {YEAR_LABELS.map((y) => (
                  <div key={y} className="flex-1 text-center font-medium">{y}</div>
                ))}
              </div>

              {/* Gantt bars */}
              <div className="space-y-2">
                {FASES.map((fase) => {
                  const [start, end] = positions[fase.num];
                  const isSelected = selected === fase.num;

                  return (
                    <button
                      key={fase.num}
                      onClick={() => { setSelected(fase.num); setShowEntregables(false); }}
                      className={`flex items-center w-full group transition-all duration-200 rounded-lg px-2 py-2 active:scale-[0.995] ${
                        isSelected ? "bg-primary/5" : "hover:bg-muted/50"
                      }`}
                    >
                      <span className={`text-sm font-medium w-46 md:w-54 shrink-0 text-left pr-3 truncate transition-colors ${
                        isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        <span className="font-bold">F{fase.num}.</span> {fase.nombre.split("—")[0].trim()}
                      </span>
                      <div className="flex-1 relative h-10">
                        <div className="absolute inset-0 flex">
                          {YEAR_LABELS.map((_, i) => (
                            <div key={i} className="flex-1 border-l border-dashed border-border/40 first:border-l-0" />
                          ))}
                        </div>
                        <div
                          className={`absolute top-1 h-8 rounded-lg bg-gradient-to-r ${barColors[fase.num]} transition-all duration-300 flex items-center justify-center cursor-pointer ${
                            isSelected
                              ? "shadow-lg ring-2 ring-offset-1 ring-primary/30 scale-y-110"
                              : "opacity-70 group-hover:opacity-100"
                          }`}
                          style={{
                            left: `${(start / TOTAL) * 100}%`,
                            width: `${((end - start) / TOTAL) * 100}%`,
                          }}
                        >
                          <span className="text-white text-[10px] font-bold drop-shadow-sm whitespace-nowrap px-2">
                            {fase.periodo}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="scroll-reveal">
          {selected === 1 ? (
            <HondurasCronograma />
          ) : (
          <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${barColors[selected]} p-6 md:p-8`}>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">Fase {selectedFase.num} · {selectedFase.periodo}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedFase.nombre}
                  </h3>
                </div>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {selectedFase.ownership}
                </span>
              </div>
              
              {/* Tab toggle */}
              <div className="flex gap-2 mt-5">
                <button
                  onClick={() => setShowEntregables(false)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all active:scale-95 ${
                    !showEntregables ? "bg-white text-foreground" : "bg-white/20 text-white border border-white/20 hover:bg-white/30"
                  }`}
                >
                  Detalle de Fase
                </button>
                <button
                  onClick={() => setShowEntregables(true)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all active:scale-95 flex items-center gap-1.5 ${
                    showEntregables ? "bg-white text-foreground" : "bg-white/20 text-white border border-white/20 hover:bg-white/30"
                  }`}
                >
                  <FileText size={12} />
                  Entregables ({relevantEntregables.length})
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {!showEntregables ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Activities */}
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Users size={14} className="text-primary" />
                      Actividades Clave
                    </h4>
                    <ul className="space-y-3">
                      {selectedFase.actividades.map((act, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group">
                          <ChevronRight size={14} className="text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          <span className="group-hover:text-foreground transition-colors">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ownership model */}
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Shield size={14} className="text-primary" />
                      Modelo de Ownership
                    </h4>
                    <div className={`rounded-xl border p-5 ${ownershipColor[selectedFase.ownership] || "bg-muted/50 text-muted-foreground border-border"}`}>
                      <p className="font-bold text-sm mb-2">{selectedFase.ownership}</p>
                      <p className="text-xs opacity-80 leading-relaxed">
                        {selectedFase.num === 1
                          ? "Implementación liderada completamente por SYSDE con involucramiento intensivo del equipo Unicomer para transferencia de conocimiento."
                          : selectedFase.num === 2
                          ? "Modelo compartido donde Unicomer incrementa su propiedad operativa y técnica bajo supervisión de SYSDE."
                          : "Implementación liderada por Unicomer con soporte activo ilimitado por parte de SYSDE en todas las áreas necesarias."}
                      </p>
                    </div>

                    {/* Transfer bar */}
                    <div className="mt-6">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">Nivel de Transferencia</p>
                      <div className="h-3 bg-muted rounded-full overflow-hidden flex">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${selectedFase.num === 1 ? 100 : selectedFase.num === 2 ? 50 : 20}%` }}
                        />
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${selectedFase.num === 1 ? 0 : selectedFase.num === 2 ? 50 : 80}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>SYSDE</span>
                        <span>Unicomer</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Entregables tab */
                <div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relevantEntregables.map((e) => (
                      <div
                        key={e.num}
                        className="group bg-muted/30 rounded-lg border p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <span className="text-[10px] font-bold text-muted-foreground tabular-nums">{e.num}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h4 className="font-semibold text-foreground text-sm">{e.nombre}</h4>
                            </div>
                            <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1.5 ${faseEntregableColor[e.fase] || "bg-muted text-muted-foreground"}`}>
                              {e.fase}
                            </span>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <FileText size={10} />
                                {e.formato}
                              </span>
                              <span>⏱ {e.timing}</span>
                            </div>
                          </div>
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Phase navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button
                  onClick={() => { setSelected(Math.max(1, selected - 1)); setShowEntregables(false); }}
                  disabled={selected === 1}
                  className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors active:scale-95"
                >
                  ← Fase anterior
                </button>
                <div className="flex gap-1.5">
                  {FASES.map((f) => (
                    <button
                      key={f.num}
                      onClick={() => { setSelected(f.num); setShowEntregables(false); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        f.num === selected ? "bg-primary scale-125" : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => { setSelected(Math.min(6, selected + 1)); setShowEntregables(false); }}
                  disabled={selected === 6}
                  className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors active:scale-95"
                >
                  Fase siguiente →
                </button>
              </div>
            </div>
           </div>
          )}
        </div>
      </div>
    </section>
  );
}
