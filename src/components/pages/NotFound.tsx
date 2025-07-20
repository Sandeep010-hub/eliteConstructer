import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface NotFoundProps {
  setCurrentPage?: (page: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ setCurrentPage }) => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <meta name="robots" content="noindex" />
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
      <Section padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Graphic */}
            <div className="mb-12">
              <div className="text-9xl font-bold text-gold-500 mb-4">404</div>
              <div className="text-6xl mb-6">🏗️</div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Page Under Construction
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Oops! It looks like this page is still under construction. Just like our building projects, we're working hard to get everything perfect.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                variant="primary"
                className="flex items-center w-full sm:w-auto font-bold"
                onClick={() => navigate('/')}
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Go Home
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto font-bold"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-8">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { name: 'Our Services', href: 'services', description: 'Explore our construction services' },
                { name: 'Portfolio', href: 'portfolio', description: 'View our completed projects' },
                { name: 'Get Quote', href: 'contact', description: 'Request a project quote' }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card 
                    hover 
                    className="cursor-pointer h-full"
                    onClick={() => handleNavigation(link.href)}
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{link.name}</h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-navy-900 text-white">
              <h2 className="text-2xl font-bold mb-6">Need Immediate Help?</h2>
              <p className="text-gray-700 mb-8">
                Our team is here to help you find what you're looking for or answer any questions about our construction services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+1-555-0123"
                  aria-label="Call Elite Construction"
                  className="flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
                <Button
                  as="a"
                  href="mailto:info@eliteconstruction.com"
                  aria-label="Email Elite Construction"
                  variant="secondary"
                  size="lg"
                  className="w-full font-bold flex items-center justify-center"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Fun Construction Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-gray-50">
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                Did You Know? 🏗️
              </h3>
              <p className="text-gray-600">
                The Empire State Building was constructed in just 410 days! While we can't promise quite that speed, 
                we do pride ourselves on efficient project completion without compromising quality.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};