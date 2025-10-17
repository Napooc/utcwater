import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { HeroGeometric } from "./ui/shape-landing-hero";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-water-facility.jpg";
import sectionImage from "@/assets/section-global-reach.jpg";
import equipmentImage from "@/assets/equipment-mbbr.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import controlRoom from "@/assets/about-control-room.jpg";
import globalReach from "@/assets/section-global-reach.jpg";

const backgroundImages = [
  heroImage1, 
  equipmentImage, 
  aboutTeam, 
  controlRoom,
  sectionImage,
  globalReach
];
export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return <div className="relative min-h-screen">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentImageIndex} 
            initial={{ opacity: 0, scale: 1.05 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.05 }} 
            transition={{ duration: 2, ease: "easeInOut" }} 
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center filter brightness-50" 
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/90 via-[#030303]/70 to-[#030303]/95" />
          </motion.div>
        </AnimatePresence>
      </div>

      <HeroGeometric badge="Global Water Solutions" title1="Water" title2="Treatment">
        {/* Subheadline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.4, 0.25, 1] as any }}
          className="mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
            End-to-end water solutions for municipalities, industry, and agriculture. From mechanical screening to advanced denitrification - modular, prefabricated, ready-to-connect.
          </p>
        </motion.div>

        {/* Stats - Modern centered design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] as any }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24 mb-12 px-4"
        >
          {[
            { number: "1000+", label: "INSTALLATIONS" },
            { number: "50+", label: "COUNTRIES" },
            { number: "20", label: "YEARS EXPERIENCE" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#0BA5EC] via-[#06B6D4] to-[#14B8A6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.4, 0.25, 1] as any }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center px-4"
        >
          <Button 
            size="lg" 
            onClick={() => document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-[#06B6D4] to-[#0BA5EC] text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50 text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full font-medium w-full sm:w-auto"
          >
            Explore Our Solutions
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 transition-all duration-300 text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full backdrop-blur-xl bg-transparent font-medium w-full sm:w-auto"
          >
            <a href="mailto:utcwater@utcwater.com">Request Consultation</a>
          </Button>
        </motion.div>
      </HeroGeometric>
    </div>;
};