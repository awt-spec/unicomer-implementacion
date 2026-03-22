import { useState, useRef, useEffect } from "react";
import {
  Server, Shield, Activity, Cloud, AlertTriangle, CheckCircle2,
  XCircle, ChevronDown, Cpu, Globe, Lock, RefreshCw, Zap,
  Database, Network, HardDrive, MonitorCheck
} from "lucide-react";

/* ─── Deployment Models ─── */
const DEPLOYMENT_OPTIONS = [
  {
    key: "unica",
    label: "Instancia Única",
    subtitle: "Centralizada global",
    icon: Server,
    recommended: false,
    description: "Una sola instancia para los 9 países con segregación lógica multi-tenant.",
    pros: [
      { cat: "Operativa", items: ["Gestión centralizada desde un único punto de control", "Despliegue de actualizaciones unificado", "Equipo técnico reducido", "Escalamiento eficiente con recursos dinámicos"] },
      { cat: "Seguridad", items: ["Modelo de seguridad unificado", "Monitoreo consolidado con Azure Sentinel", "Certificaciones compartidas (ISO 27001, SOC 2)"] },
      { cat: "Costos", items: ["Economías de escala en recursos compartidos", "Licenciamiento optimizado", "Reserved Instances más eficientes"] },
    ],
    cons: [
      { cat: "Operativa", items: ["Ventanas de mantenimiento complejas entre 9 zonas horarias", "Riesgo de impacto masivo ante fallas", "Testing más complejo (9 configuraciones)"] },
      { cat: "Seguridad", items: ["Regulaciones de residencia de datos (SUGEF, CNBS)", "Superficie de ataque mayor", "Segregación lógica puede no satisfacer reguladores"] },
      { cat: "Costos", items: ["Egress data costoso para países lejanos", "Sobredimensionamiento inicial requerido"] },
    ],
  },
  {
    key: "multi",
    label: "Multi-País",
    subtitle: "Una instancia por país",
    icon: Globe,
    recommended: false,
    description: "9 instancias independientes, cada país con su propio stack completo en Azure.",
    pros: [
      { cat: "Operativa", items: ["Autonomía total por país", "Aislamiento de fallos completo", "Personalizaciones locales sin riesgo", "Testing independiente por país"] },
      { cat: "Seguridad", items: ["Cumplimiento de residencia de datos", "Aislamiento físico real", "Auditorías simplificadas por regulador local"] },
      { cat: "Costos", items: ["Sin egress data internacional", "Dimensionamiento preciso por país", "Escalamiento progresivo"] },
    ],
    cons: [
      { cat: "Operativa", items: ["9x complejidad de gestión y monitoreo", "Despliegue de actualizaciones fragmentado", "Equipo técnico multiplicado"] },
      { cat: "Seguridad", items: ["9 configuraciones de seguridad independientes", "Parches deben aplicarse 9 veces", "SIEM fragmentado"] },
      { cat: "Costos", items: ["Economías de escala perdidas", "9x infraestructura de red (VNets, Gateways, Firewalls)", "Costos operativos 9x"] },
    ],
  },
  {
    key: "hibrida",
    label: "Híbrida Regional",
    subtitle: "3 instancias regionales",
    icon: Network,
    recommended: true,
    description: "3 instancias agrupadas por región geográfica, balance óptimo entre control y eficiencia.",
    regions: [
      { name: "Centroamérica Norte", azure: "East US", countries: "🇨🇷 Costa Rica, 🇳🇮 Nicaragua, 🇬🇹 Guatemala" },
      { name: "Centroamérica Sur", azure: "East US", countries: "🇵🇦 Panamá, 🇸🇻 El Salvador, 🇭🇳 Honduras" },
      { name: "Caribe", azure: "Brazil South", countries: "🇩🇴 Rep. Dominicana, 🇯🇲 Jamaica, 🇹🇹 Trinidad y Tobago" },
    ],
    pros: [
      { cat: "Operativa", items: ["Balance óptimo: 3 instancias vs 9", "Ventanas de mantenimiento por zona horaria", "Azure DevOps simplificado (3 pipelines)", "Testing por región piloto"] },
      { cat: "Seguridad", items: ["Cumplimiento regulatorio regional", "Aislamiento por región geográfica", "Auditorías regionales facilitadas", "Certificaciones por región"] },
      { cat: "Costos", items: ["Economías de escala parciales (pooling regional)", "Reserved Instances eficientes", "DR regional optimizado", "40% menos CAPEX que Multi-País"] },
    ],
    cons: [
      { cat: "Operativa", items: ["Complejidad de definir agrupaciones regionales", "Personalizaciones por país dentro de región"] },
      { cat: "Seguridad", items: ["Residencia de datos parcial (países estrictos)", "Aislamiento lógico intra-región"] },
      { cat: "Costos", items: ["Menor pooling que instancia única", "2-3x infraestructura vs centralizada"] },
    ],
  },
];

