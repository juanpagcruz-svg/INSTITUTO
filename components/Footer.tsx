
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <Logo size={64} />
            <div className="space-y-4">
              <p className="text-slate-500 text-base leading-relaxed max-w-xs">
                Potenciando mentes neurodiversas desde Cochabamba para el mundo.
              </p>
              <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                Responsable: Juan Pablo Gonzales Cruz
              </div>
            </div>
            <div className="flex space-x-5">
              {[
                { name: 'X', color: 'hover:bg-brand-blue' },
                { name: 'In', color: 'hover:bg-brand-red' },
                { name: 'Ig', color: 'hover:bg-brand-yellow' },
                { name: 'Yt', color: 'hover:bg-brand-green' }
              ].map(social => (
                <a key={social.name} href="#" className={`w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all border border-slate-800/50 shadow-lg`}>
                  <span className="text-xs font-black uppercase">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-10 uppercase tracking-[0.2em] text-[10px]">Sede Cochabamba</h4>
            <ul className="space-y-6 text-slate-500 text-sm font-semibold">
              <li>Tutoría Especializada</li>
              <li>Diagnóstico Presencial</li>
              <li>Talleres de Talento</li>
              <li>Cochabamba, Bolivia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-10 uppercase tracking-[0.2em] text-[10px]">Jordan Gauss Virtual</h4>
            <ul className="space-y-6 text-slate-500 text-sm font-semibold">
              <li>Plataforma 24/7</li>
              <li>Mentoría Online</li>
              <li>Comunidad Global</li>
              <li>Roadmaps de Carrera</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-10 uppercase tracking-[0.2em] text-[10px]">Contacto</h4>
            <ul className="space-y-6 text-slate-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
              <li><a href="https://wa.me/5491123456789" className="text-brand-green font-bold">WhatsApp Business</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2024 Jordan Gauss Academy. Inteligencia en todas sus formas.
          </p>
          <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
            <span className="text-slate-600 italic">"Los outliers son el futuro"</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
