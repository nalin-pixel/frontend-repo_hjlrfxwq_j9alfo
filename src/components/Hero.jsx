import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve contrast while keeping interactivity */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-300">
          Digital Art • Graphic Design • Animation
        </span>
        <h1 className="font-geist text-5xl font-semibold tracking-tight text-white drop-shadow-sm md:text-6xl">
          Zarman Studio
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Crafting bold visuals and immersive motion for brands and creators. Red and white, modern and minimal — made for the digital world.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
