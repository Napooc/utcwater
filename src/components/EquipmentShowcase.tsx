import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Beaker, Layers, Sun, RefreshCw, Disc, Grid, Activity, Syringe } from "lucide-react";
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
    </section>
  );
};
