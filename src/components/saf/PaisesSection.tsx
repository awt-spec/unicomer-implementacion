import { useEffect, useRef, useState } from "react";
import { FASES, PAISES } from "./data";

const faseColors: Record<number, { accent: string; bg: string; text: string }> = {
  1: { accent: "hsl(352, 88%, 43%)", bg: "bg-primary/5", text: "text-primary" },
  2: { accent: "hsl(38, 92%, 50%)", bg: "bg-amber-50", text: "text-amber-600" },
  3: { accent: "hsl(199, 89%, 48%)", bg: "bg-sky-50", text: "text-sky-600" },
  4: { accent: "hsl(263, 70%, 50%)", bg: "bg-violet-50", text: "text-violet-600" },
  5: { accent: "hsl(152, 69%, 31%)", bg: "bg-emerald-50", text: "text-emerald-600" },
  6: { accent: "hsl(172, 66%, 50%)", bg: "bg-teal-50", text: "text-teal-600" },
};

function CountryCard({ pais, index }: { pais: typeof PAISES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1)"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0)"
          : `translateX(${isLeft ? "-60px" : "60px"}) translateY(20px)`,
        filter: visible ? "blur(0px)" : "blur(6px)",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="group relative bg-card rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: faseColors[parseInt(pais.fase.replace("Fase ", ""))]?.accent || "hsl(352,88%,43%)" }}
        />

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-5">
            {/* Flag */}
            <div className="text-6xl md:text-7xl leading-none shrink-0 group-hover:scale-110 transition-transform duration-500">
              {pais.bandera}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{pais.pais}</h3>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${faseColors[parseInt(pais.fase.replace("Fase ", ""))]?.bg} ${faseColors[parseInt(pais.fase.replace("Fase ", ""))]?.text}`}>
                  {pais.fase}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{pais.periodo} · {pais.ownership}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Metric label="Créditos" value={pais.creditos} />
                <Metric label="Clientes" value={pais.clientes} />
                <Metric label="Regulador" value={pais.regulador} />
                <Metric label="Sistema Actual" value={pais.sistema} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-muted/50 rounded-lg px-3 py-2">
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
      <p className="text-sm font-bold text-foreground tabular-nums">{value}</p>
    </div>
  );
}

export function PaisesSection() {
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportH = window.innerHeight;
      const scrolled = Math.max(0, viewportH - rect.top);
      const total = sectionHeight + viewportH;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="paises" className="py-24 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal mb-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Cobertura Geográfica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            9 Países en 6 Fases
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Duración estimada del programa: ~5 años. Cada país aparece mientras exploras.
          </p>
        </div>

        {/* Progress line */}
        <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none" style={{ opacity: progress > 0.02 && progress < 0.95 ? 1 : 0, transition: "opacity 0.4s" }}>
          <div className="w-1 h-48 bg-border rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="w-full bg-primary rounded-full transition-all duration-200"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 text-center tabular-nums">{Math.round(progress * 9)}/9</p>
        </div>

        {/* Country cards */}
        <div className="space-y-6 mt-12">
          {PAISES.map((pais, i) => (
            <CountryCard key={pais.pais} pais={pais} index={i} />
          ))}
        </div>

        {/* Total */}
        <div className="scroll-reveal mt-12 bg-muted/50 rounded-2xl border p-6 text-center">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground tabular-nums">2,150,500</p>
              <p className="text-xs text-muted-foreground">Créditos Vigentes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tabular-nums">1,053,100</p>
              <p className="text-xs text-muted-foreground">Clientes Totales</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tabular-nums">7</p>
              <p className="text-xs text-muted-foreground">Sistemas Reemplazados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
