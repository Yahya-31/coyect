import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Eye, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsTransformationProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsTransformation({ onScrollToSection }: ModelsTransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const beforePoints = [
    'No professional portfolio or standard comp cards',
    'Low social media visibility & poor reach algorithms',
    'No clear personal brand, signature look or aesthetic',
    'Limited opportunities and rejected casting submissions',
    'Uncertainty about contracts, rates, and agency rights',
  ];

  const afterPoints = [
    'Professional portfolio with magazine-grade lighting',
    'Strong visual identity and curated aesthetic feed',
    'Consistent social presence with high-converting reels',
    'Rapidly growing, highly engaged targeted audience',
    'Brand-ready profile attracting paid sponsorships',
    'Direct casting inquiries and multiple revenue streams',
  ];

  return (
    <section id="models-transformation" className="py-28 bg-slate-50/40 text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
              SECTION 05 // THE SHIFT
            </span>
            <span className="w-6 h-[2px] bg-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] mb-5 text-slate-900">
            FROM ASPIRING MODEL <br />
            <span className="italic text-blue-600 font-normal">TO RECOGNIZABLE PERSONAL BRAND.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            The difference between standing on the sidelines and being booked lies in strategic visual execution, professional direction, and digital branding.
          </p>
        </div>

        {/* Side-by-Side Dramatic Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* BEFORE CARD */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-rose-200 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-rose-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="font-mono text-xs tracking-[0.25em] uppercase text-rose-600 font-bold">
                    THE RAW STATE
                  </span>
                </div>
                <span className="text-2xl font-serif font-light tracking-widest text-slate-400 uppercase">
                  BEFORE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-wide text-slate-800 mb-6 font-semibold">
                Talent Left to Chance
              </h3>

              <div className="space-y-4 mb-8">
                {beforePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 font-normal">
                    <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Preview / Thumbnail with Dull Lighting */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 relative grayscale opacity-75">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=70"
                alt="Amateur Model Shoot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-mono text-[11px] tracking-widest uppercase bg-white/90 px-3 py-1.5 rounded-full text-slate-700 border border-slate-200 font-semibold shadow-xs">
                  Uncurated • Raw Smartphone Snaps
                </span>
              </div>
            </div>
          </div>

          {/* AFTER CARD (Elevated with Secondary Blue) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-blue-600 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-500/10">
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-blue-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue-700 font-bold">
                    THE COYECT ELEVATION
                  </span>
                </div>
                <span className="text-2xl font-serif font-bold tracking-widest text-blue-600 uppercase">
                  AFTER
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-wide text-slate-900 mb-6 font-semibold">
                Brand-Ready Industry Presence
              </h3>

              <div className="space-y-4 mb-8">
                {afterPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Preview / High Fashion Editorial Output */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-blue-200 relative shadow-md">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                alt="High Fashion Model Portfolio Output"
                className="w-full h-full object-cover filter contrast-[1.1] brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="font-mono text-[11px] tracking-widest uppercase bg-white text-slate-900 px-3 py-1.5 rounded-full font-bold shadow-md">
                    Coyect Signature Production
                  </span>
                  <span className="text-xs font-mono text-blue-300 font-semibold flex items-center gap-1">
                    <TrendingUp size={13} className="text-blue-400" /> High ROAS &amp; Exposure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
          <div>
            <h4 className="text-xl font-serif uppercase tracking-wide text-slate-900 mb-1 font-bold">
              Ready to create your transformation?
            </h4>
            <p className="text-xs text-slate-600">
              Your look has potential. Our creative directors and photographers know how to bring it to life.
            </p>
          </div>
          <button
            onClick={() => onScrollToSection('models-application')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all cursor-pointer shrink-0 shadow-md shadow-blue-500/20"
          >
            Apply for Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
