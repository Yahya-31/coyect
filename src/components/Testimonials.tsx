import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite loop
  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimonials" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Verified Market Returns // Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            TRUSTED BY LEADERS <br />
            <span className="animate-shimmer">ACROSS HORIZONS.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            How autonomous engineering and performance marketing compounded commercial ROI for fast-scaling enterprises.
          </p>
        </div>

        {/* 3D Cylindrical Ring Marquee Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full overflow-hidden perspective-2000 py-6"
        >
          {/* Subtle side fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Marquee Track with 3D Ring Curvature */}
          <motion.div
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 38, ease: 'linear' }}
            className="flex gap-6 w-max cursor-default"
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                style={{
                  transform: 'rotateY(-2deg)',
                  transformStyle: 'preserve-3d',
                }}
                className="w-[340px] sm:w-[420px] rounded-3xl bg-white border border-slate-200 p-7 shadow-md flex flex-col justify-between hover:border-blue-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={20} className="text-blue-400/60 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                      {item.role} • {item.company}
                    </p>
                  </div>

                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold uppercase">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-4">
          ✦ Hover over any review card to pause and inspect metrics
        </p>
      </div>
    </section>
  );
}
