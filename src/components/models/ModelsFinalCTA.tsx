import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModelsFinalCTAProps {
  onStartProject?: () => void;
  onNavigateHome: () => void;
}

export default function ModelsFinalCTA({ onStartProject, onNavigateHome }: ModelsFinalCTAProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const handleCtaClick = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.75 },
        colors: ['#F59E0B', '#22D3EE', '#8B5CF6', '#EC4899', '#ffffff'],
      });
    } catch {
      // fallback
    }

    if (onStartProject) {
      onStartProject();
    } else {
      onNavigateHome();
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <section id="final-cta" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#040913] text-[#E6EEF8] py-28 border-t border-white/5">
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040913]/60 to-[#040913] pointer-events-none" />

      {/* Orbit Scene Returns: 6 objects converge into one intense glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Converged central glowing glass nucleus */}
        <div className="w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#22D3EE]/30 via-[#8B5CF6]/35 to-[#EC4899]/25 blur-[120px] animate-pulse" />

        {/* Converging Orbital Rings */}
        <div
          className="absolute w-[460px] h-[460px] rounded-full border border-[#22D3EE]/30 animate-spin"
          style={{ animationDuration: '30s' }}
        />
        <div
          className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#8B5CF6]/35 animate-spin"
          style={{ animationDuration: '20s', animationDirection: 'reverse' }}
        />
        <div className="absolute w-[180px] h-[180px] rounded-full border border-[#EC4899]/40" />

        {/* Single intense point of light where all 6 objects meet */}
        <div className="absolute w-6 h-6 rounded-full bg-white shadow-[0_0_60px_#22D3EE,0_0_100px_#8B5CF6]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.9] uppercase text-white mb-12"
        >
          Intelligence, <br />
          <span className="text-[#22D3EE] drop-shadow-[0_0_35px_rgba(34,211,238,0.5)]">
            Made Visible.
          </span>
        </motion.h2>

        {/* A single amber button: 'Start a Project' with a magnetic hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <motion.button
            ref={buttonRef}
            onClick={handleCtaClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: btnOffset.x, y: btnOffset.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="group px-12 py-5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-display font-extrabold text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:shadow-[0_0_70px_rgba(245,158,11,0.8)] cursor-pointer flex items-center gap-3 select-none"
          >
            <span>Start a Project</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
