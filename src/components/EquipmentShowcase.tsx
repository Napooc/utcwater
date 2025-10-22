import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Beaker, Layers, Sun, RefreshCw, Disc, Grid, Activity, Syringe, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import coagulationImg from "@/assets/equipment-coagulation.jpg";
import clarifierImg from "@/assets/equipment-clarifier.jpg";
import uvImg from "@/assets/equipment-uv.jpg";
import reuseSkidImg from "@/assets/equipment-reuse-skid.jpg";
import drumFilterImg from "@/assets/equipment-drum-filter.jpg";
import pretreatmentImg from "@/assets/equipment-pretreatment.jpg";
import mbbrImg from "@/assets/equipment-mbbr.jpg";
import dosingImg from "@/assets/equipment-dosing.jpg";

const equipment = [
  {
    title: "Coagulation Flocculation Systems",
    description: "Ready-to-use tanks for physico-chemical water treatment. Multiple configurations available, ACS certified for drinking water applications. Complete turnkey solutions.",
    image: coagulationImg,
    icon: Beaker,
  },
  {
    title: "Lamellar Clarifiers",
    description: "Robust, custom-engineered equipment with 3 height configurations. Modular design covering all projected surface requirements. Maximum efficiency guaranteed.",
    image: clarifierImg,
    icon: Layers,
  },
  {
    title: "UV Disinfection Systems",
    description: "Advanced UV technology eliminating 99.99% of micro-organisms. Removes unwanted compounds without chemicals. Energy-efficient and eco-friendly.",
    image: uvImg,
    icon: Sun,
  },
  {
    title: "Water Reuse Skid (REUT)",
    description: "Turnkey potabilization units designed for complete micro-organism elimination. Enables water reuse across multiple applications. Compact and efficient.",
    image: reuseSkidImg,
    icon: RefreshCw,
  },
  {
    title: "Drum Filtration Systems",
    description: "Advanced drum filters for mechanical wastewater treatment. Stainless steel meshes in multiple capacities. Intelligent backwash system concentrates suspended solids efficiently.",
    image: drumFilterImg,
    icon: Disc,
  },
  {
    title: "Pre-Treatment Systems",
    description: "Fine rotating screens equipped with hopper and low-pressure wetting system. Customizable mesh sizes for optimal pre-treatment. Robust stainless steel construction.",
    image: pretreatmentImg,
    icon: Grid,
  },
  {
    title: "Biological Treatment (MBBR)",
    description: "Compact MBBR technology for biological treatment of dissolved pollutants (COD, NH₄⁺). Highly efficient micro-organism processes. Space-saving design.",
    image: mbbrImg,
    icon: Activity,
  },
  {
    title: "Chemical Dosing Systems",
    description: "Turnkey chemical dosing equipment for wastewater and potabilization. Precise automated control. Suitable for numerous applications with guaranteed accuracy.",
    image: dosingImg,
    icon: Syringe,
  },
];

export const EquipmentShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedEquipment(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEquipment(null);
  };

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Our Technology Arsenal
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Cutting-edge equipment designed for maximum efficiency and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openModal(item)}
                className="group relative glass rounded-xl sm:rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 glass rounded-lg sm:rounded-xl"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-cyan rounded-full mt-4"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Equipment Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEquipment && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-0 rounded-2xl">
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>

                {/* Hero Image */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedEquipment.image}
                    alt={selectedEquipment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <selectedEquipment.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{selectedEquipment.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Overview</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {selectedEquipment.description}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Turnkey solution ready for immediate deployment</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Premium construction materials - 304L/316L stainless steel or PRV/FRP composites</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">Fully customizable configurations to meet specific requirements</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">ISO 9001 certified quality and compliance</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">24/7 technical support and maintenance services</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center pt-4">
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      <a href="mailto:utcwater@utcwater.com?subject=Technical Specifications Request">
                        Get Technical Specs
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      <a href="tel:+447707366467">
                        Contact Sales Team
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};
