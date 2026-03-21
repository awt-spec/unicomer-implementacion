export const NAV_SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "resumen", label: "Resumen" },
  { id: "modulos", label: "Módulos" },
  { id: "paises", label: "Países" },
  { id: "timeline", label: "Fases" },
  { id: "hitos", label: "Hitos" },
  { id: "equipo", label: "Equipo" },
  { id: "sla", label: "SLA" },
];

export const KPIS = [
  { value: 9, suffix: "", label: "Países" },
  { value: 7, suffix: "", label: "Fases" },
  { value: 24, suffix: "", label: "Meses" },
  { value: 38, suffix: "+", label: "Entregables" },
];

export const MODULOS = {
  core: [
    { name: "Originación de Crédito", desc: "Evaluación, scoring crediticio y aprobación de solicitudes de crédito al consumo." },
    { name: "Gestión de Cartera", desc: "Administración del ciclo de vida completo del crédito: desembolso, pagos, mora, castigo." },
    { name: "Cobranza", desc: "Estrategias de cobro automatizadas, asignación de gestores y seguimiento de promesas de pago." },
    { name: "Contabilidad", desc: "Motor contable integrado con generación de pólizas, cierre diario y reportes regulatorios." },
    { name: "Parametrización", desc: "Configuración centralizada de productos, tasas, plazos, comisiones y reglas de negocio." },
  ],
  integraciones: [
    { name: "Core Bancario / ERP", desc: "Interfaces con sistemas legados SAP, Oracle y core bancarios existentes." },
    { name: "Burós de Crédito", desc: "Consulta y reporte a burós locales en cada país (Equifax, TransUnion, etc.)." },
    { name: "Pasarelas de Pago", desc: "Integración con pasarelas locales, ACH, transferencias y pagos en línea." },
    { name: "Reguladores", desc: "Reportes regulatorios por país: CNBS, SSF, SIB, SUGEF, entre otros." },
  ],
  operaciones: [
    { name: "Reportería BI", desc: "Dashboards ejecutivos y operativos con métricas de cartera, mora e indicadores clave." },
    { name: "Seguridad & Auditoría", desc: "Control de acceso por roles, bitácora de transacciones y auditoría de cambios." },
    { name: "Migración de Datos", desc: "Extracción, transformación y carga de datos desde sistemas legados hacia SAF+." },
  ],
};

export const PAISES = [
  { pais: "El Salvador", bandera: "🇸🇻", ola: "Piloto", periodo: "M1–M9", regulador: "SSF", idioma: "Español" },
  { pais: "Honduras", bandera: "🇭🇳", ola: "Ola 1", periodo: "M7–M15", regulador: "CNBS", idioma: "Español" },
  { pais: "Guatemala", bandera: "🇬🇹", ola: "Ola 1", periodo: "M7–M15", regulador: "SIB", idioma: "Español" },
  { pais: "Nicaragua", bandera: "🇳🇮", ola: "Ola 1", periodo: "M10–M18", regulador: "SIBOIF", idioma: "Español" },
  { pais: "Costa Rica", bandera: "🇨🇷", ola: "Ola 2", periodo: "M13–M21", regulador: "SUGEF", idioma: "Español" },
  { pais: "Panamá", bandera: "🇵🇦", ola: "Ola 2", periodo: "M13–M21", regulador: "SBP", idioma: "Español" },
  { pais: "Rep. Dominicana", bandera: "🇩🇴", ola: "Ola 2", periodo: "M16–M24", regulador: "SIB-RD", idioma: "Español" },
  { pais: "Jamaica", bandera: "🇯🇲", ola: "Ola 2", periodo: "M16–M24", regulador: "BOJ", idioma: "Inglés" },
  { pais: "Trinidad y Tobago", bandera: "🇹🇹", ola: "Ola 2", periodo: "M18–M24", regulador: "CBTT", idioma: "Inglés" },
];

