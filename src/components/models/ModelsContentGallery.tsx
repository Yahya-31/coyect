import React, { useState } from 'react';
import { Camera, Film, Heart, MessageCircle, Play, Eye, Share2, Sparkles, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModelsContentGalleryProps {
  onScrollToSection: (sectionId: string) => void;
}

interface GalleryItem {
  id: string;
  type: 'PHOTO' | 'REEL' | 'CAMPAIGN' | 'EDITORIAL';
  category: 'Fashion Portraits' | 'Editorial' | 'Lifestyle' | 'Cinematic Reels' | 'Brand Campaigns' | 'Behind The Scenes';
  title: string;
  model: string;
  likes: string;
  views: string;
  aspect: string;
  image: string;
  description: string;
}

export default function ModelsContentGallery({ onScrollToSection }: ModelsContentGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Fashion Portraits',
    'Editorial',
    'Lifestyle',
    'Cinematic Reels',
    'Brand Campaigns',
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      type: 'EDITORIAL',
      category: 'Editorial',
      title: 'Monochrome Silhouette Series',
      model: 'Elena V.',
      likes: '14.8k',
      views: '182k',
      aspect: 'aspect-[3/4]',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
      description: 'Studio lighting masterclass exploring high-contrast form, dramatic shadows, and haute-couture angles for luxury print publication.',
    },
    {
      id: 'g-2',
      type: 'REEL',
      category: 'Cinematic Reels',
      title: 'Runway Pace Motion Film',
      model: 'Marcus Chen',
      likes: '34.2k',
      views: '540k',
      aspect: 'aspect-[9/16]',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85',
      description: '4K slow-motion fashion reel formatted for Instagram Reels and TikTok, featuring synchronized pacing to trending ambient score.',
    },
    {
      id: 'g-3',
      type: 'PHOTO',
      category: 'Fashion Portraits',
      title: 'Golden Hour Beauty Editorial',
      model: 'Aria Thorne',
      likes: '22.1k',
      views: '290k',
      aspect: 'aspect-[3/4]',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
      description: 'Natural light diffusion with subtle reflector balance focusing on authentic skin texture, facial symmetry, and eye contact.',
    },
    {
      id: 'g-4',
      type: 'CAMPAIGN',
      category: 'Brand Campaigns',
      title: 'Luxury Cashmere Commercial',
      model: 'Devon Rhys',
      likes: '18.9k',
      views: '310k',
      aspect: 'aspect-[4/3]',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85',
      description: 'Commercial shoot for high-end knitwear house, balancing brand product focus with aspirational high-fashion lifestyle imagery.',
    },
    {
      id: 'g-5',
      type: 'PHOTO',
      category: 'Lifestyle',
      title: 'Urban Minimalist Walk',
      model: 'Sophia L.',
      likes: '12.5k',
      views: '165k',
      aspect: 'aspect-[3/4]',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
      description: 'Street-level candid fashion photography capturing modern cosmopolitan energy, clean architectural backdrops, and effortless style.',
    },
    {
      id: 'g-6',
      type: 'REEL',
      category: 'Cinematic Reels',
      title: 'Backstage Makeup & Lighting',
      model: 'Chloe M.',
      likes: '45.1k',
      views: '820k',
      aspect: 'aspect-[9/16]',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85',
      description: 'Behind-the-scenes transformation short that generated viral reach across multiple platforms, showcasing personality and transformation.',
    },
    {
      id: 'g-7',
      type: 'EDITORIAL',
      category: 'Editorial',
      title: 'Vogue Inspired Lookbook',
      model: 'Amara K.',
      likes: '29.3k',
      views: '410k',
      aspect: 'aspect-[3/4]',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85',
      description: 'Avant-garde styling and posing that highlights poise, facial angles, and high-fashion composure for agency comp cards.',
    },
    {
      id: 'g-8',
      type: 'CAMPAIGN',
      category: 'Brand Campaigns',
      title: 'Modern Eyewear Capsule',
      model: 'Lucas V.',
      likes: '16.7k',
      views: '240k',
      aspect: 'aspect-[4/3]',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=85',
      description: 'Product-focused accessory modeling with sharp close-ups, highlighting product texture, premium aesthetics, and model charisma.',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="models-content" className="py-28 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-blue-600" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
                SECTION 06 // VISUAL PRODUCTION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] text-slate-900">
              WE CREATE CONTENT <br />
              <span className="italic text-blue-600 font-normal">THAT GETS ATTENTION.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            High-fashion portraits, viral Instagram reels, and commercial campaigns crafted by seasoned creative directors to elevate your reach.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Instagram-Style Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-500 cursor-pointer shadow-md"
            >
              {/* Image Container with Hover Zoom */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-108 transition-all duration-700"
                />

                {/* Always visible Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-[9px] tracking-widest uppercase font-bold px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-blue-700 border border-blue-200 shadow-xs">
                    {item.type}
                  </span>
                </div>

                {/* Reel Play Icon if Video */}
                {item.type === 'REEL' && (
                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-blue-600 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                    <Play size={12} className="fill-current translate-x-0.5" />
                  </div>
                )}

                {/* Dark Editorial Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  {/* Badge Display on Hover */}
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-blue-400 font-medium mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-lg font-light text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-zinc-300 pt-3 border-t border-white/20 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Heart size={13} className="text-rose-400 fill-rose-400" />
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye size={13} className="text-blue-400" />
                      {item.views}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Micro Info Bar */}
              <div className="p-3.5 bg-white flex items-center justify-between text-xs border-t border-slate-100">
                <span className="font-serif text-slate-800 font-medium tracking-wide">{item.model}</span>
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-semibold">{item.type}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail for Selected Gallery Item */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 text-slate-900"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer shadow-md"
                >
                  <X size={18} />
                </button>

                {/* Modal Visual Left */}
                <div className="md:col-span-7 aspect-[4/5] bg-slate-100">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Details Right */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-blue-50 border border-blue-200 px-2.5 py-1 rounded text-blue-700 font-semibold">
                        {selectedItem.type}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        {selectedItem.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-slate-900 uppercase tracking-tight mb-3 font-semibold">
                      {selectedItem.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                      {selectedItem.description}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 mb-6">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500">Talent Represented</span>
                        <span className="text-slate-900 font-serif font-semibold">{selectedItem.model}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500">Verified Impressions</span>
                        <span className="text-blue-600 font-bold">{selectedItem.views}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500">Social Interactions</span>
                        <span className="text-rose-500 font-bold">{selectedItem.likes}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onScrollToSection('models-application');
                    }}
                    className="w-full py-3.5 bg-blue-600 text-white font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    Produce Content Like This
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
