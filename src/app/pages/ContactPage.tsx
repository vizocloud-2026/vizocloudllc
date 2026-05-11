import { motion } from 'motion/react';
import {
  Mail, MapPin, Phone, Clock, Send,
  CheckCircle2, ArrowRight, CalendarDays,
  MessageCircle, Zap, Globe, Building2,
  Loader2, AlertCircle,
} from 'lucide-react';
import { useState } from 'react';

const serviceOptions = [
  'IT Consulting',
  'Staff Augmentation',
  'Web Development',
  'Cloud Services',
  'Digital Marketing',
  'Other',
];

const budgetOptions = [
  'Under $10K',
  '$10K – $50K',
  '$50K – $100K',
  '$100K – $250K',
  '$250K+',
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'b373238a-38a5-4ea0-9124-d295a81c6e95',
          name: formData.name,
          email: formData.email,
          subject: `New Inquiry from ${formData.name} — ${formData.service || 'Vizo Cloud'}`,
          message: formData.message,
          company: formData.company || 'N/A',
          phone: formData.phone || 'N/A',
          service: formData.service || 'Not specified',
          budget: formData.budget || 'Not specified',
          from_name: 'Vizo Cloud',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Submission failed. Please try again or email us directly at Info@vizocloud.com');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Red top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff2b2b]/[0.07] blur-[120px] pointer-events-none rounded-full" />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 0%, transparent 50%, #030303 100%)' }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2b2b] animate-pulse" />
            Get In Touch
          </motion.span>

          <motion.h1
            className="font-display font-bold tracking-tight leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Build Something
            <br />
            <span className="text-[#ff2b2b]">Great Together</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach out to explore how Vizo Cloud can help your business grow with expert IT staffing and consulting.
          </motion.p>

          {/* Quick-contact pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { icon: Mail,   text: 'Info@vizocloud.com',  href: 'mailto:Info@vizocloud.com' },
              { icon: Phone,  text: '+1-307-381-9690',      href: 'tel:+13073819690' },
              { icon: MapPin, text: 'Sarasota, FL',          href: '#' },
            ].map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm text-gray-400 hover:text-white hover:border-[#ff2b2b]/30 hover:bg-[#ff2b2b]/[0.06] transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-[#ff2b2b]" strokeWidth={1.75} />
                {text}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Strip ───────────────────────────────── */}
      <section className="relative py-10 border-y border-white/[0.05] bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'Info@vizocloud.com',
                sub: 'We reply within 24 hours',
                href: 'mailto:Info@vizocloud.com',
                color: '#ff2b2b',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+1-307-381-9690',
                sub: 'Mon – Fri, 9AM – 6PM EST',
                href: 'tel:+13073819690',
                color: '#8b5cf6',
              },
              {
                icon: Building2,
                label: 'Office',
                value: '8051 N. Tamiami Trail STE E6',
                sub: 'Sarasota, Florida 34243',
                href: '#',
                color: '#10b981',
              },
              {
                icon: Clock,
                label: 'Response Time',
                value: 'Within 24 Hours',
                sub: 'Fast & reliable support',
                href: '#',
                color: '#f97316',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[10px] font-display tracking-widest uppercase mb-1" style={{ color: item.color }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-white leading-snug">{item.value}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.sub}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Side Panel ────────────────────────────────── */}
      <section className="relative py-24">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff2b2b]/[0.03] blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* ── Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #080808 100%)' }}
            >
              {/* Top red gradient line */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/50 to-transparent" />

              {/* Form header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center">
                    <MessageCircle className="w-4.5 h-4.5 text-[#ff2b2b]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl tracking-wide">Send Us a Message</h2>
                    <p className="text-xs text-gray-600 mt-0.5">Fill in the details and we'll be in touch shortly</p>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="px-8 py-20 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                      setFormData({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' });
                    }}
                    className="mt-8 text-sm text-[#ff2b2b] font-display hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <input name="name" type="text" required placeholder="John Smith"
                        value={formData.name} onChange={handleChange} className={inputCls} />
                    </Field>
                    <Field label="Email Address" required>
                      <input name="email" type="email" required placeholder="john@company.com"
                        value={formData.email} onChange={handleChange} className={inputCls} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Company Name">
                      <input name="company" type="text" placeholder="Acme Inc."
                        value={formData.company} onChange={handleChange} className={inputCls} />
                    </Field>
                    <Field label="Phone Number">
                      <input name="phone" type="tel" placeholder="+1 (555) 000-0000"
                        value={formData.phone} onChange={handleChange} className={inputCls} />
                    </Field>
                  </div>

                  <Field label="Service You're Interested In" required>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {serviceOptions.map((s) => (
                        <button key={s} type="button"
                          onClick={() => setFormData({ ...formData, service: s })}
                          className="px-4 py-2 rounded-xl text-xs font-display tracking-wide border transition-all duration-200"
                          style={{
                            background: formData.service === s ? 'rgba(255,43,43,0.12)' : 'transparent',
                            borderColor: formData.service === s ? 'rgba(255,43,43,0.4)' : 'rgba(255,255,255,0.07)',
                            color: formData.service === s ? '#ff2b2b' : 'rgba(255,255,255,0.4)',
                          }}
                        >{s}</button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Estimated Budget">
                    <div className="flex flex-wrap gap-2 pt-1">
                      {budgetOptions.map((b) => (
                        <button key={b} type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className="px-4 py-2 rounded-xl text-xs font-display tracking-wide border transition-all duration-200"
                          style={{
                            background: formData.budget === b ? 'rgba(255,43,43,0.12)' : 'transparent',
                            borderColor: formData.budget === b ? 'rgba(255,43,43,0.4)' : 'rgba(255,255,255,0.07)',
                            color: formData.budget === b ? '#ff2b2b' : 'rgba(255,255,255,0.4)',
                          }}
                        >{b}</button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Project Details" required>
                    <textarea name="message" required rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message} onChange={handleChange}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  {error && (
                    <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.75} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#ff2b2b] text-white font-display font-semibold tracking-wide rounded-2xl hover:bg-[#e02020] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 text-sm group"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? 'Sending…' : 'Send Message'}
                    {!loading && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                  </button>

                  <p className="text-center text-[11px] text-gray-700">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── Right Side Panel ── */}
            <motion.div
              className="space-y-5 lg:sticky lg:top-24"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {/* Address block */}
              <div className="rounded-2xl border border-white/[0.07] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d0d0d, #080808)' }}>
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/40 to-transparent" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-400" strokeWidth={1.75} />
                    </div>
                    <span className="font-display font-bold text-sm tracking-wide">Our Office</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    8051 N. Tamiami Trail<br />
                    STE E6<br />
                    Sarasota, Florida 34243
                  </p>
                  <a
                    href="https://maps.google.com/?q=8051+N+Tamiami+Trail+Sarasota+Florida+34243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs text-[#ff2b2b] font-display font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    Get Directions <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email + Phone */}
              <div className="rounded-2xl border border-white/[0.07] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d0d0d, #080808)' }}>
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/40 to-transparent" />
                <div className="p-6 space-y-5">
                  <a href="mailto:Info@vizocloud.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff2b2b]/20 transition-colors duration-200">
                      <Mail className="w-4 h-4 text-[#ff2b2b]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[10px] font-display tracking-widest uppercase text-[#ff2b2b] mb-0.5">Email</div>
                      <div className="text-sm text-white font-semibold group-hover:text-[#ff2b2b] transition-colors duration-200">Info@vizocloud.com</div>
                    </div>
                  </a>

                  <div className="h-px bg-white/[0.05]" />

                  <a href="tel:+13073819690" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors duration-200">
                      <Phone className="w-4 h-4 text-violet-400" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[10px] font-display tracking-widest uppercase text-violet-400 mb-0.5">Phone</div>
                      <div className="text-sm text-white font-semibold group-hover:text-violet-400 transition-colors duration-200">+1-307-381-9690</div>
                      <div className="text-[10px] text-gray-600 mt-0.5">Mon – Fri, 9AM – 6PM EST</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability badge */}
              <div className="rounded-2xl border border-white/[0.07] p-5"
                style={{ background: 'linear-gradient(135deg, #0d0d0d, #080808)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">Currently accepting new projects</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Zap,          text: 'Fast delivery' },
                    { icon: CheckCircle2, text: 'Agile process' },
                    { icon: Globe,        text: 'Remote-first' },
                    { icon: Clock,        text: '24h response' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" strokeWidth={1.75} />
                      <span className="text-xs text-gray-500">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule call CTA */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden border border-[#ff2b2b]/20"
                style={{ background: 'linear-gradient(135deg, rgba(255,43,43,0.1) 0%, rgba(255,43,43,0.04) 100%)' }}
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#ff2b2b]/15 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-[#ff2b2b]/15 border border-[#ff2b2b]/30 flex items-center justify-center mb-4">
                    <CalendarDays className="w-4.5 h-4.5 text-[#ff2b2b]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2">Prefer a Quick Call?</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Book a free 30-minute consultation. No pressure — just a conversation about your goals.
                  </p>
                  <a
                    href="tel:+13073819690"
                    className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#ff2b2b] hover:gap-3 transition-all duration-200"
                  >
                    Call +1-307-381-9690
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Contact Us ────────────────────────────────────── */}
      <section className="relative py-16 border-t border-white/[0.05]"
        style={{ background: 'linear-gradient(to bottom, #050505, #030303)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">Why Work With Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap,           title: 'Fast Kickoff',        desc: 'Projects typically begin within 1–2 weeks of scoping.' },
              { icon: CheckCircle2,  title: 'No Lock-in',          desc: 'Flexible contracts with no hidden fees or long commitments.' },
              { icon: Globe,         title: 'Global Team',         desc: 'Engineers across time zones ensure round-the-clock progress.' },
              { icon: MessageCircle, title: 'Transparent Comms',   desc: 'Weekly updates, shared dashboards, and open communication.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/[0.05] group hover:border-[#ff2b2b]/20 transition-all duration-300"
                  style={{ background: '#080808' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff2b2b]/15 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#ff2b2b]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────

const inputCls =
  'w-full px-4 py-3 bg-black/50 border border-white/[0.07] rounded-xl text-sm text-white placeholder-gray-700 focus:border-[#ff2b2b]/40 focus:outline-none focus:bg-black/70 transition-all duration-200';

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-display tracking-wider text-gray-500 uppercase mb-2">
        {label}
        {required && <span className="text-[#ff2b2b] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
