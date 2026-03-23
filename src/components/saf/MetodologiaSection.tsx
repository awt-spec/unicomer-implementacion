import { useState } from "react";
import {
  GitBranch, FileText, BarChart3, MessageSquare, Code,
  Zap, Users, RotateCcw, CheckCircle2, Target, ArrowRight,
  Layers, TrendingUp, ShieldCheck, AlertTriangle, ClipboardList,
  Settings, Monitor, Rocket, BookOpen, Shield, Wrench,
  ChevronDown, ArrowDown, Diamond, Phone, Globe, Database,
  Headphones, RefreshCw, Eye, PenTool, TestTube, Package, Maximize,
  CircleDot, ChevronRight } from
"lucide-react";

/* ── SYSCRUM Cycle ── */

const SYSCRUM_FASES = [
{
  id: "vision", nombre: "Visión & Alcance", icon: Target,
  desc: "Definición de objetivos del sprint, historias de usuario priorizadas y criterios de aceptación claros. Se construye el Product Backlog alineado con los objetivos del proyecto.",
  actividades: ["Product Backlog Refinement", "Sprint Planning", "Definición de Done", "Estimación por puntos de historia", "Priorización por valor de negocio"]
},
{
  id: "sprint", nombre: "Sprint Execution", icon: Zap,
  desc: "Ciclos iterativos de 2-4 semanas con entregas incrementales de funcionalidad probada. Incluye daily stand-ups, code review continuo y testing integrado en cada iteración.",
  actividades: ["Daily Stand-ups (15 min)", "Desarrollo iterativo incremental", "Code Review continuo", "Testing integrado por sprint", "Burndown tracking"]
},
{
  id: "review", nombre: "Review & Demo", icon: CheckCircle2,
  desc: "Demostración al cliente de los incrementos completados. Se recopila feedback, se valida funcionalmente y se ajustan prioridades del siguiente sprint.",
  actividades: ["Sprint Review con stakeholders", "Demo funcional en vivo", "Feedback del cliente documentado", "Ajuste de prioridades", "Aceptación formal del incremento"]
},
{
  id: "retro", nombre: "Retrospectiva", icon: RotateCcw,
  desc: "Análisis de mejora continua: qué funcionó, qué mejorar, impedimentos identificados. Se generan acciones concretas y métricas de velocidad del equipo.",
  actividades: ["Retrospectiva del sprint", "Métricas de velocidad del equipo", "Plan de mejora accionable", "Lecciones aprendidas documentadas", "Optimización de procesos"]
}];


const SYSCRUM_PILARES = [
{ icon: Layers, titulo: "Iterativo e Incremental", desc: "Entregas parciales funcionales cada sprint, reduciendo riesgo y acelerando retorno de inversión." },
{ icon: Users, titulo: "Colaboración Continua", desc: "Participación activa del cliente en cada sprint review, asegurando alineación constante." },
{ icon: TrendingUp, titulo: "Mejora Continua", desc: "Retrospectivas que optimizan procesos, herramientas y dinámicas del equipo sprint a sprint." },
{ icon: ShieldCheck, titulo: "Calidad Integrada", desc: "Testing automatizado y code review como parte del Definition of Done. ISO 9001:2000 certificado." }];


/* ── Plan de Proyecto ── */

const PLAN_AREAS = [
{ icon: Target, titulo: "Alcance Detallado", desc: "Delimitación de productos, entregables y actividades específicas del proyecto." },
{ icon: Users, titulo: "Recursos Humanos", desc: "Perfiles, dedicación y responsabilidades RACI de cada participante SYSDE y Unicomer." },
{ icon: MessageSquare, titulo: "Plan de Comunicación", desc: "Mecanismos formales, responsables y periodicidad de comunicados oficiales." },
{ icon: ClipboardList, titulo: "Cronograma Definitivo", desc: "Timeline con fecha real de inicio, días feriados y milestones críticos." },
{ icon: AlertTriangle, titulo: "Gestión del Riesgo", desc: "Riesgos identificados con planes de mitigación, contingencia y responsables." },
{ icon: ShieldCheck, titulo: "Gestión de Calidad", desc: "Mecanismos para medir calidad de productos y servicios entregados por SYSDE." },
{ icon: Settings, titulo: "Modelo de Integración", desc: "Procesos para cambios en planificación e incidencias imprevistas." },
{ icon: FileText, titulo: "Entregables", desc: "Definición formal de entregables por fase con modelo de contenido." }];


