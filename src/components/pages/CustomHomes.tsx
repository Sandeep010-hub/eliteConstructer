import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, HomeIcon, SparklesIcon, CogIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const customHomeFeatures = [
  {
    title: 'Architectural Design',
    description: 'Work with our in-house architects to create a unique design that reflects your lifestyle and preferences.',
    icon: HomeIcon
  },
  {
    title: 'Premium Materials',
    description: 'Choose from the finest materials and finishes to create a truly luxurious living experience.',
    icon: SparklesIcon
  },
  {
    title: 'Smart Home Integration',
    description: 'Modern technology seamlessly integrated throughout your home for comfort and convenience.',
    icon: CogIcon
  }
];

const buildingProcess = [
  {
    phase: 'Design Phase',
    duration: '4-8 weeks',
    description: 'Architectural plans, engineering, and permit applications',
    details: ['Site analysis', 'Architectural drawings', 'Structural engineering', 'Permit submission']
  },
  {
    phase: 'Pre-Construction',
    duration: '2-4 weeks',
    description: 'Final preparations and material ordering',
    details: ['Material selection', 'Subcontractor coordination', 'Site preparation', 'Final approvals']
  },
  {
    phase: 'Foundation & Framing',
    duration: '6-10 weeks',
    description: 'Foundation work and structural framing',
    details: ['Excavation', 'Foundation pour', 'Framing', 'Roof installation']
  },
  {
    phase: 'Systems Installation',
    duration: '8-12 weeks',
    description: 'Electrical, plumbing, and HVAC systems',
    details: ['Electrical rough-in', 'Plumbing installation', 'HVAC systems', 'Insulation']
  },
  {
    phase: 'Interior Finishes',
    duration: '10-16 weeks',
    description: 'Flooring, cabinetry, and interior details',
    details: ['Drywall and paint', 'Flooring installation', 'Kitchen and bathrooms', 'Trim and fixtures']
  },
  {
    phase: 'Final Details',
    duration: '2-4 weeks',
    description: 'Landscaping and final inspections',
    details: ['Exterior finishes', 'Landscaping', 'Final inspections', 'Move-in ready']
  }
];

export const CustomHomes: React.FC = () => {
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
              Custom Home Construction
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build the home of your dreams with our expert team. From initial design to final walkthrough, we'll guide you through every step of creating your perfect custom home.
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
                Schedule Design Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setCurrentPage && setCurrentPage('portfolio')}
              >
                View Custom Home Gallery
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
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury custom home"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-gold-500">500+</div>
              <div className="text-sm">Custom Homes Built</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Why Choose Custom Home Construction?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A custom home allows you to create exactly what you want, where you want it, with the features and finishes that matter most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {customHomeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center h-full">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Custom Home Benefits</h3>
            <div className="space-y-4">
              {[
                'Personalized design tailored to your lifestyle',
                'Energy-efficient systems and materials',
                'Premium finishes and luxury amenities',
                'Optimal lot utilization and orientation',
                'Modern technology integration',
                'Long-term value and investment protection'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Investment Value</h3>
            <Card className="bg-navy-900 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">15-20%</div>
                  <div className="text-sm">Higher Resale Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">30%</div>
                  <div className="text-sm">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">25+</div>
                  <div className="text-sm">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-2">100%</div>
                  <div className="text-sm">Customization</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Building Process */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Custom Home Building Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures your custom home is built to the highest standards, on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildingProcess.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-navy-900 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{phase.phase}</h3>
                  <p className="text-sm text-gold-600 font-semibold">{phase.duration}</p>
                </div>
                <p className="text-gray-600 mb-4 text-center">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Custom Home Investment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our custom homes are priced based on size, finishes, and complexity. Here are our typical investment ranges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Essential Custom',
              price: '$400-600K',
              sqft: '2,000-3,000 sq ft',
              features: ['Standard finishes', 'Energy-efficient systems', 'Open floor plans', 'Quality appliances', '2-car garage']
            },
            {
              title: 'Premium Custom',
              price: '$600K-1.2M',
              sqft: '3,000-4,500 sq ft',
              features: ['Premium finishes', 'Smart home features', 'Luxury bathrooms', 'Gourmet kitchen', 'Outdoor living spaces']
            },
            {
              title: 'Luxury Estate',
              price: '$1.2M+',
              sqft: '4,500+ sq ft',
              features: ['Ultra-luxury finishes', 'Wine cellars', 'Home theaters', 'Pool and spa', 'Guest quarters']
            }
          ].map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className={`h-full ${index === 1 ? 'ring-2 ring-gold-500' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{tier.title}</h3>
                  <div className="text-3xl font-bold text-gold-600 mb-1">{tier.price}</div>
                  <div className="text-sm text-gray-600">{tier.sqft}</div>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full mt-6">
                  Get Detailed Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <Card className="bg-navy-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom home that perfectly fits your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              Schedule Design Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-navy-900">
              Download Custom Home Guide
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
};