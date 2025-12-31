
import React, { useState } from 'react';
import { getCourseRecommendation } from '../services/geminiService';

const GeminiAdvisor: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const result = await getCourseRecommendation(goal);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-32 container mx-auto px-6">
      <div className="relative glass border-white/5 rounded-[4rem] p-10 md:p-20 overflow-hidden shadow-2xl group">
        {/* Animated Background Lights */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] group-hover:bg-brand-blue/10 transition-colors"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] group-hover:bg-brand-red/10 transition-colors"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="flex justify-center">
             <div className="px-6 py-2 rounded-2xl bg-slate-950 border border-white/10 flex items-center space-x-3">
                <div className="flex space-x-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-bounce animation-delay-200"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-bounce animation-delay-400"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce animation-delay-600"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Intelligent Advisor</span>
             </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            ¿Cuál es tu <span className="text-brand-gradient">Próximo Paso?</span>
          </h2>
          
          <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Nuestra IA analiza tus objetivos y diseña el roadmap perfecto para ti.
          </p>
          
          <div className="flex flex-col md:flex-row items-stretch space-y-5 md:space-y-0 md:space-x-5 max-w-3xl mx-auto">
            <input 
              type="text" 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Ej: Quiero ser Ingeniero de ML en Google..."
              className="flex-1 bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-white text-lg placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="px-12 py-6 bg-white text-slate-950 text-lg font-black rounded-3xl hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 shadow-2xl shadow-white/10"
            >
              {loading ? 'Consultando...' : 'Preguntar'}
            </button>
          </div>

          {recommendation && (
            <div className="mt-16 p-10 bg-slate-950/80 rounded-[3rem] border border-brand-blue/20 text-left animate-in fade-in slide-in-from-bottom-12 duration-700 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-blue/30">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Tu Roadmap Jordan Gauss</div>
                  <p className="text-white text-xl md:text-2xl leading-relaxed font-semibold italic">
                    {recommendation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
