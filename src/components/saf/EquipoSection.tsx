import { useRef, useState, useEffect } from "react";
import { EQUIPO_SYSDE } from "./data";
import { MapPin, Clock, Briefcase } from "lucide-react";
import carlosCascante from "@/assets/team/carlos-cascante.png";
import luisAlfaro from "@/assets/team/luis-alfaro.png";
import nellyVargas from "@/assets/team/nelly-vargas.png";
import fernandoPinto from "@/assets/team/fernando-pinto.png";
import julianGomez from "@/assets/team/julian-gomez.png";
import dennisGarcia from "@/assets/team/dennis-garcia.png";
import martinPisacreta from "@/assets/team/martin-pisacreta.png";
import orlandoCastro from "@/assets/team/orlando-castro.png";
import lucasSain from "@/assets/team/lucas-sain.png";

const PAIS_FLAG: Record<string, string> = {
  "México": "🇲🇽", "Costa Rica": "🇨🇷", "Colombia": "🇨🇴", "Bolivia": "🇧🇴",
  "Argentina": "🇦🇷", "Perú": "🇵🇪",
};

const PHOTOS: Record<string, string> = {
  "carlos-cascante": carlosCascante,
  "luis-alfaro": luisAlfaro,
  "nelly-vargas": nellyVargas,
  "fernando-pinto": fernandoPinto,
  "julian-gomez": julianGomez,
  "dennis-garcia": dennisGarcia,
  "martin-pisacreta": martinPisacreta,
  "orlando-castro": orlandoCastro,
  "lucas-sain": lucasSain,
};

function TeamCard({ member, index }: { member: typeof EQUIPO_SYSDE[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const photoSrc = member.foto ? PHOTOS[member.foto] : undefined;
  const isLeader = index < 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-xl ${
        isLeader ? "md:col-span-1" : ""
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        filter: visible ? "blur(0)" : "blur(6px)",
        transitionDelay: `${(index % 4) * 80}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Top accent */}
      <div className={`h-1 ${isLeader ? "bg-primary" : "bg-border"} group-hover:bg-primary transition-colors duration-300`} />
      
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            {photoSrc ? (
              <img
                src={photoSrc}
                alt={member.nombre}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-background shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br from-primary to-primary/70 text-white shadow-md group-hover:scale-105 transition-transform duration-500">
                {member.iniciales}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground text-sm leading-tight truncate">{member.nombre}</h4>
            <p className="text-xs text-primary font-medium mt-0.5 line-clamp-1">{member.rol}</p>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Briefcase size={10} className="text-primary/60" />
            {member.experiencia}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={10} className="text-primary/60" />
            {PAIS_FLAG[member.pais || ""] || ""} {member.pais}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={10} className="text-primary/60" />
            {member.dedicacion}
          </span>
        </div>
      </div>
    </div>
  );
}

export function EquipoSection() {
  const totalYears = EQUIPO_SYSDE.reduce((acc, m) => acc + parseInt(m.experiencia || "0"), 0);

  return (
    <section id="equipo" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal mb-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Equipo de Proyecto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            Equipo SYSDE
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl">
            {EQUIPO_SYSDE.length} profesionales con más de {totalYears} años de experiencia combinada.
          </p>
        </div>

        {/* Stats */}
        <div className="scroll-reveal grid grid-cols-2 gap-4 mb-10">
          <div className="bg-card rounded-xl border p-4 text-center">
            <p className="text-2xl font-bold text-foreground tabular-nums">{EQUIPO_SYSDE.length}</p>
            <p className="text-xs text-muted-foreground">Especialistas</p>
          </div>
          <div className="bg-card rounded-xl border p-4 text-center">
            <p className="text-2xl font-bold text-foreground tabular-nums">850+</p>
            <p className="text-xs text-muted-foreground">Implementaciones</p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EQUIPO_SYSDE.map((member, i) => (
            <TeamCard key={member.nombre} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
