import React from 'react';
import { timeline } from '../data/mock';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Nonna Maria in her Naples kitchen"
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&q=80"
                alt="Chef Giuseppe"
                className="absolute -bottom-8 -right-4 lg:-right-12 w-40 lg:w-60 rounded-lg shadow-xl border-[5px] border-[#F5E6D3]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            <p className="text-[#8B1538] text-sm font-bold tracking-[3px] uppercase mb-3">
              OUR STORY
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-semibold text-[#2C2C2C] mb-4">
              From Naples to Barcelona
            </h2>
            <div className="w-[60px] h-[3px] bg-[#DAA520] mb-8" />
            
            <div className="space-y-6 text-[#2C2C2C] leading-relaxed">
              <p>
                In 1952, Nonna Maria opened a small trattoria in the heart of Naples, 
                near the historic Spaccanapoli street. Her kitchen became legendary 
                for its authentic Neapolitan pizza and handmade pasta, made with 
                recipes passed down from her grandmother.
              </p>
              <p>
                In 2015, her grandson Giuseppe brought these treasured family recipes 
                to Barcelona, opening Bella Napoli in Sant Adrià de Besòs. Giuseppe 
                trained for 10 years in Naples, mastering the art of pizza-making and 
                traditional Southern Italian cuisine.
              </p>
              <p>
                Every dish we serve honors Nonna Maria's legacy. From our wood-fired 
                oven (built by the same Neapolitan artisans who've crafted ovens for 
                generations) to our imported San Marzano tomatoes and fior di latte 
                mozzarella, we maintain the authentic taste of Naples.
              </p>
              <p>
                Today, our family restaurant combines the warmth of Italian hospitality 
                with the vibrant energy of Barcelona. We're proud to share our heritage 
                with you, one plate at a time.
              </p>
            </div>

            <button className="btn-primary mt-10">
              Meet Our Team
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 lg:mt-32">
          <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-semibold text-[#2C2C2C] text-center mb-12">
            Our Journey
          </h3>
          <div className="hidden md:block">
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item px-4">
                  <div className="pt-12 pb-4">
                    <span className="block text-[#8B1538] font-bold text-xl mb-1">
                      {item.year}
                    </span>
                    <span className="text-[#5C4033] text-sm leading-snug">
                      {item.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full bg-[#8B1538] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-[#2C2C2C] font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
