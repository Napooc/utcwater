import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Network, CheckCircle2, Fish, ArrowRightCircle, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
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
    detailedDescription: "Our decentralized treatment systems provide comprehensive water management solutions for remote and specialized applications. These systems are designed to handle complex water treatment challenges while maintaining the highest standards of environmental compliance and operational efficiency.",
    benefits: [
      "Reduced infrastructure costs",
      "Lower energy consumption",
      "Minimal maintenance requirements",
      "Scalable design",
      "Remote monitoring capabilities",
      "Environmental compliance guaranteed"
    ],
    applications: [
      "Rural communities",
      "Industrial facilities",
      "Agricultural operations",
      "Recreational facilities",
      "Emergency response",
      "Temporary installations"
    ]
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
    detailedDescription: "Our turnkey potabilization units deliver clean, safe drinking water from any source. These comprehensive systems integrate advanced treatment technologies in a single, transportable package, ensuring rapid deployment and immediate water quality compliance.",
    benefits: [
      "Immediate deployment capability",
      "Guaranteed water quality",
      "Minimal operator training required",
      "Complete chemical dosing systems",
      "Automated operation",
      "Comprehensive monitoring"
    ],
    applications: [
      "Emergency water supply",
      "Remote communities",
      "Military installations",
      "Disaster relief",
      "Temporary settlements",
      "Industrial water supply"
    ]
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
    detailedDescription: "Our advanced aquaculture systems provide the perfect environment for aquatic life, from commercial fish farming to ornamental species. These systems combine biological filtration, water quality management, and automated monitoring to ensure optimal conditions for any aquatic application.",
    benefits: [
      "Optimal water quality control",
      "Automated life support",
      "Energy-efficient operation",
      "Scalable design",
      "Real-time monitoring",
      "Proven biological processes"
    ],
    applications: [
      "Commercial fish farming",
      "Hatchery operations",
      "Ornamental fish breeding",
      "Aquaponic systems",
      "Zoo aquariums",
      "Research facilities"
    ]
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
    detailedDescription: "Our Water Reuse Skid (REUT) represents the future of sustainable water management. This ultra-compact system transforms wastewater into high-quality reusable water, supporting circular economy principles while delivering exceptional performance and reliability.",
    benefits: [
      "Ultra-compact design",
      "High reliability",
      "Low maintenance",
      "Customizable configuration",
      "Stainless steel construction",
      "Circular economy support"
    ],
    applications: [
      "Industrial water recycling",
      "Municipal reuse programs",
      "Agricultural irrigation",
      "Cooling tower makeup",
      "Process water supply",
      "Emergency water reserves"
    ]
  },
];

export const SpecializedServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-wave relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Tailored Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Specialized services designed for your unique requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative glass rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 h-auto sm:h-[600px] md:h-[700px] flex flex-col"
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
                <div className="relative p-4 sm:p-5 md:p-8 lg:p-10 flex flex-col h-full gap-3 sm:gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 glass rounded-2xl flex-shrink-0"
                  >
                    <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-secondary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-accent">{service.subtitle}</p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start space-x-2 sm:space-x-3"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-secondary text-xs sm:text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {/* Description */}
                  <div className="glass rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
                    <p className="text-foreground italic text-xs sm:text-sm md:text-sm">{service.description}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    onClick={() => openModal(service)}
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base py-2 sm:py-3"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modern Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-0 rounded-2xl">
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>

                {/* Hero Image */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{selectedService.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">{selectedService.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Overview</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                        Key Features
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-foreground flex items-center gap-2">
                        <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                        Benefits
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1.5 sm:mt-2" />
                            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-foreground">Applications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3">
                      {selectedService.applications.map((application, index) => (
                        <div
                          key={index}
                          className="bg-secondary/10 rounded-lg p-2 sm:p-3 text-center text-xs sm:text-sm font-medium text-foreground hover:bg-secondary/20 transition-colors"
                        >
                          {application}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      Request Quote
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};
