import { motion } from 'motion/react';
import { Code2, Cog, Users, Sparkles, Cloud, ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { SpiceorbParticles } from '../components/SpiceorbParticles';
import { TechStack } from '../components/TechStack';
import { WhyChooseUs } from '../components/WhyChooseUs';

const services = [
  {
    icon: Cog,
    number: '01',
    title: 'IT Consulting & Strategy',
    description: 'Strategic technology consulting to optimize your infrastructure and accelerate digital transformation initiatives.',
    tag: 'Consulting',
  },
  {
    icon: Users,
    number: '02',
    title: 'Staff Augmentation',
    description: 'Skilled IT professionals who integrate seamlessly with your team to accelerate delivery and fill critical skill gaps.',
    tag: 'Staffing',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks, clean architecture, and best engineering practices.',
    tag: 'Development',
  },
  {
    icon: Cloud,
    number: '04',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure, seamless migration, and managed services across AWS, Azure, and Google Cloud.',
    tag: 'Cloud',
  },
  {
    icon: Sparkles,
    number: '05',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your brand, boost conversions, and reach your target audience.',
    tag: 'Marketing',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SpiceorbParticles />
        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.h1
            className="font-display font-bold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            EMPOWERING YOUR
            <br />
            <span className="text-[#ff2b2b]">DIGITAL FUTURE</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            Expert IT Staffing & Consulting Solutions
          </motion.p>
        </div>
      </section>

      {/* Trusted By / Clients */}
      <ClientsMarquee />

      {/* Staffing Solutions */}
      <section className="relative py-24 md:py-32 bg-[#020202] overflow-hidden">
        {/* Subtle section accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        {/* Deep vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #000 100%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-5">
              What We Offer
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2
                className="font-display font-bold tracking-tight relative z-10"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#ffffff' }}
              >
                Our Staffing Solutions
              </h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-[#ff2b2b] font-display font-semibold tracking-wide group/link shrink-0"
              >
                View all services
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
            <p className="text-base text-gray-500 max-w-xl mt-3">
              Expert IT staffing and consulting services tailored precisely to your business needs
            </p>
          </motion.div>

          {/* Cards — 3 top + 2 bottom bento layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={service.number} service={service} index={index + 3} wide />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
}

function ServiceCard({
  service,
  index,
  wide = false,
}: {
  service: (typeof services)[0];
  index: number;
  wide?: boolean;
}) {
  const Icon = service.icon;
  const navigate = useNavigate();
  const href = `/services#service-${service.number}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="service-card group relative bg-[#0a0a0a] border border-white/[0.07] rounded-2xl p-7 overflow-hidden cursor-pointer"
      onClick={() => navigate(href)}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-[#ff2b2b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-6">
        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/[0.08] transition-all duration-300 group-hover:bg-[#ff2b2b]/10 group-hover:border-[#ff2b2b]/30">
          <Icon className="w-5 h-5 text-[#ff2b2b]" strokeWidth={1.75} />
        </div>
        <span className="font-display font-bold text-3xl text-white/[0.06] select-none leading-none transition-colors duration-300 group-hover:text-[#ff2b2b]/20">
          {service.number}
        </span>
      </div>

      {/* Tag */}
      <div className="mb-3">
        <span className="inline-block text-[10px] font-display tracking-widest uppercase text-[#ff2b2b]/70 bg-[#ff2b2b]/8 px-2 py-0.5 rounded-full border border-[#ff2b2b]/15">
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-[1.05rem] text-white mb-3 tracking-wide leading-snug">
        {service.title}
      </h3>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-4 transition-colors duration-300 group-hover:bg-[#ff2b2b]/20" />

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed transition-colors duration-200 group-hover:text-gray-400">
        {service.description}
      </p>

      {/* Footer link */}
      <Link
        to={href}
        onClick={(e) => e.stopPropagation()}
        className="mt-5 inline-flex items-center gap-1.5 text-[#ff2b2b]/0 text-xs font-display font-semibold tracking-wide transition-all duration-300 group-hover:text-[#ff2b2b]/80"
      >
        Learn more
        <ChevronRight className="w-3.5 h-3.5 -translate-x-1 transition-transform duration-300 group-hover:translate-x-0" />
      </Link>

      {/* Corner glow */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#ff2b2b]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {wide && <span className="hidden" />}
    </motion.div>
  );
}

const clients = [
  { name: 'Pearson',         domain: 'pearson.com' },
  { name: 'CVS Health',      domain: 'cvshealth.com' },
  { name: 'JPMC',            domain: 'jpmorgan.com' },
  { name: 'Bayer',           domain: 'bayer.com' },
  { name: 'Cloudflare',      domain: 'cloudflare.com' },
  { name: 'Montreal Bank',   domain: 'bmo.com' },
  { name: 'Brillio',         domain: 'brillio.com' },
  { name: 'Walmart',         domain: 'walmart.com' },
  { name: 'Albertsons',      domain: 'albertsons.com' },
  { name: 'Cisco',           domain: 'cisco.com' },
  { name: 'Bank of America', domain: 'bankofamerica.com' },
  { name: 'Capital One',     domain: 'capitalone.com' },
];

function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-20 bg-[#060606] border-y border-white/[0.05] overflow-hidden">
      {/* Soft red ambient behind the logos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-[#ff2b2b]/[0.05] blur-[90px] rounded-full pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-full text-[#ff2b2b] text-xs font-display tracking-widest uppercase mb-3">
          Our Clients
        </span>
        <h2 className="font-display font-bold tracking-tight text-2xl md:text-3xl">
          Trusted by Industry Leaders
        </h2>
      </motion.div>

      {/* Ticker */}
      <div className="flex overflow-hidden">
        <div className="flex items-end gap-14 clients-ticker">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 shrink-0 group cursor-default"
            >
              {/* Logo — white circle container + multiply removes any white favicon bg */}
              <div className="relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(255,43,43,0.35)] transition-all duration-300">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}
                    alt={client.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Name */}
              <span className="text-[10px] font-display font-bold tracking-[0.2em] uppercase text-gray-600 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {client.name}
              </span>
              {/* Underline accent */}
              <span className="block h-px w-0 group-hover:w-full bg-[#ff2b2b] transition-all duration-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-ticker {
          animation: clients-scroll 36s linear infinite;
          width: max-content;
        }
        .clients-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