export const FASES = [
  {
    num: 1, nombre: "Inicio & Planificación", meses: "M1–M2",
    actividades: ["Kick-off ejecutivo", "Conformación de equipos", "Plan de trabajo detallado", "Definición de infraestructura", "Acuerdos de nivel de servicio"],
  },
  {
    num: 2, nombre: "Análisis & Diseño", meses: "M2–M4",
    actividades: ["Levantamiento de procesos AS-IS", "Diseño de procesos TO-BE", "Análisis de brechas (Gap Analysis)", "Especificaciones funcionales", "Diseño de integraciones"],
  },
  {
    num: 3, nombre: "Configuración & Desarrollo", meses: "M4–M7",
    actividades: ["Parametrización de SAF+ Core", "Desarrollo de customizaciones", "Construcción de interfaces", "Configuración de productos crediticios", "Ambientes de desarrollo y QA"],
  },
  {
    num: 4, nombre: "Pruebas Integrales", meses: "M6–M8",
    actividades: ["Pruebas unitarias", "Pruebas de integración", "Pruebas de aceptación de usuario (UAT)", "Pruebas de rendimiento y estrés", "Corrección de defectos"],
  },
  {
    num: 5, nombre: "Migración de Datos", meses: "M7–M9",
    actividades: ["Mapeo de datos fuente-destino", "ETL y limpieza de datos", "Migración en paralelo", "Validación y conciliación", "Cutover plan"],
  },
  {
    num: 6, nombre: "Capacitación & Go-Live", meses: "M8–M9",
    actividades: ["Entrenamiento a usuarios clave", "Capacitación masiva", "Soporte en sitio Go-Live", "Monitoreo post-producción", "Hypercare 30 días"],
  },
  {
    num: 7, nombre: "Estabilización & Réplica", meses: "M9–M24",
    actividades: ["Soporte post-implementación", "Réplica a Ola 1 y Ola 2", "Ajustes regulatorios por país", "Transferencia de conocimiento", "Cierre formal del proyecto"],
  },
];

export const HITOS = [
  { nombre: "Go-Live El Salvador (Piloto)", mes: "M9", responsable: "Director de Proyecto SYSDE", criterio: "SAF+ en producción con operación estable 30 días" },
  { nombre: "Go-Live Ola 1 (HN, GT, NI)", mes: "M15–M18", responsable: "Líderes de Ola 1", criterio: "Tres países operando con SAF+ y reportes regulatorios" },
  { nombre: "Go-Live Ola 2 (CR, PA, DO, JM, TT)", mes: "M21–M24", responsable: "Líderes de Ola 2", criterio: "Cinco países en producción, integración completa" },
  { nombre: "Cierre Formal del Proyecto", mes: "M24", responsable: "PMO Conjunto", criterio: "Acta de cierre firmada, lecciones aprendidas documentadas" },
];

