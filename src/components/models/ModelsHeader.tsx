import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModelsHeaderProps {
  onNavigateHome: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsHeader({ onNavigateHome, onScrollToSection }: ModelsHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'models-intro', label: 'Why Us' },
    { id: 'models-services', label: 'How We Help' },
    { id: 'models-journey', label: 'The Journey' },
    { id: 'models-transformation', label: 'Transformation' },
    { id: 'models-content', label: 'Content Gallery' },
    { id: 'models-vision', label: 'Brand Vision' },
    { id: 'models-eligibility', label: 'Who Can Join' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top micro-bar: Direct Hotline & Agency Switcher */}
      <div className="bg-blue-50/95 backdrop-blur-md text-slate-700 text-[11px] py-1.5 px-4 sm:px-6 border-b border-blue-200/80 flex flex-wrap justify-between items-center tracking-widest font-mono gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            CASTING DESK 2026 // NOW RECRUITING
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-blue-700 font-semibold hidden sm:inline">GLOBAL TALENT PLATFORM</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          {/* Direct Phone Contact Hotline */}
          <a
            href="tel:+917904400252"
            className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer group"
            title="Direct Line: +91 79044 00252"
          >
            <Phone size={11} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-slate-500 hidden md:inline">DIRECT:</span>
            <span className="font-semibold text-slate-900 group-hover:text-blue-600 tracking-wider">
              +91 79044 00252
            </span>
          </a>

          <span className="text-slate-300 hidden sm:inline">|</span>

          {/* Agency Switcher */}
          <button
            onClick={onNavigateHome}
            className="hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer group text-slate-600"
          >
            <span className="hidden sm:inline">Back to Coyect Agency</span>
            <span className="sm:hidden">Main Agency</span>
            <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-600" />
          </button>
        </div>
      </div>

      {/* Main Luxury Header Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200 py-3.5 shadow-md text-slate-900'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('models-hero')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className={`w-9 h-9 rounded-full border p-0.5 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shadow-xs ${
              isScrolled ? 'bg-white border-blue-500/30' : 'bg-black/60 border-white/20'
            }`}>
              <img
                src="/coyect-logo.svg"
                alt="Coyect Models Logo"
                className="w-full h-full object-cover scale-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-serif font-bold tracking-tight text-xl uppercase ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  COYECT
                </span>
                <span className={`text-[10px] tracking-[0.25em] font-mono uppercase pl-1.5 border-l ${
                  isScrolled ? 'text-blue-600 border-slate-300' : 'text-blue-400 border-zinc-700'
                }`}>
                  MODELS
                </span>
              </div>
              <span className={`text-[9px] tracking-widest uppercase font-mono ${
                isScrolled ? 'text-slate-500' : 'text-zinc-300'
              }`}>
                TALENT &amp; BRAND PLATFORM
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer relative py-1 group ${
                  isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-zinc-200 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Group: Call Hotline & Apply Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917904400252"
              className={`px-3.5 py-2 rounded-full border transition-all text-xs font-mono flex items-center gap-1.5 ${
                isScrolled
                  ? 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white'
                  : 'border-blue-400/40 bg-blue-950/40 text-blue-300 hover:bg-blue-600 hover:text-white'
              }`}
              title="Call Talent Desk"
            >
              <Phone size={12} />
              <span className="font-semibold">7904400252</span>
            </a>

            <button
              onClick={() => handleNavClick('models-application')}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-blue-500/20 cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply to Model</span>
              <Sparkles size={13} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 focus:outline-hidden cursor-pointer ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 shadow-2xl text-slate-900"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-2 text-sm font-mono tracking-wider text-slate-700 hover:text-blue-600 uppercase border-b border-slate-100"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+917904400252"
                  className="w-full py-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 font-mono text-center text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  <span>Call Direct: +91 79044 00252</span>
                </a>

                <button
                  onClick={() => handleNavClick('models-application')}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-widest uppercase text-center shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <Send size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
