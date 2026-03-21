import { useEffect, useRef, useState } from "react";
import { KPIS } from "./data";
import { ChevronDown } from "lucide-react";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(352 88% 43%) 0%, hsl(0 100% 27%) 100%)",
      }}
    >
      {/* Geometric overlay */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
          SYSDE Internacional Inc.
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-[1.1]">
          Plan de Implementación
        </h1>
        <p className="text-2xl md:text-3xl font-light text-white/90 mb-8">
          SAF+ Core System Solution
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-white/70 text-sm mb-12">
          <span className="bg-white/10 px-4 py-1.5 rounded-full">Cliente: Grupo Unicomer</span>
          <span className="bg-white/10 px-4 py-1.5 rounded-full">RFP UGN1000123</span>
          <span className="bg-white/10 px-4 py-1.5 rounded-full">~5 años</span>
          <span className="bg-white/10 px-4 py-1.5 rounded-full">Marzo 2026</span>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter target={kpi.value} suffix={kpi.suffix} />
              </div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => document.getElementById("resumen")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group active:scale-95"
        >
          <span className="text-sm uppercase tracking-widest">Explorar Plan</span>
          <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
