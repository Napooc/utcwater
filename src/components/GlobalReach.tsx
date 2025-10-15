import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, MapPin, Award, TrendingUp } from "lucide-react";
import globalReachImg from "@/assets/section-global-reach.jpg";

export const GlobalReach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: Globe,
      stat: "50+",
      label: "Countries Worldwide",
      description: "Serving clients across six continents",
    },
    {
      icon: MapPin,
      stat: "1000+",
      label: "Active Projects",
      description: "From small communities to major cities",
    },
    {
      icon: Award,
      stat: "ISO 9001",
      label: "Certified Quality",
      description: "International standards compliance",
    },
    {
      icon: TrendingUp,
      stat: "25%",
      label: "Annual Growth",
      description: "Expanding global footprint yearly",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-6 py-2 rounded-full">
                Global Presence
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent mb-6">
              Engineering Water Solutions Across the Globe
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From Europe to Asia, Africa to the Americas, UTC WATER delivers cutting-edge water treatment technology to clients worldwide. Our global network ensures local support with international expertise.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-cyan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-1">{highlight.stat}</div>
                        <div className="text-sm font-semibold text-foreground mb-1">{highlight.label}</div>
                        <div className="text-xs text-muted-foreground">{highlight.description}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Markets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-border/50 pt-6"
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Key Markets
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Europe", "Middle East", "Africa", "Asia Pacific", "Americas"].map((region, index) => (
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {region}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-4">
              <img
                src={globalReachImg}
                alt="Global water treatment network"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              
              {/* Overlay stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Connected Globally</div>
                    <div className="text-2xl font-bold text-foreground">24/7 Support Network</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-cyan rounded-full flex items-center justify-center animate-pulse-glow">
                    <Globe className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
