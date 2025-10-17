"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UTCWaterLogo } from "@/components/ui/utc-water-logo";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(6, 182, 212, ${0.1 + i * 0.03})`, // Cyan color for water theme
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-cyan-400/30"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Water Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Water Treatment",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Logo */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-8"
                    >
                        <UTCWaterLogo size="lg" animated={true} />
                    </motion.div>

                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mx-auto w-fit">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                                Global Water Solutions
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Subheadline */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mb-16 max-w-4xl mx-auto"
                    >
                        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light text-center drop-shadow-xl">
                            End-to-end water solutions for municipalities, industry, and agriculture. 
                            <br className="hidden sm:block" />
                            From mechanical screening to advanced denitrification - modular, prefabricated, ready-to-connect.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-16 w-full max-w-5xl mx-auto"
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
                                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                                className="text-center group"
                            >
                                <div className="relative">
                                    <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm sm:text-base md:text-lg text-white/80 uppercase tracking-[0.2em] font-medium drop-shadow-lg">
                                        {stat.label}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                    >
                        <Button
                            size="lg"
                            onClick={() => document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })}
                            className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-lg sm:text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
                        >
                            <span className="relative z-10">Explore Our Solutions</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                        
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 text-lg sm:text-xl px-12 py-6 rounded-full backdrop-blur-md bg-white/5 font-bold hover:scale-105"
                        >
                            <a href="mailto:utcwater@utcwater.com">
                                Request Consultation
                            </a>
                        </Button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 2 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-white/70 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
