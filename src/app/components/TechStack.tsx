import { motion } from 'motion/react';

const techStack = [
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Dynamic web experiences with modern ECMAScript',
    color: '#F7DF1E',
  },
  {
    name: 'WordPress',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    description: 'Powerful CMS solutions and custom theme development',
    color: '#21759B',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    description: 'Robust backend systems with elegant PHP framework',
    color: '#FF2D20',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Responsive UIs with component-based architecture',
    color: '#61DAFB',
  },
  {
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    description: 'Scalable web applications with Python framework',
    color: '#44B78B',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'High-performance server-side apps and REST APIs',
    color: '#339933',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Semantic markup for modern web applications',
    color: '#E34F26',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    description: 'Cross-platform mobile apps with native performance',
    color: '#54C5F8',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    description: 'SEO-optimized React apps with server-side rendering',
    color: '#e5e5e5',
  },
  {
    name: 'React Native',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Native iOS and Android apps from a single codebase',
    color: '#61DAFB',
  },
];

export function TechStack() {
  return (
    <section className="relative py-24 md:py-32 bg-[#060606] overflow-hidden">
      {/* Static dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(6,6,6,0.85) 100%)',
        }}
      />
      {/* Top/bottom edge fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060606] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
            Technologies
          </span>
          <h2
            className="font-display font-bold tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Our Tech Stack
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional digital solutions
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              className="group relative bg-[#111111] border border-white/[0.07] rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden cursor-default"
            >
              {/* Brand-color radial tint on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 20%, ${tech.color}18 0%, transparent 65%)`,
                }}
              />

              {/* Border highlight on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${tech.color}30`,
                }}
              />

              {/* Logo + glow */}
              <div className="relative mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                {/* Glow behind logo */}
                <div
                  className="absolute inset-[-8px] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-400 pointer-events-none"
                  style={{ background: tech.color }}
                />
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="relative w-14 h-14 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Name */}
              <h3 className="font-display font-semibold text-sm tracking-wide text-white/75 group-hover:text-white transition-colors duration-200 leading-snug">
                {tech.name}
              </h3>

              {/* Description — reveals on hover */}
              <p
                className="text-[11px] text-gray-600 leading-relaxed mt-0 max-h-0 overflow-hidden opacity-0 group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 group-hover:text-gray-400"
              >
                {tech.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: `linear-gradient(to right, transparent, ${tech.color}70, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
