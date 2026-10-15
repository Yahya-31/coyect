import React from 'react';
import { Phone, MessageCircle, ArrowUp, Instagram, Youtube, Sparkles } from 'lucide-react';

interface ModelsTalentFooterProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateHome: () => void;
}

export default function ModelsTalentFooter({ onScrollToSection, onNavigateHome }: ModelsTalentFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Models', action: () => onScrollToSection('models-hero') },
    { label: 'Photography', action: () => onScrollToSection('models-services') },
    { label: 'Videography', action: () => onScrollToSection('models-services') },
    { label: 'Personal Branding', action: () => onScrollToSection('models-services') },
    { label: 'Social Media', action: () => onScrollToSection('models-services') },
    { label: 'Portfolio', action: () => onScrollToSection('models-content') },
    { label: 'Contact', action: () => onScrollToSection('models-application') },
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Tier: Brand, Navigation and Direct Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 pb-12 border-b border-slate-200 text-center lg:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-blue-200 p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                <img
                  src="/coyect-logo.svg"
                  alt="Coyect Models Logo"
                  className="w-full h-full object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold tracking-tight text-2xl text-slate-900 uppercase">
                  COYECT
                </span>
                <span className="text-[10px] tracking-[0.3em] font-mono text-blue-600 uppercase pl-2 border-l border-slate-300 font-semibold">
                  MODELS
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-mono mt-3 max-w-sm leading-relaxed">
              Career-launch platform for new and aspiring models. Professional photography, cinematic videography, personal branding &amp; brand opportunities.
            </p>
          </div>

          {/* Links list matching exact specifications:
              Models, Photography, Videography, Personal Branding, Social Media, Portfolio, Contact, Instagram, YouTube */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Instagram size={12} />
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Youtube size={12} />
              <span>YouTube</span>
            </a>
          </div>

          {/* Direct Line & Scroll to Top */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+917904400252"
              className="px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-all text-xs font-mono flex items-center gap-2 shadow-xs"
            >
              <Phone size={12} />
              <span>+91 79044 00252</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 bg-white text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Hub Link */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Coyect Models. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="hover:text-blue-600 transition-colors cursor-pointer underline underline-offset-4"
            >
              Back to Coyect Agency Main Hub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
