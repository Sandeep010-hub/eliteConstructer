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
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200' 
        : 'bg-transparent py-4';
    } else {
      return 'bg-white shadow-lg py-3 border-b border-gray-200';
    }
  };

  const getTextColor = (isActive = false) => {
    if (isHomePage) {
      if (scrolled) {
        return isActive ? 'text-black-900 font-bold' : 'text-gray-700 hover:text-primary-orange';
      } else {
        return isActive ? 'text-primary-orange font-bold text-shadow-dark' : 'text-white hover:text-primary-orange text-shadow-dark';
      }
    } else {
      return isActive ? 'text-black-900 font-bold' : 'text-gray-700 hover:text-primary-orange';
    }
  };

  const getLogoStyles = () => {
    if (isHomePage) {
      return scrolled ? 'orange-gradient-bg' : 'bg-white/20 backdrop-blur-sm border border-white/30';
    } else {
      return 'orange-gradient-bg';
    }
  };

  const getLogoTextColor = () => {
    if (isHomePage) {
      return scrolled ? 'text-black-900' : 'text-white';
    } else {
      return 'text-black-900';
    }
  };

  const getPhoneColor = () => {
    if (isHomePage) {
      return scrolled 
        ? 'text-black-900 hover:text-primary-orange' 
        : 'text-white hover:text-primary-orange text-shadow-dark';
    } else {
      return 'text-black-900 hover:text-primary-orange';
    }
  };

  const getButtonStyles = () => {
    if (isHomePage) {
      return scrolled 
        ? 'btn-orange-primary' 
        : 'btn-orange-primary';
    } else {
      return 'btn-orange-primary';
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
    <header className={`fixed w-full z-50 transition-all duration-500 ease-out ${getNavbarStyles()}`}>
      <Container>
        <nav className="flex items-center justify-between transition-all duration-500 ease-out">
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
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-glow ${getLogoStyles()}`}>
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className={`font-bold text-xl transition-colors duration-300 ${getLogoTextColor()}`}>Elite Construction</div>
                <div className={`text-sm font-medium transition-colors duration-300 ${isHomePage ? (scrolled ? 'text-gray-600' : 'text-white/90') : 'text-gray-600'}`}>& Design</div>
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
                  className={`font-bold transition-all duration-300 relative group px-3 py-2 ${getTextColor(location.pathname === item.href)}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-1 bg-primary-orange rounded-full will-change-width transition-all duration-500 ease-out ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
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
                  className={`font-bold transition-all duration-300 relative group px-3 py-2 ${getTextColor(location.pathname === '/')}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-1 bg-primary-orange rounded-full will-change-width transition-all duration-500 ease-out ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact"
              className="btn-orange-primary px-8 py-3 rounded-lg font-bold shadow-lg text-white border-2 border-transparent hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 p-2 rounded-lg hover:bg-primary-orange/10 ${getMobileButtonColor()}`}
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
          <div className="lg:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200">
            <div className="space-y-2 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block w-full text-left font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${location.pathname === item.href ? 'text-white bg-primary-orange shadow-lg' : 'text-gray-700 hover:text-primary-orange hover:bg-orange-50'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/contact"
                  className="w-full block text-center btn-orange-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
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