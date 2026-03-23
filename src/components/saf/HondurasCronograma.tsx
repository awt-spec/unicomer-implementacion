import { useState } from "react";
import { ChevronRight, CheckCircle2, Clock, Zap, FileText, Rocket, GraduationCap, Database, FlaskConical, Settings, TrendingUp, CreditCard, Users, BarChart3, ArrowUpDown, TestTubes, Sparkles, Building2, Headphones, DollarSign, Puzzle } from "lucide-react";

const HONDURAS_DRIVERS = [
{ label: "Créditos Vigentes", value: "338,360", icon: CreditCard },
{ label: "Clientes Estimados", value: "82,500", icon: Users },
{ label: "Usuarios Sistema", value: "1,691", icon: Users },
{ label: "Pagos/mes (media)", value: "122,450", icon: BarChart3 },
{ label: "Pico Pagos (DIC)", value: "132,633", icon: TrendingUp },
{ label: "Desembolsos/mes", value: "8,614", icon: ArrowUpDown },
{ label: "Pico Desembolsos (NOV)", value: "13,205", icon: TrendingUp }];


const HONDURAS_FASES = [
{
  id: "F01", nombre: "Gobernanza & Kickoff", periodo: "Mes 1–2", semanas: "1–8",
  icon: Rocket, color: "from-primary to-primary/70", colorLight: "bg-primary/10 text-primary",
  responsables: "Eduardo Wheelock · Carlos Cascante",
  tareas: [
  { tarea: "Firma del contrato marco y NDA con Unicomer HQ — Cecilia Flores de Cruz", responsable: "Eduardo Wheelock" },
  { tarea: "Constitución del Steering Committee SYSDE–Unicomer Honduras", responsable: "Eduardo Wheelock · Carlos Cascante" },
  { tarea: "Setup PMO: Asana, MS Project, canales Teams/email, RACI definitivo", responsable: "Carlos Cascante" },
  { tarea: "Kickoff Meeting Honduras — presencial o Microsoft Teams (grabado)", responsable: "Carlos Cascante · Unicomer" },
  { tarea: "Definición de ambientes tecnológicos: DEV / QA / STAGING / PROD en infra Unicomer HN", responsable: "Carlos Solís" },
  { tarea: "Designación formal de IT Lead y super usuarios Unicomer Honduras", responsable: "Unicomer" }],

  entregables: [
  { nombre: "Project Management Plan", mes: "Mes 1", formato: "Excel & Miro — timeline, resource plan, risk matrix" }],

  barStart: 0, barEnd: 2
},
{
  id: "F02", nombre: "Blueprint & Diseño", periodo: "Mes 2–6", semanas: "5–24",
  icon: FileText, color: "from-amber-500 to-amber-400", colorLight: "bg-amber-50 text-amber-600",
  responsables: "Carlos Cascante · Nelly Vargas · Luis Alfaro · Olga Cuervo",
  tareas: [
  { tarea: "Análisis AS-IS del sistema POSCental Honduras: estructura de datos, procesos, workflows", responsable: "Luis Alfaro" },
  { tarea: "Workshops de requerimientos funcionales: originación, crédito, cobranza, liquidación, CNBS", responsable: "Nelly Vargas" },
  { tarea: "Análisis regulatorio local: normativa CNBS, AML, provisiones, encaje legal, reportes BCH", responsable: "Nelly Vargas" },
  { tarea: "Diseño arquitectura TO-BE SAF+ on-premise en servidores Unicomer Honduras", responsable: "Luis Alfaro · Carlos Solís" },
  { tarea: "Mapeo de integraciones: CRM, Datalake, MCX, bureaus de crédito, canales digitales EMMA", responsable: "Olga Cuervo" },
  { tarea: "Diseño de modelo de datos multiempresa, multidivisa (Lempiras HNL)", responsable: "Luis Alfaro" },
  { tarea: "Gap analysis funcional POSCental vs SAF+: identificación de desarrollos/adaptaciones", responsable: "Carlos Cascante · Nelly Vargas" }],

  entregables: [
  { nombre: "Blueprint / Solution Design", mes: "Mes 4", formato: "Word (AS-IS/TO-BE) · Swagger APIs · draw.io/Miro" },
  { nombre: "Accounting Entry Matrix (GL)", mes: "Mes 5", formato: "Excel / SQL Server — mapeo completo de cuentas" },
  { nombre: "Regulatory Compliance Report", mes: "Mes 4", formato: "Excel / Confluence / Power BI — normativa CNBS" },
  { nombre: "BRD aprobado — Unicomer sign-off", mes: "Mes 6", formato: "Documento Word firmado por IT Director Unicomer" }],

  barStart: 1, barEnd: 6
},
{
  id: "F03", nombre: "Configuración & Parametrización", periodo: "Mes 5–10", semanas: "17–40",
  icon: Settings, color: "from-sky-500 to-sky-400", colorLight: "bg-sky-50 text-sky-600",
  responsables: "Carlos Cascante · Nelly Vargas · Carlos Solís · Olga Cuervo",
  tareas: [
  { tarea: "Setup infraestructura on-premise: instalación SAF+ en servidores Unicomer Honduras", responsable: "Carlos Solís" },
  { tarea: "Parametrización productos crediticios: tasas, amortización francesa/alemana, cuotas, seguros", responsable: "Nelly Vargas" },
  { tarea: "Carga de catálogos: clientes, sucursales, vendedores, zonas, plan de cuentas", responsable: "Nelly Vargas" },
  { tarea: "Configuración productos especiales: crédito retail, financiamiento muebles/electro/línea blanca", responsable: "Nelly Vargas" },
  { tarea: "Desarrollo y certificación integraciones API: CRM EMMA, Datalake, MCX Decision Engine", responsable: "Olga Cuervo" },
  { tarea: "Integración SmartCredit y bureau de crédito Honduras (CIBERCORP/Transunion)", responsable: "Olga Cuervo" },
  { tarea: "Configuración reportería regulatoria CNBS: formatos diarios, mensuales, anuales", responsable: "Nelly Vargas" },
  { tarea: "Configuración módulo AML/Lista Cautela y alertas de prevención de lavado", responsable: "Carlos Solís" },
  { tarea: "Setup de seguridad: roles, perfiles, permisos granulares, auditoría y trazabilidad", responsable: "Carlos Solís" },
  { tarea: "Configuración PulsUB (motor de notificaciones) y canales digitales", responsable: "Olga Cuervo" }],

  entregables: [
  { nombre: "Configuration Workbooks — parametrización completa", mes: "Mes 8", formato: "Excel / Git / Power BI / SQL — todos los productos" },
  { nombre: "Integration Specs API (Swagger / OpenAPI)", mes: "Mes 9", formato: "Swagger / Postman / DevOps — certificadas" }],

  barStart: 4, barEnd: 10
},
{
  id: "F04", nombre: "Migración de Datos (ETL)", periodo: "Mes 7–13", semanas: "25–52",
  icon: Database, color: "from-violet-500 to-violet-400", colorLight: "bg-violet-50 text-violet-600",
  responsables: "Jhonny Brenes · Carlos Solís",
  tareas: [
  { tarea: "Auditoría de calidad de datos en POSCental: duplicados, outliers, campos nulos críticos", responsable: "Jhonny Brenes" },
  { tarea: "Mapeo entidad-entidad: clientes, contratos, pagos, garantías, historial crediticio", responsable: "Jhonny Brenes" },
  { tarea: "Diseño ETL: reglas de transformación, lógica de reconciliación, manejo de excepciones", responsable: "Jhonny Brenes" },
  { tarea: "Desarrollo scripts ETL con herramienta SYSDE propietaria + SQL Server", responsable: "Jhonny Brenes · Dennis García" },
  { tarea: "Mock Run 1: migración completa en ambiente QA con datos reales — validación integridad", responsable: "Jhonny Brenes" },
  { tarea: "Corrección de errores Mock Run 1 — ajuste de reglas ETL", responsable: "Jhonny Brenes" },
  { tarea: "Mock Run 2: segunda migración — validación de saldos, cronogramas, histórico", responsable: "Jhonny Brenes" },
  { tarea: "Dress Rehearsal: simulacro completo de cutover en STAGING — timing validado", responsable: "Equipo SYSDE" },
  { tarea: "Preparación del script de cutover productivo: pasos, checkpoints, rollback triggers", responsable: "Carlos Solís" }],

  entregables: [
  { nombre: "Data Migration Plan + ETL Strategy", mes: "Mes 9", formato: "Excel / SQL / DevOps — herramienta propietaria SYSDE" },
  { nombre: "Mock Run 1 — Reporte de validación", mes: "Mes 11", formato: "Reporte QA con reconciliación de saldos" },
  { nombre: "Mock Run 2 — Reporte correcciones", mes: "Mes 12", formato: "Reporte QA + evidencia de saldos OK" },
  { nombre: "Dress Rehearsal Evidence", mes: "Mes 13", formato: "Acta de simulacro firmada — timing y rollback validado" }],

  barStart: 6, barEnd: 13
},
{
  id: "F05", nombre: "Cert. Migración, Brechas y Adaptaciones", periodo: "Mes 10–14", semanas: "37–56",
  icon: FlaskConical, color: "from-emerald-500 to-emerald-400", colorLight: "bg-emerald-50 text-emerald-600",
  responsables: "Jhonny Brenes · Danilo Vezzoni · Carlos Cascante",
  tareas: [
  { tarea: "Certificación de migración: validación de integridad de datos migrados vs POSCental", responsable: "Jhonny Brenes" },
  { tarea: "Reconciliación de saldos migrados: créditos activos, pagos, cronogramas, historial", responsable: "Jhonny Brenes" },
  { tarea: "Identificación de posibles brechas de desarrollo: funcionalidades sin cobertura SAF+", responsable: "Carlos Cascante · Nelly Vargas" },
  { tarea: "Priorización y clasificación de brechas: críticas, deseables, futuras", responsable: "Carlos Cascante" },
  { tarea: "Desarrollo de adaptaciones y customizaciones identificadas en gap analysis", responsable: "Equipo SYSDE" },
  { tarea: "Certificación de adaptaciones: pruebas unitarias y funcionales de desarrollos custom", responsable: "Danilo Vezzoni" },
  { tarea: "Validación regulatoria: reportería CNBS generada desde datos migrados", responsable: "Nelly Vargas" },
  { tarea: "Sign-off de certificación de migración por Unicomer Honduras", responsable: "Unicomer · SYSDE" }],
  entregables: [
  { nombre: "Reporte de Certificación de Migración", mes: "Mes 12", formato: "Excel / QA — reconciliación completa de saldos" },
  { nombre: "Gap Analysis & Brechas identificadas", mes: "Mes 11", formato: "Excel / DevOps — clasificación y priorización" },
  { nombre: "Adaptaciones certificadas — Sign-off", mes: "Mes 14", formato: "Acta firmada + evidencia de pruebas unitarias" }],
  barStart: 9, barEnd: 14
},
{
  id: "F06", nombre: "Capacitación Train-the-Trainer", periodo: "Mes 13–17", semanas: "49–68",
  icon: GraduationCap, color: "from-teal-500 to-teal-400", colorLight: "bg-teal-50 text-teal-600",
  responsables: "Fernando Pinto · Carlos Cascante",
  tareas: [
  { tarea: "Diseño del programa de capacitación: mapa de roles, ruta de aprendizaje por perfil", responsable: "Fernando Pinto" },
  { tarea: "Elaboración de materiales: manuales usuario, guías administración, videos, Miro boards", responsable: "Fernando Pinto · Nelly Vargas" },
  { tarea: "Taller Rol 1 — Gerentes de crédito: originación, comités, políticas, reportería", responsable: "Fernando Pinto" },
  { tarea: "Taller Rol 2 — Operadores de ventanilla: pagos, desembolsos, consultas de saldo", responsable: "Fernando Pinto" },
  { tarea: "Taller Rol 3 — Administradores de sistema: parametrización, mantenimiento, backups", responsable: "Carlos Cascante · Carlos Solís" },
  { tarea: "Taller Rol 4 — IT Honduras: infraestructura, monitoreo, actualizaciones, integración", responsable: "Carlos Solís" },
  { tarea: "Certificación de 5–8 super usuarios Unicomer Honduras como facilitadores internos", responsable: "Fernando Pinto" },
  { tarea: "Preparación materiales en inglés para países del Caribe (Jamaica, Trinidad, Guyana)", responsable: "Equipo SYSDE" }],
  entregables: [
  { nombre: "Training Materials completos (Train-the-Trainer)", mes: "Mes 15", formato: "PDF / PPT / Word / Miro / Videos — por rol" },
  { nombre: "Certificación super usuarios Honduras (5–8 personas)", mes: "Mes 16", formato: "Actas de certificación firmadas" }],
  barStart: 12, barEnd: 17
},
{
  id: "F07", nombre: "Pruebas Integrales", periodo: "Mes 15–19", semanas: "57–76",
  icon: TestTubes, color: "from-indigo-500 to-indigo-400", colorLight: "bg-indigo-50 text-indigo-600",
  responsables: "Danilo Vezzoni · Unicomer QA Team",
  tareas: [
  { tarea: "Plan de pruebas integrales: casos de uso end-to-end, criterios de entrada/salida", responsable: "Danilo Vezzoni" },
  { tarea: "Pruebas de integración completa: SAF+ + CRM + Datalake + MCX + bureaus + CNBS", responsable: "Danilo Vezzoni · Olga Cuervo" },
  { tarea: "Pruebas de regresión: validación de que adaptaciones no afectan funcionalidad core", responsable: "Danilo Vezzoni" },
  { tarea: "Security Audit: OWASP Top 10 escaneo automatizado (NESSUS) + penetration testing", responsable: "Danilo Vezzoni" },
  { tarea: "Performance testing: carga pico diciembre — 132,633 pagos/mes · 13,205 desembolsos/mes", responsable: "Danilo Vezzoni" },
  { tarea: "UAT Ciclo 1: usuarios clave Unicomer validan flujos de negocio reales", responsable: "Unicomer · SYSDE" },
  { tarea: "Resolución defectos UAT Ciclo 1: bugs críticos (S1/S2) con SLA comprometido", responsable: "Equipo SYSDE" },
  { tarea: "UAT Ciclo 2: re-validación tras correcciones — sign-off formal", responsable: "Unicomer · SYSDE" }],
  entregables: [
  { nombre: "Test Plan Integral completo", mes: "Mes 16", formato: "DevOps / Excel / Power BI — 100% cobertura" },
  { nombre: "Security Audit Report (OWASP / NESSUS)", mes: "Mes 17", formato: "Reporte OWASP Top 10 + evidencia pentest" },
  { nombre: "UAT Sign-off formal — Unicomer Honduras", mes: "Mes 19", formato: "Acta firmada IT Director + Steering Committee" }],
  barStart: 14, barEnd: 19
},
{
  id: "F08", nombre: "Go-Live & Estabilización", periodo: "Mes 19–24", semanas: "73–96",
  icon: Zap, color: "from-rose-500 to-rose-400", colorLight: "bg-rose-50 text-rose-600",
  responsables: "Carlos Cascante · Carlos Solís · Eduardo Wheelock",
  tareas: [
  { tarea: "Cutover Plan / Runbook: procedimiento minuto a minuto de la noche de corte", responsable: "Carlos Solís" },
  { tarea: "Drill de Disaster Recovery (DRP Test): recuperación completa simulada — obligatorio pre-GoLive", responsable: "Carlos Solís" },
  { tarea: "Validación final de saldos migrados: créditos activos, pagos pendientes, cronogramas", responsable: "Jhonny Brenes" },
  { tarea: "GO-LIVE Honduras: 1ra transacción comercial en producción — POSCental en modo lectura", responsable: "Carlos Cascante · Unicomer" },
  { tarea: "Operación paralela 30 días: POSCental activo como backup de validación", responsable: "Equipo SYSDE · Unicomer IT" },
  { tarea: "Soporte Hypercare 8 semanas: equipo SYSDE dedicado exclusivamente a Honduras", responsable: "Equipo SYSDE" },
  { tarea: "SLA activo: S1 respuesta/resolución 1h/1h · S2 1h/4h · Uptime 99.9% mensual", responsable: "Carlos Solís · L1/L2/L3" },
  { tarea: "Monthly Service Reports: SLA performance, capacity, incident summary", responsable: "Carlos Solís" },
  { tarea: "Decommission de POSCental tras 30 días sin incidentes P1", responsable: "Unicomer IT · SYSDE" },
  { tarea: "Project Closure Report Honduras + lessons learned → playbook para Nicaragua (Y3)", responsable: "Carlos Cascante · Eduardo Wheelock" }],
  entregables: [
  { nombre: "Cutover Plan / Runbook", mes: "Mes 19", formato: "Excel / Project / DevOps — con rollback triggers" },
  { nombre: "DRP Test Evidence — drill completado", mes: "Mes 20", formato: "Acta drill + métricas RTO/RPO validadas" },
  { nombre: "GO-LIVE Honduras — Acta de activación", mes: "Mes 20", formato: "Acta oficial firmada Unicomer + SYSDE" },
  { nombre: "Monthly Service Report #1 (SLA)", mes: "Mes 21", formato: "Azure Monitor / Power BI — dashboard SLA" },
  { nombre: "Project Closure Report Honduras", mes: "Mes 24", formato: "Word / PPT / Sharepoint — lecciones → Nicaragua" }],
  barStart: 18, barEnd: 24
}];


