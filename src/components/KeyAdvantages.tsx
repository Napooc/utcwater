import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plug, Shield, Gauge, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import technologyImg from "@/assets/advantage-technology.jpg";
import qualityImg from "@/assets/advantage-quality.jpg";
import installationImg from "@/assets/advantage-installation.jpg";
import customizationImg from "@/assets/advantage-customization.jpg";

const advantages = [
  {
    icon: Plug,
    title: "Ready-to-Connect",
    description: "Factory pre-equipped wet wells with RLT/RFT layouts for faster, safer installation and reduced project risk",
    image: installationImg,
    features: ["Plug-and-play design", "Pre-tested systems", "Rapid deployment"],
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Rot-proof FRP tanks and 304L/316L stainless steel structures with IP55 protection for decades of reliability",
    image: qualityImg,
    features: ["Corrosion resistant", "Industrial grade", "Long lifespan"],
  },
  {
    icon: Gauge,
    title: "Proven Performance",
    description: "Screening up to 20,000 m³/h, KSPD ranges 0-300+ m³/h, complete nitrogen and metal removal capabilities",
    image: technologyImg,
    features: ["High capacity", "Energy efficient", "Reliable operation"],
  },
  {
    icon: Wrench,
    title: "Total Customization",
    description: "Modular diameters, custom bar spacing (10-100mm), mechanical/electrical options tailored to your exact requirements",
    image: customizationImg,
    features: ["Flexible design", "Scalable solutions", "Tailored specs"],
  },
];

export const KeyAdvantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-6 py-2 rounded-full">
              Why Choose UTC Water
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent mb-6">
            Engineering Excellence Meets Innovation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four pillars of quality that define our commitment to delivering world-class water treatment solutions
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={advantage.image}
                      alt={advantage.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="absolute top-6 left-6 w-16 h-16 bg-gradient-cyan rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {advantage.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.5 + featureIndex * 0.1 }}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card rounded-3xl p-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Global Installations" },
              { value: "50+", label: "Countries Served" },
              { value: "20", label: "Years Experience" },
              { value: "99.9%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-cyan rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative">
                  <h4 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12"
          >
            <Button size="lg" className="bg-gradient-cyan text-accent-foreground hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-10 py-7 rounded-2xl group">
              Discover Our Technology
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
