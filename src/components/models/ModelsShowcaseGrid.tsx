import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHOWCASE_MODELS, ModelItem } from './modelShowcaseData';
import GlassObject3DRender from './GlassObject3DRender';
import { X } from 'lucide-react';

function TiltModelCard({
  model,
  onClick,
}: {
  model: ModelItem;
  onClick: () => void;
  key?: React.Key;
}) {
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="perspective-1000 cursor-pointer select-none"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl p-6 sm:p-8 bg-[#0B1426] border border-white/10 hover:border-[#22D3EE]/70 shadow-2xl transition-colors duration-300 flex flex-col justify-between h-full group overflow-hidden"
      >
        {/* Glow halo behind card that intensifies on hover */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${model.glowColor} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none -z-10`}
        />

        {/* Glossy 3D Glass Object Render */}
        <div className="mb-6 relative">
          <GlassObject3DRender
            type={model.objectType}
            imageFallback={model.image}
            isHovered={isHovered}
          />
        </div>

        {/* Exactly: 2-3 word name and 5-word benefit. Nothing more. */}
        <div className="space-y-2">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#E6EEF8] group-hover:text-white transition-colors tracking-tight">
            {model.name}
          </h3>
          <p className="text-sm sm:text-base text-[#8FA3BF] font-light leading-relaxed">
            {model.benefit}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ModelsShowcaseGrid() {
  const [activeModal, setActiveModal] = useState<ModelItem | null>(null);

  const handleCardClick = (model: ModelItem) => {
    setActiveModal(model);
  };

  return (
    <section className="py-24 bg-[#040913] text-[#E6EEF8] relative overflow-hidden">
      {/* Dark Vignette around edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040913]/60 to-[#040913] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 6 Large Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_MODELS.map((model) => (
            <TiltModelCard
              key={model.id}
              model={model}
              onClick={() => handleCardClick(model)}
            />
          ))}
        </div>
      </div>

      {/* Full-Screen Image View Modal on Click */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#040913]/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
              aria-label="Close full-screen view"
            >
              <X size={22} />
            </button>

            {/* Modal Content: Full-Screen 3D Glass Object */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full flex flex-col items-center justify-center text-center p-6"
            >
              {/* Radial glow background */}
              <div
                className={`absolute w-96 h-96 rounded-full bg-gradient-to-tr ${activeModal.glowColor} blur-[120px] pointer-events-none opacity-90`}
              />

              {/* Large 3D Glass Object Render */}
              <div className="w-80 sm:w-96 aspect-square relative z-10 mb-8">
                <GlassObject3DRender
                  type={activeModal.objectType}
                  imageFallback={activeModal.image}
                  isHovered={true}
                  className="w-full h-full shadow-[0_0_100px_rgba(34,211,238,0.3)]"
                />
              </div>

              {/* Name & Benefit */}
              <div className="relative z-10 max-w-lg space-y-3">
                <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                  {activeModal.name}
                </h2>
                <p className="text-lg text-[#8FA3BF] font-light">
                  {activeModal.benefit}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
