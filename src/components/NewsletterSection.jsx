import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#8B1538]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-16 h-16 text-[#DAA520] mx-auto mb-6" />
        
        <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-semibold text-[#FFFEF0] mb-4">
          Stay Connected
        </h2>
        
        <p className="text-[#F5E6D3] text-lg font-light max-w-xl mx-auto mb-8">
          Subscribe to our newsletter for weekly specials, recipes from Nonna's kitchen, and exclusive dining offers
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 text-[#DAA520] text-lg font-semibold">
            <CheckCircle className="w-6 h-6" />
            Thank you! Check your email to confirm subscription.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 h-14 px-6 rounded-full sm:rounded-r-none text-base focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              required
            />
            <button
              type="submit"
              className="h-14 px-8 bg-[#DAA520] text-[#2C2C2C] rounded-full sm:rounded-l-none font-bold uppercase tracking-wide hover:bg-[#FFD700] hover:scale-[1.02] transition-all mt-3 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/60 text-sm italic mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
