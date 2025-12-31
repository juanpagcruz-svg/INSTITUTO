
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`flex justify-between items-center px-10 py-5 rounded-[2.5rem] transition-all duration-500 border border-white/5 ${isScrolled ? 'glass shadow-2xl scale-95' : 'bg-slate-950/40 backdrop-blur-sm'}`}>
          <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-105 transition-transform duration-300">
            <Logo size={42} />
          </a>
          
          <div className="hidden md:flex items-center space-x-12 text-[13px] font-black text-slate-300 uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-brand-blue transition-colors relative group">
              Nosotros
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-blue transition-all group-hover:w-full rounded-full"></span>
            </a>
            <a href="#courses" className="hover:text-brand-green transition-colors relative group">
              Cursos
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-green transition-all group-hover:w-full rounded-full"></span>
            </a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors relative group">
              Contacto
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-yellow transition-all group-hover:w-full rounded-full"></span>
            </a>
            <button className="px-10 py-4 rounded-[1.5rem] bg-white text-slate-950 hover:bg-brand-blue hover:text-white transition-all font-black shadow-xl active:scale-95 text-xs">
              Acceso
            </button>
          </div>

          <button className="md:hidden p-3 rounded-2xl glass text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
