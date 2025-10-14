import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import contactOfficeImage from "@/assets/contact-office.jpg";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offices = [
    {
      country: "United Kingdom",
      address: "UTC WATER LTD",
      street: "128 City Road, London EC1V",
      phone: "+44 7707 366467",
      email: "utcwater@utcwater.com"
    },
    {
      country: "Morocco",
      address: "46 Apt 2 Avenue OKBA",
      street: "Agdal, Rabat",
      phone: "+212 661 34 28 16",
      phone2: "+212 627 37 92 69",
      email: "utc.ing1@gmail.com"
    }
  ];

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your water treatment needs? Contact our team of experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact form and image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={contactOfficeImage}
                alt="UTC Water office"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="glass rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="glass rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-cyan hover:scale-105 transition-all duration-300 text-lg py-6 rounded-xl"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right: Office information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-cyan flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-background" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{office.country}</h3>
                    <p className="text-muted-foreground">{office.address}</p>
                    <p className="text-muted-foreground">{office.street}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={18} />
                    </div>
                    <span>{office.phone}</span>
                  </a>

                  {office.phone2 && (
                    <a
                      href={`tel:${office.phone2}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={18} />
                      </div>
                      <span>{office.phone2}</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <span>{office.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Contact</h3>
              <p className="text-muted-foreground mb-6">
                For urgent inquiries or project consultations, reach us directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-cyan hover:scale-105 transition-all duration-300 flex-1"
                >
                  <a href="mailto:utcwater@utcwater.com">
                    <Mail size={18} className="mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex-1"
                >
                  <a href="tel:+447707366467">
                    <Phone size={18} className="mr-2" />
                    Call UK
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
