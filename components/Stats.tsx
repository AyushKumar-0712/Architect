'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  duration?: number;
}

interface StatsProps {
  stats?: StatItem[];
}

export function Stats({ stats }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const defaultStats: StatItem[] = [
    {
      label: 'Happy Clients Worldwide',
      value: '500',
      suffix: '+',
      duration: 2000,
    },
    {
      label: 'Satisfaction Rate',
      value: '98',
      suffix: '%',
      duration: 2000,
    },
    {
      label: 'Average Rating',
      value: '4.9',
      suffix: '/5',
      duration: 2000,
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background via-primary/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {displayStats.map((stat, index) => (
            <StatCounter
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps extends StatItem {
  isVisible: boolean;
  delay: number;
}

function StatCounter({
  label,
  value,
  suffix = '',
  duration = 2000,
  isVisible,
  delay,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const countRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isVisible) return;

    const numValue = parseFloat(value);
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        countRef.current = setTimeout(animate, 16);
        return;
      }

      if (now >= endTime) {
        setDisplayValue(value);
        return;
      }

      const progress = (now - startTime) / duration;
      const currentValue = numValue * progress;
      
      // Format the display value based on the original value format
      let displayString = '';
      if (value.includes('.')) {
        displayString = currentValue.toFixed(1);
      } else {
        displayString = Math.floor(currentValue).toString();
      }
      
      setDisplayValue(displayString);
      countRef.current = setTimeout(animate, 16);
    };

    countRef.current = setTimeout(animate, 16);

    return () => {
      if (countRef.current) clearTimeout(countRef.current);
    };
  }, [isVisible, value, duration, delay]);

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <h3 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradientShift">
            {displayValue}
            {suffix}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium text-center">
        {label}
      </p>
    </div>
  );
}
