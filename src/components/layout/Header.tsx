import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'About', href: 'about' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' },
];

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                scrolled ? 'bg-navy-900' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-white'
                }`}>E</span>
              </div>
              <div>
                <div className={`font-bold text-lg transition-colors duration-300 ${
                  scrolled ? 'text-navy-900' : 'text-white'
                }`}>Elite Construction</div>
                <div className={`text-xs transition-colors duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-white/80'
                }`}>& Design</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`font-medium transition-all duration-300 relative group ${
                  scrolled ? 'text-gray-700 hover:text-navy-900' : 'text-white hover:text-gold-500'
                } ${currentPage === item.href ? (scrolled ? 'text-navy-900' : 'text-gold-500') : ''}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  currentPage === item.href 
                    ? 'w-full bg-gold-500' 
                    : 'w-0 bg-gold-500 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1-555-0123" className={`flex items-center transition-colors duration-300 ${
              scrolled ? 'text-navy-900 hover:text-gold-500' : 'text-white hover:text-gold-500'
            }`}>
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <Button 
              onClick={() => handleNavigation('contact')}
              className={scrolled ? '' : 'bg-gold-500 hover:bg-gold-600 text-navy-900'}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/20 py-4 bg-white/95 backdrop-blur-md rounded-b-lg">
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left font-medium py-2 transition-colors duration-300 ${
                    currentPage === item.href 
                      ? 'text-navy-900 font-bold' 
                      : 'text-gray-700 hover:text-navy-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+1-555-0123" className="flex items-center text-navy-900 mb-4">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">(555) 123-4567</span>
                </a>
                <Button 
                  className="w-full"
                  onClick={() => handleNavigation('contact')}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};