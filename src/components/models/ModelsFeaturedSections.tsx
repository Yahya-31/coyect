import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import GlassObject3DRender from './GlassObject3DRender';

interface FeaturedItemProps {
  key?: React.Key;
  item: {
    id: string;
    type: 'light_funnel' | 'interlocking_gears' | 'eye_lens';
    imageFallback: string;
    name: string;
    oneLine: string;
    glow: string;
    isReversed: boolean;
  };
}

function FeaturedSectionItem({ item }: FeaturedItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Slow scroll-linked zoom on the 3D render
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.95]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10 py-12">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
          item.isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Full-bleed large 3D render filling about half the screen */}
        <motion.div
          style={{ scale }}
          className={`lg:col-span-7 relative ${item.isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="relative rounded-3xl p-6 sm:p-10 bg-[#0B1426] border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.18)] overflow-hidden group">
            {/* Ambient glow behind object */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${item.glow} opacity-40 blur-3xl pointer-events-none group-hover:scale-115 transition-transform duration-700`}
            />

            <div className="max-w-md mx-auto aspect-square">
              <GlassObject3DRender
                type={item.type}
                imageFallback={item.imageFallback}
                isHovered={true}
                className="w-full h-full shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Name plus one line only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-5 flex flex-col justify-center space-y-4 ${
            item.isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Name */}
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight uppercase leading-[0.92]">
            {item.name}
          </h3>

          {/* One line only */}
          <p className="text-xl sm:text-2xl text-[#8FA3BF] font-light leading-relaxed">
            {item.oneLine}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function ModelsFeaturedSections() {
  const featured = [
    {
      id: 'lead-engine-feature',
      type: 'light_funnel' as const,
      imageFallback: '/models/lead-engine.svg',
      name: 'Lead Engine',
      oneLine: 'High-intent pipeline growth calibrated on real market demand.',
      glow: 'from-[#22D3EE]/30 via-[#8B5CF6]/30 to-[#EC4899]/20',
      isReversed: false,
    },
    {
      id: 'automation-feature',
      type: 'interlocking_gears' as const,
      imageFallback: '/models/automation.svg',
      name: 'Automation Matrix',
      oneLine: 'Zero-latency autonomous operational orchestration across every tool.',
      glow: 'from-[#8B5CF6]/30 via-[#22D3EE]/30 to-[#EC4899]/15',
      isReversed: true,
    },
    {
      id: 'vision-feature',
      type: 'eye_lens' as const,
      imageFallback: '/models/vision.svg',
      name: 'Synthetic Vision',
      oneLine: 'Real-time spatial perception and automated visual intelligence.',
      glow: 'from-[#22D3EE]/30 via-[#EC4899]/30 to-[#8B5CF6]/20',
      isReversed: false,
    },
  ];

  return (
    <section className="py-24 bg-[#040913] text-[#E6EEF8] relative overflow-hidden space-y-24">
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040913]/70 to-[#040913] pointer-events-none" />

      {featured.map((item) => (
        <FeaturedSectionItem key={item.id} item={item} />
      ))}
    </section>
  );
}
