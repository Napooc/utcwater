import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Network, CheckCircle2, Fish, ArrowRightCircle } from "lucide-react";
import { Button } from "./ui/button";
import decentralizedImg from "@/assets/service-decentralized.jpg";
import potabilizationImg from "@/assets/service-potabilization.jpg";
import aquacultureImg from "@/assets/service-aquaculture.jpg";
import waterReuseImg from "@/assets/service-water-reuse.jpg";

const services = [
  {
    title: "Decentralized Treatment",
    subtitle: "Collective Sanitation",
    icon: Network,
    image: decentralizedImg,
    features: [
      "Aquaculture and hatcheries",
      "Crustacean and lobster holding tanks",
      "Live bait systems",
      "Aquaponic systems",
      "Koi carp specialized systems",
      "Zoo aquariums and ornamental ponds",
    ],
    description: "Complete decentralized solutions ensuring environmental compliance and operational excellence",
  },
  {
    title: "Turnkey Potabilization Units",
    subtitle: "From Source to Tap",
    icon: CheckCircle2,
    image: potabilizationImg,
    features: [
      "Complete packaged solutions",
      "Coagulation/flocculation process",
      "Lamellar settling technology",
      "Sand filtration systems",
      "Chemical dosing integration",
      "Polymer plant included",
      "Easy transport and rapid installation",
    ],
    description: "Fully integrated systems ready to deploy with guaranteed water quality",
  },
  {
    title: "Advanced Aquaculture Systems",
    subtitle: "Life Support Excellence",
    icon: Fish,
    image: aquacultureImg,
    features: [
      "Aquaculture and hatchery solutions",
      "Crustacean and lobster systems",
      "Live bait production",
      "Aquaponic installations",
      "Koi carp premium systems",
      "Zoo and public aquarium equipment",
    ],
    description: "Cutting-edge life support systems for optimal aquatic environments",
  },
  {
    title: "Water Reuse Skid (REUT)",
    subtitle: "Circular Economy",
    icon: ArrowRightCircle,
    image: waterReuseImg,
    features: [
      "Ultra-compact footprint",
      "Low-tech, high reliability",
      "Exceptional performance",
      "Industrial-grade robustness",
      "Simple operation",
      "Fully customizable",
      "Stainless steel disinfection reactor",
    ],
    description: "Sustainable water management for a circular economy",
  },
];

export const SpecializedServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-wave relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Tailored Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized services designed for your unique requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10 min-h-[600px] flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-6"
                  >
                    <Icon className="w-8 h-8 text-secondary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg text-accent mb-6">{service.subtitle}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Description */}
                  <div className="glass rounded-xl p-4 mb-6">
                    <p className="text-foreground italic text-sm">{service.description}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
