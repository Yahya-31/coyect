import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BarChart3, TrendingUp, Zap, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface MetricItem {
  id: string;
  label: string;
  targetValue: number;
  prefix?: string;
  suffix: string;
  change: string;
  bars: number[]; // heights for 3D graph rising out of floor
}

function MetricCard({ metric, index }: { metric: MetricItem; index: number; key?: React.Key }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = metric.targetValue;
    const duration = 1600;
    const stepTime = 25;
    const increment = Math.max(Math.ceil(end / (duration / stepTime)), 1);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, metric.targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md backdrop-blur-xl flex flex-col justify-between group hover:border-blue-500 hover:shadow-xl transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between text-[11px] font-mono mb-3">
          <span className="text-slate-500 uppercase tracking-widest">{metric.label}</span>
          <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
            {metric.change}
          </span>
        </div>

        {/* Counter Display */}
        <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight flex items-baseline gap-1">
          {metric.prefix && <span className="text-blue-600 text-2xl">{metric.prefix}</span>}
          <span>{count.toLocaleString()}</span>
          <span className="text-blue-600 font-mono text-xl">{metric.suffix}</span>
        </div>
      </div>

      {/* 3D Bar Graph Growing Out of Floor */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="h-16 flex items-end justify-between gap-1.5 px-2 relative">
          {/* Subtle grid line */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-slate-200" />

          {metric.bars.map((barHeight, bIdx) => (
            <div key={bIdx} className="flex-1 flex flex-col items-center h-full justify-end">
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${barHeight}%` } : { height: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + bIdx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`w-full rounded-t-sm transition-colors ${
                  bIdx === metric.bars.length - 1
                    ? 'bg-gradient-to-t from-blue-700 to-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.35)]'
                    : 'bg-blue-100 hover:bg-blue-200'
                }`}
              />
            </div>
          ))}
        </div>
        <p className="text-[9px] font-mono text-center text-slate-400 uppercase tracking-widest mt-2">
          30-Day Growth Vector
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const metrics: MetricItem[] = [
    {
      id: 'leads',
      label: 'Verified Lead Volume',
      targetValue: 142850,
      suffix: '+',
      change: '+24% MoM',
      bars: [30, 45, 40, 60, 55, 75, 95],
    },
    {
      id: 'roas',
      label: 'Average Pipeline ROAS',
      targetValue: 48, // 4.8x handled in counter
      prefix: '',
      suffix: 'x',
      change: '4.8x Peak',
      bars: [35, 40, 50, 65, 70, 80, 100],
    },
    {
      id: 'hours',
      label: 'Autonomous Hours Saved',
      targetValue: 92400,
      suffix: 'h',
      change: '99.2% SLA',
      bars: [20, 35, 50, 65, 75, 85, 95],
    },
    {
      id: 'revenue',
      label: 'Generated Client Value',
      targetValue: 18,
      prefix: '$',
      suffix: 'M+',
      change: 'Compounded',
      bars: [25, 30, 45, 60, 70, 85, 100],
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background glow flares */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Proven Enterprise Impact // Telemetry & Results</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            NUMBERS ENGINEERED <br />
            <span className="animate-shimmer">OUT OF THE GROUND.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Real performance validated across high-growth startups, B2B SaaS organizations, and commercial marketing operations.
          </p>
        </div>

        {/* 3D Floor Graphs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <MetricCard key={metric.id} metric={metric} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
