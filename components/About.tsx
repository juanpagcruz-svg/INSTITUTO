
import React from 'react';
import Logo from './Logo';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl glass border border-white/5 text-brand-blue text-xs font-black uppercase tracking-widest">
              <span>¿QUIÉNES SOMOS?</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-white">
              Mucho más que una <span className="text-brand-blue">clase de apoyo.</span>
            </h2>
            
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed">
              <p>
                En <strong>Jordan Gauss</strong>, bajo la guía de <strong>Juan Pablo Gonzales Cruz</strong>, sabemos que cada niño es un mundo. A veces, lo que en el colegio parece un problema, para nosotros es una señal de que tu hijo tiene una mente brillante que piensa diferente.
              </p>
              <p>
                Estamos en <strong>Cochabamba</strong> con clases presenciales llenas de paciencia y cariño, pero también llegamos a todo el mundo por internet. No solo enseñamos matemáticas, enseñamos a los chicos a confiar en ellos mismos.
              </p>
            </div>

            <div className="relative pl-10 border-l-4 border-brand-yellow py-4">
              <p className="text-white text-2xl font-bold italic leading-relaxed">
                "Si un niño no puede aprender de la manera en que enseñamos, enseñamos de la manera en que él aprende."
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center order-1 lg:order-2">
            {/* The Logo frame as seen in the screenshot */}
            <div className="relative group p-4">
               <div className="absolute inset-0 bg-brand-gradient blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative glass border-white/10 rounded-[4rem] p-12 md:p-20 shadow-2xl flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                  <Logo size={280} vertical />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
