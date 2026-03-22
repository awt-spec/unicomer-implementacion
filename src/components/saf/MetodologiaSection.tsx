import { useState } from "react";
import {
  GitBranch, FileText, BarChart3, MessageSquare, Code,
  Zap, Users, RotateCcw, CheckCircle2, Target, ClipboardList,
  ArrowRight, Layers, Calendar, TrendingUp, ShieldCheck
} from "lucide-react";

const HERRAMIENTAS = [
  { nombre: "Jira", categoria: "Gestión de Proyecto" },
  { nombre: "Confluence", categoria: "Documentación" },
  { nombre: "Git / Azure DevOps", categoria: "Control de Versiones" },
  { nombre: "Teams / Slack", categoria: "Comunicación" },
  { nombre: "Power BI", categoria: "Reportería PMO" },
  { nombre: "SonarQube", categoria: "Calidad de Código" },
];

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

const SYSCRUM_FASES = [
  {
    id: "vision",
    nombre: "Visión & Alcance",
    icon: Target,
    desc: "Definición de objetivos del sprint, historias de usuario priorizadas y criterios de aceptación claros.",
    actividades: ["Product Backlog Refinement", "Sprint Planning", "Definición de Done", "Estimación por puntos"],
  },
  {
    id: "sprint",
    nombre: "Sprint Execution",
    icon: Zap,
    desc: "Ciclos iterativos de 2-4 semanas con entregas incrementales de funcionalidad probada y validada.",
    actividades: ["Daily Stand-ups", "Desarrollo iterativo", "Code Review continuo", "Testing integrado"],
  },
  {
    id: "review",
    nombre: "Review & Demo",
    icon: CheckCircle2,
    desc: "Demostración al cliente de los incrementos completados, recopilación de feedback y validación funcional.",
    actividades: ["Sprint Review con stakeholders", "Demo funcional", "Feedback del cliente", "Ajuste de prioridades"],
  },
  {
    id: "retro",
    nombre: "Retrospectiva",
    icon: RotateCcw,
    desc: "Análisis de mejora continua del equipo, identificación de impedimentos y optimización de procesos.",
    actividades: ["Retrospectiva del sprint", "Métricas de velocidad", "Plan de mejora", "Lecciones aprendidas"],
  },
];

const SYSCRUM_PILARES = [
  { icon: Layers, titulo: "Iterativo e Incremental", desc: "Entregas parciales funcionales cada sprint, reduciendo riesgo y acelerando valor." },
  { icon: Users, titulo: "Colaboración Continua", desc: "Participación activa del cliente en cada sprint review para asegurar alineación." },
  { icon: TrendingUp, titulo: "Mejora Continua", desc: "Retrospectivas que optimizan procesos, herramientas y dinámicas del equipo." },
  { icon: ShieldCheck, titulo: "Calidad Integrada", desc: "Testing automatizado y code review como parte del Definition of Done." },
];

export function MetodologiaSection() {
  const [activeFase, setActiveFase] = useState(0);

  return (
    <section id="metodologia" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodología & Herramientas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Marco de gobierno del proyecto
          </h2>
        </div>

        {/* SYSCRUM Methodology */}
        <div className="scroll-reveal mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">SYSCRUM</h3>
              <p className="text-muted-foreground text-xs">"Agile Answers" — Metodología ágil de SYSDE</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">
            SYSCRUM es la adaptación de SYSDE del marco Scrum, diseñada para implementaciones de core bancario.
            Combina sprints iterativos con governance corporativo para entregar valor incremental con control de calidad.
          </p>

          {/* Pilares */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 stagger-children">
            {SYSCRUM_PILARES.map((p) => (
              <div key={p.titulo} className="scroll-reveal bg-card rounded-xl border p-4 group hover:shadow-md transition-all duration-300 hover:border-primary/30">
                <p.icon size={20} className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-foreground text-xs mb-1">{p.titulo}</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Ciclo SYSCRUM interactivo */}
          <div className="bg-card rounded-2xl border overflow-hidden">
            {/* Tabs de fases */}
            <div className="flex border-b">
              {SYSCRUM_FASES.map((fase, i) => {
                const Icon = fase.icon;
                const isActive = activeFase === i;
                return (
                  <button
                    key={fase.id}
                    onClick={() => setActiveFase(i)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-3 text-xs font-semibold transition-all duration-300 relative ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{fase.nombre}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Contenido de la fase activa */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  {(() => {
                    const Icon = SYSCRUM_FASES[activeFase].icon;
                    return <Icon size={24} className="text-primary" />;
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      FASE {activeFase + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{SYSCRUM_FASES[activeFase].nombre}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{SYSCRUM_FASES[activeFase].desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {SYSCRUM_FASES[activeFase].actividades.map((act, i) => (
                  <div key={act} className="flex items-center gap-2 text-xs text-foreground bg-muted/50 rounded-lg px-3 py-2.5"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <ArrowRight size={12} className="text-primary shrink-0" />
                    {act}
                  </div>
                ))}
              </div>

              {/* Flow indicator */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t">
                {SYSCRUM_FASES.map((_, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeFase ? "bg-primary scale-125" : i < activeFase ? "bg-primary/40" : "bg-border"
                    }`} />
                    {i < SYSCRUM_FASES.length - 1 && (
                      <div className={`w-6 h-px transition-colors duration-300 ${
                        i < activeFase ? "bg-primary/40" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
                <RotateCcw size={12} className="text-muted-foreground ml-2" />
              </div>
            </div>
          </div>
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
