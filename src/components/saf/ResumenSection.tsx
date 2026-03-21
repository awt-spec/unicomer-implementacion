import { Zap, Layers, Globe, Users, ArrowRight } from "lucide-react";

const FASES_RESUMEN = [
  {
    icon: Zap,
    nombre: "Fase 1 — Piloto",
    paises: "Honduras",
    periodo: "Año 1–2",
    ownership: "100% SYSDE",
    desc: "Implementación completa liderada por SYSDE con shadowing intensivo del equipo Unicomer. Objetivo: capacitación y dominio total del Core System.",
  },
  {
    icon: Layers,
    nombre: "Fase 2 — Compartido",
    paises: "Nicaragua",
    periodo: "Año 3",
    ownership: "50% / 50%",
    desc: "Modelo compartido que incrementa la propiedad operativa y técnica de Unicomer progresivamente.",
  },
  {
    icon: Users,
    nombre: "Fases 3–4 — Autonomía",
    paises: "Guyana, Ecuador, Trinidad, Jamaica, Guatemala",
    periodo: "Año 3.5–4",
    ownership: "Unicomer + soporte ilimitado",
    desc: "Implementaciones lideradas por Unicomer con soporte activo ilimitado de SYSDE en todas las áreas necesarias.",
  },
  {
    icon: Globe,
    nombre: "Fases 5–6 — Cierre",
    paises: "El Salvador, Costa Rica",
    periodo: "Año 4.5–5",
    ownership: "100% Unicomer",
    desc: "Despliegue con autonomía completa del equipo interno de Unicomer. Cierre formal del programa.",
  },
];

export function ResumenSection() {
  return (
    <section id="resumen" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Resumen Ejecutivo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Transformación del crédito al consumo en 9 países
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            El proyecto SAF+ Core System Solution reemplazará los sistemas legados de crédito al consumo de 
            Grupo Unicomer con una plataforma unificada, moderna y regulatoriamente compliant. 
            La implementación se estructura en un modelo progresivo de transferencia de conocimiento a lo largo de 
            aproximadamente 5 años, con un enfoque fuerte en la capacitación y autonomía del equipo Unicomer.
          </p>
        </div>

        {/* Transfer model visual */}
        <div className="scroll-reveal mb-12">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
            <span className="bg-primary text-white px-3 py-1 rounded-full font-semibold">100% SYSDE</span>
            <ArrowRight size={14} />
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">50/50</span>
            <ArrowRight size={14} />
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-semibold">100% Unicomer</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {FASES_RESUMEN.map((fase) => (
            <div
              key={fase.nombre}
              className="scroll-reveal group bg-card rounded-lg border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <fase.icon size={20} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1">{fase.nombre}</h3>
              <p className="text-primary text-xs font-medium mb-0.5">{fase.paises}</p>
              <p className="text-muted-foreground text-xs mb-1">{fase.periodo}</p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground mb-3">
                {fase.ownership}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{fase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
