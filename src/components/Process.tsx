import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Cpu, Rocket, TrendingUp, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'DISCOVER',
      subtitle: 'Raw Signals & Market Intent',
      icon: Compass,
      description:
        'We analyze your TAM, historical acquisition CAC, conversion leaks, and proprietary data silos to identify high-leverage growth insertion points.',
      deliverables: ['Telemetry & Funnel Audit', 'Data Vector Mapping', 'Target Market Signal Blueprint'],
      signal: 'Raw Data & Intent',
    },
    {
      id: '02',
      title: 'ENGINEER',
      subtitle: 'Neural Architecture & Agents',
      icon: Cpu,
      description:
        'Developing bespoke RAG engines, automated lead scoring models, and autonomous n8n workflows that orchestrate data without human intervention.',
      deliverables: ['Custom LLM / Agent Workflows', 'Vector Embeddings Pipeline', 'Fault-Tolerant n8n Setup'],
      signal: 'AI Synthesis',
    },
    {
      id: '03',
      title: 'LAUNCH',
      subtitle: 'High-ROAS Media & Execution',
      icon: Rocket,
      description:
        'Deploying targeted Meta and Google campaigns backed by real-time conversion API integration, dynamic creatives, and automated bid calibration.',
      deliverables: ['CAPI & Pixel Precision Sync', 'Algorithmic Ad Sequences', 'Dynamic Funnels'],
      signal: 'High-Intent Traffic',
    },
    {
      id: '04',
      title: 'SCALE',
      subtitle: 'Autonomous Revenue Loops',
      icon: TrendingUp,
      description:
        'Self-reinforcing feedback loops ensure every dollar spent informs the AI engine, driving down marginal CAC while compounding commercial enterprise value.',
      deliverables: ['Self-Tuning Attribution Engine', 'Predictive LTV Modeling', 'Automated Enterprise Reports'],
      signal: 'Compounded Revenue',
    },
  ];

  return (
    <section id="process" className="py-28 bg-slate-50/50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Signal to Revenue // The 4-Phase Trajectory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            HOW WE DEPLOY <br />
            <span className="animate-shimmer">INTELLIGENT GROWTH.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            A continuous pipeline where raw market intent transforms into verified, high-value enterprise revenue.
          </p>
        </div>

        {/* Horizontal Visual Timeline & Interactive Pipeline */}
        <div className="mb-14 relative">
          {/* Connecting glowing pipeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400"
              initial={{ width: '25%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Steps selector buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-3xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 -translate-y-1'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                      PHASE {step.id}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-slate-900 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{step.signal}</span>
                    <span className={isActive ? 'text-blue-600 font-bold' : 'text-slate-400'}>
                      {isActive ? '● ACTIVE' : 'Select'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 backdrop-blur-2xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold mb-2">
                <span>STAGE {steps[activeStep].id} OF 04</span>
                <span>•</span>
                <span>EXECUTION SPECIFICATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                {steps[activeStep].description}
              </p>

              {/* Deliverables tags */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Engineered Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-800"
                    >
                      <Check size={12} className="text-blue-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Signal Stream Gauge */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                  Telemetry Channel
                </span>
                <span className="text-xs font-mono text-blue-600 font-bold">99.8% Sync</span>
              </div>

              {/* Live Signal Graphic */}
              <div className="space-y-3 py-2">
                <div className="flex justify-between text-xs font-mono text-slate-700">
                  <span>Data Ingestion</span>
                  <span className="text-blue-600 font-bold">1.2 GB/sec</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-700"
                    style={{ width: `${(activeStep + 1) * 25}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs font-mono text-slate-700 pt-2">
                  <span>Pipeline Maturity</span>
                  <span className="text-blue-700 font-bold">
                    {['25% Initializing', '50% Synthesizing', '75% Scaling', '100% Compounding'][activeStep]}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">Next Phase</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold transition-colors cursor-pointer"
                >
                  <span>Advance Pipeline</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
