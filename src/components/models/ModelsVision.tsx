import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Flame, Compass, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsVisionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsVision({ onScrollToSection }: ModelsVisionProps) {
  const pipeline = [
    { step: '01', title: 'MODEL', desc: 'Raw visual charisma & screen presence' },
    { step: '02', title: 'PERSONAL BRAND', desc: 'Curated aesthetic, niche & distinct style' },
    { step: '03', title: 'AUDIENCE', desc: 'Dedicated digital following that trusts your taste' },
    { step: '04', title: 'OPPORTUNITIES', desc: 'Runways, casting callbacks & agency representation' },
    { step: '05', title: 'COLLABORATIONS', desc: 'High-paying brand partnerships & commercial campaigns' },
    { step: '06', title: 'BUSINESS', desc: 'Capsule collections, licensing & private ventures' },
    { step: '07', title: 'WEALTH', desc: 'Generational commercial value and career longevity' },
  ];

  return (
    <section id="models-vision" className="py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-blue-600" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
              SECTION 07 // THE EXPONENTIAL VISION
            </span>
            <span className="w-6 h-[2px] bg-blue-600" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight uppercase leading-[0.98] mb-8 text-slate-900">
            DON&apos;T JUST BECOME A MODEL. <br />
            <span className="italic font-normal text-blue-600">
              BUILD A BRAND.
            </span>
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-slate-700 font-light mb-8 max-w-2xl mx-auto">
            “Your appearance can open the door. Your personal brand can create long-term value.”
          </p>

          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            We do not sell illusions or promise overnight riches. Modelling is competitive, demanding, and requires dedication. What we provide is an uncompromising, strategic blueprint: turning raw beauty into a sustainable personal enterprise through audience leverage, commercial equity, and high-value partnerships.
          </p>
        </div>

        {/* The Visual Journey Pipeline: MODEL → PERSONAL BRAND → AUDIENCE → OPPORTUNITIES → COLLABORATIONS → BUSINESS → WEALTH */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 block mb-2 font-semibold">
              THE VALUE MULTIPLICATION PIPELINE
            </span>
            <div className="h-[2px] w-24 bg-blue-600 mx-auto" />
          </div>

          {/* Desktop Flow Row */}
          <div className="hidden lg:grid grid-cols-7 gap-3">
            {pipeline.map((item, index) => (
              <div
                key={item.step}
                className="relative group p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-blue-600">
                      PHASE {item.step}
                    </span>
                    {index < pipeline.length - 1 && (
                      <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                  <h4 className="font-serif font-bold tracking-wider text-xs uppercase text-slate-900 group-hover:text-blue-600 mb-2">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[10px] text-slate-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Grid */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pipeline.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 flex items-start gap-4 transition-colors shadow-xs"
              >
                <span className="font-mono text-xs text-blue-700 font-bold bg-blue-50 border border-blue-200 px-2 py-1 rounded">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centerpiece Callout */}
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          <p className="font-serif italic text-base sm:text-lg text-slate-700 mb-6 font-medium">
            Your journey starts with one shoot.
          </p>

          <button
            onClick={() => onScrollToSection('models-application')}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
