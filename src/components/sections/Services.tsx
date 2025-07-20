import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Home, Wrench, Building2, Palette, ShieldCheck, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: 'Custom Home Construction',
      description: 'Design and build your dream home from the ground up with our comprehensive custom home construction services.',
      features: ['Architectural Design', 'Permit Handling', 'Quality Materials', '5-Year Warranty'],
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      route: '/custom-homes'
    },
    {
      icon: Wrench,
      title: 'Home Renovations',
      description: 'Transform your existing space with our comprehensive renovation services tailored to your lifestyle and budget.',
      features: ['Kitchen Remodeling', 'Bathroom Updates', 'Room Additions', 'Full Home Makeovers'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      route: '/renovations'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Professional commercial construction services for businesses, offices, and retail spaces.',
      features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Warehouses'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      route: '/commercial'
    },
    {
      icon: Palette,
      title: 'Design Consultation',
      description: 'Expert design consultation to help you plan and visualize your construction or renovation project.',
      features: ['3D Visualization', 'Material Selection', 'Space Planning', 'Budget Planning'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      route: '/process'
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <Section id="services" className="bg-gradient-to-br from-slate-50 to-slate-100">
      <Helmet>
        <title>Construction Services | Elite Construction & Design</title>
        <meta name="description" content="Comprehensive construction services including custom homes, renovations, commercial projects, and design consultation in Southern California." />
      </Helmet>
      
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From custom homes to commercial projects, we deliver exceptional construction services 
            with unmatched quality and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-500" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      variant="primary"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white group"
                      onClick={() => handleServiceClick(service.route)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Elite Construction?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                With over 25 years of experience, we've built our reputation on quality craftsmanship, 
                transparent communication, and exceeding client expectations.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                    <p className="text-slate-400">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">On-Time Delivery</h4>
                    <p className="text-slate-400">We respect your time and consistently deliver projects on schedule and within budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                    <p className="text-slate-400">Skilled craftsmen and project managers dedicated to bringing your vision to life.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80"
                alt="Construction team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-orange-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your construction project. 
              We'll discuss your vision and provide expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                className="bg-orange-500 hover:bg-orange-600 text-white group"
                onClick={() => {
                  if (location.pathname === '/') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate('/contact');
                  }
                }}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                onClick={() => {
                  if (location.pathname === '/') {
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                      portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate('/portfolio');
                  }
                }}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};