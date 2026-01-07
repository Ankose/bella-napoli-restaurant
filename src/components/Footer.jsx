import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About Us', href: '#about' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
  { name: 'Gift Cards', href: '#' },
  { name: 'Private Events', href: '#' },
];

export const Footer = () => {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#2C2C2C] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#FFFEF0] mb-2">
              Bella Napoli
            </h3>
            <p className="text-[#B8A696] text-sm mb-4">Authentic Italian Cuisine</p>
            <p className="text-[#B8A696] text-sm leading-relaxed">
              Family recipes from Naples, served with love in Barcelona since 2015
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[#FFFEF0] font-semibold uppercase tracking-wide text-sm mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block text-[#B8A696] text-sm hover:text-[#DAA520] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-[#FFFEF0] font-semibold uppercase tracking-wide text-sm mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-[#B8A696] text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`} className="hover:text-[#DAA520] transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-[#DAA520] transition-colors">
                  {restaurantInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  {restaurantInfo.address.street},<br />
                  {restaurantInfo.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Hours */}
          <div>
            <h4 className="text-[#FFFEF0] font-semibold uppercase tracking-wide text-sm mb-4">
              Opening Hours
            </h4>
            <div className="text-[#B8A696] text-sm space-y-1">
              <p className="font-medium text-[#FFFEF0]">{restaurantInfo.hours.days}</p>
              <p>Lunch: {restaurantInfo.hours.lunch}</p>
              <p>Dinner: {restaurantInfo.hours.dinner}</p>
              <p className="text-[#8B1538] font-semibold mt-2">Closed Mondays</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href={restaurantInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B8A696] hover:bg-[#8B1538] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B8A696] hover:bg-[#8B1538] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#B8A696] text-sm">
            © 2026 Bella Napoli Ristorante. All rights reserved.
          </p>
          <div className="flex gap-4 text-[#B8A696] text-sm">
            <a href="#" className="hover:text-[#DAA520] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#DAA520] transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-[#DAA520] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
