import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { team } from '../../data/team';

export const About: React.FC = () => {
  return (
    <Section id="about" background="gray" padding="xl">
      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Building Excellence Since 1995
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded with a vision to deliver uncompromising quality and craftsmanship, Elite Construction & Design has grown to become one of Southern California's most respected construction companies. Our journey began with a simple belief: every project deserves exceptional attention to detail and personalized service.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Over the past 25 years, we've had the privilege of bringing hundreds of dreams to life, from luxury custom homes to complex commercial projects. Our commitment to excellence, innovation, and client satisfaction has earned us a reputation for delivering projects that exceed expectations.
          </p>
          
          {/* Values */}
          <div className="space-y-4">
            {[
              'Uncompromising Quality in Every Detail',
              'Transparent Communication Throughout',
              'On-Time, On-Budget Project Delivery',
              'Sustainable Building Practices',
              'Long-Term Client Relationships'
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <CheckCircleIcon className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Elite Construction team at work"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
            <div className="text-3xl font-bold text-gold-500">25+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Meet Our Leadership Team
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced team of professionals brings together decades of expertise in construction, design, and project management.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover className="text-center h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold text-navy-900 mb-2">{member.name}</h4>
              <p className="text-gold-600 font-semibold mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
              
              <div className="space-y-1">
                {member.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {cert}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Company Stats */}
      <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h3>
          <p className="text-gray-300">A quarter-century of building excellence</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '25+', label: 'Years in Business' },
            { number: '50+', label: 'Team Members' },
            { number: '100%', label: 'Client Satisfaction' }
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
  );
};