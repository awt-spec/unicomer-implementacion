import { useState } from "react";
import { ENTREGABLES } from "./data";
import { FileText, CheckCircle2 } from "lucide-react";

const FASES_FILTER = ["Todos", "I. Planificación", "II. Build", "III. Testing", "IV. Go-Live", "V. Soporte"];

const faseColor: Record<string, string> = {
  "I. Planificación": "bg-primary/10 text-primary",
  "II. Build": "bg-amber-50 text-amber-600",
  "III. Testing": "bg-sky-50 text-sky-600",
  "IV. Go-Live": "bg-emerald-50 text-emerald-600",
  "V. Soporte": "bg-violet-50 text-violet-600",
};

export function EntregablesSection() {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? ENTREGABLES : ENTREGABLES.filter((e) => e.fase === filter);

  return (
    <section id="entregables" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Entregables</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            14 Entregables Comprometidos
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Todos confirmados como incluidos en la propuesta de SYSDE.
          </p>
        </div>

        {/* Filters */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-8">
          {FASES_FILTER.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all active:scale-95 ${
                filter === f
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground hover:text-foreground border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-3 stagger-children">
          {filtered.map((e) => (
            <div
              key={e.num}
              className="scroll-reveal group bg-card rounded-lg border p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-muted-foreground tabular-nums">{e.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-semibold text-foreground text-sm">{e.nombre}</h4>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${faseColor[e.fase] || "bg-muted text-muted-foreground"}`}>
                      {e.fase}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <FileText size={11} />
                      {e.formato}
                    </span>
                    <span>⏱ {e.timing}</span>
                  </div>
                </div>
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
