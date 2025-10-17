import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Droplets, Cog, Zap, Shield, Recycle, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

import pretreatmentImg from "@/assets/equipment-pretreatment.jpg";
import mbbrImg from "@/assets/equipment-mbbr.jpg";
import uvImg from "@/assets/equipment-uv.jpg";
import clarifierImg from "@/assets/equipment-clarifier.jpg";
import reuseImg from "@/assets/equipment-reuse-skid.jpg";
import drumFilterImg from "@/assets/equipment-drum-filter.jpg";

const technologies = [
  {
    icon: Droplets,
    title: "Advanced Pretreatment Systems",
    description: "State-of-the-art mechanical screening and filtration solutions for optimal water quality from the source.",
    image: pretreatmentImg,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Cog,
    title: "MBBR Technology",
    description: "Moving Bed Biofilm Reactor systems providing efficient biological treatment with minimal footprint.",
    image: mbbrImg,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Zap,
    title: "UV Disinfection",
    description: "Chemical-free ultraviolet disinfection systems ensuring the highest water safety standards.",
    image: uvImg,
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Shield,
    title: "Clarification Solutions",
    description: "Advanced sedimentation and clarification technology for crystal-clear effluent water.",
    image: clarifierImg,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Recycle,
    title: "Water Reuse Systems",
    description: "Complete water recycling solutions enabling sustainable water management and conservation.",
    image: reuseImg,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: TrendingUp,
    title: "Smart Automation",
    description: "IoT-enabled monitoring and control systems for optimal performance and efficiency.",
    image: drumFilterImg,
    gradient: "from-rose-500/20 to-cyan-500/20",
  },
];

export const TechnologyShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Advanced Water Treatment Technologies
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions engineered for efficiency, sustainability, and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${tech.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${tech.gradient} group-hover:opacity-70 transition-opacity duration-500`} />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 p-3 rounded-2xl bg-background/80 backdrop-blur-sm border border-border group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {tech.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                      onClick={() =>
                        document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Learn More
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-cyan text-accent-foreground hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-10 py-7 rounded-2xl"
          >
            Explore Full Equipment Range
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
