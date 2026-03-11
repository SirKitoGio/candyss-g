import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/ui/MenuLayout';
import Reservation from '../components/Reservation';
import BackgroundFish from '../components/ui/BackgroundFish';

export default function App() {
  return (
    <div className="relative font-sans selection:bg-orange-500/30 selection:text-orange-200 bg-black">
      <div className="relative w-full flex flex-col pointer-events-none">

        {/* 1. Sky Hero with Moving Surface Wave */}
        <Hero />

        {/* 2. The Ocean Depths Container */}
        <div
          className="relative w-full flex flex-col pointer-events-auto"
          style={{
            // The solid gradient acts as the base color
            background: 'linear-gradient(180deg, #058899 0%, #034b5c 10%, #022a36 30%, #011b24 60%, #000c12 85%, #000000 100%)',
          }}
        >

          {/* THE 2D FISH LAYER (Sticky so it follows you down the ocean) */}
          {/* We removed the <Canvas> entirely! */}
          <div className="sticky top-0 left-0 w-full h-screen pointer-events-none z-0">
            <BackgroundFish />
          </div>

          {/* THE UI LAYER (Pulled up over the sticky background) */}
          <div className="relative z-10 -mt-[100vh] flex flex-col">
            {/* Underwater Menu Card */}
            <Menu />

            {/* Reservation Form */}
            <Reservation />
          </div>

        </div>
      </div>
    </div>
  );
}