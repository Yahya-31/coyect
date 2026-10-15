import React from 'react';

interface CoyectLogoProps {
  className?: string;
  variant?: 'emblem' | 'mark' | 'horizontal';
  size?: number | string;
}

export default function CoyectLogo({
  className = '',
  variant = 'horizontal',
  size,
}: CoyectLogoProps) {
  if (variant === 'emblem') {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size || '100%', maxWidth: typeof size === 'number' ? `${size}px` : undefined }}
      >
        <img
          src="/coyect-logo.svg"
          alt="CØYECT — Engineering Intelligent Market Growth"
          className="w-full h-auto drop-shadow-xl"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'mark') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-xs ${className}`}
        style={{
          width: size || 38,
          height: size || 38,
        }}
      >
        <img
          src="/coyect-logo.svg"
          alt="CØYECT Mark"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal variant: Circular glowing mark + Logotype + Tagline
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular Mark */}
      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-cyan-400/40 shadow-sm bg-[#040913]">
        <img
          src="/coyect-logo.svg"
          alt="CØYECT"
          className="w-full h-full scale-125 object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-display font-black text-lg tracking-tight text-gray-950 dark:text-white flex items-center">
            C<span className="text-cyan-500 font-extrabold mx-0.25">Ø</span>YECT
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </div>
        <span className="text-[8.5px] font-mono font-bold tracking-widest text-gray-500 uppercase mt-1 leading-none">
          INTELLIGENT MARKET GROWTH
        </span>
      </div>
    </div>
  );
}
