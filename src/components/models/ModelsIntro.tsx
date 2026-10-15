import React from 'react';
import { Camera, Film, Sparkles, Instagram, TrendingUp, BookOpen, Video, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsIntroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsIntro({ onScrollToSection }: ModelsIntroProps) {
  const pillars = [
    { title: 'Professional model photography', icon: Camera, desc: 'High-end studio & outdoor editorial lighting' },
    { title: 'Fashion & lifestyle videography', icon: Film, desc: 'Cinematic 4K fashion films with runway pacing' },
    { title: 'Personal branding', icon: Sparkles, desc: 'Defining your unique signature look, niche & value' },
    { title: 'Instagram content creation', icon: Instagram, desc: 'Aesthetic grid curation and high-converting visual assets' },
    { title: 'Social media promotion', icon: TrendingUp, desc: 'Targeted algorithm optimization and reach amplification' },
    { title: 'Portfolio development', icon: BookOpen, desc: 'Agency-standard comp cards, lookbooks & digital books' },
    { title: 'Reels & short-form video', icon: Video, desc: 'Viral trends, personality showcases & audio timing' },
    { title: 'Brand collaboration opportunities', icon: Handshake, desc: 'Connecting talent with luxury, retail & lifestyle brands' },
  ];

  return (
    <section id="models-intro" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Editorial Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 select-none pointer-events-none opacity-[0.03] font-serif text-[18vw] leading-none whitespace-nowrap text-slate-900">
        COYECT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-blue-600" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
            SECTION 02 // ARCHITECTURE OF TALENT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Text & The 8 Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.08] uppercase text-slate-900 mb-6">
              MORE THAN A PHOTOSHOOT. <br />
              <span className="italic text-blue-600 font-normal">WE BUILD CAREERS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed mb-8 border-l-2 border-blue-600 pl-5">
              “Getting discovered is only the beginning. We create the visuals, identity and digital presence that help models stand out in a competitive industry.”
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-xl">
              Traditional agencies expect you to already have experience, while traditional photography studios simply hand you raw pictures and wish you luck. Coyect operates differently: we are a comprehensive career-launch ecosystem that bridges premium content creation with digital marketing, personal branding, and brand opportunities.
            </p>

            {/* The 8 Process Elements in a sleek editorial 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/40 transition-all duration-300 group shadow-xs"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                        <IconComponent size={14} />
                      </div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-600 pl-10 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onScrollToSection('models-services')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-900 hover:text-blue-600 transition-colors cursor-pointer group font-semibold"
            >
              <span>Explore All Model Development Services</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-blue-600" />
            </button>
          </div>

          {/* Right Column: Large Editorial Image with Magazine Plaque */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with luxury borders */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="High Fashion Editorial Model Portrait"
                  className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Magazine-style overlay text */}
                <div className="absolute top-6 left-6">
                  <span className="font-serif italic text-2xl text-white/90">Issue No. 01</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-blue-200 shadow-lg text-slate-900">
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-blue-600 block mb-1 font-bold">
                    TALENT DEVELOPMENT
                  </span>
                  <p className="text-xs font-medium text-slate-800 leading-snug">
                    Curating high-fashion aesthetics that catch the attention of casting directors, luxury brands, and global audiences.
                  </p>
                </div>
              </div>

              {/* Offset decorative backdrop */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 rounded-2xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