/* ─── Sizing / Limits ─── */
const SIZING_METRICS = [
  { label: "Usuarios concurrentes máx.", value: "5,000–10,000", icon: Cpu },
  { label: "Países por instancia", value: "3–5 (regional)", icon: Globe },
  { label: "TPS sostenidos", value: "500–1,000", icon: Activity },
  { label: "TPS pico", value: "2,000–3,000", icon: Zap },
  { label: "Sesiones concurrentes", value: "15,000–20,000", icon: MonitorCheck },
  { label: "Almacenamiento/cuenta", value: "50–100 KB", icon: HardDrive },
  { label: "BD máxima soportada", value: "10–15 TB", icon: Database },
  { label: "Headroom recomendado", value: "30–40%", icon: Activity },
];

/* ─── Latency ─── */
const LATENCY_LEVELS = [
  { range: "< 50 ms", label: "Óptima", color: "bg-emerald-500", desc: "Experiencia fluida sin degradación" },
  { range: "50–150 ms", label: "Aceptable", color: "bg-amber-400", desc: "Operación normal, ligeros retrasos" },
  { range: "150–300 ms", label: "Tolerable", color: "bg-orange-500", desc: "Degradación moderada pero funcional" },
  { range: "> 300 ms", label: "Crítica", color: "bg-red-500", desc: "Timeouts frecuentes" },
];

/* ─── DR / RPO-RTO ─── */
const DR_TIERS = [
  { tier: "Estándar", rpo: "1 hora", rto: "4 horas", desc: "Respaldos cada hora, restauración completa" },
  { tier: "Mejorado", rpo: "5–15 min", rto: "1–2 horas", desc: "Geo-replication activa + point-in-time restore" },
  { tier: "Crítico", rpo: "< 1 min", rto: "15–30 min", desc: "Replicación síncrona multi-zona" },
  { tier: "Premium", rpo: "Continuo", rto: "< 5 min", desc: "Activo-activo multi-región + Traffic Manager" },
];

/* ─── Security layers ─── */
const SECURITY_LAYERS = [
  { layer: "Capa 3 (Red)", items: ["Azure DDoS Protection Standard (60+ Tbps)", "Azure Firewall con reglas granulares", "NSGs con reglas de entrada/salida"] },
  { layer: "Capa 7 (App)", items: ["WAF con OWASP Core Rule Set", "Azure Front Door contra DDoS de aplicación", "API Management con throttling y cuotas"] },
  { layer: "Datos", items: ["Aislamiento lógico por tenant (RLS)", "TDE con claves únicas por tenant en Key Vault", "Auditoría completa con Azure SQL Auditing"] },
  { layer: "Identidad", items: ["Azure AD B2C con tenants separados", "MFA obligatorio", "VNet peering dedicado por tenant"] },
];

/* ─── Cloud Providers ─── */
const CLOUD_PROVIDERS = [
  { name: "Microsoft Azure", compatible: true, certified: true, note: "Plataforma principal y nativa de SAF+. Soporte completo PaaS." },
  { name: "Amazon Web Services", compatible: true, certified: false, note: "Compatible vía Docker en ECS/EKS. Adaptaciones en identidad." },
  { name: "Google Cloud Platform", compatible: true, certified: false, note: "Compatible vía GKE y Cloud SQL. Sin certificación formal." },
  { name: "IBM Cloud", compatible: false, certified: false, note: "Compatibilidad teórica. No probado en producción." },
  { name: "Oracle Cloud", compatible: false, certified: false, note: "Sin implementaciones de referencia. No recomendado." },
];

/* ─── Tabs ─── */
const TABS = [
  { key: "despliegue", label: "Modelo de Despliegue", icon: Server },
  { key: "sizing", label: "Capacidad & Sizing", icon: Cpu },
  { key: "seguridad", label: "Seguridad", icon: Shield },
  { key: "continuidad", label: "Continuidad & DR", icon: RefreshCw },
  { key: "cloud", label: "Nube", icon: Cloud },
];

