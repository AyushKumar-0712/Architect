'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Quantum Tower',
    location: 'Dubai, UAE',
    category: 'Commercial',
    image: '/project-1.jpg',
    description: 'Ultra-modern mixed-use development',
    year: 2024,
  },
  {
    id: 2,
    title: 'Serenity Residence',
    location: 'Singapore',
    category: 'Residential',
    image: '/project-2.jpg',
    description: 'Luxury residential complex',
    year: 2024,
  },
  {
    id: 3,
    title: 'Zen Interior',
    location: 'Tokyo, Japan',
    category: 'Interior Design',
    image: '/project-3.jpg',
    description: 'High-end residential interiors',
    year: 2023,
  },
  {
    id: 4,
    title: 'Urban Harmony',
    location: 'Singapore',
    category: 'Landscape',
    image: '/project-4.jpg',
    description: 'Sustainable public space design',
    year: 2023,
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            ✨ Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Masterpieces Built
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-muted">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-black/80 transition-all duration-500" />

                {/* Border glow */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                  hoveredId === project.id ? 'border-accent shadow-2xl shadow-accent/30' : 'border-primary/30'
                }`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <span className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </span>
                    <div className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-500 ${
                      hoveredId === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}>
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm">{project.location} • {project.year}</p>
                    </div>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 md:mt-24 animate-slideUp">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary/50 rounded-full font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            View All Projects
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
