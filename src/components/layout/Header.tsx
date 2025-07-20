import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const getNavbarStyles = () => {
    if (isHomePage) {
      return scrolled 
        ? 'bg-white/30 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-3';
    } else {
      return 'bg-white shadow-lg py-3';
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

  // For anchor links (scroll to section on homepage)
  const handleAnchorNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${getNavbarStyles()}`}>
      <Container>
        <nav className="flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }
              setMobileMenuOpen(false);
            }}
            className="flex items-center cursor-pointer group bg-transparent border-none p-0 m-0"
            style={{ background: 'none' }}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${getLogoStyles()}`}>
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className={`font-bold text-lg transition-colors duration-300 ${getLogoTextColor()}`}>Elite Construction</div>
                <div className={`text-xs transition-colors duration-300 ${isHomePage ? (scrolled ? 'text-gray-600' : 'text-white/80') : 'text-gray-600'}`}>& Design</div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href === '/services' || item.href === '/portfolio' || item.href === '/about' || item.href === '/contact' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 relative group px-2 py-1 ${getTextColor(location.pathname === item.href)}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 will-change-width transition-all duration-500 ease-in-out ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    if (location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      navigate('/');
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`font-medium transition-all duration-300 relative group px-2 py-1 ${getTextColor(location.pathname === '/')}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 will-change-width transition-all duration-500 ease-in-out ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact"
              className="px-8 py-3 rounded-lg font-bold shadow-lg bg-gradient-gold text-white border border-transparent hover:opacity-90 hover:border-white transition-all duration-300"
            >
              Get Free Quote
            </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block w-full text-left font-medium py-3 px-2 rounded-lg transition-colors duration-300 ${location.pathname === item.href ? 'text-navy-900 font-bold bg-gold-100' : 'text-gray-700 hover:text-navy-900 hover:bg-gray-100'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/contact"
                  className="w-full block text-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};