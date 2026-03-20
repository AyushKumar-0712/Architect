'use client';

import { useState } from 'react';
import { Building2, Home, Palette, Leaf, Hammer, Wind } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Residential Architecture',
    description: 'Creating luxurious living spaces that blend comfort with sophisticated design.',
    icon: <Home size={32} />,
    deliverables: ['Floor Plans', '3D Renderings', 'Execution Support'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Commercial Architecture',
    description: 'Designing modern corporate spaces that inspire innovation and productivity.',
    icon: <Building2 size={32} />,
    deliverables: ['Master Planning', 'Technical Drawings', 'Project Management'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Interior Design',
    description: 'Transforming interiors into functional art pieces with premium materials.',
    icon: <Palette size={32} />,
    deliverables: ['Space Planning', 'Material Selection', 'Installation'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Landscape Design',
    description: 'Creating harmonious outdoor environments that connect with nature.',
    icon: <Leaf size={32} />,
    deliverables: ['Garden Planning', 'Vegetation Design', 'Sustainability'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Renovation & Remodeling',
    description: 'Breathing new life into existing structures with thoughtful upgrades.',
    icon: <Hammer size={32} />,
    deliverables: ['Structural Assessment', 'Redesign', 'Construction'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 6,
    title: 'Sustainable Design',
    description: 'Building environmentally conscious spaces for a better future.',
    icon: <Wind size={32} />,
    deliverables: ['Green Certification', 'Energy Efficiency', 'Material Eco-audit'],
    color: 'from-teal-500 to-green-500',
  },
];

export function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            🎯 Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Services & Solutions
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group h-full animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/5 cursor-pointer">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${service.color}`} />

                {/* Glow effect on hover */}
                {hoveredId === service.id && (
                  <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-primary/20 pointer-events-none" />
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground/60 flex items-center gap-2 group-hover:text-foreground/80 transition-colors"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`mt-6 transform transition-all duration-500 ${
                    hoveredId === service.id ? 'translate-x-2 translate-y-0 opacity-100' : 'translate-x-0 translate-y-2 opacity-0'
                  }`}>
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center animate-slideUp">
          <p className="text-foreground/70 mb-6">
            Interested in learning more about our services?
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            Schedule Consultation
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
