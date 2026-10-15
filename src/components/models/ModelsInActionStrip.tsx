import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { MessageSquareCode, Activity, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ModelsInActionStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
  };

  const mockups = [
    {
      id: 'phone-mockup',
      label: 'Mobile Agent',
      content: (
        <div className="w-64 h-[380px] rounded-[40px] bg-[#040913] border-4 border-white/20 p-4 shadow-[0_0_50px_rgba(34,211,238,0.25)] flex flex-col justify-between relative overflow-hidden group">
          {/* Dynamic Island notch */}
          <div className="w-24 h-4 bg-white/20 rounded-full mx-auto mb-4" />

          {/* Active conversation bubbles showing results */}
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#8FA3BF] w-4/5">
              Processing user intent...
            </div>
            <div className="p-3 rounded-2xl bg-[#22D3EE]/15 border border-[#22D3EE]/40 text-[10px] font-mono text-[#22D3EE] ml-auto w-4/5 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Conversion rate: +42.8%
            </div>
            <div className="p-3 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 text-[10px] font-mono text-white w-5/6 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              1,240 qualified meetings booked.
            </div>
          </div>

          <div className="h-1 bg-white/20 rounded-full w-24 mx-auto mt-2" />
        </div>
      ),
    },
    {
      id: 'dashboard-mockup',
      label: 'Live Dashboard',
      content: (
        <div className="w-84 h-[380px] rounded-3xl bg-[#040913] border-2 border-[#22D3EE]/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.3)] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-[#22D3EE] tracking-widest">COYECT OS</span>
          </div>

          {/* Glowing bar chart visual results */}
          <div className="space-y-4 py-3 flex-1 flex flex-col justify-center">
            <div className="flex items-end gap-2.5 h-28 px-2 border-b border-white/10 pb-3">
              <div className="w-1/6 bg-[#22D3EE]/30 h-12 rounded-t" />
              <div className="w-1/6 bg-[#22D3EE]/50 h-18 rounded-t" />
              <div className="w-1/6 bg-[#8B5CF6]/60 h-22 rounded-t" />
              <div className="w-1/6 bg-[#8B5CF6] h-16 rounded-t" />
              <div className="w-1/6 bg-[#EC4899]/70 h-24 rounded-t" />
              <div className="w-1/6 bg-gradient-to-t from-[#22D3EE] to-[#8B5CF6] h-28 rounded-t shadow-[0_0_20px_#22D3EE]" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#8FA3BF]">
              <span>Latency: 38ms</span>
              <span className="text-[#22D3EE] font-bold">5.2x Revenue Velocity</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>● Autonomous Tuning Active</span>
            <span className="text-white/40">99.98%</span>
          </div>
        </div>
      ),
    },
    {
      id: 'chat-mockup',
      label: 'Chat Window',
      content: (
        <div className="w-76 h-[380px] rounded-3xl bg-[#040913] border-2 border-[#8B5CF6]/40 p-6 shadow-[0_0_50px_rgba(139,92,246,0.3)] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10 text-xs font-mono text-white">
            <MessageSquareCode size={15} className="text-[#8B5CF6]" />
            <span>Dialogue Stream</span>
          </div>

          <div className="space-y-3 flex-1 py-4 text-[11px] font-mono">
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-300">
              Query: Real-time acquisition status
            </div>
            <div className="p-3 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              Inference: 0.96 match. All systems synchronized.
            </div>
            <div className="p-3 rounded-2xl bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Result: +$284,000 net pipeline added.
            </div>
          </div>

          <div className="h-9 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center px-4 text-[10px] font-mono text-slate-500">
            Active session
          </div>
        </div>
      ),
    },
    {
      id: 'mesh-mockup',
      label: 'Telemetry Mesh',
      content: (
        <div className="w-76 h-[380px] rounded-3xl bg-[#040913] border-2 border-[#EC4899]/40 p-6 shadow-[0_0_50px_rgba(236,72,153,0.25)] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-[10px] font-mono text-[#EC4899] uppercase tracking-wider">Event Loop</span>
            <Activity size={14} className="text-[#EC4899] animate-pulse" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="w-18 h-18 rounded-full border border-[#22D3EE] bg-[#22D3EE]/15 flex items-center justify-center text-[9px] font-mono text-white shadow-[0_0_25px_#22D3EE]">
              RAG
            </div>
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#22D3EE] to-[#8B5CF6]" />
            <div className="w-16 h-16 rounded-full border border-[#8B5CF6] bg-[#8B5CF6]/15 flex items-center justify-center text-[9px] font-mono text-white shadow-[0_0_20px_#8B5CF6]">
              Sync
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#8B5CF6] to-[#EC4899]" />
            <div className="w-14 h-14 rounded-full border border-[#EC4899] bg-[#EC4899]/15 flex items-center justify-center text-[9px] font-mono text-white shadow-[0_0_18px_#EC4899]">
              Growth
            </div>
          </div>

          <span className="text-[10px] font-mono text-center text-[#8FA3BF] block">
            Sub-millisecond loop
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#040913] text-[#E6EEF8] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        {/* Tiny or no title label */}
        <span className="text-xs font-mono tracking-widest uppercase text-[#8FA3BF]">
          IN ACTION
        </span>

        {/* Scroll navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-[#0B1426] border border-white/10 hover:border-[#22D3EE] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous mockup"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-[#0B1426] border border-white/10 hover:border-[#22D3EE] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next mockup"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll of 3D Device Mockups */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 max-w-7xl mx-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mockups.map((m) => (
          <motion.div
            key={m.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 snap-start p-7 rounded-3xl bg-[#0B1426] border border-white/10 hover:border-[#22D3EE]/50 shadow-2xl transition-all duration-300 flex flex-col items-center justify-between"
          >
            <div className="mb-4">{m.content}</div>
            <span className="text-[11px] font-mono tracking-wider text-[#8FA3BF] uppercase">
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
