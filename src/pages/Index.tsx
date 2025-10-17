import { Hero } from "@/components/Hero";
import { OurSolutions } from "@/components/OurSolutions";
import { TechnologyShowcase } from "@/components/TechnologyShowcase";
import { About } from "@/components/About";
import { EquipmentShowcase } from "@/components/EquipmentShowcase";
import { SpecializedServices } from "@/components/SpecializedServices";
import { KeyAdvantages } from "@/components/KeyAdvantages";
import { GlobalReach } from "@/components/GlobalReach";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingEmail } from "@/components/FloatingEmail";
const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <OurSolutions />
      <TechnologyShowcase />
      <About />
      <div id="equipment">
        <EquipmentShowcase />
      </div>
      <SpecializedServices />
      <KeyAdvantages />
      <GlobalReach />
      <Industries />
      <CTASection />
      <Contact />
      <Footer />
      <FloatingEmail />
    </div>;
};
export default Index;