import React from 'react';
import { ArrowRight, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface ModelsTalentFinalCTAProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateHome: () => void;
}

export default function ModelsTalentFinalCTA({ onScrollToSection, onNavigateHome }: ModelsTalentFinalCTAProps) {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
      });
    } catch {
      // fallback
    }
  };

  const handleApplyClick = () => {
    triggerConfetti();
    onScrollToSection('models-application');
  };

  return (
    <section
      id="models-final-cta"
      className="relative bg-white py-16 px-4 sm:px-6 border-t border-slate-200"
    >
      {/* Luxury Editorial Framed Card */}
      <div className="relative max-w-7xl mx-auto min-h-[75vh] rounded-3xl overflow-hidden flex items-center justify-center p-8 sm:p-16 text-white shadow-2xl border border-slate-200">
        {/* Full-Screen Cinematic Fashion Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=90"
            alt="Cinematic luxury fashion model on runway"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.15] scale-105"
          />
          {/* Gradients and vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 backdrop-blur-md border border-blue-400/40 text-white text-[11px] font-mono tracking-[0.25em] uppercase mb-8 shadow-md"
          >
            <Sparkles size={12} className="text-blue-400 animate-pulse" />
            <span>Casting &amp; Development Desk</span>
          </motion.div>

          {/* Headline: YOUR JOURNEY STARTS HERE. */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight uppercase leading-[0.92] text-white mb-8"
          >
            YOUR JOURNEY <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
              STARTS HERE.
            </span>
          </motion.h2>

          {/* Subheadline: One shoot can change how the world sees you. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 max-w-2xl leading-relaxed mb-12"
          >
            One shoot can change how the world sees you.
          </motion.p>

          {/* Buttons: Primary BECOME A MODEL, Secondary TALK TO OUR TEAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12 w-full sm:w-auto"
          >
            {/* Primary Button (Crisp White) */}
            <button
              onClick={handleApplyClick}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white hover:bg-blue-50 text-slate-900 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-white/20 hover:shadow-blue-500/30 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>BECOME A MODEL</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-blue-600" />
            </button>

            {/* Secondary Button (Blue Accent) */}
            <a
              href="tel:+917904400252"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-blue-600/30 hover:bg-blue-600/50 backdrop-blur-md text-white border border-blue-400/60 hover:border-blue-300 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Phone size={15} className="text-blue-300" />
              <span>TALK TO OUR TEAM</span>
            </a>
          </motion.div>

          {/* Instant WhatsApp / Phone Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <span>Direct Desk:</span>
              <a
                href="tel:+917904400252"
                className="text-white hover:text-blue-300 transition-colors font-semibold"
              >
                +91 79044 00252
              </a>
            </div>
            <span>•</span>
            <a
              href="https://wa.me/917904400252"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Talent Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
