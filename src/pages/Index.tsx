import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EquipmentShowcase } from "@/components/EquipmentShowcase";
import { SpecializedServices } from "@/components/SpecializedServices";
import { KeyAdvantages } from "@/components/KeyAdvantages";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingEmail } from "@/components/FloatingEmail";
const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <About />
      <EquipmentShowcase />
      <SpecializedServices />
      <KeyAdvantages />
      <Industries />
      <Contact />
      
      <Footer />
      <FloatingEmail />
    </div>;
};
export default Index;