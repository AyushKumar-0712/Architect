'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className={`space-y-6 ${isLoaded ? 'animate-slideRight' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                ✨ Architecture Excellence
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Design Your Future
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance max-w-lg">
                Transforming visions into architectural masterpieces. We blend innovation, elegance, and functionality to create spaces worth billions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-primary/50 text-primary rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur"
              >
                Start a Project
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">50+</p>
                <p className="text-sm text-foreground/60 mt-1">Projects Completed</p>
              </div>
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">20+</p>
                <p className="text-sm text-foreground/60 mt-1">Years Experience</p>
              </div>
              <div className="group">
                <p className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">100%</p>
                <p className="text-sm text-foreground/60 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className={`relative h-[500px] md:h-[600px] ${isLoaded ? 'animate-slideLeft' : 'opacity-0'}`}>
            <div className="relative h-full rounded-3xl overflow-hidden group cursor-pointer">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10 group-hover:from-primary/40 transition-all duration-500" />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 z-10" />
              
              <Image
                src="/hero-building.jpg"
                alt="Luxury Architecture"
                fill
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 z-20 glass-effect rounded-full px-6 py-3 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <p className="font-semibold text-white text-sm">Award Winning</p>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-foreground/50 uppercase tracking-widest">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-primary animate-slideDown"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
