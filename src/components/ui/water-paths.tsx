"use client";

import { motion } from "framer-motion";

function FloatingWaterPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 8 * position} -${189 + i * 8}C-${
            380 - i * 8 * position
        } -${189 + i * 8} -${312 - i * 8 * position} ${216 - i * 8} ${
            152 - i * 8 * position
        } ${343 - i * 8}C${616 - i * 8 * position} ${470 - i * 8} ${
            684 - i * 8 * position
        } ${875 - i * 8} ${684 - i * 8 * position} ${875 - i * 8}`,
        color: `rgba(6, 182, 212, ${0.1 + i * 0.02})`, // Cyan color for water theme
        width: 0.8 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-cyan-400/20"
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
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0.2, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function WaterPaths() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <FloatingWaterPaths position={1} />
            <FloatingWaterPaths position={-1} />
            <FloatingWaterPaths position={0.5} />
        </div>
    );
}