/* ── Riesgos ── */

const RIESGOS = [
{ tipo: "Técnicos", icon: Code, color: "text-sky-500 bg-sky-50", items: ["Calidad de productos", "Complejidad del sistema", "Interfaces con otros sistemas", "Rendimiento y fiabilidad"] },
{ tipo: "Negocio / Externos", icon: Globe, color: "text-amber-500 bg-amber-50", items: ["Regulación CNBS", "Subcontratistas y proveedores", "Situaciones de mercado", "Fuerza mayor"] },
{ tipo: "Organizacionales", icon: Users, color: "text-violet-500 bg-violet-50", items: ["Dependencias internas", "Recursos del proyecto", "Presupuesto financiero", "Priorización corporativa"] },
{ tipo: "Gestión", icon: ClipboardList, color: "text-emerald-500 bg-emerald-50", items: ["Estimaciones del plan", "Planificación", "Procesos de control", "Canales de comunicación"] }];


/* ── Fábrica de Software ── */

const FABRICA_FASES = [
{ nombre: "Diseño", icon: PenTool, color: "bg-primary", desc: "Arquitectura, modelo de datos, diseño de interfaces y especificaciones técnicas detalladas." },
{ nombre: "Construcción", icon: Code, color: "bg-primary", desc: "Desarrollo iterativo, code review, pruebas unitarias y control de calidad interno." },
{ nombre: "Transición", icon: Package, color: "bg-primary", desc: "Pruebas integrales, certificación, documentación y despliegue en ambiente productivo." }];


/* ── Ambientes ── */

const AMBIENTES = [
{ nombre: "Desarrollo", icon: Code, desc: "Ambientes paralelos donde los desarrolladores realizan programación diaria.", estabilidad: "Inestable" },
{ nombre: "Control de Calidad", icon: TestTube, desc: "QA realiza pruebas conforme el desarrollo avanza, con múltiples ambientes paralelos.", estabilidad: "Medio" },
{ nombre: "Pruebas Integrales", icon: Layers, desc: "Ambiente único para pruebas de integración entre componentes del sistema.", estabilidad: "Controlado" },
{ nombre: "Certificación", icon: ShieldCheck, desc: "Ambiente sincronizado con producción — validación final pre-deploy.", estabilidad: "Estable" }];


/* ── Control de Cambios ── */

const CAMBIO_STEPS = [
{ paso: "Solicitud de Cambio", actor: "Cliente", desc: "El cliente genera una solicitud formal de cambio al proyecto.", icon: FileText },
{ paso: "Estudio Preliminar", actor: "Director de Proyecto", desc: "Análisis de impacto y estimación de esfuerzo por el PM y responsable del módulo afectado.", icon: Eye },
{ paso: "Informe de Impacto", actor: "SYSDE", desc: "Documento formal con análisis de impacto en tiempo, costo y alcance.", icon: BarChart3 },
{ paso: "Evaluación del Comité", actor: "Comité de Proyecto", desc: "El Steering Committee evalúa y decide aprobar o rechazar el cambio.", icon: Users },
{ paso: "Planificación del Cambio", actor: "Director", desc: "Si se aprueba, el director planifica la incorporación al proyecto.", icon: ClipboardList },
{ paso: "Ejecución", actor: "Equipo SYSDE", desc: "Se ejecuta el cambio y se informa al solicitante del resultado.", icon: Rocket }];


