import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Phone, Activity, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import GrowthNeuralNetwork from './3d/GrowthNeuralNetwork';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  // Live counters ticking up on load
  const [leadsCount, setLeadsCount] = useState(138200);
  const [hoursAutomated, setHoursAutomated] = useState(89400);

  useEffect(() => {
    // Smooth initial count-up
    const leadsTarget = 142850;
    const hoursTarget = 92400;

    const interval = setInterval(() => {
      setLeadsCount((prev) => (prev < leadsTarget ? prev + Math.floor(Math.random() * 85 + 40) : leadsTarget));
      setHoursAutomated((prev) => (prev < hoursTarget ? prev + Math.floor(Math.random() * 60 + 30) : hoursTarget));
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white text-slate-900"
    >
      {/* 3D Growth Neural Network canvas background (~600 nodes with cursor interaction) */}
      <GrowthNeuralNetwork interactive={true} />

      {/* Subtle radial depth lighting and vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-white pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Mask-revealed Headline & Core Positioning */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Micro Telemetry Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-md mb-8 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-blue-700 uppercase font-semibold">
              THE GROWTH NEURAL NETWORK // v4.2
            </span>
          </motion.div>

          {/* Mask Reveal Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95] text-slate-900"
            >
              ENGINEERING
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95]"
            >
              <span className="animate-shimmer inline-block">INTELLIGENT</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight uppercase leading-[0.95] text-slate-900"
            >
              MARKET GROWTH.
            </motion.h1>
          </div>

          {/* Subtitle / Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed mb-10"
          >
            We bridge custom machine learning architectures, autonomous agent workflows, and high-ROAS performance acquisition into a singular, high-velocity commercial engine.
          </motion.p>

          {/* Action CTAs & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavClick('contact')}
              className="w-full sm:w-auto group relative overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Initiate Growth Architecture</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+917904400252"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-slate-300 hover:border-blue-500 bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 text-xs font-mono tracking-wider uppercase shadow-xs transition-all cursor-pointer"
            >
              <Phone size={14} className="text-blue-600" />
              <span>Direct: +91 79044 00252</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Live Telemetry Live Counter Widget */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 rounded-3xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-xl relative overflow-hidden group"
          >
            {/* Top scanning line effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-blue-600 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase">
                  Live Neural Telemetry
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              {/* Counter 1: Leads Synthesized */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Leads Synthesized &amp; Verified
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-mono font-black text-slate-900 tracking-tight">
                    {leadsCount.toLocaleString()}+
                  </span>
                  <span className="text-xs font-mono text-blue-600 font-semibold">+18.4% WoW</span>
                </div>
              </div>

              {/* Counter 2: Autonomous Hours */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Automated Pipeline Hours Saved
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-mono font-black text-slate-900 tracking-tight">
                    {hoursAutomated.toLocaleString()}+
                  </span>
                  <span className="text-xs font-mono text-blue-700 font-semibold">99.2% SLA</span>
                </div>
              </div>

              {/* Counter 3: Average ROAS Return */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Client Performance Vector
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-mono font-black text-blue-600 tracking-tight">
                    4.8x
                  </span>
                  <span className="text-xs font-mono text-slate-600">Average ROAS Return</span>
                </div>
              </div>
            </div>

            {/* Bottom Trust tags */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-blue-600" />
                Zero-Loss Sync
              </span>
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-blue-600" />
                Sub-50ms Inference
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
