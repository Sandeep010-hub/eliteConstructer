import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, BuildingOfficeIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const commercialServices = [
  {
    title: 'Office Buildings',
    description: 'Modern office spaces designed for productivity and collaboration',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Open floor plans', 'Conference rooms', 'Break areas', 'Technology integration']
  },
  {
    title: 'Retail Spaces',
    description: 'Attractive retail environments that enhance customer experience',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Customer flow optimization', 'Display areas', 'Storage solutions', 'Security systems']
  },
  {
    title: 'Restaurants',
    description: 'Functional and inviting dining spaces with commercial kitchen design',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Commercial kitchens', 'Dining areas', 'Bar design', 'Health code compliance']
  },
  {
    title: 'Warehouses',
    description: 'Efficient industrial spaces optimized for logistics and storage',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Loading docks', 'Storage systems', 'Office integration', 'Safety features']
  }
];

const projectTypes = [
  {
    category: 'New Construction',
    description: 'Ground-up commercial building construction',
    timeline: '12-36 months',
    investment: '$2M - $50M+',
    services: ['Site preparation', 'Foundation work', 'Structural framing', 'MEP systems', 'Interior buildout']
  },
  {
    category: 'Tenant Improvements',
    description: 'Customizing existing spaces for new tenants',
    timeline: '2-6 months',
    investment: '$50K - $2M',
    services: ['Space planning', 'Demolition', 'Electrical/plumbing', 'Flooring', 'Paint and finishes']
  },
  {
    category: 'Renovations',
    description: 'Updating and modernizing existing commercial spaces',
    timeline: '3-12 months',
    investment: '$100K - $5M',
    services: ['Structural updates', 'System upgrades', 'Interior renovation', 'Code compliance', 'Accessibility improvements']
  }
];

export const Commercial: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Commercial Construction
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional commercial construction services for offices, retail, restaurants, and industrial facilities. We deliver projects on time, within budget, and to the highest quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Project Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  if (setCurrentPage) {
                    setCurrentPage('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                View Commercial Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Commercial construction project"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-gold-500">150+</div>
              <div className="text-sm">Commercial Projects</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Commercial Services */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Commercial Construction Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in a wide range of commercial construction projects, from small tenant improvements to large-scale new construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" className="w-full">
                  Learn More About {service.title}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Project Types */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Commercial Project Types
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need new construction, tenant improvements, or renovations, we have the expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{type.category}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Timeline</div>
                    <div className="font-bold text-navy-900">{type.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Investment</div>
                    <div className="font-bold text-navy-900">{type.investment}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Services Included</h4>
                  <ul className="space-y-1">
                    {type.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" className="w-full">
                  Get {type.category} Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Why Choose Elite for Commercial Projects?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commercial construction expertise ensures your project is completed professionally, safely, and on schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Licensed & Bonded',
              description: 'Fully licensed commercial contractor with comprehensive bonding and insurance coverage.',
              icon: ShieldCheckIcon
            },
            {
              title: 'Project Management',
              description: 'Dedicated project managers ensure seamless coordination and communication throughout.',
              icon: CogIcon
            },
            {
              title: 'Code Compliance',
              description: 'Expert knowledge of commercial building codes and regulatory requirements.',
              icon: BuildingOfficeIcon
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Commercial Stats */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Commercial Construction by the Numbers</h3>
            <p className="text-gray-300">Proven track record of commercial project success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Commercial Projects' },
              { number: '98%', label: 'On-Time Completion' },
              { number: '$500M+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commercial construction expertise spans multiple industries and business types.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'Healthcare',
            'Education',
            'Retail',
            'Hospitality',
            'Technology',
            'Manufacturing',
            'Financial',
            'Government',
            'Non-Profit',
            'Entertainment',
            'Automotive',
            'Food Service'
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-4 text-center hover:bg-navy-900 hover:text-white transition-colors duration-300"
            >
              <div className="font-semibold">{industry}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" padding="xl">
        <Card className="bg-navy-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Commercial Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial construction needs and develop a plan that meets your timeline, budget, and quality requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              Schedule Project Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-navy-900">
              Request Commercial Quote
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
};