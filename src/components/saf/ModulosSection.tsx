import { useState, useRef, useEffect } from "react";
import { MODULOS } from "./data";
import {
  Shield, Settings, Users, Calculator, Landmark, FileCheck,
  Briefcase, PhoneCall, Receipt, Wallet, PiggyBank, Clock, SlidersHorizontal,
  BookOpen, Scale, AlertTriangle, BarChart3, ArrowLeftRight, CreditCard, Store, Building2, Smartphone,
  LineChart, ShieldCheck, Database, Eye,
} from "lucide-react";

type TabKey = keyof typeof MODULOS;

const CORE_ICONS = [Shield, Settings, Users, Calculator, Landmark, FileCheck, Briefcase, PhoneCall, Receipt, Wallet, PiggyBank, Clock, SlidersHorizontal];
const INTEG_ICONS = [BookOpen, Scale, AlertTriangle, BarChart3, ArrowLeftRight, CreditCard, Store, Building2, Smartphone];
const OPS_ICONS = [LineChart, ShieldCheck, Database];

const ICON_MAP: Record<TabKey, typeof CORE_ICONS> = {
  core: CORE_ICONS,
  integraciones: INTEG_ICONS,
  operaciones: OPS_ICONS,
};

const ORBITS: { key: TabKey; label: string; radius: number; color: string; colorBg: string; iconColor: string }[] = [
  { key: "core", label: "SAF+ Core", radius: 130, color: "hsl(352, 88%, 43%)", colorBg: "bg-primary/10 text-primary border-primary/20", iconColor: "text-primary" },
  { key: "integraciones", label: "Integraciones", radius: 250, color: "hsl(38, 92%, 50%)", colorBg: "bg-amber-50 text-amber-600 border-amber-200", iconColor: "text-amber-500" },
  { key: "operaciones", label: "Operaciones", radius: 350, color: "hsl(199, 89%, 48%)", colorBg: "bg-sky-50 text-sky-600 border-sky-200", iconColor: "text-sky-500" },
];

