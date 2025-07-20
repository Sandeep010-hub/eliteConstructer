import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, CreditCardIcon, BanknotesIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const financingOptions = [
  {
    title: 'Construction Loans',
    description: 'Short-term financing for new construction projects with competitive rates.',
    icon: BanknotesIcon,
    features: ['Interest-only payments during construction', 'Flexible draw schedule', 'Convert to permanent mortgage', 'Up to 80% loan-to-value'],
    rates: '7.5% - 9.5% APR',
    terms: '6-18 months'
  },
  {
    title: 'Home Equity Lines of Credit',
    description: 'Use your home\'s equity to finance renovation and improvement projects.',
    icon: CreditCardIcon,
    features: ['Access funds as needed', 'Interest-only payment option', 'Tax-deductible interest', 'Revolving credit line'],
    rates: '6.5% - 8.5% APR',
    terms: '10-30 years'
  },
  {
    title: 'Personal Loans',
    description: 'Unsecured financing for smaller renovation projects with quick approval.',
    icon: DocumentTextIcon,
    features: ['No collateral required', 'Fixed monthly payments', 'Quick approval process', 'Flexible loan amounts'],
    rates: '8.5% - 15.5% APR',
    terms: '2-7 years'
  }
];

const lendingPartners = [
  {
    name: 'Wells Fargo',
    logo: '🏦',
    specialties: ['Construction loans', 'Home equity lines'],
    minCredit: 680
  },
  {
    name: 'Bank of America',
    logo: '🏛️',
    specialties: ['Personal loans', 'Home improvement loans'],
    minCredit: 650
  },
  {
    name: 'Chase Bank',
    logo: '🏢',
    specialties: ['Construction loans', 'HELOC'],
    minCredit: 700
  },
  {
    name: 'Local Credit Union',
    logo: '🤝',
    specialties: ['Competitive rates', 'Flexible terms'],
    minCredit: 620
  }
];

export const Financing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Construction Financing Options
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Make your construction or renovation dreams a reality with flexible financing solutions. We work with trusted lenders to help you find the best rates and terms.
            </p>
            <Button size="lg">Get Pre-Qualified Today</Button>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5.5%', label: 'Starting APR' },
            { number: '24hr', label: 'Pre-Approval' },
            { number: '$2M', label: 'Max Loan Amount' },
            { number: '95%', label: 'Approval Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Financing Options */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Financing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from a variety of financing options designed to meet different project needs and financial situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {financingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Rates from</div>
                    <div className="font-bold text-navy-900">{option.rates}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Terms</div>
                    <div className="font-bold text-navy-900">{option.terms}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Qualification Requirements */}
      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Qualification Requirements</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our lending partners have flexible qualification requirements to help more homeowners access construction financing.
            </p>
            <div className="space-y-4">
              {[
                'Credit score of 620 or higher',
                'Stable employment history (2+ years)',
                'Debt-to-income ratio below 43%',
                'Down payment of 10-25% (varies by loan type)',
                'Detailed construction plans and budget',
                'Licensed contractor agreement'
              ].map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-navy-900 text-white">
              <h3 className="text-xl font-bold mb-4">Pre-Qualification Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Annual Income</label>
                  <input
                    type="number"
                    placeholder="$75,000"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Debts</label>
                  <input
                    type="number"
                    placeholder="$2,500"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Credit Score</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                    <option value="">Select range</option>
                    <option value="excellent">750+ (Excellent)</option>
                    <option value="good">700-749 (Good)</option>
                    <option value="fair">650-699 (Fair)</option>
                    <option value="poor">Below 650 (Poor)</option>
                  </select>
                </div>
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Calculate Pre-Qualification
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Lending Partners */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Our Lending Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with established financial institutions to provide competitive rates and flexible terms for your construction project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lendingPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{partner.name}</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Specialties</div>
                  <div className="space-y-1">
                    {partner.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="text-sm text-gray-600">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Min. Credit Score</div>
                  <div className="font-bold text-navy-900">{partner.minCredit}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Simple Application Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting approved for construction financing is easier than you think. Our streamlined process gets you answers quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Pre-Qualification',
              description: 'Complete our online form to get pre-qualified in minutes'
            },
            {
              step: '2',
              title: 'Document Submission',
              description: 'Upload required documents through our secure portal'
            },
            {
              step: '3',
              title: 'Underwriting Review',
              description: 'Our partners review your application and provide approval'
            },
            {
              step: '4',
              title: 'Funding',
              description: 'Receive your funds and start your construction project'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy-900 font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Financing FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: 'What is the difference between a construction loan and a traditional mortgage?',
              answer: 'Construction loans are short-term financing used during the building phase, typically with interest-only payments. They often convert to a permanent mortgage once construction is complete.'
            },
            {
              question: 'How much can I borrow for my construction project?',
              answer: 'Loan amounts vary based on your income, credit score, and project scope. Most lenders offer up to 80% of the completed home\'s appraised value.'
            },
            {
              question: 'What documents do I need for a construction loan application?',
              answer: 'You\'ll need income verification, credit reports, construction plans, contractor agreements, and a detailed project budget.'
            },
            {
              question: 'How long does the approval process take?',
              answer: 'Pre-qualification can happen within 24 hours, while full approval typically takes 30-45 days depending on the complexity of your project.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <Card className="bg-navy-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Finance Your Project?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Get pre-qualified today and take the first step toward making your construction or renovation dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="w-full sm:w-auto" onClick={() => navigate('/contact')}>
              Get Pre-Qualified Now
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/financing-specialist')}>
              Speak with Financing Specialist
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
};