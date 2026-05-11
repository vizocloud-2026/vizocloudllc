import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import logoImg from '../../imports/Frame_19.png';

const services = [
  { name: 'IT Consulting & Strategy', href: '/services#service-01' },
  { name: 'Staff Augmentation',       href: '/services#service-02' },
  { name: 'Web Development',          href: '/services#service-03' },
  { name: 'Cloud Services',           href: '/services#service-04' },
  { name: 'Digital Marketing',        href: '/services#service-05' },
];

const company = [
  { name: 'Home',       path: '/' },
  { name: 'Services',   path: '/services' },
  { name: 'About Us',   path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const contactInfo = [
  { icon: Mail,   label: 'Info@vizocloud.com',                                    href: 'mailto:Info@vizocloud.com' },
  { icon: Phone,  label: '+1-307-381-9690',                                       href: 'tel:+13073819690' },
  { icon: MapPin, label: '8051 N. Tamiami Trail STE E6, Sarasota Florida 34243',  href: '#' },
];

// X (formerly Twitter) brand SVG path
function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.257 5.622 5.907-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-cursor-suspend className="selection-zone relative bg-[#080808] overflow-hidden">
      {/* Top red gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2b2b]/60 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff2b2b]/[0.04] blur-[120px] pointer-events-none" />

      {/* ── CTA Strip ──────────────────────────────────── */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-xs font-display tracking-widest uppercase text-[#ff2b2b] mb-1.5">
                Ready to Get Started?
              </p>
              <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">
                Let's build something great together.
              </h2>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#ff2b2b] text-white font-display font-semibold tracking-wide rounded-xl hover:bg-[#e02020] transition-colors duration-200 text-sm group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Grid ──────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logoImg} alt="Vizo Cloud LLC" className="h-16 w-16" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-xs">
              Expert IT staffing and consulting solutions — empowering businesses with top-tier talent
              and strategic technology guidance since 2018.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-[#ff2b2b]/10 hover:border-[#ff2b2b]/30 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-[#ff2b2b]/10 hover:border-[#ff2b2b]/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-[#ff2b2b]/10 hover:border-[#ff2b2b]/30 transition-all duration-200"
              >
                <XLogo className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.href}
                    className="text-sm text-gray-500 hover:text-[#ff2b2b] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#ff2b2b] transition-all duration-200 group-hover:w-3" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link
                    to={c.path}
                    className="text-sm text-gray-500 hover:text-[#ff2b2b] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#ff2b2b] transition-all duration-200 group-hover:w-3" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="mt-0.5 w-7 h-7 shrink-0 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.07] group-hover:bg-[#ff2b2b]/10 group-hover:border-[#ff2b2b]/25 transition-all duration-200">
                      <Icon className="w-3.5 h-3.5 text-[#ff2b2b]" strokeWidth={1.75} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}

              {/* Office hours badge */}
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-display">Available Mon – Fri, 9AM–6PM PST</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────── */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              © {year} Vizo Cloud LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors duration-200">Privacy Policy</a>
              <span className="text-white/10">·</span>
              <a href="#" className="hover:text-gray-400 transition-colors duration-200">Terms of Service</a>
              <span className="text-white/10">·</span>
              <a href="#" className="hover:text-gray-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
