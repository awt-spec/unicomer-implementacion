import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/saf/Navbar";
import { HeroSection } from "@/components/saf/HeroSection";
import { ResumenSection } from "@/components/saf/ResumenSection";
import { ModulosSection } from "@/components/saf/ModulosSection";
import { PaisesSection } from "@/components/saf/PaisesSection";
import { TimelineSection } from "@/components/saf/TimelineSection";
import { HitosSection } from "@/components/saf/HitosSection";
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
      <ModulosSection />
      <PaisesSection />
      <TimelineSection />
      <HitosSection />
      <EquipoSection />
      <SlaSection />
      <MetodologiaSection />
    </div>
  );
};

export default Index;
