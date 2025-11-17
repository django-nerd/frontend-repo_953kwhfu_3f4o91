import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🪷</span>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Sabai Thai Massage</p>
            <p className="text-xs text-gray-500">Budapest, Hungary</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-emerald-600 transition">Services</a>
          <a href="#treatments" className="hover:text-emerald-600 transition">Pricing</a>
          <a href="#location" className="hover:text-emerald-600 transition">Location</a>
          <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          <a href="#booking" className="inline-flex items-center bg-emerald-600 text-white px-3 py-2 rounded-md hover:bg-emerald-700 transition">Book now</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-gray-700">
            <a href="#services" onClick={() => setOpen(false)} className="py-2">Services</a>
            <a href="#treatments" onClick={() => setOpen(false)} className="py-2">Pricing</a>
            <a href="#location" onClick={() => setOpen(false)} className="py-2">Location</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            <a href="#booking" onClick={() => setOpen(false)} className="py-2 text-emerald-600 font-medium">Book now</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;