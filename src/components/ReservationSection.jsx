import React, { useState } from 'react';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { timeSlots, guestOptions } from '../data/mock';

export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
    policyAccepted: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setSubmitted(true);
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.date &&
      formData.time &&
      formData.guests &&
      formData.policyAccepted
    );
  };

  // Success state
  if (submitted) {
    return (
      <section id="reservations" className="py-24 lg:py-32 relative" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-[rgba(139,21,56,0.75)]" />
        <div className="relative z-10 max-w-md mx-auto px-4">
          <div className="bg-[#556B2F] rounded-xl p-8 text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">
              Reservation Confirmed!
            </h3>
            <p className="leading-relaxed">
              Check your email for confirmation details.<br />
              We look forward to welcoming you!<br />
              <span className="italic mt-2 block">- Team Bella Napoli</span>
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  date: '',
                  time: '',
                  guests: '',
                  specialRequests: '',
                  policyAccepted: false
                });
              }}
              className="mt-6 px-6 py-3 bg-white text-[#556B2F] rounded-full font-semibold hover:bg-[#F5E6D3] transition-colors"
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservations"
      className="py-24 lg:py-32 relative"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-[rgba(139,21,56,0.75)]" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#DAA520] text-sm font-bold tracking-[3px] uppercase mb-3">
            BOOK A TABLE
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#FFFEF0] mb-4">
            Reserve Your Experience
          </h2>
          <p className="text-[#F5E6D3] text-lg font-light">
            Join us for an authentic Italian dining experience
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[#2C2C2C] font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#2C2C2C] font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[#2C2C2C] font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+34 XXX XXX XXX"
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-[#2C2C2C] font-medium mb-2">
                Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors"
                  required
                />
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B1538] pointer-events-none" />
              </div>
              <p className="text-xs text-[#B8A696] mt-1">Closed on Mondays</p>
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-[#2C2C2C] font-medium mb-2">
                Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors bg-white"
                required
              >
                <option value="">Select a time</option>
                <optgroup label="Lunch">
                  {timeSlots.lunch.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </optgroup>
                <optgroup label="Dinner">
                  {timeSlots.dinner.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </optgroup>
              </select>
              <p className="text-xs text-[#B8A696] mt-1">Last orders at 22:30</p>
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-[#2C2C2C] font-medium mb-2">
                Number of Guests *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors bg-white"
                required
              >
                <option value="">Select number of guests</option>
                {guestOptions.map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
              <p className="text-xs text-[#B8A696] mt-1">For parties larger than 10, please call us</p>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-[#2C2C2C] font-medium mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any dietary requirements, allergies, or special occasions? Let us know!"
                className="w-full px-4 py-3 border-2 border-[#D2691E] rounded-lg focus:outline-none focus:border-[#8B1538] transition-colors resize-vertical min-h-[100px]"
                rows={4}
              />
            </div>

            {/* Policy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="policy"
                name="policyAccepted"
                checked={formData.policyAccepted}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 border-2 border-[#D2691E] rounded accent-[#8B1538]"
                required
              />
              <label htmlFor="policy" className="text-[#5C4033] text-sm leading-relaxed cursor-pointer">
                I agree to the cancellation policy (Please cancel at least 2 hours before reservation time)
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full h-[60px] rounded-full text-lg font-bold uppercase tracking-widest transition-all duration-300 ${
                isFormValid()
                  ? 'bg-[#8B1538] text-white hover:bg-[#A4243B] hover:scale-[1.02] hover:shadow-lg cursor-pointer'
                  : 'bg-[#B8A696] text-white cursor-not-allowed'
              }`}
            >
              Confirm Reservation
            </button>
          </form>

          <p className="text-center text-[#5C4033] mt-6 text-sm">
            Prefer to call? Reach us at{' '}
            <a href="tel:+34933123456" className="text-[#8B1538] font-semibold hover:underline">
              +34 933 123 456
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
