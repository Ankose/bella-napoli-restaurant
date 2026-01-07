import React from 'react';
import { Award } from 'lucide-react';
import { chefSpecials } from '../data/mock';

export const ChefSpecialsSection = () => {
  return (
    <section 
      className="py-24 lg:py-32 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(139,21,56,0.85)] to-[rgba(44,44,44,0.9)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#DAA520] text-sm font-bold tracking-[3px] uppercase mb-3">
            THIS WEEK'S SPECIALS
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#FFFEF0] mb-4">
            From Our Kitchen
          </h2>
          <p className="text-[#F5E6D3] text-lg font-light max-w-xl mx-auto">
            Chef Giuseppe creates weekly specials using seasonal ingredients and family recipes
          </p>
        </div>

        {/* Special Dishes */}
        <div className="grid md:grid-cols-2 gap-8">
          {chefSpecials.map((special) => (
            <div
              key={special.id}
              className="rounded-xl p-8 lg:p-10 border-2 border-white/20"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#DAA520]" />
                  <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#FFFEF0]">
                    {special.name}
                  </h3>
                </div>
                <span className="text-[#DAA520] font-bold text-xl">
                  {special.price}
                </span>
              </div>
              <p className="text-[#F5E6D3] font-light leading-relaxed">
                {special.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
