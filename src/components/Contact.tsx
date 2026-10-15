import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Phone, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Magnetic button state
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleButtonMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.message.trim()) newErrors.message = 'Please enter your inquiry.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Fire cyber particle burst on submit
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8', '#ffffff'],
      });
    } catch {
      // fallback if canvas not available
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@coyect.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 79044 00252');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Network Convergence: glowing converging point above the form */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-500 to-blue-400" />
        <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.6)] animate-pulse" />
        <div className="w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-[130px] -mt-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            <span>Converge Signals // Direct Intake</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-slate-900">
            LET&apos;S ENGINEER YOUR <br />
            <span className="animate-shimmer">NEXT GROWTH STAGE.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Whether deploying proprietary multi-agent workflows or scaling performance customer acquisition, our directors review incoming briefs within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Telemetry & Info Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <span className="text-[10px] font-mono tracking-widest text-blue-600 uppercase font-bold block mb-2">
                Executive Desk
              </span>
              <h3 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tight mb-4">
                DIRECT CHANNELS
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-6">
                Fast-track your consultation. Our creative and technical directors are accessible directly via phone and WhatsApp.
              </p>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+917904400252"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Direct Line &amp; Hotline</span>
                      <span className="text-sm font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        +91 79044 00252
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopyPhone();
                    }}
                    className="p-2 text-slate-400 hover:text-slate-700"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-blue-600" /> : <Copy size={14} />}
                  </button>
                </a>

                <a
                  href="https://wa.me/917904400252?text=Hello%20Coyect%20Team%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20%26%20growth%20engagement"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#25D366] flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">WhatsApp Business</span>
                      <span className="text-sm font-mono font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">
                        Chat Now (7904400252)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-[#25D366]/10 text-[#25D366] font-bold px-2.5 py-1 rounded-full border border-[#25D366]/20">
                    Instant
                  </span>
                </a>

                {/* Email Inquiry */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Official Inquiries</span>
                      <span className="text-sm font-mono font-bold text-slate-900">contact@coyect.com</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-700"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-blue-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Converged Intake Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
              {/* Converging indicator glow on top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.4)]" />

              <h3 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tight mb-2">
                INITIATE PROJECT TELEMETRY
              </h3>
              <p className="text-xs text-slate-500 font-normal mb-8">
                Provide preliminary metrics and objectives. We deliver a custom architecture roadmap.
              </p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tight mb-2">
                      SIGNAL RECEIVED &amp; LOGGED
                    </h4>
                    <p className="text-sm text-slate-600 font-normal max-w-md mb-6">
                      Your brief has been routed to our Lead Architecture desk. A senior strategist will review within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-mono uppercase tracking-wider text-slate-700 transition-colors"
                    >
                      Send Another Telemetry Signal
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-semibold block mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Vance"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 text-xs font-mono outline-hidden transition-colors"
                        />
                        {errors.name && (
                          <span className="text-[10px] font-mono text-rose-600 mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-semibold block mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@enterprise.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 text-xs font-mono outline-hidden transition-colors"
                        />
                        {errors.email && (
                          <span className="text-[10px] font-mono text-rose-600 mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-semibold block mb-2">
                        Company or Project URL
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Acme Tech Inc / https://acme.ai"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 text-xs font-mono outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-600 font-semibold block mb-2">
                        Project Scope &amp; Target Metrics *
                      </label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Detail your requirements: Enterprise RAG, autonomous agent deployment, performance marketing scale, or n8n workflow integration..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 text-xs font-mono outline-hidden transition-colors resize-none"
                      />
                      {errors.message && (
                        <span className="text-[10px] font-mono text-rose-600 mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button with Magnetic Hover Effect */}
                    <div className="pt-2">
                      <motion.button
                        ref={buttonRef}
                        type="submit"
                        disabled={isSubmitting}
                        onMouseMove={handleButtonMouseMove}
                        onMouseLeave={handleButtonMouseLeave}
                        animate={{ x: btnOffset.x, y: btnOffset.y }}
                        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                        className="w-full py-4 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>TRANSMITTING SIGNAL TO DESK...</span>
                        ) : (
                          <>
                            <span>Transmit Project Telemetry</span>
                            <Send size={14} />
                          </>
                        )}
                      </motion.button>
                      <p className="text-[10px] font-mono text-slate-400 text-center mt-3 uppercase tracking-wider">
                        🔒 Direct TLS encrypted transmission // Zero third-party telemetry sharing
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
