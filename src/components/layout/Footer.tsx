import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Custom Homes', href: '/custom-homes' },
    { name: 'Renovations', href: '/renovations' },
    { name: 'Kitchen Remodeling', href: '/renovations' },
    { name: 'Bathroom Renovations', href: '/renovations' },
    { name: 'Commercial Construction', href: '/commercial' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Financing', href: '/financing' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 cursor-pointer group">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-navy-900 font-bold text-xl">E</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Elite Construction</div>
                  <div className="text-sm text-gray-300">& Design</div>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Crafting exceptional spaces since 1995. We deliver premium construction and renovation services with uncompromising quality and attention to detail.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+1-555-0123"
                  className="flex items-center hover:text-gold-500 transition-colors group"
                >
                  <PhoneIcon className="w-5 h-5 mr-3 text-gold-500 group-hover:scale-110 transition-transform" />
                  <span>(555) 123-4567</span>
                </a>
                <a 
                  href="mailto:info@eliteconstruction.com"
                  className="flex items-center hover:text-gold-500 transition-colors group"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-3 text-gold-500 group-hover:scale-110 transition-transform" />
                  <span>info@eliteconstruction.com</span>
                </a>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-3 text-gold-500" />
                  <span>123 Construction Ave, Los Angeles, CA 90210</span>
                </div>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors text-left hover:translate-x-1 transform duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors text-left hover:translate-x-1 transform duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors text-left hover:translate-x-1 transform duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2024 Elite Construction & Design. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-sm hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/eliteconstruction" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="text-gray-300 hover:text-gold-500 transition-colors text-2xl">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://facebook.com/eliteconstruction" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="text-gray-300 hover:text-gold-500 transition-colors text-2xl">
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};