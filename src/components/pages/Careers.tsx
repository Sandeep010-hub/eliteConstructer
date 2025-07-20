import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const openPositions = [
  {
    title: 'Project Manager',
    department: 'Construction',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead construction projects from planning to completion, ensuring quality, timeline, and budget adherence.',
    requirements: ['PMP certification preferred', 'Construction management experience', 'Strong communication skills', 'Knowledge of building codes']
  },
  {
    title: 'Site Supervisor',
    department: 'Construction',
    location: 'Orange County, CA',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Oversee daily construction activities, manage subcontractors, and ensure safety compliance on job sites.',
    requirements: ['OSHA 30-hour certification', 'Construction supervision experience', 'Safety management skills', 'Leadership abilities']
  },
  {
    title: 'Architectural Designer',
    department: 'Design',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Create architectural plans and designs for residential and commercial projects using CAD software.',
    requirements: ['Architecture degree', 'AutoCAD proficiency', 'Creative design skills', 'Building code knowledge']
  },
  {
    title: 'Estimator',
    department: 'Pre-Construction',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Prepare accurate cost estimates for construction projects, analyze blueprints, and coordinate with suppliers.',
    requirements: ['Construction estimating experience', 'Blueprint reading skills', 'Excel proficiency', 'Attention to detail']
  }
];

const benefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance for you and your family.',
    icon: HeartIcon
  },
  {
    title: 'Professional Development',
    description: 'Continuing education opportunities, certifications, and career advancement programs.',
    icon: AcademicCapIcon
  },
  {
    title: 'Team Culture',
    description: 'Collaborative work environment with team building events and recognition programs.',
    icon: UserGroupIcon
  }
];

export const Careers: React.FC = () => {
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build your career with Elite Construction & Design. We're looking for talented professionals who share our commitment to excellence and quality craftsmanship.
            </p>
            <Button size="lg" variant="primary" onClick={() => navigate('/careers')}>
              View Open Positions
            </Button>
          </motion.div>
        </div>

        {/* Company Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Elite Construction & Design, we believe our people are our greatest asset. We foster a culture of collaboration, innovation, and continuous learning where every team member can thrive and grow.
            </p>
            <div className="space-y-4">
              {[
                'Competitive compensation and benefits',
                'Opportunities for career advancement',
                'Collaborative and supportive work environment',
                'Cutting-edge tools and technology',
                'Work-life balance initiatives',
                'Recognition and rewards programs'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Elite Construction team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Employee Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive benefits and perks to support our team members' well-being and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
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

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '401(k) Matching', description: 'Company match up to 6%' },
            { title: 'Paid Time Off', description: '3+ weeks vacation' },
            { title: 'Flexible Schedule', description: 'Work-life balance' },
            { title: 'Tool Allowance', description: 'Annual tool budget' },
            { title: 'Safety Bonus', description: 'Quarterly safety rewards' },
            { title: 'Training Budget', description: 'Professional development' },
            { title: 'Company Events', description: 'Team building activities' },
            { title: 'Referral Bonus', description: 'Earn for referrals' }
          ].map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <h4 className="font-semibold text-navy-900 mb-2">{perk.title}</h4>
              <p className="text-sm text-gray-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Current Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our current job opportunities and find the perfect role to advance your construction career.
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-navy-900">{position.title}</h3>
                      <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <span>📍 {position.location}</span>
                      <span>⏱️ {position.experience}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Button 
                      className="w-full mb-3"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Application Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined application process is designed to find the best fit for both you and our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Apply Online',
              description: 'Submit your application and resume through our online portal'
            },
            {
              step: '2',
              title: 'Initial Review',
              description: 'Our HR team reviews your qualifications and experience'
            },
            {
              step: '3',
              title: 'Interview',
              description: 'Meet with our hiring managers and team members'
            },
            {
              step: '4',
              title: 'Welcome Aboard',
              description: 'Complete onboarding and start your Elite Construction career'
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

      {/* CTA Section */}
      <Section padding="xl">
        <Card className="bg-navy-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Career?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our team of construction professionals and help us continue building exceptional spaces across Southern California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" onClick={() => navigate('/careers')}>
              View All Positions
            </Button>
            <Button variant="ghost" size="lg" darkBg={true} onClick={() => navigate('/careers-application')}>
              Submit General Application
            </Button>
          </div>
        </Card>
      </Section>
    </div>
  );
};