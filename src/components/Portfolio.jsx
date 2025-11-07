import React from 'react';

const works = [
  {
    title: 'Kinetic Logo Reveal',
    tag: 'Animation',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Poster Series — Red/White',
    tag: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1695690877091-19b9d91007a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3N0ZXIlMjBTZXJpZXMlMjAlRTIlODAlOTQlMjBSZWQlMkZXaGl0ZXxlbnwwfDB8fHwxNzYyNTAyMjM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Abstract 3D Tiles',
    tag: '3D Visual',
    image: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'App Launch Visuals',
    tag: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?q=80&w=1600&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/70">A snapshot of projects across motion, 3D, and identity design.</p>
          </div>
          <div className="hidden h-1 w-24 rounded bg-red-600 md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img src={w.image} alt={w.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-medium">{w.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold">{w.title}</h3>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
