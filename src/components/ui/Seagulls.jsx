"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Minimalist Seagull Silhouette
const SeagullMarker = ({ opacity }) => (
    <svg
        width="50"
        height="25"
        viewBox="0 0 60 30"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#ffffff', opacity: opacity }}
    >
        {/* A classic V-shaped flying bird path */}
        <path d="M0,20 Q15,0 30,15 Q45,0 60,20 Q45,10 30,25 Q15,10 0,20 Z" />
    </svg>
);

export default function Seagulls() {
    const [seagulls, setSeagulls] = useState([]);

    useEffect(() => {
        const generateSeagulls = () => {
            const newSeagulls = [];
            const numSeagulls = 8; // A small flock
            for (let i = 0; i < numSeagulls; i++) {
                const fromLeft = Math.random() > 0.5;
                newSeagulls.push({
                    id: i,
                    // Keep them in the upper part of the sky (5% to 40% down)
                    yOffset: Math.random() * 35 + 5,
                    duration: Math.random() * 15 + 20,
                    delay: Math.random() * -30,
                    scale: Math.random() * 0.4 + 0.6,
                    fromLeft: fromLeft,
                    opacity: Math.random() * 0.4 + 0.3,
                });
            }
            setSeagulls(newSeagulls);
        };
        generateSeagulls();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {seagulls.map((bird) => (
                <motion.div
                    key={bird.id}
                    className="absolute"
                    style={{
                        top: `${bird.yOffset}%`,
                        left: bird.fromLeft ? '-10%' : '110%',
                    }}
                    initial={{
                        // Tilt the bird slightly forward depending on direction
                        rotate: bird.fromLeft ? 10 : -10,
                        scaleX: bird.scale,
                        scaleY: bird.scale
                    }}
                    animate={{
                        x: bird.fromLeft ? ['0vw', '120vw'] : ['0vw', '-120vw'],
                        y: [0, Math.random() * 40 - 20, 0], // Gentle soaring
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            duration: bird.duration,
                            ease: "linear",
                            delay: bird.delay,
                        },
                        y: {
                            repeat: Infinity,
                            duration: bird.duration / 2,
                            ease: "easeInOut",
                            delay: bird.delay,
                        }
                    }}
                >
                    {/* The Flapping Animation */}
                    <motion.div
                        animate={{ scaleY: [1, 0.2, 1] }}
                        transition={{
                            repeat: Infinity,
                            // Randomize flap speed so they don't look robotic
                            duration: Math.random() * 0.4 + 0.4,
                            ease: "easeInOut"
                        }}
                    >
                        <SeagullMarker opacity={bird.opacity} />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}