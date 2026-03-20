'use client';

import Image from 'next/image';
import { Stats } from './Stats';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 animate-slideRight">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
                🏛️ About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Visionary Architecture for Tomorrow
              </h2>
            </div>

            <div className="space-y-4 text-foreground/70">
              <p>
                Founded in 2004, ARCHITECH STUDIO has been at the forefront of architectural innovation,
                designing structures that define skylines and transform communities. Our mission is to create
                spaces that inspire, function flawlessly, and stand the test of time.
              </p>
              <p>
                With over 20 years of experience, we've completed 50+ projects across residential, commercial,
                and landscape design sectors. Each project represents our commitment to excellence, sustainability,
                and client satisfaction.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="font-semibold text-foreground mb-3">Our Vision</p>
              <p className="text-foreground/70">
                To be the world's most trusted architecture studio, known for creating innovative, 
                sustainable, and beautiful spaces that enhance human experience.
              </p>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="space-y-6 animate-slideLeft">
            {/* Large image */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10 group-hover:from-primary/50 transition-all duration-500" />
              <Image
                src="/project-1.jpg"
                alt="Studio Work"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all z-10" />
            </div>

            {/* Bottom two images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent z-10 group-hover:from-accent/50 transition-all duration-500" />
                <Image
                  src="/project-2.jpg"
                  alt="Design Process"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:border-accent/60 transition-all z-10" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10 group-hover:from-primary/50 transition-all duration-500" />
                <Image
                  src="/project-3.jpg"
                  alt="Final Result"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <Stats />
    </section>
  );
}
