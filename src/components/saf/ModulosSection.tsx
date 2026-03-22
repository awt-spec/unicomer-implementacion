import { useState, useRef, useEffect } from "react";
import { MODULOS } from "./data";

type TabKey = keyof typeof MODULOS;

const ORBITS: { key: TabKey; label: string; radius: number; color: string; colorBg: string }[] = [
  { key: "core", label: "SAF+ Core", radius: 140, color: "hsl(352, 88%, 43%)", colorBg: "bg-primary/10 text-primary border-primary/20" },
  { key: "integraciones", label: "Integraciones", radius: 220, color: "hsl(38, 92%, 50%)", colorBg: "bg-amber-50 text-amber-600 border-amber-200" },
  { key: "operaciones", label: "Operaciones", radius: 290, color: "hsl(199, 89%, 48%)", colorBg: "bg-sky-50 text-sky-600 border-sky-200" },
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cx = 320;
  const cy = 320;

  return (
    <section ref={sectionRef} id="modulos" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal mb-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Alcance del Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Módulos SAF+
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl">
            Explora el ecosistema SAF+ — haz clic en un módulo para ver su descripción.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col lg:flex-row gap-10 items-center">
          {/* Solar system */}
          <div className="relative shrink-0" style={{ width: 640, height: 640 }}>
            <svg width="640" height="640" className="absolute inset-0" aria-hidden>
              {ORBITS.map((orbit) => (
                <circle
                  key={orbit.key}
                  cx={cx} cy={cy} r={orbit.radius}
                  fill="none"
                  stroke={activeOrbit === orbit.key ? orbit.color : "hsl(220, 13%, 91%)"}
                  strokeWidth={activeOrbit === orbit.key ? 2 : 1}
                  strokeDasharray={activeOrbit === orbit.key ? "none" : "4 4"}
                  className="transition-all duration-500"
                  style={{ opacity: isInView ? 1 : 0, transitionDelay: `${ORBITS.indexOf(orbit) * 200}ms` }}
                />
              ))}
            </svg>

            {/* Sun */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 z-10 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
              style={{
                width: 80, height: 80,
                left: cx - 40, top: cy - 40,
                opacity: isInView ? 1 : 0,
                transition: "opacity 0.6s, transform 0.3s",
              }}
              onClick={() => { setActiveOrbit(null); setActiveModule(null); }}
            >
              <span className="text-white font-bold text-xs text-center leading-tight">SAF+<br />Core</span>
            </div>

            {/* Orbit labels */}
            {ORBITS.map((orbit) => (
              <button
                key={orbit.key}
                onClick={() => { setActiveOrbit(orbit.key); setActiveModule(null); }}
                className={`absolute text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all duration-300 active:scale-95 ${
                  activeOrbit === orbit.key ? orbit.colorBg : "bg-card text-muted-foreground border-border hover:border-foreground/30"
                }`}
                style={{
                  left: cx + orbit.radius - 30,
                  top: cy - orbit.radius - 10,
                  opacity: isInView ? 1 : 0,
                  transitionDelay: `${ORBITS.indexOf(orbit) * 200 + 100}ms`,
                }}
              >
                {orbit.label}
              </button>
            ))}

            {/* Module nodes */}
            {ORBITS.map((orbit) => {
              const mods = MODULOS[orbit.key];
              const positions = getPositions(mods.length, orbit.radius, orbit.key === "core" ? 0.2 : orbit.key === "integraciones" ? 0.5 : 0.8);
              const isActive = activeOrbit === orbit.key || activeOrbit === null;

              return positions.map((pos, i) => {
                const mod = mods[i];
                const isSelected = activeModule?.name === mod.name;

                return (
                  <button
                    key={mod.name}
                    onClick={() => { setActiveOrbit(orbit.key); setActiveModule(mod); }}
                    className={`absolute rounded-xl border shadow-sm flex items-center justify-center text-center transition-all duration-500 active:scale-90 ${
                      isSelected
                        ? `${orbit.colorBg} ring-2 ring-offset-2 scale-110 shadow-lg`
                        : isActive
                        ? "bg-card hover:shadow-md hover:scale-105 border-border"
                        : "bg-card/50 border-border/50 opacity-40"
                    }`}
                    style={{
                      width: 90, height: 44,
                      left: cx + pos.x - 45,
                      top: cy + pos.y - 22,
                      opacity: isInView ? (isActive ? 1 : 0.4) : 0,
                      transform: isInView
                        ? `scale(${isSelected ? 1.1 : 1})`
                        : "scale(0.6)",
                      transitionDelay: `${i * 60 + ORBITS.indexOf(orbit) * 150}ms`,
                    }}
                  >
                    <span className={`text-[10px] font-semibold leading-tight px-1.5 ${isSelected ? "" : "text-foreground"}`}>
                      {mod.name.length > 20 ? mod.name.slice(0, 18) + "…" : mod.name}
                    </span>
                  </button>
                );
              });
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-w-0">
            {activeModule ? (
              <div className="bg-card rounded-2xl border p-8 shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full`} style={{ background: ORBITS.find(o => o.key === activeOrbit)?.color }} />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {ORBITS.find(o => o.key === activeOrbit)?.label}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{activeModule.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{activeModule.desc}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {ORBITS.map((orbit) => (
                  <div
                    key={orbit.key}
                    onClick={() => setActiveOrbit(activeOrbit === orbit.key ? null : orbit.key)}
                    className={`w-full text-left bg-card rounded-xl border p-5 transition-all duration-300 hover:shadow-md active:scale-[0.98] cursor-pointer ${
                      activeOrbit === orbit.key ? `${orbit.colorBg} shadow-md` : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: orbit.color }} />
                      <h4 className="font-bold text-sm">{orbit.label}</h4>
                      <span className="text-xs text-muted-foreground ml-auto">{MODULOS[orbit.key].length} módulos</span>
                    </div>
                    {activeOrbit === orbit.key && (
                      <div className="mt-3 space-y-2">
                        {MODULOS[orbit.key].map((mod) => (
                          <div
                            key={mod.name}
                            onClick={(e) => { e.stopPropagation(); setActiveModule(mod); }}
                            className="block w-full text-left text-sm py-2 px-3 rounded-lg hover:bg-background/80 transition-colors active:scale-[0.98] cursor-pointer"
                          >
                            <span className="font-medium text-foreground">{mod.name}</span>
                            <span className="block text-xs text-muted-foreground mt-0.5 line-clamp-1">{mod.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Mobile fallback list */}
            <div className="lg:hidden mt-8 space-y-3">
              {ORBITS.map((orbit) => (
                <div key={orbit.key}>
                  <h4 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: orbit.color }} />
                    {orbit.label}
                  </h4>
                  <div className="grid gap-2">
                    {MODULOS[orbit.key].map((mod) => (
                      <div key={mod.name} className="bg-card rounded-lg border p-4">
                        <p className="font-semibold text-sm text-foreground">{mod.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{mod.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
