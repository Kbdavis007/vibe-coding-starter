'use client';

import { Button } from '@/components/shared/ui/button';
import { Compass } from 'lucide-react';

export function HeroSection() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    toolsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80 dark:from-black/90 dark:via-black/60 dark:to-black/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Compass Ornament */}
          <div className="flex items-center justify-center">
            <Compass 
              className="w-12 h-12 md:w-16 md:h-16 text-secondary-400 dark:text-secondary-300" 
              strokeWidth={1.5}
            />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider max-w-4xl">
            Land Your Dream Job
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 uppercase tracking-wide font-light">
            Track the path to success
          </p>

          {/* CTA Button */}
          <div className="pt-4 md:pt-6">
            <Button
              onClick={scrollToTools}
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-800 dark:from-primary-950 to-transparent z-15" />
    </section>
  );
}
