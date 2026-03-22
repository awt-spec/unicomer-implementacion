import { useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_SECTIONS } from "./data";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useScrollSpy(ids);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-800/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-white font-bold tracking-wider text-sm uppercase">
          SYSDE <span className="text-primary font-normal">| SAF+</span>
        </span>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors active:scale-95 ${
                activeId === s.id
                  ? "bg-primary text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 active:scale-95"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-sysde-charcoal border-t border-white/10 px-4 py-3 space-y-1">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors active:scale-[0.98] ${
                activeId === s.id
                  ? "bg-primary text-white"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
