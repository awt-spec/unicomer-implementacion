import { Zap, Layers, Globe } from "lucide-react";

const OLAS = [
  {
    icon: Zap,
    nombre: "Piloto",
    paises: "El Salvador",
    periodo: "Meses 1–9",
    desc: "Implementación completa en un país para validar procesos, integraciones y modelo operativo.",
  },
  {
    icon: Layers,
    nombre: "Ola 1",
    paises: "Honduras, Guatemala, Nicaragua",
    periodo: "Meses 7–18",
    desc: "Réplica del modelo validado con ajustes regulatorios y de negocio por país.",
  },
  {
    icon: Globe,
    nombre: "Ola 2",
    paises: "Costa Rica, Panamá, RD, Jamaica, Trinidad",
    periodo: "Meses 13–24",
    desc: "Expansión final incluyendo mercados anglófonos con soporte multilenguaje.",
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
            La implementación se estructura en un modelo de 3 olas que minimiza riesgos y acelera el time-to-value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {OLAS.map((ola) => (
            <div
              key={ola.nombre}
              className="scroll-reveal group bg-card rounded-lg border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <ola.icon size={20} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">{ola.nombre}</h3>
              <p className="text-primary text-sm font-medium mb-1">{ola.paises}</p>
              <p className="text-muted-foreground text-xs mb-3">{ola.periodo}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{ola.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
