import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Network, Sparkles, Orbit } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  angle: number; // in degrees
  radius: number;
  speed: number;
}

export default function TechSphere() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const technologies = [
    { name: 'Enterprise RAG', tag: 'Pinecone & pgvector', color: 'from-cyan-400 to-blue-500' },
    { name: 'Autonomous Agents', tag: 'LangChain & Multi-Agent', color: 'from-emerald-400 to-cyan-500' },
    { name: 'Meta Ads & CAPI', tag: 'High-ROAS Acquisition', color: 'from-blue-500 to-indigo-600' },
    { name: 'Google Ads & Intent', tag: 'Algorithmic Bid Scaling', color: 'from-amber-400 to-orange-500' },
    { name: 'n8n Workflows', tag: 'Autonomous Operations', color: 'from-rose-500 to-amber-500' },
    { name: 'Gemini & Claude', tag: 'Sub-50ms Inference', color: 'from-purple-400 to-cyan-400' },
    { name: 'FastAPI & PyTorch', tag: 'Custom ML Microservices', color: 'from-sky-400 to-blue-600' },
    { name: 'PostgreSQL Vector', tag: 'Enterprise Data Lake', color: 'from-teal-400 to-emerald-500' },
  ];

  return (
    <section id="tech-stack" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Orbit size={13} className="text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Orbiting Architecture // Tech & Tools Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            ORBITING THE <br />
            <span className="animate-shimmer">INTELLIGENT CORE.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Every layer of our infrastructure rotates in lockstep: from foundational vector databases to live ad platform conversion APIs.
          </p>
        </div>

        {/* 3D Orbiting Sphere Arena */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[480px] flex items-center justify-center cursor-default select-none"
        >
          {/* Central Glowing 3D Sphere */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Glowing outer corona */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute w-44 h-44 rounded-full bg-blue-500/15 blur-2xl pointer-events-none"
            />

            {/* Central Sphere body */}
            <div className="w-36 h-36 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)] flex flex-col items-center justify-center p-4 text-center z-10">
              <Sparkles size={20} className="text-blue-600 animate-pulse mb-1" />
              <span className="font-display font-black text-sm tracking-tight text-slate-900 uppercase">
                COYECT
              </span>
              <span className="text-[8px] font-mono tracking-widest text-blue-600 font-bold uppercase">
                CORE v4.2
              </span>
            </div>
          </div>

          {/* Orbit Rings with Perspective */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1 */}
            <div className="w-[320px] h-[320px] rounded-full border border-blue-500/20 rotate-[65deg]" />
            {/* Ring 2 */}
            <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-blue-400/25 rotate-[25deg]" />
            {/* Ring 3 */}
            <div className="absolute w-[620px] h-[620px] rounded-full border border-slate-200 rotate-[-15deg]" />
          </div>

          {/* Rotating Orbit Container */}
          <motion.div
            animate={isPaused ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {technologies.map((tech, index) => {
              const angle = (index / technologies.length) * (2 * Math.PI);
              const radius = 220; // px distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * (radius * 0.72); // slightly elliptical

              return (
                <div
                  key={tech.name}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="absolute pointer-events-auto"
                >
                  {/* Counter-rotate badge so text remains horizontal */}
                  <motion.div
                    animate={isPaused ? {} : { rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                    onClick={() => setSelectedTech(tech.name)}
                    className="p-3 px-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 cursor-pointer group flex flex-col items-center min-w-[140px]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mb-1 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                    <span className="text-xs font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                      {tech.tag}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Hover indication */}
        <p className="text-center text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-4">
          ✦ Hover anywhere over the orbit to pause and inspect nodes
        </p>
      </div>
    </section>
  );
}