const HITOS_HN = [
{ mes: "M1", hito: "Gobernanza & Kickoff", fase: "F01" },
{ mes: "M6", hito: "BRD aprobado", fase: "F02" },
{ mes: "M9", hito: "Integraciones certificadas", fase: "F03" },
{ mes: "M13", hito: "Dress Rehearsal (ETL)", fase: "F04" },
{ mes: "M14", hito: "Certificación migración", fase: "F05" },
{ mes: "M16", hito: "Train-the-Trainer cert.", fase: "F06" },
{ mes: "M19", hito: "UAT Sign-off", fase: "F07" },
{ mes: "M20", hito: "GO-LIVE Honduras", fase: "F08" },
{ mes: "M24", hito: "Closure Report", fase: "F08" }];

const TOTAL_MONTHS = 24;

const KPI_DATA = [
{ value: "8", label: "Fases" },
{ value: "62", label: "Tareas" },
{ value: "19", label: "Entregables" },
{ value: "24m", label: "Duración" },
{ value: "$1.22M", label: "Inversión" }];


export function HondurasCronograma() {
  const [selectedFase, setSelectedFase] = useState(0);
  const [showTab, setShowTab] = useState<"tareas" | "entregables">("tareas");
  const fase = HONDURAS_FASES[selectedFase];
  const Icon = fase.icon;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header - Red */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">🇭🇳</span>
          <div>
            <h3 className="text-xl font-bold">Honduras — País Piloto</h3>
            <p className="text-white/70 text-xs">100% SYSDE · 24 meses · POSCental → SAF+ · RFP UGN1000123</p>
          </div>
        </div>
        






        
      </div>

      {/* Drivers */}
      <div className="bg-card rounded-2xl border p-5 md:p-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Drivers Operativos Honduras</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {HONDURAS_DRIVERS.map((d) => {
            const DIcon = d.icon;
            return (
              <div key={d.label} className="bg-muted/40 rounded-xl p-3 text-center hover:bg-muted/60 transition-colors">
                <DIcon size={14} className="text-primary mx-auto mb-1.5" />
                <p className="text-sm font-bold text-foreground tabular-nums">{d.value}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{d.label}</p>
              </div>);

          })}
        </div>
      </div>

      {/* Mini Gantt - 24 months */}
      <div className="bg-card rounded-2xl border p-5 md:p-6 overflow-x-auto">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Cronograma 24 Meses</p>
        <div className="min-w-[800px]">
          {/* Month labels */}
          <div className="flex mb-2 pl-44 md:pl-52">
            {Array.from({ length: TOTAL_MONTHS }, (_, i) =>
            <div key={i} className={`flex-1 text-center text-[8px] font-medium ${i < 12 ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                {`M${i + 1}`}
              </div>
            )}
          </div>
          {/* Year markers */}
          <div className="flex mb-1 pl-44 md:pl-52">
            <div className="flex-1 text-center text-[9px] font-bold text-primary/60 border-b border-primary/20" style={{ flex: 12 }}>Año 1</div>
            <div className="flex-1 text-center text-[9px] font-bold text-primary/40 border-b border-primary/10" style={{ flex: 12 }}>Año 2</div>
          </div>
          {/* Bars */}
          <div className="space-y-1.5">
            {HONDURAS_FASES.map((f, fi) => {
              const isActive = fi === selectedFase;
              return (
                <button
                  key={f.id}
                  onClick={() => {setSelectedFase(fi);setShowTab("tareas");}}
                  className={`flex items-center w-full group transition-all duration-200 rounded-lg px-2 py-1.5 active:scale-[0.998] ${isActive ? "bg-primary/5" : "hover:bg-muted/50"}`}>
                  
                  <span className={`text-[10px] font-medium w-42 md:w-50 shrink-0 text-left pr-2 truncate transition-colors ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                    <span className="font-bold">{f.id}</span> {f.nombre.split("&")[0].trim()}
                  </span>
                  <div className="flex-1 relative h-6">
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: TOTAL_MONTHS }, (_, i) =>
                      <div key={i} className="flex-1 border-l border-dashed border-border/20 first:border-l-0" />
                      )}
                    </div>
                    <div
                      className={`absolute top-0 h-6 rounded-md bg-gradient-to-r ${f.color} transition-all duration-300 flex items-center justify-center ${isActive ? "shadow-md ring-1 ring-offset-1 ring-primary/20" : "opacity-60 group-hover:opacity-90"}`}
                      style={{
                        left: `${f.barStart / TOTAL_MONTHS * 100}%`,
                        width: `${(f.barEnd - f.barStart) / TOTAL_MONTHS * 100}%`
                      }}>
                      
                      <span className="text-white text-[7px] font-bold drop-shadow-sm whitespace-nowrap px-1">{f.periodo}</span>
                    </div>
                  </div>
                </button>);

            })}
          </div>

          {/* Milestones row */}
          <div className="flex mt-3 pl-44 md:pl-52 border-t border-dashed border-border/40 pt-2">
            {Array.from({ length: TOTAL_MONTHS }, (_, i) => {
              const hito = HITOS_HN.find((h) => h.mes === `M${i + 1}`);
              return (
                <div key={i} className="flex-1 flex flex-col items-center">
                  {hito ?
                  <div className="group relative">
                      <div className={`w-2 h-2 rounded-full ${i + 1 === 11 ? "bg-primary" : "bg-amber-500"} shadow-sm`} />
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity bg-card px-1 rounded z-10">
                        {hito.hito}
                      </span>
                    </div> :
                  <div className="w-2 h-2" />}
                </div>);

            })}
          </div>
        </div>
      </div>

      {/* Phase detail */}
      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <div className={`bg-gradient-to-r ${fase.color} p-5 md:p-6`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">{fase.id} · {fase.periodo} · Semanas {fase.semanas}</p>
              <h4 className="text-lg font-bold text-white leading-tight">{fase.nombre}</h4>
            </div>
          </div>
          <p className="text-white/60 text-xs mt-1">{fase.responsables}</p>

          <div className="flex gap-2 mt-4">
            <button onClick={() => setShowTab("tareas")} className={`text-[11px] font-semibold px-3 py-1 rounded-full transition-all active:scale-95 ${showTab === "tareas" ? "bg-white text-foreground" : "bg-white/20 text-white border border-white/20"}`}>
              Tareas ({fase.tareas.length})
            </button>
            <button onClick={() => setShowTab("entregables")} className={`text-[11px] font-semibold px-3 py-1 rounded-full transition-all active:scale-95 flex items-center gap-1 ${showTab === "entregables" ? "bg-white text-foreground" : "bg-white/20 text-white border border-white/20"}`}>
              <CheckCircle2 size={11} />
              Entregables ({fase.entregables.length})
            </button>
          </div>
        </div>

        <div className="p-5 md:p-6">
          {showTab === "tareas" ?
          <ul className="space-y-2.5">
              {fase.tareas.map((t, i) =>
            <li key={i} className="flex items-start gap-3 text-sm group">
                  <ChevronRight size={13} className="text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <span className="text-foreground group-hover:text-foreground/90 transition-colors">{t.tarea}</span>
                    <span className="block text-[10px] text-muted-foreground mt-0.5">{t.responsable}</span>
                  </div>
                </li>
            )}
            </ul> :

          <div className="grid sm:grid-cols-2 gap-3">
              {fase.entregables.map((e, i) =>
            <div key={i} className="bg-muted/30 rounded-lg border p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-foreground text-sm leading-snug">{e.nombre}</h5>
                      <div className="flex items-center gap-3 mt-1.5 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock size={9} />{e.mes}</span>
                        <span className="flex items-center gap-1"><FileText size={9} />{e.formato}</span>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {/* Phase nav */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <button onClick={() => {setSelectedFase(Math.max(0, selectedFase - 1));setShowTab("tareas");}} disabled={selectedFase === 0}
            className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors active:scale-95">
              ← Fase anterior
            </button>
            <div className="flex gap-1.5">
              {HONDURAS_FASES.map((_, fi) =>
              <button key={fi} onClick={() => {setSelectedFase(fi);setShowTab("tareas");}}
              className={`w-2 h-2 rounded-full transition-all ${fi === selectedFase ? "bg-primary scale-125" : "bg-muted-foreground/20 hover:bg-muted-foreground/40"}`} />
              )}
            </div>
            <button onClick={() => {setSelectedFase(Math.min(HONDURAS_FASES.length - 1, selectedFase + 1));setShowTab("tareas");}} disabled={selectedFase === HONDURAS_FASES.length - 1}
            className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors active:scale-95">
              Fase siguiente →
            </button>
          </div>
        </div>
      </div>
    </div>);

}