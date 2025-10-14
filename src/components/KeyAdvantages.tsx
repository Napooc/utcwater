import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plug, Shield, Gauge, Wrench } from "lucide-react";

const advantages = [
  {
    icon: Plug,
    title: "Ready-to-Connect",
    description: "Factory pre-equipped wet wells with RLT/RFT layouts for faster, safer installation and reduced project risk",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Rot-proof FRP tanks and 304L/316L stainless steel structures with IP55 protection for decades of reliability",
  },
  {
    icon: Gauge,
    title: "Proven Performance",
    description: "Screening up to 20,000 m³/h, KSPD ranges 0-300+ m³/h, complete nitrogen and metal removal capabilities",
  },
  {
    icon: Wrench,
    title: "Total Customization",
    description: "Modular diameters, custom bar spacing (10-100mm), mechanical/electrical options tailored to your exact requirements",
  },
];

export const KeyAdvantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Why Choose UTC WATER
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unmatched quality, performance, and customization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 group"
              >
                {/* Animated icon container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-cyan rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 bg-gradient-cyan rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-background" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  className="h-1 bg-gradient-cyan rounded-full mt-6"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20,000", unit: "m³/h", label: "Max Screening" },
              { value: "300+", unit: "m³/h", label: "KSPD Range" },
              { value: "99.99%", unit: "", label: "Efficiency" },
              { value: "IP55", unit: "", label: "Protection" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                  <span className="text-2xl text-accent ml-1">{stat.unit}</span>
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
