'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full transition-opacity duration-300 ${
        isVisible ? 'opacity-20' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(117, 120, 181, 0.4) 0%, rgba(117, 120, 181, 0) 70%)',
        left: `${mousePosition.x - 192}px`,
        top: `${mousePosition.y - 192}px`,
        filter: 'blur(40px)',
        zIndex: 1,
      }}
    />
  );
}
