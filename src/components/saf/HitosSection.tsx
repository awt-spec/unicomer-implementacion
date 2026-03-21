import { HITOS } from "./data";
import { Flag, Calendar, User, CheckCircle } from "lucide-react";

export function HitosSection() {
  return (
    <section id="hitos" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Hitos Principales</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Puntos de control clave
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 stagger-children">
          {HITOS.map((h, i) => (
            <div
              key={h.nombre}
              className="scroll-reveal bg-card rounded-lg border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Flag size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-snug">{h.nombre}</h4>
                  <span className="text-xs text-primary font-semibold">Hito {i + 1}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={12} />
                  <span>Período: <span className="text-foreground font-medium">{h.mes}</span></span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={12} />
                  <span>Responsable: <span className="text-foreground font-medium">{h.responsable}</span></span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle size={12} className="mt-0.5 shrink-0" />
                  <span>Criterio: <span className="text-foreground font-medium">{h.criterio}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
