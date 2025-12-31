
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  const statColors = ['text-brand-blue', 'text-brand-red', 'text-brand-green'];
  const borderColors = ['border-brand-blue/30', 'border-brand-red/30', 'border-brand-green/30'];

  return (
    <section id="stats" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-brand-yellow rounded-full"></div>
            <span className="text-brand-yellow text-sm font-black uppercase tracking-widest">Impact Dashboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black">Nuestras <span className="text-brand-gradient">Métricas</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`glass p-10 rounded-[2.5rem] border-2 ${borderColors[idx % 3]} group hover:bg-white/[0.05] transition-all`}>
              <div className={`${statColors[idx % 3]} mb-6 transform group-hover:scale-110 transition-transform`}>
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={stat.icon}></path>
                </svg>
              </div>
              <div className="text-7xl font-black text-white tracking-tighter mb-4">{stat.value}</div>
              <div className="text-slate-500 font-black uppercase tracking-[0.2em] text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-10 glass rounded-[3rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <h4 className="text-white font-black text-xl">Distribución Geográfica</h4>
            <p className="text-slate-500 font-medium">Cochabamba (Sede Presencial) + Red Virtual Global</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" />
                 </div>
               ))}
             </div>
             <span className="text-white font-bold text-lg">+12k Estudiantes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
