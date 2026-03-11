"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Realistic Fish Silhouette
const FishMarker = ({ color }) => (
  <svg
    width="60"
    height="30"
    viewBox="0 0 100 50"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: color, opacity: 0.2 }}
  >
    {/* Drawn facing LEFT */}
    <path d="M 95,25 C 85,15 65,8 45,12 C 25,16 15,18 5,20 L 0,10 C 5,20 5,30 0,40 L 5,30 C 15,32 25,34 45,38 C 65,42 85,35 95,25 Z" />
    <path d="M 40,12 L 35,4 Q 45,8 55,15 Z" />
    <path d="M 40,38 L 35,46 Q 45,42 55,35 Z" />
    <path d="M 75,28 Q 65,35 60,30 Q 70,25 75,28 Z" fill="rgba(255,255,255,0.15)" />
  </svg>
);

export default function BackgroundFish() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    const generateFishes = () => {
      const newFishes = [];
      const numFishes = 15;
      for (let i = 0; i < numFishes; i++) {
        const fromLeft = Math.random() > 0.5;
        newFishes.push({
          id: i,
          yOffset: Math.random() * 80 + 10,
          duration: Math.random() * 20 + 20,
          delay: Math.random() * -40,
          scale: Math.random() * 0.5 + 0.5,
          fromLeft: fromLeft,
          color: Math.random() > 0.8 ? '#fcd34d' : '#e0f2fe',
        });
      }
      setFishes(newFishes);
    };
    generateFishes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {fishes.map((fish) => (
        <motion.div
          key={fish.id}
          className="absolute"
          style={{
            top: `${fish.yOffset}%`,
            left: fish.fromLeft ? '-10%' : '110%',
          }}
          initial={{
            scaleX: fish.fromLeft ? fish.scale : -fish.scale,
            scaleY: fish.scale
          }}
          animate={{
            x: fish.fromLeft ? ['0vw', '120vw'] : ['0vw', '-120vw'],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: fish.duration,
              ease: "linear",
              delay: fish.delay,
            },
            y: {
              repeat: Infinity,
              duration: fish.duration / 3,
              ease: "easeInOut",
              delay: fish.delay,
            }
          }}
        >
          <FishMarker color={fish.color} />
        </motion.div>
      ))}
    </div>
  );
}