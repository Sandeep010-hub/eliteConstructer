import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

interface SitemapSection {
  title: string;
  pages: { name: string; href: string; description?: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    pages: [
      { name: 'Home', href: 'home', description: 'Welcome to Elite Construction & Design' },
      { name: 'About Us', href: 'about', description: 'Learn about our company and team' },
      { name: 'Contact', href: 'contact', description: 'Get in touch with our team' }
    ]
  },
  {
    title: 'Services',
    pages: [
      { name: 'All Services', href: 'services', description: 'Complete overview of our services' },
      { name: 'Custom Homes', href: 'custom-homes', description: 'Custom home construction services' },
      { name: 'Renovations', href: 'renovations', description: 'Home renovation and remodeling' },
      { name: 'Commercial Construction', href: 'commercial', description: 'Commercial building services' }
    ]
  },
  {
    title: 'Portfolio & Work',
    pages: [
      { name: 'Portfolio', href: 'portfolio', description: 'View our completed projects' },
      { name: 'Testimonials', href: 'testimonials', description: 'Client reviews and feedback' },
      { name: 'Our Process', href: 'process', description: 'How we work with clients' }
    ]
  },
  {
    title: 'Resources',
    pages: [
      { name: 'Blog', href: 'blog', description: 'Construction tips and insights' },
      { name: 'Financing', href: 'financing', description: 'Project financing options' },
      { name: 'Careers', href: 'careers', description: 'Join our team' }
    ]
  },
  {
    title: 'Legal',
    pages: [
      { name: 'Privacy Policy', href: 'privacy', description: 'How we protect your privacy' },
      { name: 'Terms of Service', href: 'terms', description: 'Terms and conditions' },
      { name: 'Sitemap', href: 'sitemap', description: 'This page - site navigation' }
    ]
  }
];

interface SitemapProps {
  setCurrentPage?: (page: string) => void;
}

export const Sitemap: React.FC<SitemapProps> = ({ setCurrentPage }) => {
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <Section padding="xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find all pages and sections of the Elite Construction & Design website. Navigate easily to any part of our site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <Card className="h-full">
                  <h2 className="text-xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-3">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex}>
                        <button
                          onClick={() => handleNavigation(page.href)}
                          className="text-left w-full group"
                        >
                          <div className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                            {page.name}
                          </div>
                          {page.description && (
                            <div className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </div>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <Card className="bg-navy-900 text-white text-center">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                  onClick={() => handleNavigation('contact')}
                  className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Get Free Quote
                </button>
                <button
                  onClick={() => handleNavigation('portfolio')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => handleNavigation('about')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Learn About Us
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Card>
              <div className="text-center">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Need Help Finding Something?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Contact our team and we'll be happy to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+1-555-0123"
                    className="text-navy-900 hover:text-gold-600 font-semibold transition-colors duration-200"
                  >
                    📞 (555) 123-4567
                  </a>
                  <a
                    href="mailto:info@eliteconstruction.com"
                    className="text-navy-900 hover:text-gold-600 font-semibold transition-colors duration-200"
                  >
                    ✉️ info@eliteconstruction.com
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};