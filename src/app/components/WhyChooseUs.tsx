import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Zap, TrendingUp, Shield, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed and efficiency at every level.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Infrastructure designed to grow with your business, from startup to enterprise.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Bank-grade security measures and compliance with industry-leading standards.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Seasoned engineers with deep knowledge across modern tech stacks and architectures.',
  },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const isInView = useInView(wrapRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest) + suffix;
    });
  }, [springValue, suffix]);

  return (
    <div ref={wrapRef}>
      <span ref={ref}>0{suffix}</span>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
            Built On Excellence
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            We don't just write code — we engineer solutions that drive real business value
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
                className="group bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-7 hover:border-[#ff2b2b]/20 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#ff2b2b]/10 border border-[#ff2b2b]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff2b2b]/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#ff2b2b]" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          className="pt-12 border-t border-white/[0.07]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: '+', label: 'Projects Delivered' },
              { value: 98,  suffix: '%', label: 'Client Satisfaction' },
              { value: 50,  suffix: '+', label: 'Team Members' },
              { value: 24,  suffix: '/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
              >
                <div className="font-display font-bold text-4xl md:text-5xl text-[#ff2b2b] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