function getPositions(count: number, radius: number, offsetAngle = 0) {
  return Array.from({ length: count }, (_, i) => {
    const angle = offsetAngle + (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  });
}

export function ModulosSection() {
  const [activeOrbit, setActiveOrbit] = useState<TabKey | null>(null);
  const [activeModule, setActiveModule] = useState<{ name: string; desc: string } | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const size = 780;
  const cx = size / 2;
  const cy = size / 2;

  // Show all orbits when nothing selected
  const showAll = activeOrbit === null;

  return (
    <section ref={sectionRef} id="modulos" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Alcance del Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Módulos SAF+
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl">
            Explora el ecosistema SAF+ — selecciona una capa para ver sus módulos.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col xl:flex-row gap-10 items-start">
          {/* Solar system */}
          <div className="relative shrink-0 hidden lg:block" style={{ width: size, height: size }}>
            {/* Orbit rings */}
            <svg width={size} height={size} className="absolute inset-0" aria-hidden>
              {ORBITS.map((orbit, oi) => (
                <circle
                  key={orbit.key}
                  cx={cx} cy={cy} r={orbit.radius}
                  fill="none"
                  stroke={activeOrbit === orbit.key ? orbit.color : "hsl(220, 13%, 91%)"}
                  strokeWidth={activeOrbit === orbit.key ? 2.5 : 1}
                  strokeDasharray={activeOrbit === orbit.key ? "none" : "6 6"}
                  className="transition-all duration-700"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transitionDelay: `${oi * 200}ms`,
                  }}
                />
              ))}
            </svg>

            {/* Sun */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl shadow-primary/25 z-10 cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
              style={{
                width: 90, height: 90,
                left: cx - 45, top: cy - 45,
                opacity: isInView ? 1 : 0,
                transition: "opacity 0.6s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s",
              }}
              onClick={() => { setActiveOrbit(null); setActiveModule(null); }}
            >
              <span className="text-white font-bold text-sm text-center leading-tight">SAF+</span>
            </div>

            {/* Module nodes */}
            {ORBITS.map((orbit, oi) => {
              const mods = MODULOS[orbit.key];
              const icons = ICON_MAP[orbit.key];
              const positions = getPositions(mods.length, orbit.radius, oi * 0.3 + 0.2);
              const isActive = activeOrbit === orbit.key;
              const showNodes = isActive || showAll;

              return positions.map((pos, i) => {
                const mod = mods[i];
                const Icon = icons[i % icons.length];
                const isSelected = activeModule?.name === mod.name;
                const nodeSize = 42;

                return (
                  <button
                    key={mod.name}
                    onClick={() => { setActiveOrbit(orbit.key); setActiveModule(mod); }}
                    className={`absolute rounded-full border flex items-center justify-center active:scale-90 group ${
                      isSelected
                        ? `${orbit.colorBg} ring-2 ring-offset-2 shadow-lg`
                        : isActive
                        ? "bg-card hover:shadow-md border-border"
                        : "bg-card border-border/40 shadow-sm"
                    }`}
                    style={{
                      width: nodeSize, height: nodeSize,
                      left: cx + pos.x - nodeSize / 2,
                      top: cy + pos.y - nodeSize / 2,
                      opacity: showNodes ? (isInView ? (isActive ? 1 : 0.45) : 0) : 0,
                      transform: showNodes && isInView
                        ? `scale(${isSelected ? 1.15 : isActive ? 1 : 0.85})`
                        : "scale(0.3)",
                      pointerEvents: showNodes ? "auto" : "none",
                      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: showNodes ? `${i * 50 + oi * 100}ms` : "0ms",
                    }}
                    title={mod.name}
                  >
                    <Icon size={16} strokeWidth={1.8} className={isSelected ? "" : "text-foreground/70"} />
                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-medium bg-foreground text-background px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      {mod.name}
                    </span>
                  </button>
                );
              });
            })}

            {/* Orbit labels on the rings */}
            {ORBITS.map((orbit) => (
              <button
                key={`label-${orbit.key}`}
                onClick={() => {
                  setActiveOrbit(activeOrbit === orbit.key ? null : orbit.key);
                  setActiveModule(null);
                }}
                className="absolute z-10 transition-all duration-300 active:scale-95"
                style={{
                  left: cx - 50,
                  top: cy - orbit.radius - 12,
                  opacity: isInView ? 1 : 0,
                }}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 ${
                    activeOrbit === orbit.key
                      ? orbit.colorBg
                      : "bg-card/90 text-muted-foreground border-border/50 hover:border-foreground/30"
                  }`}
                >
                  {orbit.label}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel + list */}
          <div className="flex-1 min-w-0 w-full">
            {/* Filter buttons - moved here, vertical on desktop */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
              <button
                onClick={() => { setActiveOrbit(null); setActiveModule(null); }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                  showAll ? "bg-foreground text-background border-foreground" : "bg-card text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                <Eye size={12} />
                Todos
                <span className="text-muted-foreground/70 font-normal">
                  ({Object.values(MODULOS).reduce((a, b) => a + b.length, 0)})
                </span>
              </button>
              {ORBITS.map((orbit) => (
                <button
                  key={orbit.key}
                  onClick={() => {
                    setActiveOrbit(activeOrbit === orbit.key ? null : orbit.key);
                    setActiveModule(null);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                    activeOrbit === orbit.key ? orbit.colorBg : "bg-card text-muted-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: orbit.color }} />
                  {orbit.label}
                  <span className="text-muted-foreground font-normal">({MODULOS[orbit.key].length})</span>
                </button>
              ))}
            </div>

            {activeModule ? (
              <div className="bg-card rounded-2xl border p-8 shadow-sm animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: ORBITS.find(o => o.key === activeOrbit)?.color }} />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {ORBITS.find(o => o.key === activeOrbit)?.label}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{activeModule.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{activeModule.desc}</p>
                <button
                  onClick={() => setActiveModule(null)}
                  className="mt-4 text-xs text-primary font-medium hover:underline active:scale-95 transition-transform"
                >
                  ← Ver todos los módulos
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {(showAll ? ORBITS : ORBITS.filter(o => o.key === activeOrbit)).map((orbit) => {
                  const icons = ICON_MAP[orbit.key];
                  const isExpanded = showAll || activeOrbit === orbit.key;
                  return (
                    <div
                      key={orbit.key}
                      className={`bg-card rounded-xl border p-5 transition-all duration-300 ${
                        activeOrbit === orbit.key ? `${orbit.colorBg} shadow-md` : ""
                      }`}
                    >
                      <div
                        className="flex items-center gap-3 mb-1 cursor-pointer active:scale-[0.98] transition-transform"
                        onClick={() => setActiveOrbit(activeOrbit === orbit.key ? null : orbit.key)}
                      >
                        <div className="w-3 h-3 rounded-full" style={{ background: orbit.color }} />
                        <h4 className="font-bold text-sm">{orbit.label}</h4>
                        <span className="text-xs text-muted-foreground ml-auto">{MODULOS[orbit.key].length} módulos</span>
                      </div>
                      {isExpanded && (
                        <div className="mt-3 grid sm:grid-cols-2 gap-1.5 animate-fade-in">
                          {MODULOS[orbit.key].map((mod, mi) => {
                            const Icon = icons[mi % icons.length];
                            return (
                              <div
                                key={mod.name}
                                onClick={() => { setActiveModule(mod); setActiveOrbit(orbit.key); }}
                                className="text-sm py-2 px-3 rounded-lg hover:bg-background/80 transition-colors cursor-pointer active:scale-[0.98] flex items-center gap-2"
                              >
                                <Icon size={14} className="shrink-0 text-muted-foreground" />
                                <span className="font-medium text-foreground">{mod.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
