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
    <section className="relative min-h-screen min-h-[500px] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-32 bg-navy-900">
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
        alt="Quality construction workers on site"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 50%' }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6))' }}
      />
      <Container className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full max-w-4xl px-4">
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
              flowColor="#f97316"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-8 break-words text-center max-w-full mx-auto px-4"
            >
              QUALITY CONSTRUCTION
              <br />
              <span className="text-orange-500">LASTING IMPRESSIONS</span>
            </AnimatedHeading>
          </div>
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-normal text-white/90">
            Professional construction services delivering exceptional quality, innovative design, and lasting value for your investment.
          </p>
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass px-6 py-3 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <ShieldCheck className="w-5 h-5 text-orange-500" /> 25+ Years Experience
            </div>
            <div className="glass px-6 py-3 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <Users className="w-5 h-5 text-orange-500" /> 500+ Projects Completed
            </div>
            <div className="glass px-6 py-3 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer">
              <Clock className="w-5 h-5 text-orange-500" /> 98% Client Satisfaction
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full max-w-2xl mx-auto">
            <Button size="lg" variant="primary" className="bg-orange-500 hover:bg-orange-600 shadow-xl min-w-[220px]" onClick={() => {
              if (location.pathname === '/') {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                navigate('/contact', { state: { scrollTo: 'contact' } });
              }
            }}>
              Get FREE Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="glass" className="backdrop-blur-md text-white shadow-lg border border-white/30 hover:border-orange-500 hover:shadow-orange-500/40 hover:backdrop-blur-xl hover:bg-white/10 hover:text-orange-500 focus:text-orange-500 focus:border-orange-500 transition-all duration-300 min-w-[220px] text-shadow-lg" onClick={() => {
              if (location.pathname === '/') {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                navigate('/portfolio', { state: { scrollTo: 'portfolio' } });
              }
            }}>
              View Our Work
            </Button>
          </div>
        </motion.div>
        {/* Floating Contact Info - sticky on mobile */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
          <a
            href="tel:+1-555-0123"
            className={`glass flex flex-row items-center shadow-lg border border-white/30 cursor-pointer transition-all duration-300 overflow-hidden h-14 ${isHovered ? 'px-6 w-[260px] rounded-full' : 'w-14 p-0 rounded-full justify-center'}`}
            aria-label="Call phone number"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Phone className="w-7 h-7 text-orange-500 transition-all duration-300" />
            <span
              className={`ml-3 text-lg font-bold text-orange-500 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}
              style={{ transition: 'opacity 0.3s, width 0.3s' }}
            >
              +1-555-0123
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};