export const EQUIPO_SYSDE = [
  { nombre: "Carlos Cascante", rol: "Project Director / Engagement Manager", iniciales: "CC", experiencia: "30 años", dedicacion: "100%", pais: "Costa Rica", foto: "carlos-cascante" },
  { nombre: "Luis Mangel Alfaro Leal", rol: "Lead Solution Architect", iniciales: "LA", experiencia: "22 años", dedicacion: "100%", pais: "Costa Rica", foto: "luis-alfaro" },
  { nombre: "María Nelly Vargas Salazar", rol: "Functional Lead (Credit Expert)", iniciales: "MV", experiencia: "37 años", dedicacion: "100%", pais: "Costa Rica", foto: "nelly-vargas" },
  { nombre: "Olga Lucia Cuervo Restrepo", rol: "Technical Lead (Integration)", iniciales: "OC", experiencia: "23 años", dedicacion: "100%", pais: "Colombia" },
  { nombre: "Jhonny Brenes", rol: "Migration Specialist", iniciales: "JB", experiencia: "6 años", dedicacion: "100%", pais: "Colombia" },
  { nombre: "Fernando Pinto", rol: "Change Management Lead", iniciales: "FP", experiencia: "25 años", dedicacion: "100%", pais: "Bolivia", foto: "fernando-pinto" },
  { nombre: "Julian Gómez", rol: "Technical Consultant", iniciales: "JG", experiencia: "20 años", dedicacion: "100%", pais: "Colombia", foto: "julian-gomez" },
  { nombre: "Dennis García", rol: "Software Developer", iniciales: "DG", experiencia: "19 años", dedicacion: "50%", pais: "Costa Rica", foto: "dennis-garcia" },
  { nombre: "Javier Acuña", rol: "Senior Developer", iniciales: "JA", experiencia: "20 años", dedicacion: "100%", pais: "Costa Rica" },
  { nombre: "Martin Pisacreta", rol: "Senior Backend Developer", iniciales: "MP", experiencia: "8 años", dedicacion: "50%", pais: "Argentina", foto: "martin-pisacreta" },
  { nombre: "Orlando Castro", rol: "Business Consultant", iniciales: "OC", experiencia: "31 años", dedicacion: "100%", pais: "Costa Rica", foto: "orlando-castro" },
  { nombre: "Alexander Avila", rol: "Backend and API Services Developer", iniciales: "AA", experiencia: "6 años", dedicacion: "50%", pais: "Perú" },
  { nombre: "Lucas Julián Sain", rol: "Arquitecto de Cloud y Transformación Digital", iniciales: "LS", experiencia: "22 años", dedicacion: "80%", pais: "Costa Rica", foto: "lucas-sain" },
  { nombre: "Carlos Andrés Solís Sequeira", rol: "Administración de Infraestructura", iniciales: "CS", experiencia: "14 años", dedicacion: "100%", pais: "Costa Rica" },
  { nombre: "Danilo Vezzoni", rol: "QA Specialist", iniciales: "DV", experiencia: "15 años", dedicacion: "100%", pais: "Costa Rica" },
];


export const SLA_SEVERITIES = [
  {
    level: "Severidad 1",
    label: "Crítica",
    color: "destructive" as const,
    definition: "Sistema caído. Pérdida total de funciones de negocio críticas (ej: no se pueden procesar préstamos nuevos, no se pueden recibir pagos, API Gateway caído).",
    availability: "24×7",
    responseTime: "1 hora",
    resolutionTime: "1 hora",
    penalty: "Los créditos de servicio serán acordados mutuamente con Unicomer y sujetos al modelo de soporte seleccionado.",
  },
  {
    level: "Severidad 2",
    label: "Alta",
    color: "warning" as const,
    definition: "Impacto mayor. Sistema operativo pero severamente degradado. Funciones críticas disponibles pero lentas o intermitentes (ej: Motor de Riesgo fallando en 30% de solicitudes).",
    availability: "24×7",
    responseTime: "1 hora",
    resolutionTime: "4 horas",
    penalty: "Los créditos de servicio serán acordados mutuamente con Unicomer y sujetos al modelo de soporte seleccionado.",
  },
  {
    level: "Severidad 3",
    label: "Media",
    color: "secondary" as const,
    definition: "Impacto menor. Errores no críticos. Solución alternativa disponible (ej: error en módulo de reportes, error de visualización en UI).",
    availability: "Horario laboral por país:\n• UTC-6: El Salvador, Honduras, Guatemala, Nicaragua, Costa Rica (08:00–17:00)\n• UTC-5: Ecuador, Jamaica (08:00–17:00)\n• UTC-4: Trinidad, Guyana (08:00–17:00)",
    responseTime: "4 horas",
    resolutionTime: "12 horas",
    penalty: "Los créditos de servicio serán acordados mutuamente con Unicomer y sujetos al modelo de soporte seleccionado.",
  },
  {
    level: "Severidad 4",
    label: "Baja",
    color: "outline" as const,
    definition: "Cosmético/Solicitud. Errores de texto, solicitudes de documentación, cambios de configuración no urgentes.",
    availability: "Horario laboral por país:\n• UTC-6: El Salvador, Honduras, Guatemala, Nicaragua, Costa Rica (08:00–17:00)\n• UTC-5: Ecuador, Jamaica (08:00–17:00)\n• UTC-4: Trinidad, Guyana (08:00–17:00)",
    responseTime: "4 horas",
    resolutionTime: "24 horas",
    penalty: "Los créditos de servicio serán acordados mutuamente con Unicomer y sujetos al modelo de soporte seleccionado.",
  },
];

