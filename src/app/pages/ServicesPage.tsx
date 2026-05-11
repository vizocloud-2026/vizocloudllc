import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from 'motion/react';
import {
  Code2, Cloud, Cog, Users, Sparkles,
  ArrowRight, CheckCircle2, MessageSquare,
  Lightbulb, Rocket, ShieldCheck, HeartHandshake,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

const services = [
  {
    number: '01',
    icon: Cog,
    tag: 'Consulting',
    title: 'IT Consulting & Strategy',
    description:
      'Strategic technology consulting that aligns your IT roadmap with your business goals — from architecture reviews to full digital transformation.',
    features: [
      'Technology strategy & roadmap planning',
      'Architecture design & infrastructure review',
      'Process optimization & workflow automation',
      'Digital transformation advisory',
    ],
    gradient: 'from-violet-500/10 via-transparent',
    accent: '#8b5cf6',
  },
  {
    number: '02',
    icon: Users,
    tag: 'Staffing',
    title: 'Staff Augmentation',
    description:
      'Rapidly scale your engineering team with pre-vetted IT professionals who integrate into your workflow from day one — no ramp-up friction.',
    features: [
      'On-demand senior & mid-level engineers',
      'Seamless team integration & onboarding',
      'Flexible engagement models (short & long term)',
      'Skill-matched talent across all tech stacks',
    ],
    gradient: 'from-blue-500/10 via-transparent',
    accent: '#3b82f6',
  },
  {
    number: '03',
    icon: Code2,
    tag: 'Development',
    title: 'Web Development',
    description:
      'End-to-end web development — from pixel-perfect frontends to robust backends — built for performance, scalability, and long-term maintainability.',
    features: [
      'Full-stack application development',
      'React, Next.js, Node.js & modern frameworks',
      'API design, integration & microservices',
      'Performance optimization & code audits',
    ],
    gradient: 'from-emerald-500/10 via-transparent',
    accent: '#10b981',
  },
  {
    number: '04',
    icon: Cloud,
    tag: 'Cloud',
    title: 'Cloud Services',
    description:
      'Design, migrate, and manage cloud infrastructure across AWS, Azure, and GCP — built for reliability, security, and cost efficiency.',
    features: [
      'Cloud architecture design & migration',
      'AWS, Azure & Google Cloud expertise',
      'DevOps, CI/CD & infrastructure as code',
      'Cost optimization & 24/7 monitoring',
    ],
    gradient: 'from-sky-500/10 via-transparent',
    accent: '#0ea5e9',
  },
  {
    number: '05',
    icon: Sparkles,
    tag: 'Marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies that grow your brand, drive qualified traffic, and convert visitors into loyal customers.',
    features: [
      'SEO & content marketing strategy',
      'Paid media & performance campaigns',
      'Social media management & growth',
      'Analytics, reporting & conversion optimization',
    ],
    gradient: 'from-orange-500/10 via-transparent',
    accent: '#f97316',
  },
];

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    desc: 'We listen, ask the right questions, and map your challenges to outcomes.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    desc: 'We craft a tailored plan aligned with your goals, timeline, and budget.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    desc: 'Our expert team delivers with precision, speed, and full transparency.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Support',
    desc: 'We stay with you post-delivery — iterating, scaling, and optimizing.',
  },
];

function AnimatedStat({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1400, bounce: 0 });
  const isInView = useInView(wrapRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (isInView) motionVal.set(num);
  }, [isInView, motionVal, num]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (spanRef.current) spanRef.current.textContent = Math.floor(v) + suffix;
    });
  }, [spring, suffix]);

  return (
    <div ref={wrapRef} className="flex-1 min-w-[120px] bg-[#111] px-6 py-5 text-center">
      <div className="font-display font-bold text-2xl text-white mb-0.5">
        <span ref={spanRef}>0{suffix}</span>
      </div>
      <div className="text-xs text-gray-500 tracking-wide">{label}</div>
    </div>
  );
}

