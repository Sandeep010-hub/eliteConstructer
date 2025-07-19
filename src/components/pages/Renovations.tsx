import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, HomeIcon, WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const renovationTypes = [
  {
    title: 'Kitchen Renovations',
    description: 'Transform the heart of your home with custom cabinetry, premium appliances, and stunning countertops.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    startingPrice: '$75,000',
    timeline: '6-12 weeks',
    features: ['Custom cabinetry', 'Premium countertops', 'Professional appliances', 'Designer lighting']
  },
  {
    title: 'Bathroom Renovations',
    description: 'Create a spa-like retreat with luxury fixtures, heated floors, and custom tile work.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    startingPrice: '$45,000',
    timeline: '4-8 weeks',
    features: ['Walk-in showers', 'Heated floors', 'Custom vanities', 'Smart fixtures']
  },
  {
    title: 'Whole Home Renovations',
    description: 'Complete home transformation including structural changes, systems updates, and interior design.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    startingPrice: '$200,000',
    timeline: '6-18 months',
    features: ['Structural modifications', 'Systems upgrades', 'Interior design', 'Permit handling']
  },
  {
    title: 'Home Additions',
    description: 'Expand your living space with seamless additions that match your existing home perfectly.',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
    startingPrice: '$150,000',
    timeline: '4-8 months',
    features: ['Second story additions', 'Room extensions', 'ADU construction', 'Seamless integration']
  }
];

const beforeAfterProjects = [
  {
    title: 'Modern Kitchen Transformation',
    before: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Complete kitchen renovation with custom cabinetry and marble countertops'
  },
  {
    title: 'Luxury Bathroom Remodel',
    before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Spa-like bathroom with walk-in shower and heated floors'
  }
];

export const Renovations: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

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
              Home Renovations & Remodeling
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your existing space into the home of your dreams. From kitchen and bathroom remodels to whole home renovations, we bring new life to every space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Renovation Quote</Button>
              <Button variant="secondary" size="lg">View Before & After Gallery</Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '300+', label: 'Renovations Completed' },
            { number: '95%', label: 'On-Time Completion' },
            { number: '25+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
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

      {/* Renovation Types */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Renovation Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to update a single room or transform your entire home, we have the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renovationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="font-bold text-navy-900">{type.startingPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Timeline</div>
                    <div className="font-bold text-navy-900">{type.timeline}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" className="w-full">
                  Get Quote for {type.title}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Before & After Gallery */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Before & After Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations we've achieved for our clients. Every renovation tells a story of vision becoming reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Project Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {beforeAfterProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-navy-900 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Before/After Comparison */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-4 text-center">Before</h3>
              <img
                src={beforeAfterProjects[selectedProject].before}
                alt="Before renovation"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy-900 mb-4 text-center">After</h3>
              <img
                src={beforeAfterProjects[selectedProject].after}
                alt="After renovation"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <div className="text-center mt-6">
            <p className="text-gray-600">{beforeAfterProjects[selectedProject].description}</p>
          </div>
        </div>
      </Section>

      {/* ROI Calculator */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Renovation Return on Investment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Smart renovations not only improve your quality of life but also increase your home's value. Here's what you can expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { renovation: 'Kitchen Remodel', roi: '85%', value: '+$45,000' },
            { renovation: 'Bathroom Addition', roi: '80%', value: '+$35,000' },
            { renovation: 'Master Suite', roi: '75%', value: '+$55,000' },
            { renovation: 'Home Addition', roi: '70%', value: '+$85,000' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <h3 className="font-bold text-navy-900 mb-4">{item.renovation}</h3>
                <div className="text-3xl font-bold text-gold-500 mb-2">{item.roi}</div>
                <div className="text-sm text-gray-600 mb-2">Average ROI</div>
                <div className="text-lg font-semibold text-navy-900">{item.value}</div>
                <div className="text-sm text-gray-600">Added Value</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Our Renovation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've perfected our renovation process to minimize disruption while maximizing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Design & Planning',
              description: 'Detailed planning, 3D renderings, and permit acquisition',
              icon: HomeIcon
            },
            {
              step: '2',
              title: 'Construction',
              description: 'Expert craftsmanship with minimal disruption to your daily life',
              icon: WrenchScrewdriverIcon
            },
            {
              step: '3',
              title: 'Final Details',
              description: 'Quality inspection, cleanup, and final walkthrough',
              icon: SparklesIcon
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <phase.icon className="w-8 h-8 text-gold-500" />
                </div>
                <div className="text-2xl font-bold text-gold-500 mb-2">Step {phase.step}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" padding="xl">
        <Card className="bg-navy-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your renovation goals and create a plan that brings your vision to life while adding value to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              Schedule Free Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-navy-900">
              Get Renovation Quote
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
};