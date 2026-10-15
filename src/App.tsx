import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import TechSphere from './components/TechSphere';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleLoader from './components/ParticleLoader';
import ModelsPage from './components/models/ModelsPage';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'models'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/models' || search.includes('page=models') || hash === '#models') {
        return 'models';
      }
    }
    return 'main';
  });

  const [activeSection, setActiveSection] = useState('home');

  // Handle URL changes & browser history back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/models' || search.includes('page=models') || hash === '#models') {
        setCurrentPage('models');
      } else {
        setCurrentPage('main');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToModels = () => {
    try {
      window.history.pushState(null, '', '/models');
    } catch {
      // fallback
    }
    setCurrentPage('models');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      // fallback
    }
    setCurrentPage('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll handler for main page
  const handleNavClick = (sectionId: string) => {
    if (currentPage !== 'main') {
      navigateToHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer for Active Navigation Highlighting on Main Page
  useEffect(() => {
    if (currentPage !== 'main') return;

    const sections = ['home', 'services', 'process', 'tech-stack', 'projects', 'testimonials', 'blog', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [currentPage]);

  // Schema Markup injection for SEO / structured data
  useEffect(() => {
    if (currentPage !== 'main') return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Coyect",
      "legalName": "Coyect AI & Market Growth",
      "url": "https://coyect.ai.studio",
      "logo": "https://coyect.ai.studio/coyect-logo.svg",
      "description": "Engineering Intelligent Market Growth through custom machine learning architectures, autonomous agent workflows, and performance acquisition.",
      "telephone": "+91 79044 00252",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamilnadu",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "The Growth Neural Network",
        "Artificial Intelligence & Machine Learning",
        "Enterprise RAG Platforms",
        "Autonomous Agent Workflows",
        "Meta Ads & ROAS Optimization",
        "Google Ads & Intent Acquisition",
        "Intelligent Market Growth",
        "Model Photography & Personal Branding"
      ]
    };

    const scriptId = 'portfolio-schema-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [currentPage]);

  // If on the dedicated Models page, render the Models experience
  if (currentPage === 'models') {
    return (
      <>
        <CustomCursor />
        <ModelsPage onNavigateHome={navigateToHome} />
      </>
    );
  }

  // Otherwise render main Coyect 3D Growth Neural Network experience
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white antialiased font-sans">
      {/* Global Touches: Custom Cursor & Particle Page Loader */}
      <CustomCursor />
      <ParticleLoader />

      {/* Dynamic Header Navigation with integrated Models banner & contact */}
      <Header
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onNavigateModels={navigateToModels}
      />

      {/* Main Sections flow */}
      <main>
        {/* Section 1: 3D Interactive Hero (~600 nodes Three.js neural network + mask reveal) */}
        <Hero onNavClick={handleNavClick} />

        {/* Feature Banner introducing Models Talent & Career Launch Platform */}
        <section className="py-8 bg-blue-50/70 text-slate-900 border-y border-blue-200/80">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-blue-700 block mb-0.5 font-bold">
                  TALENT &amp; MEDIA DIVISION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-slate-900 uppercase tracking-tight font-semibold">
                  Coyect Models — Career Launch Platform
                </h3>
                <p className="text-xs text-slate-600 font-normal mt-0.5">
                  Professional photography, cinematic videography, personal branding &amp; brand opportunities for aspiring models.
                </p>
              </div>
            </div>
            <button
              onClick={navigateToModels}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer shrink-0 flex items-center gap-2"
            >
              <span>Explore Models Platform</span>
              <ArrowRight size={14} className="text-white" />
            </button>
          </div>
        </section>

        {/* Section 2: Core Philosophy // Two Halves. One Living System. */}
        <About />

        {/* Section 3: Specialized Services (3D Tilt Cards with Custom Icon-Objects) */}
        <Services />

        {/* Section 4: How We Work (Signal to Revenue Pipeline) */}
        <Process />

        {/* Section 5: Tech Orbit (Orbiting Architecture around Glowing 3D Core) */}
        <TechSphere />

        {/* Section 6: Metrics & 3D Floor Graphs */}
        <Stats />

        {/* Section 7: Case Studies (Horizontal Scroll Gallery with Depth Blur) */}
        <Projects />

        {/* Section 8: Testimonials (3D Curved Cylindrical Marquee) */}
        <Testimonials />

        {/* Section 9: Tech Dispatch & Articles */}
        <Blog />

        {/* Section 10: Converged Contact (Magnetic Button & Cyber Particle Burst) */}
        <Contact />
      </main>

      {/* Modern Dark Navy Footer */}
      <Footer
        onNavClick={handleNavClick}
        onNavigateModels={navigateToModels}
      />
    </div>
  );
}
