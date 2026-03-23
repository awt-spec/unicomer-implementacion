import { useState, useCallback, useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_SECTIONS } from "./data";
import { Menu, X, Maximize, Minimize } from "lucide-react";
import sysdeLogo from "@/assets/sysde-logo-white.png";
import unicomerLogo from "@/assets/unicomer-logo-white.png";

export function Navbar() {
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-800/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-3">
          <img src={sysdeLogo} alt="SYSDE" className="h-8 w-auto brightness-[10]" />
          <span className="text-white/30 text-lg font-thin">|</span>
          <img src={unicomerLogo} alt="Grupo Unicomer" className="h-7 w-auto brightness-[10]" />
        </div>

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
          <button
            onClick={toggleFullscreen}
            className="ml-2 p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors active:scale-95"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleFullscreen}
            className="text-white/60 p-2 active:scale-95"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 active:scale-95"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-neutral-800 border-t border-white/10 px-4 py-3 space-y-1">
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
