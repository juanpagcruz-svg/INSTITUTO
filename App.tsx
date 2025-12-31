
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import CourseCatalog from './components/CourseCatalog';
import ParentWhatsApp from './components/ParentWhatsApp';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CourseCatalog />
        <ParentWhatsApp />
        
        {/* Call to Action Final Section - Simplified */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
             <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Empecemos el viaje <span className="text-brand-green">hoy.</span>
             </h2>
             <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Cada día cuenta en el desarrollo de tu hijo. Dale las herramientas que necesita para brillar con luz propia.
             </p>
             <div className="pt-6">
                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="px-12 py-6 bg-white text-slate-950 text-lg font-black rounded-3xl hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-white/10"
                >
                  Contáctanos Ahora
                </button>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
