import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, TrendingUp, Workflow, Sparkles, CheckCircle2 } from 'lucide-react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  key?: React.Key;
}

function TiltCard({ children, className = '', onHoverStart, onHoverEnd }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHoverStart) onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    if (onHoverEnd) onHoverEnd();
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative rounded-3xl p-8 transition-colors duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Interactive 3D Canvas Icon-Objects
function NeuralLatticeObject() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center mb-6">
      {/* Outer spinning hexagon lattice */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        className="absolute inset-0 rounded-2xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.15)]"
      >
        <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-600 animate-ping" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-blue-400" />
      </motion.div>

      {/* Internal lattice nodes */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="w-12 h-12 rounded-xl border border-blue-300 bg-blue-50 backdrop-blur-md flex items-center justify-center"
      >
        <Cpu size={24} className="text-blue-600" />
      </motion.div>
    </div>
  );
}

function RisingBarArrowObject() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center mb-6">
      {/* Glowing 3D growth container */}
      <div className="absolute inset-0 rounded-2xl border border-blue-200 bg-blue-50/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]" />

      {/* 3 Rising bars */}
      <div className="flex items-end gap-1.5 h-10 z-10">
        <motion.div
          animate={{ height: ['40%', '70%', '40%'] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-2.5 bg-blue-400/70 rounded-t-sm"
        />
        <motion.div
          animate={{ height: ['60%', '95%', '60%'] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
          className="w-2.5 bg-blue-500 rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        />
        <motion.div
          animate={{ height: ['80%', '100%', '80%'] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.6 }}
          className="w-2.5 bg-blue-600 rounded-t-sm shadow-[0_0_8px_rgba(37,99,235,0.6)]"
        />
      </div>

      <TrendingUp size={22} className="absolute -top-1 -right-1 text-blue-600 z-20" />
    </div>
  );
}

function LinkedFlowNodesObject() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center mb-6">
      {/* Orbiting connected flow nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-blue-400/50"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-blue-400" />
      </motion.div>

      {/* Center Gear / Node */}
      <div className="w-11 h-11 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-10 shadow-md">
        <Workflow size={22} className="text-blue-600" />
      </div>
    </div>
  );
}

export default function Services() {
  const [activeCluster, setActiveCluster] = useState<'ai' | 'marketing' | 'automation' | null>(null);

  const services = [
    {
      id: 'ai',
      category: 'AI ENGINEERING',
      title: 'Enterprise AI & Machine Learning Systems',
      description:
        'Architecting production-ready LLM agents, private vector retrieval (Pinecone & pgvector), and custom neural inference pipelines tailored to proprietary enterprise data.',
      iconObject: <NeuralLatticeObject />,
      accentColor: 'border-slate-200 hover:border-blue-500',
      tag: 'Neural Lattice',
      highlights: [
        'Private Enterprise RAG & Vector Embeddings',
        'Multi-Agent System Orchestration',
        'Sub-100ms Autonomous Reasoning',
      ],
    },
    {
      id: 'marketing',
      category: 'PERFORMANCE MARKETING',
      title: 'High-ROAS Autonomous Growth Engines',
      description:
        'Data-driven Meta Ads and Google Search Intent campaigns optimized via continuous machine learning attribution, dynamic creatives, and revenue-focused conversion loops.',
      iconObject: <RisingBarArrowObject />,
      accentColor: 'border-slate-200 hover:border-blue-500',
      tag: 'Growth Vector',
      highlights: [
        'Meta Ads & Algorithmic Bid Scaling',
        'Predictive LTV & ROAS Modeling',
        'Real-time Attribution & Tracking',
      ],
    },
    {
      id: 'automation',
      category: 'WORKFLOW & AGENTS',
      title: 'n8n & Autonomous Operations Pipeline',
      description:
        'Eliminating manual bottlenecks through end-to-end event-driven n8n workflows, CRM synchronizations, automated lead qualification, and instantaneous webhook fulfillment.',
      iconObject: <LinkedFlowNodesObject />,
      accentColor: 'border-slate-200 hover:border-blue-500',
      tag: 'Flow Nodes',
      highlights: [
        'Complex n8n & Python Microservices',
        'Autonomous Lead Routing & CRM Sync',
        '99.9% Fault-Tolerant Automation',
      ],
    },
  ];

  return (
    <section id="services" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs"
          >
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Core Pillars // Three Distinct Horizons</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900 uppercase"
          >
            THE TWO HALVES. <br />
            <span className="animate-shimmer">ONE LIVING SYSTEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal"
          >
            AI engineering without market distribution creates dormant software. Marketing without intelligent automation burns capital. We fuse both under one continuous growth network.
          </motion.p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <TiltCard
              key={service.id}
              onHoverStart={() => setActiveCluster(service.id as 'ai' | 'marketing' | 'automation')}
              onHoverEnd={() => setActiveCluster(null)}
              className={`bg-white border ${service.accentColor} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              {/* Top Meta info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-blue-600 font-bold uppercase">
                    {service.category}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
                    {service.tag}
                  </span>
                </div>

                {/* 3D Custom Icon-Object */}
                {service.iconObject}

                <h3 className="font-display font-black text-xl text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="pt-6 border-t border-slate-100 space-y-2.5">
                {service.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                    <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}

                <div className="pt-4 flex items-center gap-1.5 text-xs font-mono text-blue-600 group-hover:text-blue-800 font-semibold transition-colors">
                  <span>Explore Capabilities</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
