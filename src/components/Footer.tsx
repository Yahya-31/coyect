import React from 'react';
import { Sparkles, Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onNavigateModels?: () => void;
}

export default function Footer({ onNavClick, onNavigateModels }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'tech-stack', label: 'Tech Orbit' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top tier */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-slate-200 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-blue-500/40 p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                <img
                  src="/coyect-logo.svg"
                  alt="Coyect"
                  className="w-full h-full object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl text-slate-900 tracking-tight flex items-center">
                  C<span className="text-blue-600 font-extrabold mx-0.5">Ø</span>YECT
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-2 max-w-sm leading-relaxed">
              Engineering Intelligent Market Growth. Fusing machine learning architectures with algorithmic acquisition.
            </p>
          </div>

          {/* Quick Contact & Hotline */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a
              href="tel:+917904400252"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-colors shadow-xs"
            >
              <Phone size={13} className="text-blue-600" />
              <span>+91 79044 00252</span>
            </a>
            <a
              href="https://wa.me/917904400252?text=Hello%20Coyect%20Team%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20engagement"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#25D366] hover:text-[#25D366] transition-colors shadow-xs"
            >
              <MessageCircle size={13} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-blue-600 transition-colors cursor-pointer shadow-xs"
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Links Navigation Bar */}
        <div className="py-8 flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-8 text-xs font-mono uppercase tracking-wider">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {onNavigateModels && (
            <button
              onClick={onNavigateModels}
              className="text-blue-700 hover:text-blue-900 flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200 bg-blue-50/80 px-3.5 py-1 rounded-full font-semibold shadow-xs"
            >
              <Sparkles size={11} className="text-blue-600 animate-pulse" />
              <span>Explore Coyect Models Agency</span>
            </button>
          )}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <p>© {currentYear} Coyect. All rights reserved.</p>
          <p className="text-[10px] tracking-widest text-blue-600 font-semibold uppercase">
            THE GROWTH NEURAL NETWORK // COYECT.AI.STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
