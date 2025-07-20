import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'About', href: 'about' },
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
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on homepage
  const isHomePage = currentPage === 'home';
  
  // Navbar styling based on page and scroll state
  const getNavbarStyles = () => {
    if (isHomePage) {
      return scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4';
    } else {
      return 'bg-white shadow-lg py-2';
    }
  };
  
  const getTextColor = (isActive = false) => {
    if (isHomePage) {
      if (scrolled) {
        return isActive ? 'text-navy-900 font-bold' : 'text-gray-700 hover:text-navy-900';
      } else {
        return isActive ? 'text-gold-500 font-bold' : 'text-white hover:text-gold-500';
      }
    } else {
      return isActive ? 'text-navy-900 font-bold' : 'text-gray-700 hover:text-navy-900';
    }
  };
  
  const getLogoStyles = () => {
    if (isHomePage) {
      return scrolled ? 'bg-navy-900' : 'bg-white/20 backdrop-blur-sm';
    } else {
      return 'bg-navy-900';
    }
  };
  
  const getLogoTextColor = () => {
    if (isHomePage) {
      return scrolled ? 'text-navy-900' : 'text-white';
    } else {
      return 'text-navy-900';
    }
  };
  
  const getPhoneColor = () => {
    if (isHomePage) {
      return scrolled 
        ? 'text-navy-900 hover:text-gold-500' 
        : 'text-white hover:text-gold-500';
    } else {
      return 'text-navy-900 hover:text-gold-500';
    }
  };
  
  const getButtonStyles = () => {
    if (isHomePage) {
      return scrolled 
        ? 'bg-navy-900 hover:bg-navy-800 text-white' 
        : 'bg-gold-500 hover:bg-gold-600 text-navy-900';
    } else {
      return 'bg-navy-900 hover:bg-navy-800 text-white';
    }
  };
  
  const getMobileButtonColor = () => {
    if (isHomePage) {
      return scrolled ? 'text-gray-700' : 'text-white';
    } else {
      return 'text-gray-700';
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
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
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${getNavbarStyles()}`}>
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                getLogoStyles()
              }`}>
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className={`font-bold text-lg transition-colors duration-300 ${
                  getLogoTextColor()
                }`}>Elite Construction</div>
                <div className={`text-xs transition-colors duration-300 ${
                  isHomePage 
                    ? (scrolled ? 'text-gray-600' : 'text-white/80')
                    : 'text-gray-600'
                }`}>& Design</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.href === 'services' || item.href === 'portfolio' || item.href === 'about' || item.href === 'contact') {
                    scrollToSection(item.href);
                  } else {
                    handleNavigation(item.href);
                  }
                }}
                className={`font-medium transition-all duration-300 relative group px-2 py-1 ${
                  getTextColor(currentPage === item.href)
                }`}
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
            <a 
              href="tel:+1-555-0123" 
              className={`flex items-center transition-colors duration-300 hover:scale-105 ${getPhoneColor()}`}
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <Button 
              onClick={handleGetQuote}
              className={`transition-all duration-300 hover:scale-105 ${getButtonStyles()}`}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 ${getMobileButtonColor()}`}
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
          <div className="lg:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="space-y-2 px-4 py-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href === 'services' || item.href === 'portfolio' || item.href === 'about' || item.href === 'contact') {
                      scrollToSection(item.href);
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                  className={`block w-full text-left font-medium py-3 px-2 rounded-lg transition-colors duration-300 ${
                    currentPage === item.href 
                      ? 'text-navy-900 font-bold bg-gold-100' 
                      : 'text-gray-700 hover:text-navy-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:+1-555-0123" 
                  className="flex items-center text-navy-900 mb-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">(555) 123-4567</span>
                </a>
                <Button 
                  className="w-full"
                  onClick={handleGetQuote}
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