export const SLA_UPTIME = [
  {
    metric: "Disponibilidad del Sistema",
    target: "99.95% mínimo",
    period: "Mensual",
    penalty: "Los créditos de servicio serán acordados mutuamente con Unicomer.",
  },
  {
    metric: "Latencia de API",
    target: "Impacto mayor. Sistema operativo pero con degradación severa. Funciones críticas disponibles pero lentas o intermitentes.",
    period: "Mensual",
    penalty: "Monitoreo y reportes de rendimiento.",
  },
  {
    metric: "Procesamiento Batch",
    target: "Sincronización de eventos en tiempo real: 10–20 Mbps/región · Replicación batch nocturna: 50–100 Mbps/región · Trabajos batch durante ventanas de mantenimiento acordadas.",
    period: "Diario",
    penalty: "Procedimientos de monitoreo y escalamiento.",
  },
];

export const RIESGOS = [
  { riesgo: "Resistencia al cambio organizacional", nivel: "ALTO", probabilidad: "Alta", impacto: "Alto", mitigacion: "Programa de gestión del cambio con comunicación ejecutiva, champions por país y capacitación temprana." },
  { riesgo: "Retrasos en disponibilidad de contrapartes", nivel: "ALTO", probabilidad: "Media", impacto: "Alto", mitigacion: "Acuerdos de dedicación firmados, escalamiento ejecutivo definido, buffer de 15% en cronograma." },
  { riesgo: "Complejidad regulatoria multi-país", nivel: "MEDIO", probabilidad: "Alta", impacto: "Medio", mitigacion: "Equipo legal dedicado por ola, análisis regulatorio anticipado y parametrización flexible." },
  { riesgo: "Calidad de datos en sistemas legados", nivel: "ALTO", probabilidad: "Alta", impacto: "Alto", mitigacion: "Assessment de datos temprano, reglas de limpieza automatizadas y períodos de migración en paralelo." },
  { riesgo: "Integración con sistemas heterogéneos", nivel: "MEDIO", probabilidad: "Media", impacto: "Medio", mitigacion: "Capa de API estandarizada, pruebas de integración continua y middleware de orquestación." },
  { riesgo: "Rotación de personal clave", nivel: "MEDIO", probabilidad: "Media", impacto: "Alto", mitigacion: "Documentación detallada, knowledge base compartida y backup designado por rol." },
];

export const HERRAMIENTAS = [
  { nombre: "Jira", categoria: "Gestión de Proyecto" },
  { nombre: "Confluence", categoria: "Documentación" },
  { nombre: "Git / Azure DevOps", categoria: "Control de Versiones" },
  { nombre: "Teams / Slack", categoria: "Comunicación" },
  { nombre: "Power BI", categoria: "Reportería PMO" },
  { nombre: "SonarQube", categoria: "Calidad de Código" },
];

export const PROXIMOS_PASOS = [
  { paso: "Aprobación del plan de implementación por Comité Ejecutivo", responsable: "Sponsor Unicomer", plazo: "Semana 1", urgencia: "alta" },
  { paso: "Firma de acuerdos de dedicación de recursos", responsable: "RRHH Unicomer / SYSDE", plazo: "Semana 2", urgencia: "alta" },
  { paso: "Provisión de ambientes de desarrollo y QA", responsable: "TI Unicomer", plazo: "Semana 2–3", urgencia: "alta" },
  { paso: "Kick-off ejecutivo con equipos de ambas partes", responsable: "PMO Conjunto", plazo: "Semana 3", urgencia: "media" },
  { paso: "Inicio de levantamiento de procesos AS-IS (El Salvador)", responsable: "Líder Funcional SYSDE", plazo: "Semana 4", urgencia: "media" },
];
