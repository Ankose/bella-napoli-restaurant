import React from 'react';
import { UtensilsCrossed, Flame, Leaf } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  UtensilsCrossed,
  Flame,
  Leaf
};

export const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-24 lg:py-32 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B1538] text-sm font-bold tracking-[3px] uppercase mb-3">
            WELCOME
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#2C2C2C] mb-4">
            Benvenuti a Bella Napoli
          </h2>
          <div className="gold-divider" />
          <p className="max-w-3xl mx-auto text-lg text-[#2C2C2C] leading-relaxed">
            Experience the warmth of Southern Italy right here in Barcelona. 
            Our family has been crafting authentic Neapolitan pizza and traditional 
            Italian dishes for generations. Every recipe comes from Nonna Maria's 
            kitchen in Naples, made with imported Italian ingredients and local 
            Mediterranean produce. Our wood-fired oven, built by Neapolitan artisans, 
            reaches 485°C to create the perfect leopard-spotted crust that defines 
            true Neapolitan pizza.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            const isOlive = feature.icon === 'Leaf';
            
            return (
              <div
                key={feature.id}
                className="bg-[#FFFEF0] rounded-xl p-10 text-center card-hover"
                style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${isOlive ? 'bg-[#556B2F]/10' : 'bg-[#8B1538]/10'}`}>
                  <IconComponent className={`w-8 h-8 ${isOlive ? 'text-[#556B2F]' : 'text-[#8B1538]'}`} />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#2C2C2C] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#5C4033] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
