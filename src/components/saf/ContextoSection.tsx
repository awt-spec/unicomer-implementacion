import { SISTEMAS_ACTUALES } from "./data";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

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
          {SISTEMAS_ACTUALES.map((s) => (
            <div
              key={s.sistema}
              className={`scroll-reveal group bg-card rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                s.ventaja ? "border-primary/20 bg-primary/[0.02]" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-foreground">{s.sistema}</h4>
                  {s.ventaja && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={10} /> VENTAJA SYSDE
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
          ))}
        </div>

        {/* Advantage callout */}
        <div className="scroll-reveal mt-8 bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-3">
          <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-foreground text-sm mb-1">Ventaja diferencial SYSDE</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              El Salvador (419K créditos) y Nicaragua (79K créditos) ya operan sobre plataforma Sysde. 
              La implementación de SAF+ en estos países es una evolución controlada, no una migración desde cero, 
              reduciendo significativamente el riesgo y el tiempo de implementación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
