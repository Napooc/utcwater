import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { AuroraBackground } from "./ui/aurora-background";
export const Hero = () => {
  return <AuroraBackground className="bg-background dark:bg-background">
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut"
    }} className="relative z-10 flex flex-col gap-8 items-center justify-center px-6 text-center">
        {/* Main headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent leading-tight max-w-5xl">
          Engineering the Future of Water Treatment
        </motion.h1>

        {/* Subheadline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg md:text-2xl text-muted-foreground max-w-3xl">
          End-to-end water solutions for municipalities, industry, and agriculture. From mechanical screening to advanced denitrification - modular, prefabricated, ready-to-connect.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {[{
          number: "1000+",
          label: "Installations"
        }, {
          number: "50+",
          label: "Countries"
        }, {
          number: "20",
          label: "Years Experience"
        }].map((stat, index) => {})}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.3
      }} className="flex flex-col sm:flex-row gap-4 items-center">
          <Button size="lg" className="bg-gradient-cyan text-accent-foreground hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-10 py-7 rounded-2xl">
            Explore Our Solutions
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg px-10 py-7 rounded-2xl backdrop-blur-xl bg-background/10">
            Request Consultation
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.8
      }} className="absolute bottom-8">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-secondary">
            
          </motion.div>
        </motion.div>
      </motion.div>
    </AuroraBackground>;
};