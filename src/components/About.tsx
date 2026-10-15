import React from 'react';
import { Sparkles, Cpu, Workflow, TrendingUp, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const capabilities = [
    {
      title: 'Neural Architecture & RAG',
      description: 'Engineering semantic search indices, private enterprise vector stores with Pinecone/pgvector, and custom multi-agent inference pipelines.',
      icon: Cpu,
      tag: 'AI Engineering',
    },
    {
      title: 'Autonomous Workflow Operations',
      description: 'Designing resilient event-driven n8n microservices, automating CRM platforms, and eliminating 90%+ of manual operational overhead.',
      icon: Workflow,
      tag: 'Operations',
    },
    {
      title: 'Algorithmic Performance Media',
      description: 'Orchestrating high-conversion Meta and Google ad campaigns optimized via continuous CAPI attribution and predictive LTV modeling.',
      icon: TrendingUp,
      tag: 'Distribution',
    },
  ];

  return (
    <section id="about" className="py-28 bg-slate-50/60 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>The Organization // Core Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            ONE LIVING SYSTEM: <br />
            <span className="animate-shimmer">INTELLIGENT REVENUE.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Coyect was founded on a singular realization: modern software doesn&apos;t fail from bad code—it fails from disconnected distribution. We bind engineering directly to commercial market traction.
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Emblem & Neural Core */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm rounded-3xl bg-white border border-slate-200 p-8 shadow-xl backdrop-blur-xl flex flex-col items-center text-center"
            >
              {/* Central Glowing Emblem */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-blue-500 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.2)] overflow-hidden">
                  <img
                    src="/coyect-logo.svg"
                    alt="Coyect Logo"
                    className="w-full h-full scale-125 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>

              <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight uppercase">
                COYECT
              </h3>
              <p className="text-xs font-mono text-blue-600 tracking-widest uppercase mt-0.5 font-semibold">
                AI &amp; Market Growth Systems
              </p>

              <div className="w-full my-6 border-t border-slate-100" />

              <div className="space-y-3 w-full text-left text-xs font-mono">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">HEADQUARTERS</span>
                  <span className="font-medium">Coimbatore, IN • Global Ops</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">ACTIVE PIPELINES</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">50+ Enterprise Deployments</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">CORE FOCUS</span>
                  <span className="text-blue-600 font-semibold">High-ROAS AI Orchestration</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Specializations */}
          <div className="lg:col-span-7 space-y-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h4>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 uppercase">
                        {cap.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
