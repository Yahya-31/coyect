import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Zap, Workflow, BarChart3, Triangle, Eye } from 'lucide-react';

interface GlassObject3DRenderProps {
  type: 'speech_bubble' | 'light_funnel' | 'interlocking_gears' | 'floating_chart' | 'light_prism' | 'eye_lens';
  imageFallback?: string;
  className?: string;
  isHovered?: boolean;
}

export default function GlassObject3DRender({
  type,
  imageFallback,
  className = '',
  isHovered = false,
}: GlassObject3DRenderProps) {
  return (
    <div
      className={`relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#0B1426] to-[#040913] border border-white/10 ${className}`}
    >
      {/* Background Volumetric Glow (Cyan -> Violet -> Magenta) */}
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.85 : 0.45,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-[#22D3EE]/30 via-[#8B5CF6]/35 to-[#EC4899]/25 blur-3xl pointer-events-none"
      />

      {/* Light Sweep Highlight line across the glass */}
      <motion.div
        animate={{
          x: isHovered ? ['-180%', '180%'] : '-180%',
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-20"
      />

      {/* Primary Visual Render: if imageFallback exists, render it with smooth 3D tilt/zoom */}
      {imageFallback ? (
        <motion.div
          animate={{
            scale: isHovered ? 1.06 : 1,
            rotate: isHovered ? (type === 'light_prism' ? 8 : type === 'interlocking_gears' ? -8 : 3) : 0,
            y: [0, -5, 0],
          }}
          transition={{
            scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
          }}
          className="relative z-10 w-full h-full flex items-center justify-center p-3 select-none"
        >
          <img
            src={imageFallback}
            alt={`3D glass render of ${type.replace('_', ' ')}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-500"
          />
        </motion.div>
      ) : (
        /* Dynamic SVG/CSS Fallback Objects */
        <div className="relative z-10 flex items-center justify-center">
          {type === 'speech_bubble' && (
            <motion.div
              animate={{
                rotateY: isHovered ? 180 : 0,
                y: [0, -6, 0],
              }}
              transition={{
                rotateY: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
              }}
              className="relative flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full bg-white/[0.04] backdrop-blur-xl border border-[#22D3EE]/60 shadow-[0_0_35px_rgba(34,211,238,0.35),inset_0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#8B5CF6] opacity-80 blur-xs flex items-center justify-center shadow-[0_0_25px_#22D3EE]">
                  <MessageSquare size={24} className="text-white drop-shadow-md" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#EC4899] blur-xs animate-pulse" />
            </motion.div>
          )}

          {type === 'light_funnel' && (
            <motion.div
              animate={{
                rotateZ: isHovered ? 45 : 0,
                y: [0, -6, 0],
              }}
              transition={{
                rotateZ: { duration: 0.8 },
                y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' },
              }}
              className="relative flex flex-col items-center justify-center"
            >
              <div className="w-36 h-12 rounded-full border border-[#22D3EE]/60 bg-white/[0.03] backdrop-blur-md shadow-[0_0_25px_rgba(34,211,238,0.3)]" />
              <div className="w-24 h-10 rounded-full border border-[#8B5CF6]/70 bg-[#8B5CF6]/10 -mt-4 shadow-[0_0_20px_rgba(139,92,246,0.4)]" />
              <div className="w-14 h-8 rounded-full border border-[#EC4899]/80 bg-[#EC4899]/20 -mt-3 shadow-[0_0_15px_rgba(236,72,153,0.5)] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-[#EC4899] to-transparent rounded-full mt-1 blur-[1px]" />
            </motion.div>
          )}

          {type === 'interlocking_gears' && (
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
              className="relative w-36 h-36 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: isHovered ? 180 : 360 }}
                transition={{ repeat: Infinity, duration: isHovered ? 4 : 12, ease: 'linear' }}
                className="absolute -top-1 -left-1 w-24 h-24 rounded-full border-2 border-dashed border-[#22D3EE]/70 bg-white/[0.03] backdrop-blur-lg flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 bg-[#22D3EE]/20" />
              </motion.div>
              <motion.div
                animate={{ rotate: isHovered ? -180 : -360 }}
                transition={{ repeat: Infinity, duration: isHovered ? 4 : 12, ease: 'linear' }}
                className="absolute -bottom-1 -right-1 w-20 h-20 rounded-full border-2 border-dashed border-[#8B5CF6]/70 bg-[#8B5CF6]/10 backdrop-blur-lg flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <Workflow size={18} className="text-[#EC4899]" />
              </motion.div>
            </motion.div>
          )}

          {type === 'floating_chart' && (
            <motion.div
              animate={{ y: [0, -7, 0], rotateX: isHovered ? 15 : 0 }}
              transition={{ y: { repeat: Infinity, duration: 3.4, ease: 'easeInOut' } }}
              className="relative flex flex-col items-center justify-center"
            >
              <div className="flex items-end gap-3 h-28 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                <div className="w-5 h-12 bg-gradient-to-t from-[#22D3EE]/40 to-[#22D3EE] rounded-t-md border-t border-[#22D3EE] shadow-[0_0_12px_#22D3EE]" />
                <div className="w-5 h-20 bg-gradient-to-t from-[#8B5CF6]/40 to-[#8B5CF6] rounded-t-md border-t border-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
                <div className="w-5 h-26 bg-gradient-to-t from-[#EC4899]/40 to-[#EC4899] rounded-t-md border-t border-[#EC4899] shadow-[0_0_15px_#EC4899]" />
              </div>
              <BarChart3 size={16} className="text-[#22D3EE] mt-2 drop-shadow-md" />
            </motion.div>
          )}

          {type === 'light_prism' && (
            <motion.div
              animate={{ rotate: isHovered ? 120 : 0, y: [0, -6, 0] }}
              transition={{
                rotate: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 3.6, ease: 'easeInOut' },
              }}
              className="relative flex items-center justify-center"
            >
              <div className="w-32 h-32 flex items-center justify-center relative">
                <Triangle size={90} className="text-[#22D3EE]/80 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] fill-[#8B5CF6]/15" />
                <div className="absolute h-1.5 w-28 bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#EC4899] rounded-full blur-[1px] shadow-[0_0_15px_#22D3EE]" />
              </div>
            </motion.div>
          )}

          {type === 'eye_lens' && (
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1, y: [0, -6, 0] }}
              transition={{
                scale: { duration: 0.5 },
                y: { repeat: Infinity, duration: 3.3, ease: 'easeInOut' },
              }}
              className="relative flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full border-2 border-[#22D3EE]/60 bg-white/[0.03] backdrop-blur-xl p-2 flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                <div className="w-24 h-24 rounded-full border border-[#8B5CF6] bg-[#8B5CF6]/20 flex items-center justify-center shadow-[inset_0_0_20px_#8B5CF6]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22D3EE] via-[#8B5CF6] to-[#EC4899] flex items-center justify-center shadow-[0_0_20px_#22D3EE]">
                    <Eye size={22} className="text-white drop-shadow-md" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1 right-2 w-3.5 h-3.5 rounded-full bg-[#EC4899] blur-xs animate-ping" />
            </motion.div>
          )}
        </div>
      )}

      {/* Dark vignette bottom shadow */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#040913]/70 to-transparent pointer-events-none" />
    </div>
  );
}