/* ── Soporte Post-Implementación ── */

const SOPORTE = [
{ nivel: "L1", titulo: "Mesa de Ayuda", desc: "Primer contacto, registro de tickets, resolución de FAQ y problemas conocidos. Portal de Servicio al Cliente en línea.", color: "bg-primary/10 text-primary border-primary/20" },
{ nivel: "L2", titulo: "Soporte Especializado", desc: "Análisis funcional, configuración avanzada y resolución de incidentes complejos. Acceso a FTP privado.", color: "bg-amber-50 text-amber-600 border-amber-200" },
{ nivel: "L3", titulo: "Desarrollo / Core", desc: "Corrección de defectos, parches, service packs, actualizaciones de producto y cambios de arquitectura.", color: "bg-sky-50 text-sky-600 border-sky-200" }];


const SOPORTE_SERVICIOS = [
{ nombre: "Mantenimiento Preventivo", desc: "Calendario de recalibraciones técnicas, revisión de prácticas y medición de capacidad instalada." },
{ nombre: "Portal de Servicio al Cliente", desc: "Herramienta web para reportar incidencias, dar seguimiento en tiempo real e interactuar con el equipo." },
{ nombre: "Gestión de Versiones", desc: "Control con Team Foundation Server — protección, regresiones, bifurcaciones y administración de releases." },
{ nombre: "Indicadores de Gestión", desc: "Modelo OLAP: efectividad, retrabajo, cargas de trabajo, reapertura de casos y densidad de defectos." }];


/* ── Herramientas PMO ── */

const HERRAMIENTAS = [
{ nombre: "Jira / Azure DevOps", categoria: "Gestión de Proyecto", icon: BarChart3 },
{ nombre: "Confluence", categoria: "Documentación", icon: FileText },
{ nombre: "Git / TFS", categoria: "Control de Versiones", icon: GitBranch },
{ nombre: "Teams / Slack", categoria: "Comunicación", icon: MessageSquare },
{ nombre: "Power BI", categoria: "Reportería PMO", icon: BarChart3 },
{ nombre: "SonarQube", categoria: "Calidad de Código", icon: Code },
{ nombre: "Sistema de Fábrica", categoria: "Seguimiento SYSDE", icon: Monitor },
{ nombre: "Portal de Servicio", categoria: "Soporte al Cliente", icon: Headphones }];


/* ── KPIs de Calidad ── */

const KPIS_CALIDAD = [
{ label: "Efectividad", desc: "% variación estimado vs real", icon: Target },
{ label: "Retrabajo", desc: "Horas por rechazos QA", icon: RefreshCw },
{ label: "Densidad de Defectos", desc: "Defectos por tamaño", icon: AlertTriangle },
{ label: "Eficiencia de Retirada", desc: "Defectos internos vs cliente", icon: ShieldCheck }];


/* ── TABS ── */

type TabKey = "syscrum" | "plan" | "fabrica" | "cambios" | "soporte";

const TABS: {key: TabKey;label: string;icon: typeof Zap;}[] = [
{ key: "syscrum", label: "SYSCRUM Agile", icon: Zap },
{ key: "plan", label: "Plan de Proyecto", icon: ClipboardList },
{ key: "fabrica", label: "Fábrica de Software", icon: Code },
{ key: "cambios", label: "Control de Cambios", icon: Settings },
{ key: "soporte", label: "Soporte & Continuidad", icon: Headphones }];


/* ═══════════════════════════════ COMPONENT ═══════════════════════════════ */

