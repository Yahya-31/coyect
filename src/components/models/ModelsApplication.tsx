import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, Sparkles, Image as ImageIcon, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModelsApplicationProps {
  onSuccess?: () => void;
}

export default function ModelsApplication({ onSuccess }: ModelsApplicationProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    location: '',
    phone: '',
    instagram: '',
    email: '',
    height: '',
    experience: 'None (First Time Model)',
    interests: [] as string[],
    motivation: '',
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const interestOptions = [
    'Fashion',
    'Commercial',
    'Lifestyle',
    'Acting',
    'Influencer',
    'Brand Campaigns',
  ];

  const experienceOptions = [
    'None (First Time Model / Fresh Talent)',
    'Beginner (A few amateur or test shoots)',
    'Intermediate (Working creator / minor campaigns)',
    'Experienced (Represented / paid commercial bookings)',
  ];

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSimulatedPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Create local object URL for preview
      const newUrls = Array.from(e.target.files).map((file: File) => URL.createObjectURL(file));
      setUploadedPhotos((prev) => [...prev, ...newUrls].slice(0, 4));
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please complete all required fields (Full Name, Email, and Phone Number).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate luxury agency portal API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  return (
    <section id="models-application" className="py-28 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-blue-700 font-semibold">
              SECTION 09 // TALENT INTAKE PORTAL
            </span>
            <span className="w-6 h-[2px] bg-blue-600" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase leading-[1.05] mb-5 text-slate-900">
            READY TO BE <br />
            <span className="italic text-blue-600 font-normal">DISCOVERED?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Fill in your details below for our creative directors and talent managers to review your profile. Casting submissions are reviewed within 48-72 business hours.
          </p>
        </div>

        {/* Application Card Container */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl relative text-slate-900">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="application-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Section 1: Basic Identifiers */}
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4 pb-2 border-b border-blue-200">
                    01. Personal Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Instagram Username
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 21"
                        min="16"
                        max="65"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Current City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Los Angeles, London, Mumbai"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Height (cm / ft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5'9&quot; or 175 cm"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                        Modelling Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        {experienceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Interested Categories (Pill Selectors) */}
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-blue-200">
                    02. Interested In (Select all that apply)
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {interestOptions.map((interest) => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => toggleInterest(interest)}
                          className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-md shadow-blue-500/20'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                          }`}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Photo Upload Zone */}
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-blue-200">
                    03. Upload Photos (Headshots / Full Body / Digitals)
                  </h4>
                  <p className="text-[11px] text-slate-500 mb-4 font-normal">
                    Natural lighting, minimal makeup or simple smartphone photos are completely fine. We want to see your authentic look.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {uploadedPhotos.map((url, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 group shadow-xs"
                      >
                        <img src={url} alt={`Upload preview ${idx + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-red-600"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}

                    {uploadedPhotos.length < 4 && (
                      <label className="aspect-[3/4] rounded-xl border-2 border-dashed border-blue-300 hover:border-blue-600 hover:bg-blue-50/50 flex flex-col items-center justify-center text-center p-4 cursor-pointer transition-colors bg-slate-50">
                        <Upload size={20} className="text-blue-600 mb-2" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-semibold">
                          Add Photo
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleSimulatedPhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Section 4: Motivation */}
                <div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-blue-200">
                    04. Why do you want to become a model?
                  </h4>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your aspirations, what inspires you in fashion or media, and your goals..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group py-4 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                       <span>PROCESSING INTAKE PROFILE...</span>
                    ) : (
                      <>
                        <span>APPLY TO BECOME A MODEL</span>
                        <Send size={14} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-500 font-mono text-center mt-3 tracking-wider uppercase">
                    🔒 Submissions are confidential and reviewed directly by Coyect Creative Directors
                  </p>
                  <p className="text-center mt-3 text-xs text-slate-600 font-mono">
                    Prefer direct contact? Call or WhatsApp our casting desk:{' '}
                    <a
                      href="https://wa.me/917904400252"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors"
                    >
                      +91 79044 00252
                    </a>
                  </p>
                </div>
              </motion.form>
            ) : (
              /* Success / Application Received State */
              <motion.div
                key="application-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 shadow-md shadow-blue-500/10">
                  <CheckCircle2 size={32} className="text-blue-600" />
                </div>

                <span className="font-mono text-xs tracking-[0.3em] uppercase text-blue-700 font-semibold mb-2">
                  CONFIRMATION ID: CYM-2026-{Math.floor(1000 + Math.random() * 9000)}
                </span>

                <h3 className="text-3xl sm:text-4xl font-serif uppercase tracking-tight text-slate-900 mb-4 font-bold">
                  APPLICATION RECEIVED
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-light max-w-lg mb-8 leading-relaxed">
                  “We&apos;ll review your profile and contact you regarding the next step.”
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-md w-full text-left space-y-3 mb-8">
                  <h5 className="font-mono text-[10px] tracking-widest uppercase text-blue-700 font-bold">
                    WHAT HAPPENS NEXT:
                  </h5>
                  <div className="text-xs text-slate-600 space-y-2 font-normal">
                    <p>1. Creative board screens your photos and visual profile (24-48 hrs).</p>
                    <p>2. If shortlisted, our casting coordinator reaches out via WhatsApp / Email.</p>
                    <p>3. Virtual casting call to discuss lookbooks, test shoot concepts &amp; timeline.</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      age: '',
                      location: '',
                      phone: '',
                      instagram: '',
                      email: '',
                      height: '',
                      experience: 'None (First Time Model)',
                      interests: [],
                      motivation: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full border border-slate-200 hover:border-blue-500 text-xs font-mono uppercase tracking-widest text-slate-700 hover:text-blue-600 transition-colors cursor-pointer bg-white shadow-xs"
                >
                  Submit Another Profile
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
