import React from 'react';
import { UserCheck, Sparkles, Camera, Film, Instagram, Clapperboard, Heart, Compass, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsEligibilityProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsEligibility({ onScrollToSection }: ModelsEligibilityProps) {
  const personas = [
    {
      title: 'Aspiring Models',
      desc: 'Individuals with natural photogenic qualities looking to start their first professional portfolio with experienced guidance.',
      icon: Sparkles,
      tag: 'Fresh Start',
    },
    {
      title: 'Fashion Models',
      desc: 'Talent seeking high-fashion editorial test shoots, runway lookbooks, and avant-garde agency comp cards.',
      icon: Camera,
      tag: 'Editorial & Runway',
    },
    {
      title: 'Commercial Models',
      desc: 'Approachable, expressive faces suited for print advertising, e-commerce brands, billboards, and corporate media.',
      icon: UserCheck,
      tag: 'Brand Advertising',
    },
    {
      title: 'Instagram Creators',
      desc: 'Content creators wanting to elevate their visual quality from smartphone aesthetic to magazine-grade editorial standard.',
      icon: Instagram,
      tag: 'Visual Upgrade',
    },
    {
      title: 'Actors',
      desc: 'Performers requiring cinematic headshots, personality reels, and emotive motion clips for casting directors.',
      icon: Clapperboard,
      tag: 'Screen & Stage',
    },
    {
      title: 'Influencers',
      desc: 'Established personalities looking to rebrand, scale their aesthetic prestige, and unlock higher-tier luxury sponsorships.',
      icon: Heart,
      tag: 'Sponsorship Growth',
    },
    {
      title: 'Lifestyle Creators',
      desc: 'Fitness, travel, beauty, and wellness personalities needing dynamic real-world content that engages consumers.',
      icon: Compass,
      tag: 'Niche Media',
    },
    {
      title: 'Fresh Talent',
      desc: 'Those who have never modeled before but possess the hunger, coachability, and screen charisma to learn quickly.',
      icon: Film,
      tag: 'Zero Experience Needed',
    },
  ];

  return (
    <section id="models-eligibility" className="py-28 bg-slate-50/50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
              SECTION 08 // ELIGIBILITY &amp; PROFILES
            </span>
            <span className="w-6 h-[2px] bg-blue-600" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] mb-5 text-slate-900">
            IS THIS <span className="italic text-blue-600 font-normal">FOR YOU?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            We work with diverse individuals across various stages of their creative journey, from first-timers to working creators.
          </p>
        </div>

        {/* 8 Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                      <Icon size={16} />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 font-semibold">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  <CheckCircle size={12} className="text-blue-600" />
                  <span>Eligible to Apply</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Callout Box: No previous professional experience required */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border-2 border-blue-600 p-8 text-center relative overflow-hidden shadow-xl shadow-blue-500/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-700 block mb-2 font-semibold">
            CRITERIA &amp; REQUIREMENTS
          </span>

          <h4 className="text-xl sm:text-2xl font-serif text-slate-900 font-bold uppercase tracking-wide mb-3">
            No previous professional experience required.
          </h4>

          <p className="text-sm text-slate-600 font-normal max-w-xl mx-auto mb-6 leading-relaxed">
            What matters is your raw potential, personality, coachability, and genuine willingness to build a disciplined personal brand. We provide the equipment, direction, styling concepts, and media strategy.
          </p>

          <button
            onClick={() => onScrollToSection('models-application')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-widest uppercase rounded-full shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            Apply for Our Next Intake
          </button>
        </div>
      </div>
    </section>
  );
}
