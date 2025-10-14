import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Factory, Droplets, Fish } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Municipal & Utilities",
    description: "Inlet screening systems, modular lift stations, advanced denitrification for strict nutrient compliance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Factory,
    title: "Industrial & Agri-Food",
    description: "Turnkey FRP stations, stainless steel 304L/316L equipment, anti-H2S solutions with full automation",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Droplets,
    title: "Groundwater & Wellfields",
    description: "Iron/manganese oxidation systems, aeration-filtration, automated backwash, sludge handling",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Fish,
    title: "Aquaculture & Agriculture",
    description: "Aquaculture life support, irrigation management, water quality monitoring, reuse systems",
    color: "from-blue-600 to-cyan-600",
  },
];

export const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-wave relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-cyan rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden hover:scale-105 transition-all duration-500 min-h-[300px] flex flex-col">
                  {/* Animated gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 2 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${industry.color} rounded-full blur-3xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative flex-grow">
                    <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} origin-left`}
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
