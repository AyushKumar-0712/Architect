'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-foreground/5 backdrop-blur-md border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 animate-slideUp">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ARCHI
            </div>
            <p className="text-foreground/60 text-sm">
              Transforming architectural visions into billion-dollar realities.
            </p>
            <div className="flex gap-3 pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2.5 rounded-lg bg-white/5 border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm group inline-flex items-center gap-1"
                  >
                    {link}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {['Residential', 'Commercial', 'Interior Design', 'Landscape', 'Renovation'].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm group inline-flex items-center gap-1"
                  >
                    {service}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/60">
                📧 <span className="text-primary font-medium">hello@architech.com</span>
              </li>
              <li className="text-foreground/60">
                📞 <span className="text-primary font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="text-foreground/60">
                📍 <span className="text-primary font-medium">Singapore, SG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ARCHITECH Studio. All rights reserved.
          </p>

          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 opacity-0 hover:opacity-100 group"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 400 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 400 ? 'auto' : 'none',
        }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7-7m0 0l-7 7m7-7v12"
          />
        </svg>
      </button>
    </footer>
  );
}
