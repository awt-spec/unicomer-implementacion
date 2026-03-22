import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/saf/Navbar";
import { HeroSection } from "@/components/saf/HeroSection";
import { ResumenSection } from "@/components/saf/ResumenSection";
import { ContextoSection } from "@/components/saf/ContextoSection";
import { ModulosSection } from "@/components/saf/ModulosSection";
import { TimelineSection } from "@/components/saf/TimelineSection";
import { EquipoSection } from "@/components/saf/EquipoSection";
import { SlaSection } from "@/components/saf/SlaSection";
import { MetodologiaSection } from "@/components/saf/MetodologiaSection";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ResumenSection />
      <ContextoSection />
      <ModulosSection />
      <TimelineSection />
      <EquipoSection />
      <SlaSection />
      <MetodologiaSection />
    </div>
  );
};

export default Index;
