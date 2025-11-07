import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="font-geist text-lg font-semibold text-white">
          <span className="rounded bg-white px-2 py-1 text-black">Z</span>arman <span className="text-red-500">Studio</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
          <a href="#portfolio" className="text-sm text-white/80 hover:text-white">Portfolio</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500 md:block">Hire Me</a>
      </div>
    </header>
  );
};

export default Navbar;
