import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { MenuSection } from './components/MenuSection';
import { ChefSpecialsSection } from './components/ChefSpecialsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="App">
      <Navbar />           {/* Fixed navigation at top */}
      <main>
        <HeroSection />    {/* Full-screen hero with pizza image */}
        <WelcomeSection /> {/* Welcome message + 3 cards */}
        <MenuSection />    {/* All menu items with tabs */}
        <ChefSpecialsSection />  {/* Weekly specials */}
        <AboutSection />   {/* Our story + timeline */}
        <GallerySection /> {/* Photo gallery */}
        <TestimonialsSection />  {/* Customer reviews carousel */}
        <ReservationSection />   {/* Booking form */}
        <ContactSection /> {/* Map + contact info */}
        <NewsletterSection />    {/* Email signup */}
      </main>
      <Footer />           {/* Site footer */}
      <FloatingButtons />  {/* WhatsApp + back-to-top */}
    </div>
  );
}

export default App;