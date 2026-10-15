import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, X, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-28 bg-slate-50/50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Research &amp; Systems Architecture // Neural Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            LATEST BLUEPRINT <br />
            <span className="animate-shimmer">INTELLIGENCE.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            In-depth breakdowns on enterprise RAG design, automated multi-agent orchestration, and performance acquisition mathematics.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => {
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-7 text-left relative overflow-hidden shadow-md hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Category Pill & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{post.date}</span>
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Read Paper</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto text-slate-900"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-500">{activeArticle.date}</span>
              </div>

              <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-6">
                {activeArticle.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                <p>{activeArticle.content}</p>
                <p>
                  At Coyect, we engineer self-tuning neural feedback loops directly connected to revenue telemetry, ensuring continuous optimization and operational superiority.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">Written by Coyect Systems Architecture</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-mono font-bold uppercase cursor-pointer hover:bg-blue-700 shadow-md shadow-blue-500/20"
                >
                  Close Dispatch
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