export function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const location = useLocation();

  // Open and scroll to the service matching the URL hash (e.g. #service-02)
  useEffect(() => {
    const hash = location.hash; // e.g. "#service-02"
    if (!hash.startsWith('#service-')) return;

    const number = hash.replace('#service-', ''); // e.g. "02"
    const idx = services.findIndex((s) => s.number === number);
    if (idx === -1) return;

    setActiveIndex(idx);

    // Scroll after a short delay so the accordion has time to open
    const timer = setTimeout(() => {
      const el = document.getElementById(`service-${number}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff2b2b]/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2b2b] animate-pulse" />
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display font-bold tracking-tight leading-[1.05] mb-7"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            Comprehensive
            <br />
            <span className="relative inline-block text-[#ff2b2b]">
              Technology
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 6 Q75 1 150 5 Q225 9 300 4"
                  stroke="#ff2b2b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
                />
              </svg>
            </span>
            {' '}Solutions
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          >
            Expert IT staffing and consulting to empower your business with top-tier talent,
            strategic guidance, and innovative digital solutions — tailored to scale with you.
          </motion.p>

          {/* Stats row — numbers count up on scroll into view */}
          <motion.div
            className="flex flex-wrap gap-px overflow-hidden rounded-xl border border-white/[0.07]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          >
            <AnimatedStat num={5}   suffix="+"  label="Core Services" />
            <AnimatedStat num={500} suffix="+"  label="Projects Delivered" />
            <AnimatedStat num={98}  suffix="%"  label="Client Satisfaction" />
            {/* 24/7 can't animate numerically — display as static */}
            <div className="flex-1 min-w-[120px] bg-[#111] px-6 py-5 text-center">
              <div className="font-display font-bold text-2xl text-white mb-0.5">24/7</div>
              <div className="text-xs text-gray-500 tracking-wide">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services — Expandable Rows ─────────────────────────── */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-white/[0.07]" />
            <span className="text-xs font-display tracking-widest uppercase text-gray-600">
              What we do
            </span>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="divide-y divide-white/[0.06]">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={service.number}
                  id={`service-${service.number}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                  style={{ scrollMarginTop: '80px' }}
                >
                  {/* Row header — always visible */}
                  <button
                    className="w-full text-left py-7 group"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-6">
                      {/* Number */}
                      <span
                        className="font-display font-bold text-4xl md:text-5xl w-16 shrink-0 leading-none transition-colors duration-300"
                        style={{ color: isOpen ? service.accent : 'rgba(255,255,255,0.08)' }}
                      >
                        {service.number}
                      </span>

                      {/* Left accent bar */}
                      <div
                        className="hidden md:block w-[3px] h-10 rounded-full shrink-0 transition-all duration-300"
                        style={{
                          background: service.accent,
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
                        }}
                      />

                      {/* Title + tag */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h2
                            className="font-display font-bold tracking-tight transition-colors duration-200"
                            style={{
                              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                              color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.75)',
                            }}
                          >
                            {service.title}
                          </h2>
                          <span
                            className="hidden sm:inline-block text-[10px] font-display tracking-widest uppercase px-2 py-0.5 rounded-full border transition-all duration-300"
                            style={{
                              color: isOpen ? service.accent : 'rgba(255,255,255,0.3)',
                              borderColor: isOpen ? `${service.accent}40` : 'rgba(255,255,255,0.08)',
                              background: isOpen ? `${service.accent}12` : 'transparent',
                            }}
                          >
                            {service.tag}
                          </span>
                        </div>
                        {!isOpen && (
                          <p className="text-sm text-gray-600 line-clamp-1 hidden md:block">
                            {service.description}
                          </p>
                        )}
                      </div>

                      {/* Icon + toggle */}
                      <div className="flex items-center gap-4 shrink-0">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                          style={{
                            background: isOpen ? `${service.accent}18` : '#1a1a1a',
                            borderColor: isOpen ? `${service.accent}40` : 'rgba(255,255,255,0.07)',
                          }}
                        >
                          <Icon
                            className="w-5 h-5 transition-colors duration-300"
                            strokeWidth={1.75}
                            style={{ color: isOpen ? service.accent : 'rgba(255,255,255,0.4)' }}
                          />
                        </div>

                        {/* Plus / Minus toggle */}
                        <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                          <div className="relative w-4 h-4">
                            <span
                              className="absolute top-1/2 left-0 w-full h-[1.5px] rounded-full -translate-y-1/2 transition-all duration-300"
                              style={{ background: isOpen ? service.accent : 'rgba(255,255,255,0.3)' }}
                            />
                            <span
                              className="absolute top-0 left-1/2 h-full w-[1.5px] rounded-full -translate-x-1/2 transition-all duration-300 origin-center"
                              style={{
                                background: isOpen ? service.accent : 'rgba(255,255,255,0.3)',
                                transform: `translateX(-50%) scaleY(${isOpen ? 0 : 1})`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pb-9 ml-0 md:ml-[88px] rounded-2xl p-6 mb-4"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent}08 0%, transparent 60%)`,
                            border: `1px solid ${service.accent}15`,
                          }}
                        >
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Description */}
                            <div>
                              <p className="text-gray-300 leading-relaxed mb-6 text-[0.95rem]">
                                {service.description}
                              </p>
                              <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-sm font-display font-semibold tracking-wide group/link"
                                style={{ color: service.accent }}
                              >
                                Get started
                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                              </Link>
                            </div>

                            {/* Feature list */}
                            <ul className="space-y-3">
                              {service.features.map((feat) => (
                                <li key={feat} className="flex items-start gap-3">
                                  <CheckCircle2
                                    className="w-4 h-4 mt-0.5 shrink-0"
                                    strokeWidth={2}
                                    style={{ color: service.accent }}
                                  />
                                  <span className="text-sm text-gray-400 leading-relaxed">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Section ────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#080808] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              How We Work
            </span>
            <h2 className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Our Proven Process
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              A consistent four-step framework we apply to every engagement — ensuring quality, speed, and outcomes every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative group"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.42, delay: index * 0.09, ease: 'easeOut' }}
                >
                  {/* Arrow connector between cards (desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-[#0d0d0d] border border-white/[0.07]">
                      <ArrowRight className="w-4 h-4 text-[#ff2b2b]/50" />
                    </div>
                  )}

                  {/* Card — uniform height via flex column */}
                  <div className="relative flex flex-col h-full min-h-[280px] bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#ff2b2b]/20 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,43,43,0.05)]">

                    {/* Top red gradient bar */}
                    <div className="h-[2px] bg-gradient-to-r from-[#ff2b2b] via-[#ff2b2b]/60 to-transparent shrink-0" />

                    <div className="flex flex-col flex-1 p-6">
                      {/* Icon + step label row */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff2b2b]/15 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-[#ff2b2b]" strokeWidth={1.75} />
                        </div>
                        <span className="font-display font-black text-[64px] leading-none text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors duration-300 -mt-2">
                          {step.number}
                        </span>
                      </div>

                      {/* Step pill */}
                      <span className="text-[10px] font-display tracking-widest uppercase text-[#ff2b2b]/50 mb-2.5 block">
                        Step {step.number} of {processSteps.length}
                      </span>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg mb-3 tracking-wide leading-snug">
                        {step.title}
                      </h3>

                      {/* Description — flex-1 pushes progress to bottom */}
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                        {step.desc}
                      </p>

                      {/* Progress bar — same on all cards, fills to current step */}
                      <div className="flex gap-1.5 mt-6 pt-4 border-t border-white/[0.05]">
                        {processSteps.map((_, i) => (
                          <div
                            key={i}
                            className="h-[3px] flex-1 rounded-full transition-colors duration-300"
                            style={{ background: i <= index ? '#ff2b2b' : 'rgba(255,255,255,0.07)' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff2b2b]/6 blur-[120px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Bordered card */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c0c0c] overflow-hidden">
              {/* Top glow line inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/35 to-transparent" />

              {/* Centered full-width content */}
              <div className="p-10 lg:p-14 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-8">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Let's Work Together
                </div>

                <h2
                  className="font-display font-bold tracking-tight mb-5 leading-[1.1]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  Ready to Transform<br />
                  <span className="text-[#ff2b2b]">Your Business?</span>
                </h2>

                <p className="text-gray-400 text-[0.95rem] leading-relaxed mb-10 max-w-xl mx-auto">
                  Let's discuss how our technology solutions can accelerate your digital transformation. No commitments — just a conversation with our experts.
                </p>

                {/* Trust bullets — 3 column */}
                <div className="grid sm:grid-cols-3 gap-3 mb-10 text-left max-w-3xl mx-auto">
                  {[
                    'Free initial consultation — no strings attached',
                    'Dedicated account manager from day one',
                    'Flexible engagement — short or long term',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white/[0.025] border border-white/[0.06] rounded-xl px-4 py-3.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2b2b] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#ff2b2b] text-white font-display font-semibold tracking-wide rounded-xl hover:bg-[#e02020] transition-colors duration-200 text-sm group/btn"
                  >
                    Get Started Today
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white/60 font-display font-semibold tracking-wide rounded-xl hover:border-white/20 hover:text-white transition-all duration-200 text-sm"
                  >
                    Learn About Us
                  </Link>
                </div>

                {/* Bottom mini stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.06] max-w-sm mx-auto">
                  {[
                    { v: '500+', l: 'Projects' },
                    { v: '98%', l: 'Satisfaction' },
                    { v: '24/7', l: 'Support' },
                  ].map(({ v, l }) => (
                    <div key={l} className="text-center">
                      <div className="font-display font-bold text-xl text-[#ff2b2b] mb-0.5">{v}</div>
                      <div className="text-[10px] text-gray-600 tracking-wider uppercase">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
