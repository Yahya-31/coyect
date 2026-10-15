import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  onNavigateModels?: () => void;
}

export default function Header({ activeSection, onNavClick, onNavigateModels }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'tech-stack', label: 'Tech Orbit' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Banner announcing Models Platform inside fixed header container */}
      {onNavigateModels && (
        <div className="bg-blue-50 text-slate-700 text-[11px] py-1.5 px-4 sm:px-6 border-b border-blue-200/80 flex justify-between items-center tracking-widest font-mono">
          <div className="flex items-center gap-2">
            <Sparkles size={11} className="text-blue-600 animate-pulse" />
            <span className="font-semibold text-blue-900">NEW DIVISION:</span>
            <span className="hidden sm:inline text-slate-600">COYECT MODELS // TALENT &amp; BRAND PLATFORM</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+917904400252"
              className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              title="Direct Contact"
            >
              <Phone size={10} className="text-blue-600" />
              <span>+91 79044 00252</span>
            </a>
            <button
              onClick={onNavigateModels}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase transition-all flex items-center gap-1 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              <span>Explore Models</span>
              <ArrowRight size={10} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar with White styling */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3.5 shadow-sm'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-hidden cursor-pointer"
          >
            {/* Circular Emblem with dynamic glowing ring matching company logo */}
            <div className="w-10 h-10 rounded-full bg-white border border-blue-500/40 p-0.5 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden">
              <img
                src="/coyect-logo.svg"
                alt="Coyect Logo"
                className="w-full h-full scale-125 object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-slate-900 text-lg leading-tight tracking-tight flex items-center">
                  C<span className="text-blue-600 font-extrabold mx-0.5">Ø</span>YECT
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              </div>
              <p className="text-[9px] text-slate-500 font-mono tracking-wider uppercase leading-none mt-0.5">
                Engineering Intelligent Market Growth
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer focus:outline-hidden ${
                    isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeBubble"
                      className="absolute inset-0 bg-blue-50 border border-blue-200 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}

            {/* Dedicated Models Page Navigation Tab */}
            {onNavigateModels && (
              <button
                onClick={onNavigateModels}
                className="relative px-3.5 py-1.5 ml-2 rounded-full text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs group"
              >
                <Sparkles size={11} className="text-blue-600 animate-pulse" />
                <span>Models</span>
                <span className="text-[9px] font-mono bg-blue-600 text-white px-1.5 py-0.2 rounded-full">
                  Agency
                </span>
              </button>
            )}
          </nav>

          {/* Desktop Right CTA: Direct Call + Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+917904400252"
              className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-blue-600 font-mono px-3 py-2 rounded-full border border-slate-200 bg-white hover:border-blue-300 transition-colors shadow-xs"
              title="Call +91 79044 00252"
            >
              <Phone size={12} className="text-blue-600" />
              <span className="font-semibold">7904400252</span>
            </a>

            <button
              onClick={() => handleClick('contact')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 cursor-pointer focus:outline-hidden"
            >
              <span>Get in Touch</span>
              <Send size={12} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+917904400252"
              className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center"
              aria-label="Call +91 79044 00252"
            >
              <Phone size={13} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 absolute top-full left-0 w-full overflow-hidden shadow-xl z-40 text-slate-900"
            >
              <div className="flex flex-col gap-1 px-6 py-5">
                {/* Models Link inside mobile drawer */}
                {onNavigateModels && (
                  <button
                    onClick={() => {
                      onNavigateModels();
                      setIsOpen(false);
                    }}
                    className="mb-2 flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-900 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-left">
                      <Sparkles size={14} className="text-blue-600" />
                      <div>
                        <span className="text-xs font-bold block text-blue-900">COYECT MODELS</span>
                        <span className="text-[10px] text-slate-500 block">Talent &amp; Personal Branding</span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-blue-600" />
                  </button>
                )}

                {/* Direct Phone Call for Mobile */}
                <a
                  href="tel:+917904400252"
                  className="mb-2 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 cursor-pointer font-mono"
                >
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-blue-600" />
                    <div>
                      <span className="text-xs font-bold block">+91 79044 00252</span>
                      <span className="text-[10px] text-slate-500 block">Direct Tech &amp; Casting Desk</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded-full">
                    Call
                  </span>
                </a>

                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all focus:outline-hidden cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                    </button>
                  );
                })}
                <button
                  onClick={() => handleClick('contact')}
                  className="mt-3 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Book an Architecture Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
