import { motion } from "framer-motion";

interface UTCWaterLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

export const UTCWaterLogo = ({ 
  size = "md", 
  animated = true, 
  className = "" 
}: UTCWaterLogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl"
  };

  const waveVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial="initial"
      animate={animated ? "animate" : "initial"}
    >
      {/* UTC Letters */}
      <div className="flex items-center">
        <motion.span 
          variants={letterVariants}
          className={`${sizeClasses[size]} font-black`}
          style={{ color: "#1e40af" }} // Dark blue
        >
          U
        </motion.span>
        <motion.span 
          variants={letterVariants}
          className={`${sizeClasses[size]} font-black`}
          style={{ color: "#06B6D4" }} // Cyan blue
        >
          T
        </motion.span>
        <motion.span 
          variants={letterVariants}
          className={`${sizeClasses[size]} font-black`}
          style={{ color: "#374151" }} // Dark gray
        >
          C
        </motion.span>
      </div>

      {/* Wave Graphic */}
      <motion.div 
        className="relative -mt-2"
        variants={waveVariants}
      >
        <svg 
          width={size === "sm" ? "120" : size === "md" ? "160" : size === "lg" ? "240" : "320"} 
          height={size === "sm" ? "20" : size === "md" ? "30" : size === "lg" ? "40" : "50"} 
          viewBox="0 0 160 30" 
          className="overflow-visible"
        >
          {/* Upper wave - cyan */}
          <motion.path
            d="M10 15 Q40 5 70 15 T130 15 L150 15"
            stroke="#06B6D4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            variants={waveVariants}
          />
          {/* Lower wave - dark gray */}
          <motion.path
            d="M10 20 Q40 10 70 20 T130 20 L150 20"
            stroke="#374151"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            variants={waveVariants}
          />
        </svg>
      </motion.div>

      {/* Water text */}
      <motion.span 
        variants={letterVariants}
        className={`${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : size === "lg" ? "text-2xl" : "text-3xl"} font-medium lowercase`}
        style={{ color: "#374151" }} // Dark gray
      >
        water
      </motion.span>
    </motion.div>
  );
};
