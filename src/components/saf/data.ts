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
  { value: 6, suffix: "", label: "Fases" },
  { value: 5, suffix: "", label: "Años" },
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
  { pais: "Honduras", bandera: "🇭🇳", fase: "Fase 1", periodo: "Año 1–2", regulador: "CNBS", idioma: "Español", ownership: "100% SYSDE" },
  { pais: "Nicaragua", bandera: "🇳🇮", fase: "Fase 2", periodo: "Año 3", regulador: "SIBOIF", idioma: "Español", ownership: "50% SYSDE / 50% Unicomer" },
  { pais: "Guyana", bandera: "🇬🇾", fase: "Fase 3", periodo: "Año 3.5", regulador: "BOG", idioma: "Inglés", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "Ecuador", bandera: "🇪🇨", fase: "Fase 3", periodo: "Año 3.5", regulador: "SEPS", idioma: "Español", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "Trinidad y Tobago", bandera: "🇹🇹", fase: "Fase 4", periodo: "Año 4", regulador: "CBTT", idioma: "Inglés", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "Jamaica", bandera: "🇯🇲", fase: "Fase 4", periodo: "Año 4", regulador: "BOJ", idioma: "Inglés", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "Guatemala", bandera: "🇬🇹", fase: "Fase 4", periodo: "Año 4", regulador: "SIB", idioma: "Español", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "El Salvador", bandera: "🇸🇻", fase: "Fase 5", periodo: "Año 4.5", regulador: "SSF", idioma: "Español", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
  { pais: "Costa Rica", bandera: "🇨🇷", fase: "Fase 6", periodo: "Año 5", regulador: "SUGEF", idioma: "Español", ownership: "Unicomer + soporte activo ilimitado SYSDE" },
];

export const FASES = [
  {
    num: 1, nombre: "Honduras — País Piloto", periodo: "Año 1–2",
    ownership: "100% SYSDE",
    actividades: ["Implementación liderada 100% por SYSDE", "Involucramiento intensivo y shadowing del equipo Unicomer", "Capacitación, transferencia de conocimiento y dominio completo del Core System", "Kick-off ejecutivo y conformación de equipos", "Análisis, diseño, configuración, pruebas, migración y Go-Live"],
  },
  {
    num: 2, nombre: "Nicaragua — Modelo Compartido", periodo: "Año 3",
    ownership: "50% SYSDE / 50% Unicomer",
    actividades: ["Modelo de implementación compartido", "Incremento de la propiedad operativa y técnica de Unicomer", "Ajustes regulatorios para SIBOIF", "Validación de la capacidad interna de Unicomer"],
  },
  {
    num: 3, nombre: "Guyana y Ecuador — En Paralelo", periodo: "Año 3.5",
    ownership: "Unicomer + soporte activo ilimitado SYSDE",
    actividades: ["Implementación liderada por el equipo Unicomer", "Soporte activo ilimitado de SYSDE", "Despliegue en paralelo en ambos países", "Adaptaciones regulatorias y de idioma"],
  },
  {
    num: 4, nombre: "Trinidad, Jamaica y Guatemala — En Paralelo", periodo: "Año 4",
    ownership: "Unicomer + soporte activo ilimitado SYSDE",
    actividades: ["Implementaciones lideradas por Unicomer", "Soporte activo ilimitado de SYSDE", "Tres países desplegados en paralelo", "Soporte multilenguaje (Español/Inglés)"],
  },
  {
    num: 5, nombre: "El Salvador", periodo: "Año 4.5",
    ownership: "Unicomer + soporte activo ilimitado SYSDE",
    actividades: ["Implementación liderada por el equipo Unicomer", "Soporte activo ilimitado de SYSDE", "Ajustes regulatorios para SSF"],
  },
  {
    num: 6, nombre: "Costa Rica", periodo: "Año 5",
    ownership: "Unicomer + soporte activo ilimitado SYSDE",
    actividades: ["Implementación liderada por el equipo Unicomer", "Soporte activo ilimitado de SYSDE", "Cierre del programa de despliegue regional", "Ajustes regulatorios para SUGEF", "Lecciones aprendidas y cierre formal"],
  },
];

export const HITOS = [
  { nombre: "Go-Live Honduras (Piloto)", mes: "Fin Año 2", responsable: "Director de Proyecto SYSDE", criterio: "SAF+ en producción con operación estable. Go/No-Go Decision Gate para siguiente fase." },
  { nombre: "Go-Live Nicaragua (Modelo Compartido)", mes: "Fin Año 3", responsable: "Equipo Conjunto SYSDE/Unicomer", criterio: "País operando con SAF+ bajo modelo compartido 50/50" },
  { nombre: "Go-Live Guyana y Ecuador", mes: "Año 3.5", responsable: "Equipo Unicomer", criterio: "Dos países en producción, liderados por Unicomer con soporte activo ilimitado SYSDE" },
  { nombre: "Go-Live Trinidad, Jamaica y Guatemala", mes: "Año 4", responsable: "Equipo Unicomer", criterio: "Tres países en producción, liderados por Unicomer con soporte activo ilimitado SYSDE" },
  { nombre: "Go-Live El Salvador", mes: "Año 4.5", responsable: "Equipo Unicomer", criterio: "País en producción con soporte activo ilimitado SYSDE" },
  { nombre: "Go-Live Costa Rica — Cierre del Programa", mes: "Año 5", responsable: "PMO Conjunto", criterio: "Todos los países operativos. Acta de cierre firmada, lecciones aprendidas documentadas." },
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
