'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProvider } from '@/components/ScrollProvider';

export default function Home() {
  return (
    <ScrollProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ScrollProvider>
  );
}
