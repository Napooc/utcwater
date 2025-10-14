import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "@/assets/hero-water-facility.jpg";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-wave relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="UTC Water facility"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 backdrop-blur-xl"
            >
              <div className="text-4xl font-bold text-secondary">20+</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
            >
              About UTC WATER
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              UTC WATER designs and supplies cutting-edge water treatment and transfer systems across screening, lift stations, biological filtration, and oxidation/filtration of dissolved metals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Using advanced PRV/FRP composites and 304L/316L stainless steel, we deliver turnkey assemblies that exceed sanitary and industrial standards worldwide.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { value: "99.99%", label: "Efficiency" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
