import React from 'react';
import { ArrowRight, Sparkles, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsTalentHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsTalentHero({ onScrollToSection }: ModelsTalentHeroProps) {
  return (
    <section
      id="models-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16"
    >
      {/* Cinematic Full-Screen Background Image / Photoshoot Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/tho-ge-photo-shoot-7834151.jpg"
          alt="Professional model photoshoot on beach"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.12] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Vignette & Subtle Warm Spotlight Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle Luxury Pre-title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 backdrop-blur-md border border-blue-500/30 text-white text-[11px] font-mono tracking-[0.25em] uppercase mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <Sparkles size={12} className="text-blue-400 animate-pulse" />
          <span className="text-white">Talent Launch &amp; Personal Branding Platform</span>
        </motion.div>

        {/* Main Headline: YOUR FACE. YOUR BRAND. YOUR CAREER. */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight uppercase leading-[0.92] text-white mb-8"
        >
          YOUR FACE. <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-blue-300">
            YOUR BRAND.
          </span> <br />
          YOUR CAREER.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-light text-zinc-200 max-w-3xl leading-relaxed mb-10 text-balance"
        >
          We help aspiring models turn their potential into a powerful personal brand through professional photography, cinematic videography and strategic social media promotion.
        </motion.p>

        {/* CTAs: Primary & Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-14 w-full sm:w-auto"
        >
          {/* Primary CTA (Crisp White) */}
          <button
            onClick={() => onScrollToSection('models-application')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.4)] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>START YOUR MODEL JOURNEY</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-blue-600" />
          </button>

          {/* Secondary CTA (Blue Accent) */}
          <button
            onClick={() => onScrollToSection('models-eligibility')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600/15 hover:bg-blue-600/30 backdrop-blur-md text-white border border-blue-500/50 hover:border-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <span>BECOME A MODEL</span>
          </button>
        </motion.div>

        {/* Small Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 border-t border-white/15 w-full max-w-2xl flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-zinc-300 text-xs sm:text-sm font-mono tracking-wider"
        >
          <span className="text-white font-medium">Professional Shoots</span>
          <span className="text-blue-500 font-bold">•</span>
          <span className="text-white font-medium">Personal Branding</span>
          <span className="text-blue-500 font-bold">•</span>
          <span className="text-white font-medium">Social Media Growth</span>
          <span className="text-blue-500 font-bold">•</span>
          <span className="text-white font-medium">Brand Opportunities</span>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => onScrollToSection('models-intro')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-blue-400 hover:text-white transition-colors cursor-pointer group z-20"
        aria-label="Scroll down to introduction"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">DISCOVER</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
