import { PROXIMOS_PASOS } from "./data";
import { ArrowRight } from "lucide-react";

export function ProximosPasosSection() {
  return (
    <section id="pasos" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Próximos Pasos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Acciones inmediatas
          </h2>
        </div>

        <div className="space-y-3 stagger-children mb-16">
          {PROXIMOS_PASOS.map((p, i) => (
            <div
              key={i}
              className="scroll-reveal flex items-start gap-4 bg-card rounded-lg border p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm mb-1">{p.paso}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>Responsable: <span className="font-medium text-foreground">{p.responsable}</span></span>
                  <span>Plazo: <span className="font-medium text-foreground">{p.plazo}</span></span>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                p.urgencia === "alta" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {p.urgencia}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="scroll-reveal rounded-xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(352 88% 43%) 0%, hsl(0 100% 27%) 100%)" }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Documento Confidencial</p>
          <p className="font-bold text-lg mb-1">SYSDE Internacional Inc.</p>
          <p className="text-white/70 text-sm">Plan de Implementación SAF+ Core System Solution — Grupo Unicomer</p>
          <p className="text-white/50 text-xs mt-4">© 2026 SYSDE Internacional Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
}
