import React from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

interface ModelsStickyCTAProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsStickyCTA({ onScrollToSection }: ModelsStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-4 left-3 right-3 z-40">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 p-2 pl-3 rounded-full shadow-2xl flex items-center justify-between gap-2 text-slate-900">
        <div className="flex items-center gap-2 overflow-hidden">
          <Sparkles size={13} className="text-blue-600 animate-pulse shrink-0" />
          <span className="text-[10px] font-mono tracking-wider text-slate-900 uppercase font-bold truncate">
            CASTING 2026
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="tel:+917904400252"
            className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors shadow-xs"
            title="Call +91 79044 00252"
          >
            <Phone size={13} />
          </a>

          <button
            onClick={() => onScrollToSection('models-application')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] tracking-wider uppercase py-2 px-4 rounded-full flex items-center gap-1 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
