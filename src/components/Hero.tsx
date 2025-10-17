import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { HeroGeometric } from "./ui/shape-landing-hero";
import { useState, useEffect } from "react";

import heroImage1 from "@/assets/hero-water-facility.jpg";
import sectionImage from "@/assets/section-global-reach.jpg";
import equipmentImage from "@/assets/equipment-mbbr.jpg";

const backgroundImages = [heroImage1, sectionImage, equipmentImage];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
          </motion.div>
        </AnimatePresence>
      </div>

      <HeroGeometric
        badge="Global Water Solutions"
        title1="Engineering the Future of"
        title2="Water Treatment"
      >
      {/* Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.25, 0.4, 0.25, 1] as any }}
      >
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
          End-to-end water solutions for municipalities, industry, and agriculture. From mechanical screening to advanced denitrification - modular, prefabricated, ready-to-connect.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] as any }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-8"
      >
        {[
          { number: "1000+", label: "Installations" },
          { number: "50+", label: "Countries" },
          { number: "20", label: "Years Experience" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] as any }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-12 sm:mb-16 px-4"
      >
        <Button
          size="lg"
          onClick={() =>
            document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-gradient-cyan text-accent-foreground hover:scale-105 transition-all duration-300 shadow-2xl text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl w-full sm:w-auto"
        >
          Explore Our Solutions
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl backdrop-blur-xl bg-background/10 w-full sm:w-auto"
        >
          <a href="mailto:utcwater@utcwater.com">Request Consultation</a>
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
      </HeroGeometric>
    </div>
  );
};