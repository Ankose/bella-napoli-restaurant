import React, { useState } from 'react';
import { menuItems } from '../data/mock';

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('pizzas');

  const categories = [
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'dolci', label: 'Dolci' },
    { id: 'beverages', label: 'Beverages' }
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B1538] text-sm font-bold tracking-[3px] uppercase mb-3">
            OUR MENU
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#2C2C2C] mb-4">
            Authentic Italian Flavors
          </h2>
          <div className="w-[80px] h-[3px] bg-[#DAA520] mx-auto mb-6" />
          <p className="text-[#5C4033] text-lg max-w-2xl mx-auto">
            Every dish is prepared with imported Italian ingredients and traditional family recipes
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 \
                ${activeTab === category.id
                  ? 'bg-[#8B1538] text-white shadow-lg scale-105'
                  : 'bg-[#F5E6D3] text-[#5C4033] hover:bg-[#E5D6C3]'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeTab]?.map((item, index) => (
            <div
              key={index}
              className="menu-item-card group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C] group-hover:text-[#8B1538] transition-colors">
                  {item.name}
                </h3>
                <span className="text-[#DAA520] font-bold text-xl ml-4">
                  €{item.price}
                </span>
              </div>

              <p className="text-[#5C4033] text-sm leading-relaxed mb-3">
                {item.description}
              </p>

              {item.ingredients && (
                <p className="text-[#8B8B8B] text-xs italic">
                  {item.ingredients}
                </p>
              )}

              {item.tag && (
                <span className="inline-block mt-3 px-3 py-1 bg-[#DAA520] text-white text-xs font-semibold rounded-full">
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Download Menu Button */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Download Full Menu PDF
          </button>
        </div>
      </div>
    </section>
  );
};