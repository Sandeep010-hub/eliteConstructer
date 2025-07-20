import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, UserGroupIcon, DocumentTextIcon, WrenchScrewdriverIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const processSteps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'We meet with you to understand your vision, requirements, and budget. Our team conducts a thorough site assessment.',
    icon: UserGroupIcon,
    duration: '1-2 hours',
    deliverables: ['Project assessment', 'Initial budget estimate', 'Timeline overview']
  },
  {
    id: 2,
    title: 'Design & Planning',
    description: 'Our design team creates detailed plans and 3D renderings. We handle all permits and regulatory approvals.',
    icon: DocumentTextIcon,
    duration: '2-4 weeks',
    deliverables: ['Architectural plans', 'Material selections', 'Permit applications', '3D visualizations']
  },
  {
    id: 3,
    title: 'Pre-Construction',
    description: 'Final preparations including material ordering, subcontractor coordination, and site preparation.',
    icon: ClockIcon,
    duration: '1-2 weeks',
    deliverables: ['Material delivery schedule', 'Subcontractor agreements', 'Site preparation', 'Final timeline']
  },
  {
    id: 4,
    title: 'Construction Phase',
    description: 'Expert craftsmen bring your vision to life with regular progress updates and quality inspections.',
    icon: WrenchScrewdriverIcon,
    duration: 'Project dependent',
    deliverables: ['Weekly progress reports', 'Quality inspections', 'Photo updates', 'Change order management']
  },
  {
    id: 5,
    title: 'Final Inspection',
    description: 'Comprehensive quality check and walkthrough to ensure everything meets our high standards.',
    icon: CheckCircleIcon,
    duration: '1-2 days',
    deliverables: ['Quality inspection', 'Punch list completion', 'Systems testing', 'Documentation handover']
  },
  {
    id: 6,
    title: 'Project Completion',
    description: 'Final walkthrough, key handover, and warranty documentation. Ongoing support for any questions.',
    icon: HomeIcon,
    duration: '1 day',
    deliverables: ['Final walkthrough', 'Warranty documentation', 'Maintenance guidelines', 'Support contact info']
  }
];

export const Process: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20">
      <Section padding="xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Construction Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final handover, we follow a proven process that ensures quality, transparency, and client satisfaction at every step.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-500 hidden md:block"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-navy-900 rounded-full items-center justify-center mr-8 relative z-10">
                    <step.icon className="w-8 h-8 text-gold-500" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-4 md:hidden">
                          <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center mr-4">
                            <step.icon className="w-6 h-6 text-gold-500" />
                          </div>
                          <div className="text-sm text-gold-600 font-semibold">Step {step.id}</div>
                        </div>
                        <div className="hidden md:block text-sm text-gold-600 font-semibold mb-2">Step {step.id}</div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="w-4 h-4 mr-2" />
                          <span>Duration: {step.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy-900 mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence at every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regular Inspections',
                description: 'Quality checks at every milestone to ensure work meets our high standards.',
                icon: '🔍'
              },
              {
                title: 'Licensed Professionals',
                description: 'All work performed by licensed, insured, and experienced craftsmen.',
                icon: '👷'
              },
              {
                title: 'Premium Materials',
                description: 'We source only the finest materials from trusted, established suppliers.',
                icon: '💎'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-navy-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and how our proven process can bring it to life. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" className="w-full sm:w-auto" onClick={() => navigate('/contact')}>
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/process-quote')}>
                Get Process Quote
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};