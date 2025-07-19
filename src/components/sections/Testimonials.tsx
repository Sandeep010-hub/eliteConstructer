import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Section } from '../ui/Section';
import { testimonials } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" background="navy" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Elite Construction.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  {testimonials[currentIndex].image && (
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].client}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="text-left">
                    <div className="font-bold text-navy-900">
                      {testimonials[currentIndex].client}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Additional Testimonials Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-gold-500" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 text-sm italic">
              "{testimonial.text.substring(0, 120)}..."
            </p>
            <div className="text-white font-semibold text-sm">
              — {testimonial.client}
            </div>
            <div className="text-gray-400 text-xs">
              {testimonial.location}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};