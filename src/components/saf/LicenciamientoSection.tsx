import { Users, Building2, Headphones, GraduationCap, DollarSign, Sparkles, Puzzle } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Usuarios",
    desc: "Sin límites. Sin cobro por usuario.",
    gradient: "from-blue-50 to-slate-50",
    border: "border-blue-100",
  },
  {
    icon: Building2,
    title: "Empresas",
    desc: "Multi-entidad. Multi-país. Una suscripción.",
    gradient: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
  },
  {
    icon: Headphones,
    title: "Soporte Ilimitado",
    desc: "Soporte ilimitado sin costo adicional. Sin tickets de pago. Sin cobro por incidente.",
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-100",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    desc: "Formación continua, consultas puntuales y sesiones de entrenamiento — sin costo.",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    icon: DollarSign,
    title: "Transacciones Ilimitadas",
    desc: "Desembolsos, cobros, consultas — ilimitados sin costo adicional.",
    gradient: "from-rose-50 to-pink-50",
    border: "border-rose-100",
  },
  {
    icon: Sparkles,
    title: "Desarrollo Evolutivo Ilimitado",
    desc: "Mejoras, nuevas funcionalidades y regulatorio — ilimitado sin costo adicional.",
    gradient: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
  },
];

const MODULAR = {
  icon: Puzzle,
  title: "Arquitectura",
  keyword: "Modular",
  desc: "Activa solo lo que necesitas. Expande sin renegociar.",
  gradient: "from-sky-50 to-blue-50",
  border: "border-sky-100",
};

export function LicenciamientoSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          MODELO DE LICENCIAMIENTO
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Una suscripción.
          <br />
          <span className="text-destructive">Todo ilimitado.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Sin sorpresas. Sin costos ocultos. Sin letra pequeña. Así de simple.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`relative rounded-2xl border ${f.border} bg-gradient-to-br ${f.gradient} p-6 text-left transition-shadow hover:shadow-lg`}
            >
              <span className="text-3xl font-black text-destructive/70 select-none">∞</span>
              <div className="flex items-center gap-2 mt-3 mb-1">
                <f.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold text-foreground">{f.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Modular card */}
        <div className={`rounded-2xl border ${MODULAR.border} bg-gradient-to-br ${MODULAR.gradient} p-6 text-left max-w-sm transition-shadow hover:shadow-lg`}>
          <span className="text-3xl font-black text-teal-500 select-none">{MODULAR.keyword}</span>
          <div className="flex items-center gap-2 mt-3 mb-1">
            <MODULAR.icon className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-foreground">{MODULAR.title}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{MODULAR.desc}</p>
        </div>
      </div>
    </section>
  );
}
