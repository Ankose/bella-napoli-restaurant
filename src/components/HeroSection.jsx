import React from 'react';
import { ChevronDown } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

export const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80')`
      }}
    >
      <div className="hero-overlay" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Pre-headline */}
        <p className="text-[#DAA520] text-sm font-bold tracking-[3px] uppercase mb-4 animate-fadeInUp">
          EST. 2015
        </p>

        {/* Main Headline */}
        <h1 
          className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFFEF0] mb-6 animate-fadeInUp"
          style={{ 
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            animationDelay: '0.1s',
            animationFillMode: 'both'
          }}
        >
          {restaurantInfo.name}
        </h1>

        {/* Tagline */}
        <p 
          className="text-[#F5E6D3] text-lg sm:text-xl lg:text-2xl font-light mb-8 animate-fadeInUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          {restaurantInfo.tagline}
        </p>

        {/* Decorative Divider */}
        <div 
          className="flex items-center justify-center gap-4 mb-10 animate-fadeInUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <div className="w-20 h-[2px] bg-[#DAA520]" />
          <svg className="w-6 h-6 text-[#DAA520]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <div className="w-20 h-[2px] bg-[#DAA520]" />
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fadeInUp"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <button
            onClick={() => scrollToSection('reservations')}
            className="btn-primary w-full sm:w-auto"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-secondary w-full sm:w-auto"
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('welcome')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFFEF0] opacity-80 hover:opacity-100 transition-opacity animate-bounce-slow cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
};
