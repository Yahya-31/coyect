import React, { useEffect } from 'react';
import ModelsHeader from './ModelsHeader';
import ModelsTalentHero from './ModelsTalentHero';
import ModelsIntro from './ModelsIntro';
import ModelsServices from './ModelsServices';
import ModelsJourney from './ModelsJourney';
import ModelsTransformation from './ModelsTransformation';
import ModelsContentGallery from './ModelsContentGallery';
import ModelsVision from './ModelsVision';
import ModelsEligibility from './ModelsEligibility';
import ModelsApplication from './ModelsApplication';
import ModelsTalentFinalCTA from './ModelsTalentFinalCTA';
import ModelsTalentFooter from './ModelsTalentFooter';
import ModelsStickyCTA from './ModelsStickyCTA';

interface ModelsPageProps {
  onNavigateHome: () => void;
}

export default function ModelsPage({ onNavigateHome }: ModelsPageProps) {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll to top on landing
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Inject SEO Schema for Models Talent Discovery Platform
    const schemaId = 'coyect-models-talent-data';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.setAttribute('type', 'application/ld+json');
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Coyect Models — Talent Discovery & Career Platform',
        'description': 'We help aspiring models turn their potential into a powerful personal brand through professional photography, cinematic videography and strategic social media promotion.',
        'url': window.location.href,
        'image': 'https://nnmcab.org/wp-content/uploads/2025/08/photo-shoot-dusk-silhouettes-beach-7834151.jpg',
        'provider': {
          '@type': 'Organization',
          'name': 'Coyect Models',
          'telephone': '+917904400252',
        },
      });
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Dynamic Header with Switcher, Navigation and Direct Hotline 7904400252 */}
      <ModelsHeader
        onNavigateHome={onNavigateHome}
        onScrollToSection={scrollToSection}
      />

      <main>
        {/* Section 1: HERO SECTION (Cinematic photoshoot background, YOUR FACE. YOUR BRAND. YOUR CAREER.) */}
        <ModelsTalentHero onScrollToSection={scrollToSection} />

        {/* Section 2: INTRODUCTION (MORE THAN A PHOTOSHOOT. WE BUILD CAREERS.) */}
        <ModelsIntro onScrollToSection={scrollToSection} />

        {/* Section 3: HOW WE HELP MODELS (6-Card Grid: Photography, Videography, Branding, Social, Portfolio, Opportunities) */}
        <ModelsServices onScrollToSection={scrollToSection} />

        {/* Section 4: THE JOURNEY (Horizontal Visual Timeline 01 Discover to 06 Scale) */}
        <ModelsJourney onScrollToSection={scrollToSection} />

        {/* Section 5: MODEL TRANSFORMATION (FROM ASPIRING MODEL TO RECOGNIZABLE PERSONAL BRAND) */}
        <ModelsTransformation onScrollToSection={scrollToSection} />

        {/* Section 6: OUR CONTENT (WE CREATE CONTENT THAT GETS ATTENTION - Instagram Gallery) */}
        <ModelsContentGallery onScrollToSection={scrollToSection} />

        {/* Section 7: THE MILLIONAIRE VISION (DON'T JUST BECOME A MODEL. BUILD A BRAND.) */}
        <ModelsVision onScrollToSection={scrollToSection} />

        {/* Section 8: WHO CAN JOIN? (IS THIS FOR YOU? - 8 Talent Personas) */}
        <ModelsEligibility onScrollToSection={scrollToSection} />

        {/* Section 9: MODEL APPLICATION (READY TO BE DISCOVERED? - Form & Photo Uploads) */}
        <ModelsApplication onSuccess={() => scrollToSection('models-final-cta')} />

        {/* FINAL CTA: YOUR JOURNEY STARTS HERE */}
        <ModelsTalentFinalCTA
          onScrollToSection={scrollToSection}
          onNavigateHome={onNavigateHome}
        />
      </main>

      {/* Luxury Talent Footer */}
      <ModelsTalentFooter
        onScrollToSection={scrollToSection}
        onNavigateHome={onNavigateHome}
      />

      {/* Sticky Mobile CTA for One-Tap Call & Application */}
      <ModelsStickyCTA onScrollToSection={scrollToSection} />
    </div>
  );
}
