'use client';

import { useState } from 'react';
import { CheckCircle, Lightbulb, Pencil, Hammer, Eye } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Understanding your vision and requirements',
    icon: <Lightbulb size={28} />,
    details: ['Site analysis', 'Client briefing', 'Project scope', 'Budget planning'],
  },
  {
    id: 2,
    title: 'Concept Design',
    description: 'Creating initial design concepts',
    icon: <Pencil size={28} />,
    details: ['Sketches & concepts', 'Design exploration', 'Client feedback', 'Refinement'],
  },
  {
    id: 3,
    title: 'Design Development',
    description: 'Detailed technical drawings and specifications',
    icon: <Eye size={28} />,
    details: ['3D renderings', 'Technical plans', 'Material selection', 'Engineering'],
  },
  {
    id: 4,
    title: 'Execution',
    description: 'Construction management and quality control',
    icon: <Hammer size={28} />,
    details: ['Construction oversight', 'Quality assurance', 'Timeline management', 'Final delivery'],
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            🎯 Our Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            From Vision to Reality
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Process Timeline */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="relative group animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-full p-6 rounded-xl transition-all duration-500 transform ${
                activeStep === step.id
                  ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary scale-105 shadow-lg shadow-primary/20'
                  : 'bg-white/5 border border-border/50 hover:border-primary/50 hover:bg-white/10'
              }`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-all ${
                  activeStep === step.id
                    ? 'bg-primary text-white scale-110'
                    : 'bg-primary/20 text-primary group-hover:bg-primary/30'
                }`}>
                  {step.icon}
                </div>
                
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="text-xs text-foreground/60 mt-2">{step.description}</p>

                {/* Step number */}
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  activeStep === step.id
                    ? 'bg-accent text-white'
                    : 'bg-muted text-foreground/50'
                }`}>
                  {step.id}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-1/2 -right-2 w-2 h-0.5 -translate-y-1/2 transition-all ${
                  activeStep >= step.id + 1 ? 'bg-primary' : 'bg-muted'
                }`} style={{ width: 'calc(100% + 16px)' }} />
              )}
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="mt-12 md:mt-16 animate-slideUp">
          {steps.map((step) => (
            activeStep === step.id && (
              <div key={step.id} className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-foreground/70 mt-1">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-border/50">
                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24 animate-slideUp">
          <p className="text-foreground/70 mb-6">Ready to start your architectural journey?</p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            Get Started Today
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
