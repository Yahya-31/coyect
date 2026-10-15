import React from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

interface ModelsFooterProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateHome: () => void;
}

export default function ModelsFooter({ onScrollToSection, onNavigateHome }: ModelsFooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Models Grid', action: () => onScrollToSection('model-grid') },
    { label: 'Featured', action: () => onScrollToSection('featured') },
    { label: 'In Action', action: () => onScrollToSection('in-action') },
    { label: 'Before / After', action: () => onScrollToSection('before-after') },
    { label: 'Start Project', action: () => onScrollToSection('final-cta') },
  ];

  return (
    <footer className="bg-[#02050b] text-[#8FA3BF] py-16 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-white/10 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#071022] border border-[#22D3EE]/50 p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <img
                  src="/coyect-logo.svg"
                  alt="Coyect Models"
                  className="w-full h-full object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-tight text-xl text-white uppercase">
                  COYECT
                </span>
                <span className="text-[10px] tracking-[0.3em] font-mono text-[#22D3EE] uppercase pl-1.5 border-l border-white/20">
                  MODELS
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8FA3BF] font-mono mt-2 max-w-sm leading-relaxed">
              Visual 3D Showroom. High-dimensional machine learning architectures rendered into tangible glass forms.
            </p>
          </div>

          {/* Hotline & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a
              href="tel:+917904400252"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-[#0B1426] text-[#E6EEF8] hover:text-[#22D3EE] transition-colors"
            >
              <Phone size={12} className="text-[#22D3EE]" />
              <span>+91 79044 00252</span>
            </a>
            <a
              href="https://wa.me/917904400252"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              <MessageCircle size={12} />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 hover:border-white/30 text-[#8FA3BF] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp size={13} />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Links Navigation Bar */}
        <div className="py-8 flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-8 text-xs font-mono uppercase tracking-wider">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={link.action}
                className="hover:text-[#22D3EE] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={onNavigateHome}
            className="text-white hover:text-[#22D3EE] flex items-center gap-1.5 transition-colors cursor-pointer border border-white/15 bg-white/5 px-3 py-1 rounded-full text-xs"
          >
            <span>Back to Coyect Main Hub</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <p>© {currentYear} Coyect. All rights reserved.</p>
          <p className="text-[10px] tracking-widest text-[#22D3EE]/70 uppercase">
            NEON GLASS SHOWROOM // INTELLIGENCE, MADE VISIBLE
          </p>
        </div>
      </div>
    </footer>
  );
}
