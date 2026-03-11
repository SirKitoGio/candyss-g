"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// 2D Side-Profile Lobster (Stylized, clean, non-creepy!)
const LobsterSVG = ({ color }) => (
    <svg width="120" height="60" viewBox="-20 10 240 90" xmlns="http://www.w3.org/2000/svg">
        <g strokeLinejoin="round" strokeLinecap="round">
            {/* Back Walking Legs */}
            <path d="M 80 57 L 70 75 L 60 80" fill="none" stroke={color} strokeWidth="4" style={{ opacity: 0.6 }} />
            <path d="M 95 58 L 85 76 L 75 81" fill="none" stroke={color} strokeWidth="4" style={{ opacity: 0.6 }} />
            <path d="M 110 58 L 100 76 L 90 81" fill="none" stroke={color} strokeWidth="4" style={{ opacity: 0.6 }} />
            <path d="M 125 57 L 115 75 L 105 80" fill="none" stroke={color} strokeWidth="4" style={{ opacity: 0.6 }} />

            {/* Antennae */}
            <path d="M 148 48 C 160 25 180 20 195 25" fill="none" stroke={color} strokeWidth="3" style={{ opacity: 0.8 }} />
            <path d="M 148 48 C 170 35 190 35 200 45" fill="none" stroke={color} strokeWidth="1.5" style={{ opacity: 0.8 }} />

            {/* Tail Base (Abdomen) */}
            <path d="M 75 45 C 55 42 35 45 10 55 C 30 60 55 58 75 56 Z" fill={color} />

            {/* Tail Segments (Separators) */}
            <path d="M 60 44 C 58 48 55 52 56 57" fill="none" stroke="#ffffff" strokeWidth="2" style={{ opacity: 0.3 }} />
            <path d="M 45 47 C 43 51 40 55 42 59" fill="none" stroke="#ffffff" strokeWidth="2" style={{ opacity: 0.3 }} />
            <path d="M 30 51 C 28 55 25 58 28 61" fill="none" stroke="#ffffff" strokeWidth="2" style={{ opacity: 0.3 }} />

            {/* Tail Fan (Telson and Uropods) */}
            <path d="M 10 55 L -10 48 L -15 63 L 5 60 Z" fill={color} />
            <path d="M 10 55 L 0 42 L -15 54 Z" fill={color} />

            {/* Carapace (Body) */}
            <path d="M 70 45 C 95 40 120 40 145 48 C 150 50 145 56 130 58 C 110 60 90 60 70 56 Z" fill={color} />

            {/* Rostrum (Nose spike) */}
            <path d="M 145 48 L 155 46 L 148 52 Z" fill={color} />

            {/* Front Walking Legs */}
            <path d="M 85 58 L 78 78 L 68 83" fill="none" stroke={color} strokeWidth="4" />
            <path d="M 100 60 L 93 80 L 83 85" fill="none" stroke={color} strokeWidth="4" />
            <path d="M 115 59 L 108 79 L 98 84" fill="none" stroke={color} strokeWidth="4" />
            <path d="M 130 56 L 123 76 L 113 81" fill="none" stroke={color} strokeWidth="4" />

            {/* Main Claw Arm */}
            <path d="M 120 54 L 135 66 C 140 68 145 66 140 60 L 130 50 Z" fill={color} />

            {/* Main Top Claw (Chela) */}
            <path d="M 135 63 C 160 45 185 50 190 65 C 192 75 165 77 145 70 C 138 67 135 65 135 63 Z" fill={color} />

            {/* Bottom Small Claw */}
            <path d="M 138 68 C 145 82 170 85 175 75 C 170 69 150 69 140 68 Z" fill={color} />

            {/* Eye */}
            <circle cx="138" cy="48" r="2.5" fill="#1a1a1a" />
            <circle cx="139" cy="47" r="1" fill="#ffffff" />
        </g>
    </svg>
);

export default function CrawlingLobsters() {
    const [lobsters, setLobsters] = useState([]);

    useEffect(() => {
        const generateLobsters = () => {
            const newLobsters = [];
            const numLobsters = 6;

            for (let i = 0; i < numLobsters; i++) {
                const isFacingRight = Math.random() > 0.5;

                newLobsters.push({
                    id: i,
                    bottom: Math.random() * 15, // Hug the floor closely
                    scale: Math.random() * 0.4 + 0.6,
                    duration: Math.random() * 40 + 50, // Much slower, relaxed crawl
                    delay: Math.random() * -40,
                    isFacingRight: isFacingRight,
                    color: Math.random() > 0.7 ? '#ea580c' : '#b91c1c'
                });
            }
            setLobsters(newLobsters);
        };

        generateLobsters();
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden z-0">
            {lobsters.map((lobster) => (
                <motion.div
                    key={lobster.id}
                    className="absolute"
                    style={{ bottom: `${lobster.bottom}px` }}
                    initial={{ scale: lobster.scale }}
                    animate={{
                        x: lobster.isFacingRight ? ['10vw', '110vw'] : ['110vw', '10vw'],
                        // Slowed the rotation way down so it's a gentle sway, not a jitter
                        rotate: lobster.isFacingRight ? [-2, 2, -2] : [2, -2, 2],
                        // Slowed the vertical bob down to look like a relaxed walk
                        y: [0, -2, 0]
                    }}
                    transition={{
                        x: { repeat: Infinity, duration: lobster.duration, ease: "linear", delay: lobster.delay },
                        rotate: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                        y: { repeat: Infinity, duration: 1.0, ease: "easeInOut" }
                    }}
                >
                    <div style={{ transform: `scaleX(${lobster.isFacingRight ? 1 : -1})` }}>
                        <LobsterSVG color={lobster.color} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}