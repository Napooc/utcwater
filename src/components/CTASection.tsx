import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
export const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-3 h-3 bg-secondary/20 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
      </div>
    </section>;
};