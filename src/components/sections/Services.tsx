import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon,
  SparklesIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { services } from '../../data/services';

const iconMap = {
  home: HomeIcon,
  wrench: WrenchScrewdriverIcon,
  building: BuildingOfficeIcon,
  utensils: SparklesIcon,
  bath: SparklesIcon,
  plus: PlusIcon,
  tree: SparklesIcon,
  leaf: SparklesIcon
};

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'specialty', name: 'Specialty' }
];

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceClick = (serviceTitle: string) => {
    if (setCurrentPage) {
      if (serviceTitle.includes('Custom Home')) {
        setCurrentPage('custom-homes');
      } else if (serviceTitle.includes('Renovation') || serviceTitle.includes('Kitchen') || serviceTitle.includes('Bathroom')) {
        setCurrentPage('renovations');
      } else if (serviceTitle.includes('Commercial')) {
        setCurrentPage('commercial');
      } else {
        // Scroll to contact for other services
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="services" background="gray" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we deliver excellence in every project with uncompromising quality and attention to detail.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-navy-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-navy-50 border border-gray-200 hover:border-navy-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredServices.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap] || HomeIcon;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-gold-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Starting from:</span>
                      <span className="font-semibold text-navy-900">{service.startingPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="font-semibold text-navy-900">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full hover:scale-105 transition-transform"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">Why Choose Elite Construction?</h3>
          <p className="text-lg text-gray-600">The difference is in the details</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Licensed & Insured',
              description: 'Fully licensed general contractor with comprehensive insurance coverage for your peace of mind.',
              icon: '🛡️'
            },
            {
              title: '25+ Years Experience',
              description: 'Quarter-century of expertise delivering exceptional construction and renovation projects.',
              icon: '⭐'
            },
            {
              title: 'Premium Materials',
              description: 'We source only the finest materials from trusted suppliers to ensure lasting quality.',
              icon: '💎'
            },
            {
              title: 'In-House Design Team',
              description: 'Our talented designers work closely with you to bring your vision to life.',
              icon: '🎨'
            },
            {
              title: 'Project Warranty',
              description: 'Comprehensive warranty coverage on all workmanship and materials for your protection.',
              icon: '✅'
            },
            {
              title: 'On-Time Delivery',
              description: 'Proven track record of completing projects on schedule and within budget.',
              icon: '⏰'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-navy-900 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your construction or renovation project.
          </p>
          <Button 
            size="lg" 
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 hover:scale-105 transition-transform"
            onClick={scrollToContact}
          >
            Get Free Quote Today
          </Button>
        </Card>
      </div>
    </Section>
  );
};