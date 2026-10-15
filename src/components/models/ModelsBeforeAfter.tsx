import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function ModelsBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-[#040913] text-[#E6EEF8] relative overflow-hidden border-t border-white/5">
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040913]/60 to-[#040913] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Split Image Frame */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative max-w-5xl mx-auto h-[440px] sm:h-[540px] rounded-3xl overflow-hidden border border-white/15 shadow-[0_0_90px_rgba(34,211,238,0.2)] select-none cursor-ew-resize bg-[#0B1426]"
        >
          {/* RIGHT SIDE: Clean glowing 3D version */}
          <div className="absolute inset-0 bg-[#040913] flex items-center justify-center">
            {/* Glowing neon halo */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#22D3EE]/35 via-[#8B5CF6]/35 to-[#EC4899]/25 blur-[120px] pointer-events-none" />

            {/* Clean glowing 3D object image */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src="/models/after-clean.svg"
                alt="Clean Glowing 3D Intelligence"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              />
            </div>

            {/* Two-word label right side */}
            <div className="absolute bottom-8 right-8 text-right pointer-events-none z-10">
              <span className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight uppercase drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                Luminous Order
              </span>
            </div>
          </div>

          {/* LEFT SIDE: Flat, messy visual */}
          <div
            style={{ width: `${sliderPosition}%` }}
            className="absolute inset-y-0 left-0 bg-[#070b14] overflow-hidden border-r-2 border-[#22D3EE] shadow-[5px_0_30px_rgba(0,0,0,0.9)] z-20 flex items-center justify-center"
          >
            <div className="absolute w-[900px] sm:w-[1100px] h-[540px] flex items-center justify-center pointer-events-none p-8">
              <img
                src="/models/before-messy.svg"
                alt="Flat Messy System"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain opacity-70 filter grayscale contrast-75"
              />
            </div>

            {/* Two-word label left side */}
            <div className="absolute bottom-8 left-8 text-left pointer-events-none z-30">
              <span className="text-2xl sm:text-4xl font-display font-black text-slate-400 tracking-tight uppercase">
                Raw Chaos
              </span>
            </div>
          </div>

          {/* Interactive Split Divider Handle */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute inset-y-0 w-0 z-30 flex items-center justify-center pointer-events-none -ml-4"
          >
            <div className="w-8 h-8 rounded-full bg-[#22D3EE] text-black shadow-[0_0_25px_#22D3EE] flex items-center justify-center border-2 border-white pointer-events-auto">
              <MoveHorizontal size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
