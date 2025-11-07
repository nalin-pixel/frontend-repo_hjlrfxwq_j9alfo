import React from 'react';
import { PenTool, Film, Shapes, Palette } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Brand & Graphic Design',
    desc: 'Identity systems, posters, album art, social kits — clean, striking, and memorable.'
  },
  {
    icon: Film,
    title: 'Motion & Animation',
    desc: 'Logo stingers, product reveals, explainer motion, and animated titles with impact.'
  },
  {
    icon: Shapes,
    title: '3D & Visual Experiments',
    desc: 'Modern 3D compositions, abstract digital art, and interactive visuals.'
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    desc: 'Art direction for campaigns and content — cohesive visuals across every touchpoint.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative z-10 bg-white py-20 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-3xl font-semibold tracking-tight md:text-4xl">What I Do</h2>
            <p className="mt-2 max-w-2xl text-black/70">Design-first execution in red and white, tailored for digital experiences and content.</p>
          </div>
          <div className="hidden h-1 w-24 rounded bg-red-600 md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <div key={idx} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600 ring-1 ring-red-100">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
