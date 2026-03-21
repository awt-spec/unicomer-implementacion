import { SLA_SEVERITIES, SLA_UPTIME } from "./data";
import { useState } from "react";

const colorMap: Record<string, string> = {
  destructive: "bg-red-600 text-white",
  warning: "bg-amber-500 text-white",
  secondary: "bg-sky-500 text-white",
  outline: "bg-muted text-muted-foreground",
};

export function SlaSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="sla" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Acuerdos de Nivel de Servicio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            SLA — Respuesta a Incidentes
          </h2>
        </div>

        {/* Severity Table */}
        <div className="scroll-reveal mb-16">
          <div className="overflow-x-auto rounded-lg border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-3 font-semibold text-foreground w-[140px]">Severidad</th>
                  <th className="p-3 font-semibold text-foreground">Definición</th>
                  <th className="p-3 font-semibold text-foreground text-center w-[100px]">Disponibilidad</th>
                  <th className="p-3 font-semibold text-foreground text-center w-[100px]">Respuesta</th>
                  <th className="p-3 font-semibold text-foreground text-center w-[100px]">Resolución</th>
                </tr>
              </thead>
              <tbody>
                {SLA_SEVERITIES.map((s, i) => (
                  <tr
                    key={s.level}
                    className="border-b last:border-b-0 hover:bg-secondary/40 transition-colors cursor-pointer"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <td className="p-3 align-top">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${colorMap[s.color]}`}>
                        {s.level}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-1">{s.label}</span>
                    </td>
                    <td className="p-3 align-top text-muted-foreground">
                      <p>{s.definition}</p>
                      {expanded === i && (
                        <div className="mt-3 p-3 rounded bg-muted/50 text-xs whitespace-pre-line">
                          <p className="font-semibold text-foreground mb-1">Support Hours:</p>
                          <p>{s.availability}</p>
                          <p className="font-semibold text-foreground mt-2 mb-1">Penalty:</p>
                          <p>{s.penalty}</p>
                        </div>
                      )}
                    </td>
                    <td className="p-3 align-top text-center font-medium text-foreground whitespace-pre-line text-xs">
                      {s.availability.split("\n")[0]}
                    </td>
                    <td className="p-3 align-top text-center">
                      <span className="font-bold text-foreground">{s.responseTime}</span>
                    </td>
                    <td className="p-3 align-top text-center">
                      <span className="font-bold text-foreground">{s.resolutionTime}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Click en una fila para ver detalles de soporte y penalidades.</p>
        </div>

        {/* Uptime & Performance */}
        <div className="scroll-reveal">
          <h3 className="text-xl font-bold text-foreground mb-6">Platform Availability & Performance</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {SLA_UPTIME.map((u) => (
              <div key={u.metric} className="bg-card rounded-lg border p-5 hover:shadow-md transition-shadow">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{u.period}</p>
                <h4 className="font-bold text-foreground mb-2">{u.metric}</h4>
                <p className="text-sm text-muted-foreground mb-3">{u.target}</p>
                <p className="text-xs text-muted-foreground/70 border-t pt-2">{u.penalty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
