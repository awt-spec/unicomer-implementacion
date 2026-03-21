const HERRAMIENTAS = [
  { nombre: "Jira", categoria: "Gestión de Proyecto" },
  { nombre: "Confluence", categoria: "Documentación" },
  { nombre: "Git / Azure DevOps", categoria: "Control de Versiones" },
  { nombre: "Teams / Slack", categoria: "Comunicación" },
  { nombre: "Power BI", categoria: "Reportería PMO" },
  { nombre: "SonarQube", categoria: "Calidad de Código" },
];
import { GitBranch, FileText, Headphones, BarChart3, MessageSquare, Code } from "lucide-react";

const ICON_MAP: Record<string, typeof GitBranch> = {
  "Gestión de Proyecto": BarChart3,
  "Documentación": FileText,
  "Control de Versiones": GitBranch,
  "Comunicación": MessageSquare,
  "Reportería PMO": BarChart3,
  "Calidad de Código": Code,
};

const SOPORTE = [
  { nivel: "L1", titulo: "Mesa de Ayuda", desc: "Primer contacto, registro de tickets, resolución de FAQ y problemas conocidos.", color: "bg-primary/10 text-primary" },
  { nivel: "L2", titulo: "Soporte Especializado", desc: "Análisis funcional, configuración avanzada y resolución de incidentes complejos.", color: "bg-sysde-gold/20 text-sysde-gold" },
  { nivel: "L3", titulo: "Desarrollo / Core", desc: "Corrección de defectos, parches, actualizaciones de producto y cambios de arquitectura.", color: "bg-blue-100 text-blue-700" },
];

export function MetodologiaSection() {
  return (
    <section id="metodologia" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodología & Herramientas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Marco de gobierno del proyecto
          </h2>
        </div>

        {/* Herramientas PMO */}
        <div className="scroll-reveal mb-12">
          <h3 className="font-bold text-foreground mb-4">Herramientas PMO</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {HERRAMIENTAS.map((h) => {
              const Icon = ICON_MAP[h.categoria] || FileText;
              return (
                <div key={h.nombre} className="scroll-reveal bg-card rounded-lg border p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                  <Icon size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{h.nombre}</p>
                    <p className="text-muted-foreground text-xs">{h.categoria}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modelo de soporte */}
        <div className="scroll-reveal">
          <h3 className="font-bold text-foreground mb-4">Modelo de Soporte</h3>
          <div className="grid md:grid-cols-3 gap-4 stagger-children">
            {SOPORTE.map((s) => (
              <div key={s.nivel} className="scroll-reveal bg-card rounded-lg border p-5">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold mb-3 ${s.color}`}>
                  {s.nivel}
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{s.titulo}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
