import { useState } from "react";
import { PAISES } from "./data";

const FILTROS = ["Todos", "Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5", "Fase 6"];

export function PaisesSection() {
  const [filtro, setFiltro] = useState("Todos");
  const filtered = filtro === "Todos" ? PAISES : PAISES.filter((p) => p.fase === filtro);

  return (
    <section id="paises" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Cobertura Geográfica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            9 Países en 6 Fases — ~5 Años
          </h2>
        </div>

        <div className="scroll-reveal flex flex-wrap gap-2 mb-8">
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 ${
                filtro === f
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground hover:text-foreground border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {filtered.map((p) => (
            <div
              key={p.pais}
              className="scroll-reveal bg-card rounded-lg border p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{p.bandera}</span>
                <div>
                  <h4 className="font-bold text-foreground">{p.pais}</h4>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    p.fase === "Fase 1" ? "bg-primary/10 text-primary" :
                    p.fase === "Fase 2" ? "bg-amber-500/15 text-amber-600" :
                    p.fase === "Fase 3" ? "bg-sky-100 text-sky-700" :
                    p.fase === "Fase 4" ? "bg-violet-100 text-violet-700" :
                    p.fase === "Fase 5" ? "bg-emerald-100 text-emerald-700" :
                    "bg-teal-100 text-teal-700"
                  }`}>
                    {p.fase}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-1.5 text-xs text-muted-foreground">
                <span>Período</span><span className="font-medium text-foreground">{p.periodo}</span>
                <span>Regulador</span><span className="font-medium text-foreground">{p.regulador}</span>
                <span>Idioma</span><span className="font-medium text-foreground">{p.idioma}</span>
                <span>Ownership</span><span className="font-medium text-foreground">{p.ownership}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
