import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import ModelsHero3D from './ModelsHero3D';

interface ModelsHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsHero({ onScrollToSection }: ModelsHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="models-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040913] text-[#E6EEF8] pt-20 pb-16"
    >
      {/* 3D WebGL Scene on Desktop, Static High-Res Image on Mobile */}
      {isMobile ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/models/hero-orb.svg"
            alt="3D Glowing Crystal Orb with orbiting models"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85 scale-105"
          />
        </div>
      ) : (
        <ModelsHero3D />
      )}

      {/* Volumetric Dark Vignette around edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040913]/30 to-[#040913] pointer-events-none" />

      {/* Soft gradient fade into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#040913] via-[#040913]/80 to-transparent pointer-events-none" />

      {/* Centered Minimalist Typography: ONLY the title "Our Models" and one short subline: "Intelligence, made visible." */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pointer-events-none select-none">
        {/* Title: only the title "Our Models" */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tight uppercase leading-[0.88] text-white mb-6 drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
        >
          Our Models
        </motion.h1>

        {/* One short subline: "Intelligence, made visible." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-3xl font-display font-light text-[#8FA3BF] tracking-tight"
        >
          <span className="text-white font-medium">Intelligence,</span> made visible.
        </motion.p>
      </div>

      {/* Smooth scroll down indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        onClick={() => onScrollToSection('model-grid')}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 text-[#8FA3BF] hover:text-[#22D3EE] transition-colors cursor-pointer group"
        aria-label="Scroll to Model Showcase Grid"
      >
        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#22D3EE]/50 flex items-center justify-center transition-colors">
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </div>
      </motion.button>
    </section>
  );
}
