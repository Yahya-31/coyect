import React, { useState } from 'react';
import { Compass, Camera, Sparkles, Megaphone, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsJourneyProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsJourney({ onScrollToSection }: ModelsJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Personality & Niche Assessment',
      icon: Compass,
      description: 'We understand the model’s personality, appearance, goals and niche through an initial discovery session, establishing your distinctive visual positioning.',
      deliverables: ['Face & Physique Typology', 'Target Market Analysis', 'Aesthetic Moodboards', 'Lookbook Concepting'],
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '02',
      title: 'CREATE',
      subtitle: 'High-Fashion Studio & Outdoor Production',
      icon: Camera,
      description: 'Professional photography and videography sessions create high-quality portfolio content with top stylists, lighting directors, and creative choreographers.',
      deliverables: ['Multiple Studio Outfits', 'Cinematic Fashion Reels', 'Magazine-Grade Retouching', 'Dynamic Posing Direction'],
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '03',
      title: 'BUILD',
      subtitle: 'Digital Identity & Brand Blueprint',
      icon: Sparkles,
      description: 'We develop the model’s personal brand and social media identity, ensuring your digital presence projects confidence, prestige, and authenticity.',
      deliverables: ['Instagram Profile Aesthetic', 'Personal Bio & Media Kit', 'Digital Comp Card', 'Content Pillar Strategy'],
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '04',
      title: 'PROMOTE',
      subtitle: 'Multi-Channel Audience Amplification',
      icon: Megaphone,
      description: 'Strategic social media content and promotion increase visibility and reach through algorithmic timing, captivating short-form hooks, and targeted outreach.',
      deliverables: ['High-Retention Reels', 'Trending Audio Integration', 'Hashtag & SEO Strategy', 'Casting Network Exposure'],
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '05',
      title: 'GROW',
      subtitle: 'Audience Loyalty & Commercial Value',
      icon: TrendingUp,
      description: 'Build an audience, attract opportunities and develop commercial value as brands, casting scouts, and industry leaders start engaging with your work.',
      deliverables: ['Inbound Inquiries Curation', 'Engagement Rate Elevation', 'Community Building', 'PR & Talent Highlights'],
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      step: '06',
      title: 'SCALE',
      subtitle: 'Sustained Enterprise & Career Longevity',
      icon: Award,
      description: 'Turn modelling and personal branding into a serious long-term career with brand sponsorships, runway bookings, agency contracts, and private commerce.',
      deliverables: ['Paid Brand Contracts', 'Commercial Representation', 'Equity & Royalty Deals', 'Long-Term Personal Enterprise'],
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section id="models-journey" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
              SECTION 04 // THE ROADMAP
            </span>
            <span className="w-6 h-[2px] bg-blue-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] mb-5 text-slate-900">
            THE MODEL <br />
            <span className="italic text-blue-600 font-normal">DEVELOPMENT JOURNEY.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            A step-by-step career acceleration pipeline taking you from raw potential to an established, brand-ready presence.
          </p>
        </div>

        {/* Step Selector Pills (Horizontal Visual Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-slate-200 pb-6">
          {steps.map((st, i) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(i)}
              className={`p-3 rounded-xl text-left transition-all duration-300 cursor-pointer flex flex-col gap-1 border ${
                activeStep === i
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold tracking-widest ${activeStep === i ? 'text-blue-100' : 'text-slate-500'}`}>
                  STEP {st.step}
                </span>
                {activeStep === i && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <span className={`text-xs font-serif font-bold tracking-wider uppercase ${activeStep === i ? 'text-white' : 'text-slate-800'}`}>
                {st.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-slate-200 hover:border-blue-500/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl transition-colors"
        >
          {/* Left Text Detail */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-serif text-blue-600 font-light">
                {steps[activeStep].step}
              </span>
              <span className="w-8 h-[2px] bg-blue-600" />
              <span className="text-xs font-mono tracking-[0.25em] text-blue-700 uppercase font-semibold">
                {steps[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-slate-900 mb-5 font-normal">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-8">
              {steps[activeStep].description}
            </p>

            {/* Deliverables pill tags */}
            <div className="mb-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-blue-700 block mb-3 font-semibold">
                KEY DELIVERABLES IN THIS STAGE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 text-xs text-slate-700 transition-colors shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onScrollToSection('models-application')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Start at Step 01</span>
                <ChevronRight size={14} className="text-white" />
              </button>
              {activeStep < steps.length - 1 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors cursor-pointer font-semibold"
                >
                  Next: Step {steps[activeStep + 1].step} →
                </button>
              )}
            </div>
          </div>

          {/* Right Stage Visual Photo */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex justify-between items-center text-xs font-mono shadow-md">
                <span className="text-slate-600 uppercase tracking-wider font-semibold">Stage Visual</span>
                <span className="text-blue-600 font-bold">{steps[activeStep].step} / 06</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
