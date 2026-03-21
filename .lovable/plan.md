

# Plan de Implementación SAF+ — Landing Page Interactivo (Estilo SYSDE)

## Visión General
Una landing page interactiva tipo "Mission Control" que presenta el plan de implementación SAF+ para Grupo Unicomer, con la identidad visual de SYSDE (rojo crimson, blanco, charcoal, tipografía corporativa bold).

## Secciones

### 1. Hero — Portada Ejecutiva
- Fondo con gradiente rojo crimson (#C8102E → #8B0000) diagonal, como el hero de sysde.com
- Logo SYSDE + título "Plan de Implementación SAF+ Core System Solution"
- Info: Cliente Grupo Unicomer | RFP UGN1000123 | 24 meses | Marzo 2026
- 4 KPI cards animados: 9 Países, 7 Fases, 24 Meses, 38+ Entregables
- Botón scroll suave "Explorar Plan"

### 2. Resumen Ejecutivo
- Descripción del proyecto con texto limpio
- Modelo de 3 olas explicado visualmente con iconos

### 3. Alcance — Módulos SAF+
- Grid interactivo con 3 columnas (Core, Integraciones, Operaciones)
- Cards con hover que expanden descripción de cada módulo
- Icono + nombre + tooltip con detalle

### 4. Cobertura Geográfica — 9 Países
- Cards por país con bandera emoji, ola asignada, período, regulador, idioma
- Tabs o filtro por Ola (Piloto / Ola 1 / Ola 2)
- Animación de entrada escalonada

### 5. Timeline Interactivo — Plan de Fases
- Timeline vertical con "hilo rojo" (red thread) conectando las 7 fases
- Cada fase es un nodo expandible con click → muestra detalle de actividades
- Indicador visual de estado (Pendiente / Hito)
- Barras de Gantt simplificadas para cronograma macro de 24 meses

### 6. Hitos Principales
- Cards destacadas con Go-Live El Salvador, Ola 1, Ola 2, Cierre
- Mes estimado, responsable, criterio de aceptación

### 7. Equipo de Proyecto
- Dos columnas: Equipo SYSDE / Contraparte Unicomer
- Cards con nombre, rol y responsabilidades principales
- Avatares con iniciales en círculos rojo/gris

### 8. Matriz de Riesgos
- Tabla interactiva con código de color por nivel (ALTO=rojo, MEDIO=amarillo, BAJO=verde)
- Hover para ver mitigación completa
- Badge de nivel de riesgo

### 9. Metodología & Herramientas
- Framework de gobierno con iconos
- Grid de herramientas PMO
- Modelo de soporte L1/L2/L3 visual

### 10. Próximos Pasos
- Lista numerada con responsable y plazo
- Badges de urgencia
- CTA final: "Documento Confidencial — SYSDE Internacional Inc."

## Diseño & Interactividad
- **Colores**: Rojo SYSDE (#C8102E), blanco, charcoal (#1E293B), gris claro (#F2F4F7)
- **Tipografía**: Inter/sans-serif, títulos bold uppercase
- **Navegación**: Navbar sticky con scroll spy a cada sección
- **Animaciones**: Fade-in al scroll (Intersection Observer), counters animados en KPIs
- **Responsive**: Mobile-first, se adapta a presentación en boardroom
- **Dark sections**: Hero y footer con fondo oscuro/rojo, contenido sobre blanco