export function MetodologiaSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("syscrum");
  const [activeFase, setActiveFase] = useState(0);
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  return (
    <section id="metodologia" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodología & Gobernanza</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            SYSCRUM — "Agile Answers"
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-2xl leading-relaxed">
            Metodología ágil propietaria de SYSDE basada en Scrum, adaptada a implementaciones de core bancario.
            Combina sprints iterativos con governance corporativo, sustentada por +700 proyectos y certificación ISO 9001.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 active:scale-95 ${
                isActive ?
                "bg-primary text-white border-primary shadow-md shadow-primary/20" :
                "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"}`
                }>
                
                <Icon size={14} />
                {tab.label}
              </button>);

          })}
        </div>

        {/* ─── TAB: SYSCRUM ─── */}
        {activeTab === "syscrum" &&
        <div className="space-y-8 animate-fade-in">
            {/* Sprint Cycle Visual */}
            <div className="bg-card rounded-2xl border overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 md:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <RotateCcw size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ciclo Iterativo SYSCRUM</h3>
                    <p className="text-white/70 text-xs">Sprints de 2-4 semanas con entregas incrementales</p>
                  </div>
                </div>

                {/* Visual cycle: 4 phases in a row with arrows */}
                <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-4">
                  {SYSCRUM_FASES.map((fase, i) => {
                  const Icon = fase.icon;
                  const isActive = activeFase === i;
                  return (
                    <button key={fase.id} onClick={() => setActiveFase(i)}
                    className="flex-1 flex items-center gap-2">
                      
                        <div className={`flex-1 rounded-xl p-3 text-center transition-all duration-300 ${
                      isActive ? "bg-white text-foreground shadow-lg scale-105" : "bg-white/15 hover:bg-white/25 text-white"}`
                      }>
                          <Icon size={20} className={`mx-auto mb-1 ${isActive ? "text-primary" : ""}`} />
                          <p className={`text-[10px] font-bold leading-tight ${isActive ? "text-foreground" : ""}`}>{fase.nombre}</p>
                        </div>
                        {i < SYSCRUM_FASES.length - 1 &&
                      <ArrowRight size={14} className="text-white/40 shrink-0 hidden sm:block" />
                      }
                      </button>);

                })}
                </div>
              </div>

              {/* Active phase detail */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {(() => {const Icon = SYSCRUM_FASES[activeFase].icon;return <Icon size={20} className="text-primary" />;})()}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">FASE {activeFase + 1} / {SYSCRUM_FASES.length}</span>
                    <h4 className="font-bold text-foreground text-lg mt-1">{SYSCRUM_FASES[activeFase].nombre}</h4>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{SYSCRUM_FASES[activeFase].desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SYSCRUM_FASES[activeFase].actividades.map((act) =>
                <div key={act} className="flex items-center gap-2 text-xs text-foreground bg-muted/50 rounded-lg px-3 py-2.5">
                      <CheckCircle2 size={12} className="text-primary shrink-0" />
                      {act}
                    </div>
                )}
                </div>

                {/* Phase navigation dots */}
                <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t">
                  {SYSCRUM_FASES.map((_, i) =>
                <div key={i} className="flex items-center gap-1">
                      <button onClick={() => setActiveFase(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeFase ? "bg-primary scale-125" : i < activeFase ? "bg-primary/40" : "bg-border"}`
                  } />
                      {i < SYSCRUM_FASES.length - 1 && <div className={`w-6 h-px transition-colors ${i < activeFase ? "bg-primary/40" : "bg-border"}`} />}
                    </div>
                )}
                  <RotateCcw size={12} className="text-muted-foreground ml-2" />
                </div>
              </div>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SYSCRUM_PILARES.map((p) =>
            <div key={p.titulo} className="scroll-reveal bg-card rounded-xl border p-5 group hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <p.icon size={22} className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-foreground text-sm mb-1.5">{p.titulo}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
            )}
            </div>

            {/* KPIs de Calidad */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {KPIS_CALIDAD.map((k) =>
            <div key={k.label} className="bg-card rounded-xl border p-4 flex items-start gap-3">
                  <k.icon size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground text-xs">{k.label}</p>
                    <p className="text-muted-foreground text-[10px] mt-0.5">{k.desc}</p>
                  </div>
                </div>
            )}
            </div>
          </div>
        }

        {/* ─── TAB: PLAN DE PROYECTO ─── */}
        {activeTab === "plan" &&
        <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Plan de Proyecto (PMP)</h3>
                  <p className="text-muted-foreground text-xs">Documento contractual con planificación integral basado en PMBOK</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {PLAN_AREAS.map((area) =>
              <div key={area.titulo} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <area.icon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{area.titulo}</h4>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
              )}
              </div>
            </div>

            {/* Administración de Riesgos */}
            <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Administración de Riesgos</h3>
                  <p className="text-muted-foreground text-xs">Matriz de riesgos con planes de mitigación y contingencia</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {RIESGOS.map((r, ri) =>
              <div key={r.tipo} className="rounded-xl border overflow-hidden">
                    <button
                  onClick={() => setExpandedRisk(expandedRisk === ri ? null : ri)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-all active:scale-[0.99] ${expandedRisk === ri ? r.color : "bg-card hover:bg-muted/30"}`}>
                  
                      <r.icon size={18} className={expandedRisk === ri ? "" : "text-muted-foreground"} />
                      <span className="font-bold text-sm flex-1">Riesgos {r.tipo}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${expandedRisk === ri ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${expandedRisk === ri ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 pt-2 space-y-1.5">
                          {r.items.map((item) =>
                      <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CircleDot size={8} className="text-primary shrink-0" />
                              {item}
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            </div>

            {/* Reportes de Ejecución */}
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-4">Reportes de Ejecución del Proyecto</h3>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                Informes gerenciales quincenales preparados por el Director de Proyecto SYSDE en coordinación con Unicomer.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Minutas de reuniones", "Órdenes de cambio", "Reportes de imprevistos", "Actualizaciones de cronograma", "Documentación de brechas", "Actas de entrega", "Memorandos", "Reportes de riesgos"].map((doc) =>
              <div key={doc} className="flex items-center gap-2 text-xs text-foreground bg-muted/40 rounded-lg px-3 py-2">
                    <FileText size={10} className="text-primary shrink-0" />
                    {doc}
                  </div>
              )}
              </div>
            </div>
          </div>
        }

        {/* ─── TAB: FÁBRICA DE SOFTWARE ─── */}
        {activeTab === "fabrica" &&
        <div className="space-y-8 animate-fade-in">
            {/* Pipeline visual */}
            <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Rocket size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Fábrica de Software SYSDE</h3>
                  <p className="text-muted-foreground text-xs">Proceso de ingeniería basado en USDP + experiencia de +1000 proyectos</p>
                </div>
              </div>

              {/* Flow: Gestión Req → Diseño → Construcción → Transición → Implementación */}
              <div className="flex flex-col md:flex-row items-stretch gap-3 mb-8">
                {/* Entry */}
                <div className="bg-muted/40 rounded-xl p-4 flex flex-col items-center justify-center text-center md:w-32 shrink-0">
                  <BookOpen size={18} className="text-primary mb-2" />
                  <p className="text-[10px] font-bold text-foreground leading-tight">Gestión de<br />Requerimientos</p>
                </div>

                <div className="hidden md:flex items-center"><ArrowRight size={16} className="text-muted-foreground" /></div>

                {/* Main pipeline */}
                <div className="flex-1 bg-primary rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-3 md:gap-4">
                    {FABRICA_FASES.map((f, i) =>
                  <div key={f.nombre} className="flex items-center gap-3 flex-1">
                        <div className="bg-white rounded-xl p-3 flex-1 text-center">
                          <f.icon size={18} className="text-primary mx-auto mb-1" />
                          <p className="text-xs font-bold text-foreground">{f.nombre}</p>
                        </div>
                        {i < FABRICA_FASES.length - 1 && <ArrowRight size={16} className="text-white/60 shrink-0" />}
                      </div>
                  )}
                  </div>
                  <p className="text-white/80 text-[10px] text-center mt-3 font-medium">Equipo Fábrica</p>
                </div>

                <div className="hidden md:flex items-center"><ArrowRight size={16} className="text-muted-foreground" /></div>

                {/* Exit */}
                <div className="bg-muted/40 rounded-xl p-4 flex flex-col items-center justify-center text-center md:w-32 shrink-0">
                  <Rocket size={18} className="text-primary mb-2" />
                  <p className="text-[10px] font-bold text-foreground leading-tight">Implementación<br />de Proyectos</p>
                </div>
              </div>

              {/* Support layers */}
              <div className="space-y-2">
                <div className="bg-primary/10 rounded-xl p-3 text-center">
                  <p className="text-xs font-bold text-primary">Seguimiento y Control</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-3 text-center">
                  <p className="text-xs font-bold text-primary/70">Mejora Continua</p>
                </div>
              </div>
            </div>

            {/* Fase detail cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {FABRICA_FASES.map((f) =>
            <div key={f.nombre} className="bg-card rounded-xl border p-5 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">{f.nombre}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
            )}
            </div>

            {/* Ambientes */}
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-4">Ambientes de Trabajo</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {AMBIENTES.map((a, i) =>
              <div key={a.nombre} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 group hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <a.icon size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-foreground text-sm">{a.nombre}</h4>
                        <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full ${
                    a.estabilidad === "Estable" ? "bg-emerald-100 text-emerald-600" :
                    a.estabilidad === "Controlado" ? "bg-sky-100 text-sky-600" :
                    a.estabilidad === "Medio" ? "bg-amber-100 text-amber-600" :
                    "bg-rose-100 text-rose-600"}`
                    }>{a.estabilidad}</span>
                      </div>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
              )}
              </div>
            </div>

            {/* Herramientas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {HERRAMIENTAS.map((h) =>
            <div key={h.nombre} className="bg-card rounded-xl border p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                  <h.icon size={16} className="text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-xs">{h.nombre}</p>
                    <p className="text-muted-foreground text-[10px]">{h.categoria}</p>
                  </div>
                </div>
            )}
            </div>
          </div>
        }

        {/* ─── TAB: CONTROL DE CAMBIOS ─── */}
        {activeTab === "cambios" &&
        <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Settings size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Control Integrado de Cambios</h3>
                  <p className="text-muted-foreground text-xs">Procedimiento formal para modificaciones en tiempo, costo y/o alcance</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mb-6 leading-relaxed">
                Cuando alguna de las partes requiera modificar el plan de proyecto — nuevos requerimientos, cambios a documentos de análisis GAP u otros — se activa este flujo formal.
              </p>

              {/* Flow diagram */}
              <div className="space-y-3">
                {CAMBIO_STEPS.map((step, i) =>
              <div key={step.paso} className="flex items-start gap-4">
                    {/* Connector */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  i === 3 ? "bg-amber-50 border border-amber-200" :
                  i === CAMBIO_STEPS.length - 1 ? "bg-emerald-50 border border-emerald-200" :
                  "bg-primary/10 border border-primary/20"}`
                  }>
                        <step.icon size={18} className={
                    i === 3 ? "text-amber-500" :
                    i === CAMBIO_STEPS.length - 1 ? "text-emerald-500" :
                    "text-primary"
                    } />
                      </div>
                      {i < CAMBIO_STEPS.length - 1 && <div className="w-px h-6 bg-border" />}
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="font-bold text-foreground text-sm">{step.paso}</h4>
                        <span className="text-[9px] font-medium text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">{step.actor}</span>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                      {i === 3 &&
                  <div className="flex items-center gap-4 mt-2 text-[10px] font-bold">
                          <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                            <CheckCircle2 size={10} /> Aprueba → Planificación
                          </span>
                          <span className="text-rose-600 bg-rose-50 px-2 py-1 rounded-lg flex items-center gap-1">
                            <RotateCcw size={10} /> Rechaza → Reformular solicitud
                          </span>
                        </div>
                  }
                    </div>
                  </div>
              )}
              </div>
            </div>

            {/* Niveles de Servicio */}
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Niveles de Servicio</h3>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                Pactados en el Plan de Proyecto y monitoreados por la Oficina de Dirección de Proyectos (PMO). Se personalizan según la complejidad e infraestructura de cada proyecto.
              </p>
              <div className="bg-muted/30 rounded-xl p-4 text-xs text-muted-foreground leading-relaxed">
                <p>Los niveles de escalamiento se definen según la complejidad del proyecto y la infraestructura requerida. El cumplimiento se documenta formalmente con el Sistema de Gestión de Calidad ISO 9001.</p>
              </div>
            </div>
          </div>
        }

        {/* ─── TAB: SOPORTE ─── */}
        {activeTab === "soporte" &&
        <div className="space-y-8 animate-fade-in">
            {/* Modelo de soporte */}
            <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Headphones size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Servicios de Valor Agregado</h3>
                  <p className="text-muted-foreground text-xs">Continuidad operacional post-implementación</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {SOPORTE.map((s) =>
              <div key={s.nivel} className={`rounded-xl border p-5 ${s.color}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-black">{s.nivel}</span>
                      <h4 className="font-bold text-sm">{s.titulo}</h4>
                    </div>
                    <p className="text-xs leading-relaxed opacity-80">{s.desc}</p>
                  </div>
              )}
              </div>

              {/* Portal info */}
              <div className="bg-muted/30 rounded-xl p-5">
                <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Monitor size={16} className="text-primary" />
                  Portal de Servicio al Cliente
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                "Reportar nuevas incidencias o requerimientos",
                "Seguimiento a servicios activos en tiempo real",
                "Interacción documentada con equipo SYSDE",
                "Estado de cuenta y consumo de servicios"].
                map((item) =>
                <div key={item} className="flex items-center gap-2 text-xs text-foreground">
                      <ChevronRight size={10} className="text-primary shrink-0" />
                      {item}
                    </div>
                )}
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="grid sm:grid-cols-2 gap-4">
              {SOPORTE_SERVICIOS.map((s) =>
            <div key={s.nombre} className="bg-card rounded-xl border p-5 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-foreground text-sm mb-2">{s.nombre}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </div>
            )}
            </div>

            {/* Metodología de Incorporación de Cambios */}
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-4">Gestión de Mejoras al Producto</h3>
              <div className="flex flex-wrap gap-2">
                {["Retroalimentación", "Gestión de Sugerencias", "Planeación de Versiones", "Aseguramiento de Calidad", "Distribución Definitiva"].map((step, i) =>
              <div key={step} className="flex items-center gap-2">
                    <div className="bg-primary/10 text-primary rounded-lg px-3 py-2 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[9px] font-bold">{i + 1}</span>
                      {step}
                    </div>
                    {i < 4 && <ArrowRight size={12} className="text-muted-foreground shrink-0" />}
                  </div>
              )}
              </div>
            </div>
          </div>
        }

        {/* ─── TAB: PORTAL SYSDE ─── */}
        {activeTab === "portal" &&
        <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Monitor size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Portal de Soporte SYSDE</h3>
                    <p className="text-white/70 text-xs">Plataforma de soporte en tiempo real</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const iframe = document.getElementById("portal-iframe-container");
                    if (iframe) {
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        iframe.requestFullscreen();
                      }
                    }
                  }}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors active:scale-95"
                  title="Pantalla completa"
                >
                  <Maximize size={16} className="text-white" />
                </button>
              </div>
              <div id="portal-iframe-container" className="aspect-video w-full bg-black">
                <iframe
                src="https://soporrteunicomer.lovable.app"
                className="w-full h-full border-0"
                title="Portal SYSDE - Soporte"
                loading="lazy"
                allow="fullscreen" />
              </div>
              <div className="p-5 border-t">
                <a
                href="https://soporrteunicomer.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors active:scale-95">
                  <Globe size={14} />
                  Abrir portal en nueva ventana →
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

}