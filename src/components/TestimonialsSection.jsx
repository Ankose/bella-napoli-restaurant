import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { testimonials } from '../data/mock';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFEF0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B1538] text-sm font-bold tracking-[3px] uppercase mb-3">
            TESTIMONIALS
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#2C2C2C] mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-[#2C2C2C] font-medium">4.9/5 rating on Google Reviews</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white border-[#D2691E] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] rounded-full w-10 h-10 lg:w-12 lg:h-12"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white border-[#D2691E] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] rounded-full w-10 h-10 lg:w-12 lg:h-12"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 lg:px-12"
                >
                  <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center max-w-3xl mx-auto">
                    <Quote className="w-12 h-12 text-[#DAA520] mx-auto mb-6 opacity-50" />
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < testimonial.stars
                              ? 'fill-[#DAA520] text-[#DAA520]'
                              : 'text-[#B8A696]'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[#2C2C2C] text-lg lg:text-xl leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="font-['Playfair_Display'] text-xl font-semibold text-[#8B1538]">
                        {testimonial.name}
                      </p>
                      <p className="text-[#B8A696] text-sm mt-1">
                        {testimonial.platform} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#8B1538] w-6'
                    : 'bg-[#D2691E] opacity-50 hover:opacity-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Write Review Button */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/bellanapolibcn/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};
