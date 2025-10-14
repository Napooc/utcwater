import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-secondary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-ocean animate-gradient opacity-10" />
          
          <div className="relative z-10">
            {/* Icon animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-cyan rounded-3xl mb-8 shadow-2xl"
            >
              <Mail className="w-12 h-12 text-background" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent"
            >
              Ready to Transform Your Water Infrastructure?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              Get expert consultation and custom solutions designed for your specific needs
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-cyan text-background hover:scale-110 transition-all duration-300 shadow-2xl text-lg px-10 py-7 rounded-2xl group"
              >
                Request Detailed Quotation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg px-10 py-7 rounded-2xl"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Mail, text: "utcwater@utcwater.com" },
                { icon: Phone, text: "+44 7707 366467" },
                { icon: Phone, text: "+212 661 34 28 16" },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300 flex items-center space-x-3"
                  >
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{contact.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
