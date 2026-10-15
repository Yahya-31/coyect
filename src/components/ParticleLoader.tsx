import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ParticleLoader({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

          {/* Assembling Emblem with rotating rings */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Outer Particle Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="w-24 h-24 rounded-full border border-dashed border-blue-400/40 flex items-center justify-center"
            />

            {/* Counter-rotating Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute w-20 h-20 rounded-full border border-blue-500/50"
            />

            {/* Glowing Logo Core */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-12 h-12 rounded-full bg-white border-2 border-blue-600 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.25)]"
            >
              <img
                src="/coyect-logo.svg"
                alt="Coyect Loading"
                className="w-full h-full object-cover scale-125"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Title & System Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-1.5 font-display font-black text-xl tracking-tight text-slate-900">
              <span>C</span>
              <span className="text-blue-600 font-extrabold">Ø</span>
              <span>YECT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse ml-1" />
            </div>

            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 font-semibold mt-2">
              INITIALIZING NEURAL GROWTH NETWORK
            </p>

            {/* Micro loading progress line */}
            <div className="w-44 h-0.5 bg-slate-200 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
