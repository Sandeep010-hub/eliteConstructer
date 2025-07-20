import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Phone, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
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
    <section className="relative min-h-screen min-h-[500px] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-32 black-gradient-bg">
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
      {/* Responsive Background Image (object-cover) */}
      <img
        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Modern custom home"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 50%' }}
      />
      {/* Orange Construction Theme Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(255, 107, 53, 0.1) 100%)' }}
      />
      {/* Orange accent patterns */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-orange rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Main Headline */}
          <div className="text-center">
            <AnimatedHeading
              as="h1"
              flowColor="#FF6B35"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-shadow-dark mb-8 break-words text-center max-w-full mx-auto px-4"
            >
              Build Your Dream with Orange Construction Excellence
            </AnimatedHeading>
          </div>
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-white/95 text-shadow-dark">
            Premium construction services with <span className="text-primary-orange font-bold">guaranteed results</span> and <span className="text-secondary-orange font-bold">on-time delivery</span>
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="glass px-8 py-4 flex items-center gap-3 text-lg font-bold shadow-xl hover:shadow-orange-glow transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <ShieldCheck className="w-6 h-6 text-success-green" /> 
              <span className="text-white">15+ Years Experience</span>
            </div>
            <div className="glass px-8 py-4 flex items-center gap-3 text-lg font-bold shadow-xl hover:shadow-orange-glow transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <Users className="w-6 h-6 text-primary-orange" /> 
              <span className="text-white">500+ Projects Completed</span>
            </div>
            <div className="glass px-8 py-4 flex items-center gap-3 text-lg font-bold shadow-xl hover:shadow-orange-glow transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <Clock className="w-6 h-6 text-secondary-orange" /> 
              <span className="text-white">98% Client Satisfaction</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 w-full max-w-3xl mx-auto">
            <Button size="lg" variant="primary" className="shadow-2xl min-w-[250px] text-lg transform hover:scale-105" onClick={() => {
              if (location.pathname === '/') {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                navigate('/contact', { state: { scrollTo: 'contact' } });
              }
            }}>
              Get FREE Quote in 24 Hours <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="glass" className="backdrop-blur-md text-white shadow-xl border-2 border-white/30 hover:border-primary-orange hover:shadow-orange-glow hover:backdrop-blur-xl hover:bg-white/10 hover:text-primary-orange focus:text-primary-orange focus:border-primary-orange transition-all duration-300 min-w-[250px] text-lg text-shadow-dark font-bold" onClick={() => {
              if (location.pathname === '/') {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                navigate('/portfolio', { state: { scrollTo: 'portfolio' } });
              }
            }}>
              View Our Premium Projects
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="text-center">
            <p className="text-lg text-white/80 mb-4 font-medium">
              Trusted by homeowners across Southern California
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-white/70">
              <span className="px-3 py-1 bg-primary-orange/20 rounded-full border border-primary-orange/30">Licensed & Insured</span>
              <span className="px-3 py-1 bg-secondary-orange/20 rounded-full border border-secondary-orange/30">Free Consultations</span>
              <span className="px-3 py-1 bg-primary-orange/20 rounded-full border border-primary-orange/30">5-Year Warranty</span>
            </div>
          </div>
        </motion.div>
        
        {/* Floating Contact Info - Orange themed */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
          <a
            href="tel:+91-XXXXXXXXXX"
            className={`glass flex flex-row items-center shadow-xl border-2 border-primary-orange/30 cursor-pointer transition-all duration-300 overflow-hidden h-16 hover:shadow-orange-glow ${isHovered ? 'px-6 w-[280px] rounded-full bg-primary-orange/10' : 'w-16 p-0 rounded-full justify-center bg-primary-orange/20'}`}
            aria-label="Call phone number"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Phone className="w-8 h-8 text-primary-orange transition-all duration-300" />
            <span
              className={`ml-3 text-lg font-bold text-primary-orange transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}
              style={{ transition: 'opacity 0.3s, width 0.3s' }}
            >
              +91-XXXXXXXXXX
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};