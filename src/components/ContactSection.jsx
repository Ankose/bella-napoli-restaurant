import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Map */}
          <div className="order-2 lg:order-1">
            <div 
              className="w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
              style={{ background: '#e5e3df' }}
            >
              <iframe
                title="Bella Napoli Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5!2d2.2167!3d41.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI1JzAwLjEiTiAywrAxMycwMC4xIkU!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 lg:order-2">
            <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-semibold text-[#2C2C2C] mb-8">
              Visit Us
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">LOCATION</p>
                  <p className="text-[#2C2C2C] text-lg">
                    {restaurantInfo.address.street}<br />
                    {restaurantInfo.address.city}<br />
                    {restaurantInfo.address.region}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">PHONE</p>
                  <a 
                    href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                    className="text-[#2C2C2C] text-lg hover:text-[#8B1538] hover:underline transition-colors"
                  >
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">EMAIL</p>
                  <a 
                    href={`mailto:${restaurantInfo.email}`}
                    className="text-[#2C2C2C] text-lg hover:text-[#8B1538] hover:underline transition-colors"
                  >
                    {restaurantInfo.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">OPENING HOURS</p>
                  <p className="text-[#2C2C2C]">
                    <span className="font-semibold">{restaurantInfo.hours.days}</span><br />
                    Lunch: {restaurantInfo.hours.lunch}<br />
                    Dinner: {restaurantInfo.hours.dinner}
                  </p>
                  <p className="text-[#8B1538] font-bold mt-2">CLOSED MONDAYS</p>
                  <p className="text-[#5C4033] text-sm mt-2">
                    Happy Hour: Tuesday-Friday 7:00-8:30 PM<br />
                    (Selected drinks 20% off)
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">PARKING</p>
                  <p className="text-[#5C4033]">
                    Free street parking available<br />
                    Parking Playa nearby (5 min walk)
                  </p>
                </div>
              </div>

              {/* Public Transport */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                  <Train className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-1">PUBLIC TRANSPORT</p>
                  <p className="text-[#5C4033]">
                    Metro: Sant Adrià (L2) - 8 min walk<br />
                    Bus: H16, 7 - Stop Marina<br />
                    Tram: T5, T6 - Forum stop
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-[#8B1538] text-xs font-bold tracking-widest uppercase mb-4">FOLLOW US</p>
                <div className="flex gap-4">
                  <a
                    href={restaurantInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border-2 border-[#D2691E] flex items-center justify-center text-[#2C2C2C] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] hover:scale-110 transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={restaurantInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border-2 border-[#D2691E] flex items-center justify-center text-[#2C2C2C] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] hover:scale-110 transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={restaurantInfo.socialMedia.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border-2 border-[#D2691E] flex items-center justify-center text-[#2C2C2C] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] hover:scale-110 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
