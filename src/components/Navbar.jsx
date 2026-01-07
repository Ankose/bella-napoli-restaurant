import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../components/ui/sheet';
import { Button } from '../components/ui/button';
import { restaurantInfo } from '../data/mock';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#8B1538] hover:text-[#A4243B] transition-colors"
          >
            Bella Napoli
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative font-medium text-base transition-colors duration-200
                  ${activeSection === link.href.substring(1) 
                    ? 'text-[#8B1538]' 
                    : 'text-[#2C2C2C] hover:text-[#8B1538]'
                  }
                `}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[3px] bg-[#8B1538] transition-all duration-200
                  ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0'}
                `} />
              </a>
            ))}
          </div>

          {/* Phone Button - Desktop */}
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
            className="hidden lg:flex items-center gap-2 bg-[#8B1538] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#A4243B] hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            {restaurantInfo.phone}
          </a>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#2C2C2C]">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white w-[300px]">
                <SheetTitle className="font-['Playfair_Display'] text-2xl text-[#8B1538] mb-8">
                  Bella Napoli
                </SheetTitle>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className={`text-lg font-medium py-2 border-b border-[#F5E6D3] transition-colors
                        ${activeSection === link.href.substring(1) 
                          ? 'text-[#8B1538]' 
                          : 'text-[#2C2C2C] hover:text-[#8B1538]'
                        }
                      `}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                  className="mt-8 flex items-center justify-center gap-2 bg-[#8B1538] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#A4243B] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {restaurantInfo.phone}
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
