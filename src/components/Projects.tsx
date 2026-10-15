import React, { useState, useRef } from 'react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, X, Activity, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Architectures' },
    { id: 'ai_ml', label: 'AI & Machine Learning' },
    { id: 'automation_marketing', label: 'Marketing & Automation' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-28 bg-slate-50/60 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background flare */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
              <Sparkles size={12} className="text-blue-600 animate-pulse" />
              <span>Proven Blueprints // Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
              ENGINEERED <br />
              <span className="animate-shimmer">CASE RESULTS.</span>
            </h2>
          </div>

          {/* Navigation Controls & Category Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex gap-1.5 p-1 rounded-full bg-white border border-slate-200 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label="Scroll left"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                aria-label="Scroll right"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery with Depth Blur on Off-Screen Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveProjectModal(project)}
              className="min-w-[340px] sm:min-w-[420px] max-w-[420px] snap-start rounded-3xl bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl p-7 flex flex-col justify-between cursor-pointer group transition-all duration-300 relative overflow-hidden"
            >
              {/* Visual Blueprint Header Display */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-200 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-white border border-blue-300 text-blue-700 px-3 py-1 rounded-full font-semibold shadow-xs">
                    {project.category === 'ai_ml' ? 'AI & Machine Learning' : 'Performance & Automation'}
                  </span>
                  <Activity size={16} className="text-blue-600 animate-pulse" />
                </div>

                {/* Primary Metric Pill */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {project.metrics[0].label}
                    </span>
                    <span className="text-base font-mono font-black text-blue-600">
                      {project.metrics[0].value}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-display font-black text-xl text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies & View Details Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <span className="flex items-center gap-1 text-xs font-mono text-blue-600 group-hover:text-blue-800 font-semibold transition-colors">
                  <span>Inspect</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-slate-900"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest block mb-2 font-bold">
                Case Study Telemetry
              </span>

              <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">
                {activeProjectModal.title}
              </h3>

              {/* Metrics Display */}
              {activeProjectModal.metrics && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeProjectModal.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</span>
                      <span className="text-2xl font-mono font-black text-blue-600 mt-1">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {activeProjectModal.longDescription || activeProjectModal.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                  Stack &amp; Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(activeProjectModal.liveUrl || activeProjectModal.githubUrl) && (
                <a
                  href={activeProjectModal.liveUrl || activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <span>View Deployment Repository</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
