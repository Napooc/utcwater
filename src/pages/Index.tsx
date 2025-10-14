import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EquipmentShowcase } from "@/components/EquipmentShowcase";
import { SpecializedServices } from "@/components/SpecializedServices";
import { KeyAdvantages } from "@/components/KeyAdvantages";
import { Industries } from "@/components/Industries";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <EquipmentShowcase />
      <SpecializedServices />
      <KeyAdvantages />
      <Industries />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
