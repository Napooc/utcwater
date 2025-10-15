import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import contactOfficeImage from "@/assets/contact-office.jpg";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-6 py-2 rounded-full">
              Contact Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your water treatment needs? Contact our team of experts
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Office Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={contactOfficeImage}
                  alt="UTC Water office"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Main Office Card */}
              <div className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-cyan flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-accent-foreground" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Main Office</h3>
                    <p className="text-lg text-muted-foreground font-semibold">United Kingdom</p>
                  </div>
                </div>

                <div className="space-y-5 pl-20">
                  <div>
                    <p className="text-foreground font-semibold mb-1">UTC WATER LTD</p>
                    <p className="text-muted-foreground">128 City Road, London EC1V</p>
                    <p className="text-muted-foreground">United Kingdom</p>
                  </div>

                  <a
                    href="tel:+447707366467"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <span className="text-lg">+44 7707 366467</span>
                  </a>

                  <a
                    href="mailto:utcwater@utcwater.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <span className="text-lg">utcwater@utcwater.com</span>
                  </a>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Quick Contact</h3>
                <p className="text-muted-foreground mb-6">
                  For urgent inquiries or project consultations, reach us directly
                </p>
                <div className="flex flex-col gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-cyan text-accent-foreground hover:scale-105 transition-all duration-300 shadow-xl text-lg py-6 rounded-2xl"
                  >
                    <a href="mailto:utcwater@utcwater.com">
                      <Mail size={20} className="mr-2" />
                      Email Us
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg py-6 rounded-2xl"
                  >
                    <a href="tel:+447707366467">
                      <Phone size={20} className="mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
