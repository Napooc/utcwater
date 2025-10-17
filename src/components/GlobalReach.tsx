import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, MapPin, Award, TrendingUp } from "lucide-react";
import globalReachImg from "@/assets/section-global-reach.jpg";
export const GlobalReach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const highlights = [{
    icon: Globe,
    stat: "50+",
    label: "Countries Worldwide",
    description: "Serving clients across six continents"
  }, {
    icon: MapPin,
    stat: "1000+",
    label: "Active Projects",
    description: "From small communities to major cities"
  }, {
    icon: Award,
    stat: "ISO 9001",
    label: "Certified Quality",
    description: "International standards compliance"
  }, {
    icon: TrendingUp,
    stat: "25%",
    label: "Annual Growth",
    description: "Expanding global footprint yearly"
  }];
  return <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={inView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 sm:px-6 py-2 rounded-full">
                Global Presence
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent mb-4 sm:mb-6">
              Engineering Water Solutions Across the Globe
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              From Europe to Asia, Africa to the Americas, UTC WATER delivers cutting-edge water treatment technology to clients worldwide. Our global network ensures local support with international expertise.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return <motion.div key={highlight.label} initial={{
                opacity: 0,
                y: 20
              }} animate={inView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1
              }} className="glass-card p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-2xl hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-cyan rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-0.5 sm:mb-1 truncate">{highlight.stat}</div>
                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-1">{highlight.label}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{highlight.description}</div>
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Key Markets */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="border-t border-border/50 pt-4 sm:pt-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3 sm:mb-4 uppercase tracking-wider">
                Key Markets
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Europe", "Middle East", "Africa", "Asia Pacific", "Americas"].map((region, index) => <motion.span key={region} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={inView ? {
                opacity: 1,
                scale: 1
              } : {}} transition={{
                duration: 0.4,
                delay: 1 + index * 0.1
              }} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors duration-300 whitespace-nowrap">
                    {region}
                  </motion.span>)}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-4">
              <img src={globalReachImg} alt="Global water treatment network" className="w-full h-[600px] object-cover rounded-2xl" />
              
              {/* Overlay stats */}
              
            </div>

            {/* Floating decorative elements */}
            <motion.div animate={{
            y: [0, -20, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <motion.div animate={{
            y: [0, 20, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};