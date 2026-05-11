import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import {
  Target, TrendingUp, Lightbulb, Shield, Heart, Rocket,
  ArrowRight, CheckCircle2, MapPin, Calendar,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

// ── Data ─────────────────────────────────────────────────────────

const values = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative problem-solving to stay ahead — so our clients always lead, never follow.',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Quality',
    description: 'Every line of code, every architecture decision, every client touchpoint is held to the highest standard of excellence.',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Client-First',
    description: 'Your success is our success. We build lasting partnerships grounded in transparency, responsiveness, and real results.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Agility',
    description: 'Fast-moving teams that adapt quickly to shifting requirements, market conditions, and emerging technologies.',
  },
];

const timeline = [
  {
    year: '2018',
    side: 'left',
    title: 'Foundation',
    description: 'Vizo Cloud LLC was founded with a mission to democratize enterprise-grade technology solutions for businesses of all sizes.',
  },
  {
    year: '2019',
    side: 'right',
    title: 'First Major Client',
    description: 'Secured our first Fortune 500 engagement — a cloud migration project delivered ahead of schedule and under budget.',
  },
  {
    year: '2021',
    side: 'left',
    title: 'Service Expansion',
    description: 'Expanded into AI/ML consulting and staff augmentation, growing the team to 25 engineers across three time zones.',
  },
  {
    year: '2023',
    side: 'right',
    title: 'Industry Recognition',
    description: 'Named a top cloud solutions provider, now serving clients across 15+ countries with a 98% client satisfaction rate.',
  },
  {
    year: '2025',
    side: 'left',
    title: 'Innovation Leader',
    description: 'Launched our proprietary AI delivery platform and established thought leadership through industry conferences and publications.',
  },
  {
    year: '2026',
    side: 'right',
    title: 'Global Presence',
    description: 'Operating globally with 50+ team members and 500+ successful projects — and still growing every quarter.',
  },
];

const team = [
  { name: 'Alex Johnson', role: 'CEO & Founder', initials: 'AJ', color: '#ff2b2b' },
  { name: 'Sarah Chen', role: 'Chief Technology Officer', initials: 'SC', color: '#8b5cf6' },
  { name: 'Michael Davis', role: 'Head of Engineering', initials: 'MD', color: '#3b82f6' },
  { name: 'Emily Rodriguez', role: 'Cloud Architect', initials: 'ER', color: '#10b981' },
  { name: 'James Wilson', role: 'Lead Developer', initials: 'JW', color: '#f97316' },
  { name: 'Priya Patel', role: 'Marketing Lead', initials: 'PP', color: '#0ea5e9' },
];

