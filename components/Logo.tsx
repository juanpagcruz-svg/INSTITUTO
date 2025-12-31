
import React from 'react';

const Logo: React.FC<{ className?: string; size?: number; showText?: boolean; vertical?: boolean }> = ({ 
  className = "", 
  size = 60, 
  showText = true,
  vertical = false 
}) => {
  const colors = {
    blue: '#4285f4',
    red: '#ea4335',
    yellow: '#fbbc05',
    green: '#34a853'
  };

  const Icon = () => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Axis */}
      <path d="M50 10V90" stroke="#333" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
      
      {/* LEFT SIDE: BRAIN (Hand-drawn rounded strokes) */}
      {/* Top half: Blue */}
      <path 
        d="M50 15C42 15 36 19 34 25C26 22 20 26 18 34C10 38 10 48 16 54C14 58 14 62 18 64" 
        stroke={colors.blue} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />
      {/* Bottom half: Red */}
      <path 
        d="M18 64C14 68 14 74 18 78C12 85 16 93 24 93C28 98 38 98 44 93C48 97 50 97 50 93" 
        stroke={colors.red} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />

      {/* RIGHT SIDE: CUBE (2x2 Isometric Grid) */}
      {/* Top segments: Yellow */}
      <path 
        d="M50 15L85 35L50 55 M85 35V55L50 75" 
        stroke={colors.yellow} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />
      <path 
        d="M67.5 25L67.5 65" 
        stroke={colors.yellow} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />
      
      {/* Bottom segments: Green */}
      <path 
        d="M85 55V75L50 95V75M85 75L50 95 M67.5 65V85 M50 55H85" 
        stroke={colors.green} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />
    </svg>
  );

  if (!showText) return <Icon />;

  return (
    <div className={`flex ${vertical ? 'flex-col items-center text-center' : 'items-center space-x-5'} ${className}`}>
      <div className="relative flex-shrink-0">
         <Icon />
      </div>
      <div className={`flex flex-col ${vertical ? 'mt-6' : ''}`}>
        <div className={`${vertical ? 'text-5xl md:text-6xl' : 'text-3xl'} font-black tracking-tight leading-none flex items-center`}>
          <span style={{ color: colors.blue }}>J</span>
          <span style={{ color: colors.red }}>ordan</span>
          <span className="ml-2" style={{ color: colors.yellow }}>G</span>
          <span style={{ color: colors.green }}>auss</span>
        </div>
        <span className={`${vertical ? 'text-base mt-4' : 'text-[11px]'} font-bold tracking-[0.3em] uppercase text-slate-400 opacity-90`}>
          Inteligencia en todas sus formas
        </span>
      </div>
    </div>
  );
};

export default Logo;
