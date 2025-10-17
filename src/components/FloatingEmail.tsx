import { motion } from "framer-motion";
import { Mail } from "lucide-react";
export const FloatingEmail = () => {
  return <motion.a href="mailto:utcwater@utcwater.com" initial={{
    scale: 0,
    opacity: 0
  }} animate={{
    scale: 1,
    opacity: 1
  }} transition={{
    delay: 1,
    duration: 0.5
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-cyan shadow-2xl flex items-center justify-center cursor-pointer group hover:shadow-glow-lg transition-all duration-300" aria-label="Email us">
      <motion.div animate={{
      y: [0, -5, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        <Mail className="text-background group-hover:scale-110 transition-transform" size={28} />
      </motion.div>
      
      {/* Pulse effect */}
      
    </motion.a>;
};