const stats = [
  { value: 15, suffix: '+', label: 'Years Combined Experience' },
  { value: 50, suffix: '+', label: 'Expert Team Members' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

// ── Helpers ───────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// ── Page ──────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff2b2b]/7 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2b2b] animate-pulse" />
                  About Vizo Cloud
                </span>
              </motion.div>

              <motion.h1
                className="font-display font-bold tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                Building the{' '}
                <span className="text-[#ff2b2b]">Future</span>
                <br />
                of Technology
              </motion.h1>

              <motion.p
                className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              >
                We're a team of passionate engineers, designers, and strategists committed to delivering
                exceptional technology solutions that drive real, measurable business value.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2b2b] text-white font-display font-semibold tracking-wide rounded-xl hover:bg-[#e02020] transition-colors duration-200 text-sm group"
                >
                  Work with us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/60 font-display font-semibold tracking-wide rounded-xl hover:border-white/20 hover:text-white transition-all duration-200 text-sm"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right: stat cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-[#0e0e0e] border border-white/[0.07] rounded-2xl p-6 flex flex-col"
                >
                  <div className="font-display font-bold text-4xl text-[#ff2b2b] mb-1 leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 leading-snug mt-2">{stat.label}</div>
                  <div className="mt-4 h-[2px] bg-gradient-to-r from-[#ff2b2b]/50 to-transparent rounded-full" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#070707] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              Who We Are
            </span>
            <h2 className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Our Purpose & Direction
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Target,
                accent: '#ff2b2b',
                label: 'Mission',
                title: 'Empower Every Business',
                body: 'To empower businesses with innovative technology solutions that transform operations, enhance efficiency, and drive sustainable growth. We believe enterprise-grade technology should be accessible to organizations of all sizes — not just the Fortune 500.',
                bullets: ['Accessible enterprise technology', 'Sustainable & scalable growth', 'Measurable business outcomes'],
              },
              {
                icon: TrendingUp,
                accent: '#8b5cf6',
                label: 'Vision',
                title: 'Lead the Next Wave',
                body: 'To be the global leader in technology innovation — setting new standards for excellence in software development, cloud solutions, and digital transformation. We envision a future where technology seamlessly enables every business to reach its full potential.',
                bullets: ['Global technology leadership', 'Next-generation digital solutions', 'Setting new industry standards'],
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="relative bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-8 overflow-hidden group hover:border-white/12 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                  />

                  {/* Label + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[10px] font-display tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}10` }}
                    >
                      {item.label}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{ background: `${item.accent}10`, borderColor: `${item.accent}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.accent }} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.body}</p>

                  <ul className="space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: item.accent }} strokeWidth={2} />
                        <span className="text-sm text-gray-400">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              Core Values
            </span>
            <h2 className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, index) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.number}
                  className="relative group bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-6 flex flex-col min-h-[240px] overflow-hidden hover:border-[#ff2b2b]/18 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.42, delay: index * 0.08, ease: 'easeOut' }}
                >
                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff2b2b] via-[#ff2b2b]/40 to-transparent" />

                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-auto">
                    <div className="w-11 h-11 rounded-xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff2b2b]/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#ff2b2b]" strokeWidth={1.75} />
                    </div>
                    <span className="font-display font-black text-[64px] leading-none text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors duration-300 -mt-2">
                      {v.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display font-bold text-lg mb-2.5 tracking-wide">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#070707] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              Our Journey
            </span>
            <h2 className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Milestones That Made Us
            </h2>
          </motion.div>

          {/* Centered vertical timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2b2b]/40 via-[#ff2b2b]/20 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    item.side === 'right' ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: 'easeOut' }}
                >
                  {/* Card */}
                  <div className={`bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-6 hover:border-[#ff2b2b]/18 transition-all duration-300 ${
                    item.side === 'right' ? 'md:text-right' : ''
                  }`}>
                    <div className={`flex items-center gap-3 mb-3 ${item.side === 'right' ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-display tracking-widest uppercase text-[#ff2b2b]/70">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#ff2b2b] items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff2b2b]" />
                  </div>

                  {/* Spacer for alternating side */}
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Members ──────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              The Team
            </span>
            <h2 className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              The People Behind It All
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              A diverse team of engineers, architects, and strategists united by one goal: your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-5 text-center flex flex-col items-center hover:border-white/12 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${member.color}15`,
                    borderColor: `${member.color}30`,
                  }}
                >
                  <span
                    className="font-display font-bold text-base leading-none"
                    style={{ color: member.color }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-sm mb-1 tracking-wide leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] text-gray-600 leading-snug">{member.role}</p>

                {/* Bottom accent */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-400"
                  style={{ background: member.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="relative py-20 bg-[#070707] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#ff2b2b]/6 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#ff2b2b]" />
              <span className="text-sm text-gray-500">United States · Remote-first · Global reach</span>
            </div>
            <h2
              className="font-display font-bold tracking-tight mb-4 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Want to Join the Team<br />or Start a Project?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              We're always looking for exceptional talent and exciting new clients. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#ff2b2b] text-white font-display font-semibold tracking-wide rounded-xl hover:bg-[#e02020] transition-colors duration-200 text-sm group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white/60 font-display font-semibold tracking-wide rounded-xl hover:border-white/20 hover:text-white transition-all duration-200 text-sm"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