function ScrollRevealDiv({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", filter: v ? "blur(0)" : "blur(4px)",
      transition: `all 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    }}>{children}</div>
  );
}

/* ─── Pros/Cons Block ─── */
function ProsConsBlock({ pros, cons }: { pros: { cat: string; items: string[] }[]; cons: { cat: string; items: string[] }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
          <CheckCircle2 size={14} /> Ventajas
        </div>
        {pros.map((g) => (
          <div key={g.cat}>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{g.cat}</p>
            <ul className="space-y-1">
              {g.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-sm">
          <XCircle size={14} /> Desventajas
        </div>
        {cons.map((g) => (
          <div key={g.cat}>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{g.cat}</p>
            <ul className="space-y-1">
              {g.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Deployment Card ─── */
function DeploymentCard({ option }: { option: typeof DEPLOYMENT_OPTIONS[0] }) {
  const [expanded, setExpanded] = useState(option.recommended);
  const Icon = option.icon;

  return (
    <div className={`rounded-xl border overflow-hidden transition-all duration-300 ${option.recommended ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-4 text-left active:scale-[0.98] transition-transform"
      >
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${option.recommended ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
          <Icon size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm text-foreground">{option.label}</h4>
            {option.recommended && (
              <span className="text-[9px] font-bold uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded-full">Recomendada</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{option.subtitle}</p>
        </div>
        <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <div className={`grid transition-all duration-500 ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 border-t">
            <p className="text-xs text-muted-foreground mt-3 mb-2">{option.description}</p>

            {option.regions && (
              <div className="grid grid-cols-3 gap-2 mb-3">
                {option.regions.map((r) => (
                  <div key={r.name} className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{r.name}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">Azure {r.azure}</p>
                    <p className="text-[10px] text-foreground/70 mt-1">{r.countries}</p>
                  </div>
                ))}
              </div>
            )}

            <ProsConsBlock pros={option.pros} cons={option.cons} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Despliegue ─── */
function TabDespliegue() {
  return (
    <div className="space-y-4">
      <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={16} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Recomendación SYSDE: Opción C – Modelo Híbrido Regional</p>
            <p className="text-xs text-muted-foreground mt-1">
              Reduce de 9 a 3 instancias la complejidad operacional. Latencia regional 30-80ms. 
              40% menos CAPEX que multi-país, mejor TCO a 3 años.
            </p>
          </div>
        </div>
      </div>
      {DEPLOYMENT_OPTIONS.map((opt) => (
        <DeploymentCard key={opt.key} option={opt} />
      ))}
    </div>
  );
}

/* ─── Tab: Sizing ─── */
function TabSizing() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {SIZING_METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="bg-card rounded-xl border p-4 hover:shadow-md transition-shadow">
              <Icon size={16} className="text-primary mb-2" />
              <p className="text-lg font-bold text-foreground tabular-nums">{m.value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{m.label}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
          <Activity size={14} className="text-primary" /> Niveles de Latencia
        </h4>
        <div className="space-y-2">
          {LATENCY_LEVELS.map((l) => (
            <div key={l.range} className="flex items-center gap-3 bg-card rounded-lg border p-3">
              <div className={`w-3 h-3 rounded-full ${l.color} shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground tabular-nums">{l.range}</span>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase">{l.label}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-xl border p-4">
        <h4 className="text-xs font-bold text-foreground mb-2">Mitigación de Latencia (Caribe)</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[10px]">
          {["Azure CDN (TTL 24-48h)", "Redis Cache < 5ms", "Azure Front Door", "Compresión Brotli (60-70%)", "Lazy loading", "Query optimization"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-foreground/70">
              <Zap size={8} className="text-primary shrink-0" />{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Seguridad ─── */
function TabSeguridad() {
  return (
    <div className="space-y-4">
      {SECURITY_LAYERS.map((s, i) => (
        <ScrollRevealDiv key={s.layer} delay={i * 80}>
          <div className="bg-card rounded-xl border p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Lock size={14} className="text-primary" />
              <h4 className="text-sm font-bold text-foreground">{s.layer}</h4>
            </div>
            <ul className="space-y-1.5">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                  <Shield size={10} className="text-primary/50 mt-0.5 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollRevealDiv>
      ))}

      <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
        <h4 className="text-xs font-bold text-foreground mb-2">Certificaciones Azure</h4>
        <div className="flex flex-wrap gap-1.5">
          {["ISO 27001", "ISO 27017", "ISO 27018", "SOC 2 Type II", "PCI-DSS Level 1", "HIPAA", "FedRAMP High", "FFIEC", "GLBA"].map((c) => (
            <span key={c} className="text-[9px] font-semibold bg-card border rounded-full px-2.5 py-1 text-foreground/70">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Continuidad ─── */
function TabContinuidad() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
          <Database size={14} className="text-primary" /> RPO / RTO por Tier
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-2.5 font-bold text-foreground rounded-tl-lg">Tier</th>
                <th className="text-left p-2.5 font-bold text-foreground">RPO</th>
                <th className="text-left p-2.5 font-bold text-foreground">RTO</th>
                <th className="text-left p-2.5 font-bold text-foreground rounded-tr-lg">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {DR_TIERS.map((t, i) => (
                <tr key={t.tier} className={`border-t border-border/50 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="p-2.5 font-semibold text-foreground">{t.tier}</td>
                  <td className="p-2.5 tabular-nums text-primary font-medium">{t.rpo}</td>
                  <td className="p-2.5 tabular-nums text-primary font-medium">{t.rto}</td>
                  <td className="p-2.5 text-muted-foreground">{t.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border p-4">
          <h4 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2">
            <RefreshCw size={12} className="text-primary" /> Blue-Green Deployment
          </h4>
          <div className="space-y-2 text-[10px] text-foreground/80">
            {[
              "Dos ambientes idénticos (Blue = prod, Green = nueva versión)",
              "Validación completa en Green sin afectar usuarios",
              "Swap instantáneo vía Azure Traffic Manager",
              "Rollback inmediato (< 30 seg) si hay problemas",
              "Zero-downtime con App Service slots",
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary font-bold">{i + 1}.</span>{s}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border p-4">
          <h4 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2">
            <Globe size={12} className="text-primary" /> Disaster Recovery
          </h4>
          <div className="space-y-2 text-[10px]">
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-muted-foreground">Primaria</span>
              <span className="font-semibold text-foreground">East US 2 (Virginia)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-muted-foreground">DRP</span>
              <span className="font-semibold text-foreground">South Central US (Texas)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-muted-foreground">Alternativa</span>
              <span className="font-semibold text-foreground">Brazil South (São Paulo)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border/50">
              <span className="text-muted-foreground">Failover</span>
              <span className="font-semibold text-primary">&lt; 5 min automático</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">SLA con DRP</span>
              <span className="font-semibold text-primary">99.95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Tab: Cloud Providers ─── */
function TabCloud() {
  return (
    <div className="space-y-3">
      {CLOUD_PROVIDERS.map((p) => (
        <div key={p.name} className={`rounded-xl border p-4 flex items-start gap-4 transition-shadow hover:shadow-md ${p.name === "Microsoft Azure" ? "ring-1 ring-primary/30 bg-primary/5" : "bg-card"}`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${p.compatible && p.certified ? "bg-emerald-100 text-emerald-600" : p.compatible ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-500"}`}>
            <Cloud size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-foreground">{p.name}</h4>
              {p.certified && <span className="text-[8px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Certificado</span>}
              {p.compatible && !p.certified && <span className="text-[8px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Compatible</span>}
              {!p.compatible && <span className="text-[8px] font-bold uppercase tracking-wider bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Limitado</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{p.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */
export function InfraestructuraSection() {
  const [activeTab, setActiveTab] = useState("despliegue");

  const renderTab = () => {
    switch (activeTab) {
      case "despliegue": return <TabDespliegue />;
      case "sizing": return <TabSizing />;
      case "seguridad": return <TabSeguridad />;
      case "continuidad": return <TabContinuidad />;
      case "cloud": return <TabCloud />;
      default: return null;
    }
  };

  return (
    <section id="infraestructura" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollRevealDiv className="mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Consultoría Técnica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Estrategia de Infraestructura
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-2xl">
            Arquitectura cloud para 9 países, 2.15M créditos y 1.97M transacciones mensuales sobre Microsoft Azure.
          </p>
        </ScrollRevealDiv>

        {/* Tabs */}
        <ScrollRevealDiv delay={100} className="mb-6">
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollRevealDiv>

        {/* Tab Content */}
        <div key={activeTab} className="animate-in fade-in duration-300">
          {renderTab()}
        </div>
      </div>
    </section>
  );
}
