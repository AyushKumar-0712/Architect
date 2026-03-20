'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  project: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Anderson',
    project: 'Quantum Tower Project',
    rating: 5,
    text: 'ARCHITECH Studio transformed our vision into reality. Their attention to detail and innovative approach resulted in a masterpiece.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'James Chen',
    project: 'Serenity Residence',
    rating: 5,
    text: 'Outstanding professionalism and creativity. They delivered beyond expectations with exceptional quality and timely execution.',
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    project: 'Urban Harmony Project',
    rating: 5,
    text: 'Working with ARCHITECH was a game-changer. Their sustainable approach and design excellence set new industry standards.',
    avatar: '👩‍🎨',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    project: 'Zen Interior Design',
    rating: 5,
    text: 'Exceptional team with remarkable vision. They created spaces that are not just beautiful but also highly functional.',
    avatar: '👨‍🏫',
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            💬 Client Voices
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            What Clients Say
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:bg-white/5 hover:shadow-lg hover:shadow-primary/10">
                {/* Stars */}
                <div className="flex gap-1.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
