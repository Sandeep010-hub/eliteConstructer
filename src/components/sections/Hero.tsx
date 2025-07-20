import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(27, 54, 93, 0.7), rgba(27, 54, 93, 0.5)), url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
      </div>

      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold-500" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="text-sm font-medium">25+ Years Experience</div>
            <div className="text-sm font-medium">500+ Projects Completed</div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="font-serif">Crafting Exceptional</span>
            <br />
            <span className="text-gold-500">Spaces Since 1995</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Premium construction and renovation services for discerning clients across Southern California
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white border-2 border-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">25+</div>
              <div className="text-sm md:text-base font-medium">Years in Business</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">500+</div>
              <div className="text-sm md:text-base font-medium">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">100%</div>
              <div className="text-sm md:text-base font-medium">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">50+</div>
              <div className="text-sm md:text-base font-medium">Team Members</div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};