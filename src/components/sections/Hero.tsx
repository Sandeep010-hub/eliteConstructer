import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Phone, ArrowRight, ShieldCheck, Clock, Users, Star, Award, MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatedHeading } from '../ui/AnimatedHeading';
import { Helmet } from 'react-helmet-async';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const handleGetConsultation = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleViewWork = () => {
    if (setCurrentPage) {
      setCurrentPage('portfolio');
      setTimeout(() => {
        const element = document.getElementById('portfolio');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Helmet>
        <title>Elite Construction & Design | Custom Homes & Renovations</title>
        <meta name="description" content="Elite Construction & Design builds premium custom homes, renovations, and commercial projects in Southern California. Uncompromising quality, on-time delivery, and client satisfaction." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elite Construction & Design",
            "image": "https://eliteconstruction.com/og-image.jpg",
            "@id": "https://eliteconstruction.com",
            "url": "https://eliteconstruction.com",
            "telephone": "+1-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Construction Ave",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90210",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.0522,
              "longitude": -118.2437
            },
            "sameAs": [
              "https://instagram.com/eliteconstruction",
              "https://facebook.com/eliteconstruction"
            ]
          }
        `}</script>
      </Helmet>

      {/* Modern Split Layout Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Left side - Content background */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Right side - Image */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
            alt="Modern luxury construction project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 lg:from-transparent lg:to-slate-900/30"></div>
        </div>
        
        {/* Orange accent overlays */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <Container className="relative z-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 lg:pr-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 font-medium"
            >
              <Award className="w-4 h-4" />
              <span>Southern California's Premier Builders</span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <AnimatedHeading
                as="h1"
                flowColor="#FF6B35"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              >
                Building Excellence, One Project at a Time
              </AnimatedHeading>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Transform your vision into reality with our <span className="text-orange-400 font-semibold">premium construction services</span> and <span className="text-orange-400 font-semibold">unmatched craftsmanship</span>.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400">25+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400">98%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="primary" 
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-orange-500/25 transition-all duration-300 group"
                onClick={handleGetConsultation}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                onClick={handleViewWork}
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Serving SoCal</span>
              </div>
            </div>
          </motion.div>

          {/* Features/Services Quick Preview Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8 space-y-6"
          >
            {/* Service Cards */}
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Custom Home Construction</h3>
                <p className="text-slate-300 text-sm">Design and build your dream home from the ground up with our expert team.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Home Renovations</h3>
                <p className="text-slate-300 text-sm">Transform your existing space with our comprehensive renovation services.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Commercial Projects</h3>
                <p className="text-slate-300 text-sm">Professional commercial construction for businesses and enterprises.</p>
              </motion.div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">24/7 Emergency Support</div>
                  <div className="text-orange-400 font-bold text-lg">+1 (555) 123-4567</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
        <a
          href="tel:+1-555-123-4567"
          className={`flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white shadow-2xl border-2 border-orange-400 cursor-pointer transition-all duration-300 ${isHovered ? 'px-6 rounded-full w-auto' : 'w-16 h-16 rounded-full'}`}
          aria-label="Call phone number"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Phone className="w-6 h-6" />
          {isHovered && (
            <span className="ml-3 font-bold whitespace-nowrap">
              Call Now
            </span>
          )}
        </a>
      </div>
    </section>
  );
};