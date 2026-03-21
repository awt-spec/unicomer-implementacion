import { useState } from "react";
import { MODULOS } from "./data";
import { Database, Link, Settings, ChevronRight } from "lucide-react";

const TABS = [
  { key: "core" as const, label: "SAF+ Core", icon: Database },
  { key: "integraciones" as const, label: "Integraciones", icon: Link },
  { key: "operaciones" as const, label: "Operaciones", icon: Settings },
];

export function ModulosSection() {
  const [tab, setTab] = useState<keyof typeof MODULOS>("core");

  return (
    <section id="modulos" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Alcance del Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Módulos SAF+
          </h2>
        </div>

        {/* Tabs */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-95 ${
                tab === t.key
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground hover:text-foreground border"
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {MODULOS[tab].map((mod) => (
            <div
              key={mod.name}
              className="scroll-reveal group bg-card rounded-lg border p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground text-sm">{mod.name}</h4>
                <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
