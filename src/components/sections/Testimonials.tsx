import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Section } from '../ui/Section';
import { testimonials } from '../../data/testimonials';
import { AnimatedHeading } from '../ui/AnimatedHeading';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;
  const startIdx = Math.max(0, Math.min(currentIndex - 1, testimonials.length - visibleCards));
  const endIdx = Math.min(startIdx + visibleCards, testimonials.length);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  // Manual navigation resets timer
  const goTo = (idx: number) => {
    setCurrentIndex(idx);
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const nextTestimonial = () => goTo((currentIndex + 1) % testimonials.length);
  const prevTestimonial = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials" background="navy" padding="xl">
      <div 
        className="absolute inset-0 black-gradient-bg" 
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #000000 100%)' }}
      />
      <div className="relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedHeading as="h2" className="text-4xl md:text-5xl mb-3 text-white text-shadow-dark">
              What Our <span className="text-primary-orange">Clients Say</span>
            </AnimatedHeading>
            <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with <span className="text-secondary-orange font-bold">Elite Construction</span>.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center mb-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-orange-glow px-8 py-8 max-w-2xl w-full text-center mx-2 border border-gray-200"
          >
            <div className="flex justify-center mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-secondary-orange" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-2">
              {testimonials[currentIndex].image && (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].client}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary-orange/30"
                />
              )}
              <div className="text-left">
                <div className="font-bold text-black-900 text-sm">{testimonials[currentIndex].client}</div>
                <div className="text-xs text-gray-500">{testimonials[currentIndex].project} • {testimonials[currentIndex].location}</div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-2">
          <button
            onClick={prevTestimonial}
            className="bg-white/20 hover:bg-primary-orange/80 text-white rounded-full p-3 transition-all hover:scale-110 border border-white/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
            {testimonials.slice(startIdx, endIdx).map((testimonial, idx) => {
              const realIdx = startIdx + idx;
              return (
                <button
                  key={testimonial.id}
                  onClick={() => goTo(realIdx)}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-orange-glow px-5 py-4 min-w-[220px] max-w-xs text-left transition-all duration-300 border-2 ${
                    realIdx === currentIndex ? 'border-primary-orange' : 'border-transparent hover:border-secondary-orange'
                  }`}
                  style={{ opacity: realIdx === currentIndex ? 1 : 0.7 }}
                >
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-secondary-orange" />
                    ))}
                  </div>
                  <div className="text-gray-700 text-sm mb-2 line-clamp-3">"{testimonial.text}"</div>
                  <div className="flex items-center gap-2 mt-2">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.client}
                        className="w-8 h-8 rounded-full object-cover border border-primary-orange/30"
                      />
                    )}
                    <div>
                      <div className="font-bold text-black-900 text-xs">{testimonial.client}</div>
                      <div className="text-xs text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <button
            onClick={nextTestimonial}
            className="bg-white/20 hover:bg-primary-orange/80 text-white rounded-full p-3 transition-all hover:scale-110 border border-white/30"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                idx === currentIndex ? 'bg-primary-orange' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};