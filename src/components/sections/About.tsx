import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { CheckCircle, Users, Trophy, Clock, Star, ArrowRight, Award, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: Trophy },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Expert Team', icon: Users }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, using premium materials and superior craftsmanship.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'On-time delivery and within budget completion are our standard commitments to every client.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent communication and honest business practices build lasting relationships with our clients.'
    }
  ];

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      experience: '25+ years'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e2c1?auto=format&fit=crop&w=400&q=80',
      experience: '15+ years'
    },
    {
      name: 'David Thompson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      experience: '12+ years'
    }
  ];

  return (
    <Section id="about" className="bg-gradient-to-br from-slate-50 to-white">
      <Helmet>
        <title>About Us | Elite Construction & Design</title>
        <meta name="description" content="Learn about Elite Construction & Design's 25+ years of experience in custom homes, renovations, and commercial construction in Southern California." />
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
            <Users className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Building Dreams for Over 25 Years
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Elite Construction & Design has been Southern California's premier construction 
            partner, transforming visions into extraordinary realities with unmatched expertise.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Our Story of Excellence
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 1999, Elite Construction & Design began with a simple mission: 
              to build exceptional homes and commercial spaces that exceed expectations. 
              What started as a small family business has grown into Southern California's 
              most trusted construction partner.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Our success stems from our unwavering commitment to quality, innovation, 
              and client satisfaction. Every project we undertake reflects our dedication 
              to superior craftsmanship and attention to detail.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Licensed & Insured</h4>
                  <p className="text-slate-600">Fully licensed general contractor with comprehensive insurance coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Award-Winning Team</h4>
                  <p className="text-slate-600">Recognized by industry leaders for exceptional quality and innovation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Sustainable Practices</h4>
                  <p className="text-slate-600">Committed to eco-friendly construction methods and materials.</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="primary"
              className="bg-orange-500 hover:bg-orange-600 text-white group"
              onClick={() => navigate('/process')}
            >
              Learn About Our Process
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80"
                alt="Elite Construction team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Since 1999</div>
                <div className="text-sm opacity-90">Building Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we complete.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Meet Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our experienced professionals bring decades of expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                  <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.experience} of expertise</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Work with the Best?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their construction dreams. 
            Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              className="bg-orange-500 hover:bg-orange-600 text-white group"
              onClick={() => navigate('/contact')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900"
              onClick={() => navigate('/portfolio')}
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};