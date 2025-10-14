import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Zap, Globe } from "lucide-react";
import controlRoomImage from "@/assets/about-control-room.jpg";
import teamImage from "@/assets/about-team.jpg";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Shield,
      title: "Premium Materials",
      description: "PRV/FRP composites and 304L/316L stainless steel"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Exceeding sanitary and industrial standards worldwide"
    },
    {
      icon: Zap,
      title: "Turnkey Solutions",
      description: "Complete assemblies ready to connect"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 50+ countries across all continents"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-wave relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            About UTC WATER
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering excellence in water treatment since 2005
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-3xl overflow-hidden shadow-2xl col-span-2">
                <img
                  src={controlRoomImage}
                  alt="UTC Water control room"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="UTC Water team"
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glass rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center justify-center"
              >
                <div className="text-5xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground text-center">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                UTC WATER designs and supplies cutting-edge water treatment and transfer systems across screening, lift stations, biological filtration, and oxidation/filtration of dissolved metals.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Using advanced PRV/FRP composites and 304L/316L stainless steel, we deliver turnkey assemblies that exceed sanitary and industrial standards worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99.99%", label: "Efficiency" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
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
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-background" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
