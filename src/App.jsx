import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <footer className="bg-black py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Zarman Studio — Crafted in red and white.</p>
      </footer>
    </div>
  );
}

export default App;
