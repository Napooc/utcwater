import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InfiniteSlider } from "./ui/infinite-slider";
import { UTCWaterLogo } from "./ui/utc-water-logo";
import ksbLogo from "@/assets/partner-ksb.png";
import nittoLogo from "@/assets/partner-nitto.png";
import suezLogo from "@/assets/partner-suez.png";
import grundfosLogo from "@/assets/partner-grundfos.png";
import parksonLogo from "@/assets/partner-parkson.png";

export const OurSolutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const partners = [
    { name: "KSB", logo: ksbLogo },
    { name: "Nitto", logo: nittoLogo },
    { name: "Suez", logo: suezLogo },
    { name: "Grundfos", logo: grundfosLogo },
    { name: "Parkson", logo: parksonLogo },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <UTCWaterLogo size="md" animated={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-6 py-2 rounded-full">
              Our Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent mb-6"
          >
            Trusted Global Partnerships
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Collaborating with world-leading manufacturers to deliver cutting-edge water treatment technology
          </motion.p>
        </motion.div>

        {/* Partner Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <InfiniteSlider gap={48} duration={30} durationOnHover={50} className="py-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center h-24 px-8 glass-card rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </InfiniteSlider>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Through strategic partnerships with industry leaders like <span className="text-primary font-semibold">KSB</span>, <span className="text-primary font-semibold">Grundfos</span>, <span className="text-primary font-semibold">Suez</span>, <span className="text-primary font-semibold">Nitto Hydranautics</span>, and <span className="text-primary font-semibold">Parkson</span>, we deliver comprehensive water treatment solutions that combine innovation, reliability, and proven performance worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
