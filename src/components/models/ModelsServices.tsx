import React from 'react';
import { Camera, Film, Crown, TrendingUp, FolderGit2, Briefcase, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ModelsServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ModelsServices({ onScrollToSection }: ModelsServicesProps) {
  const services = [
    {
      num: '01',
      title: 'PROFESSIONAL PHOTOGRAPHY',
      subtitle: 'Editorial & Studio Shoots',
      description: 'Studio and outdoor fashion shoots designed to build a professional modelling portfolio with magazine-grade lighting and composition.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      badge: 'Portfolio Ready',
    },
    {
      num: '02',
      title: 'CINEMATIC VIDEOGRAPHY',
      subtitle: 'Motion & Fashion Films',
      description: 'Create high-quality reels, fashion films and promotional videos that showcase personality, runway movement, and magnetic screen presence.',
      icon: Film,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      badge: '4K Cinematic',
    },
    {
      num: '03',
      title: 'PERSONAL BRANDING',
      subtitle: 'Identity & Signature Look',
      description: 'Build a recognizable identity around the model’s appearance, personality, niche and strengths that makes you memorable to casting agents.',
      icon: Crown,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
      badge: 'Niche Strategy',
    },
    {
      num: '04',
      title: 'SOCIAL MEDIA GROWTH',
      subtitle: 'Instagram & TikTok Scaling',
      description: 'Create and promote strategic content across Instagram and other social platforms to increase visibility, engagement, and audience reach.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      badge: 'Algorithmic Reach',
    },
    {
      num: '05',
      title: 'PORTFOLIO DEVELOPMENT',
      subtitle: 'Digital Book & Comp Cards',
      description: 'Build a professional digital portfolio that models can use when approaching brands, talent agencies, casting calls, and commercial clients.',
      icon: FolderGit2,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      badge: 'Agency Standard',
    },
    {
      num: '06',
      title: 'BRAND OPPORTUNITIES',
      subtitle: 'Campaigns & Commercial Deals',
      description: 'Help models build visibility that can lead to collaborations, campaigns, commercial shoots and long-term paid brand partnerships.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
      badge: 'Paid Collaborations',
    },
  ];

  return (
    <section id="models-services" className="py-28 bg-slate-50/50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
                SECTION 03 // OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] text-slate-900">
              HOW WE HELP <br />
              <span className="italic text-blue-600 font-normal">MODELS SUCCEED.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            A unified suite of production, branding, and distribution services engineered specifically for new and aspiring models seeking exponential growth.
          </p>
        </div>

        {/* 6-Card Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Number & Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="font-mono text-xs tracking-widest text-slate-900 font-bold bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-blue-700 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-200 font-semibold shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-blue-600" />
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-blue-600 font-semibold">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif tracking-wider uppercase font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onScrollToSection('models-application')}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-[11px] font-mono tracking-[0.2em] uppercase text-slate-500 group-hover:text-blue-600 font-semibold transition-colors cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-600" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
