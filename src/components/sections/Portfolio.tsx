import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { X, ExternalLink, Calendar, MapPin, ArrowRight, Filter, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  details: string[];
  budget: string;
  timeline: string;
}

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Renovations' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Luxury Estate',
      category: 'residential',
      location: 'Beverly Hills, CA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      description: 'A stunning 8,500 sq ft contemporary home featuring floor-to-ceiling windows, smart home technology, and sustainable materials.',
      details: ['8,500 sq ft', 'Smart Home Technology', 'Sustainable Materials', 'Pool & Spa', 'Wine Cellar'],
      budget: '$2.8M',
      timeline: '18 months'
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'commercial',
      location: 'Los Angeles, CA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'A 15-story modern office building with LEED certification and state-of-the-art amenities.',
      details: ['15 Stories', 'LEED Certified', 'Modern Amenities', 'Underground Parking', 'Rooftop Garden'],
      budget: '$45M',
      timeline: '36 months'
    },
    {
      id: 3,
      title: 'Historic Home Restoration',
      category: 'renovation',
      location: 'Pasadena, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      description: 'Complete restoration of a 1920s Craftsman home while preserving its historic character.',
      details: ['Historic Preservation', 'Modern Updates', 'Original Hardwood', 'Updated Kitchen', 'New HVAC'],
      budget: '$850K',
      timeline: '12 months'
    },
    {
      id: 4,
      title: 'Beachfront Resort',
      category: 'commercial',
      location: 'Malibu, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
      description: 'Luxury beachfront resort with 50 suites, spa facilities, and panoramic ocean views.',
      details: ['50 Luxury Suites', 'Spa & Wellness', 'Ocean Views', 'Beach Access', 'Fine Dining'],
      budget: '$25M',
      timeline: '30 months'
    },
    {
      id: 5,
      title: 'Contemporary Kitchen Remodel',
      category: 'renovation',
      location: 'Santa Monica, CA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
      description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and premium appliances.',
      details: ['Custom Cabinetry', 'Quartz Countertops', 'Premium Appliances', 'LED Lighting', 'Wine Storage'],
      budget: '$125K',
      timeline: '8 weeks'
    },
    {
      id: 6,
      title: 'Hilltop Modern Home',
      category: 'residential',
      location: 'Hollywood Hills, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      description: 'Striking modern home perched on a hillside with breathtaking city views and infinity pool.',
      details: ['City Views', 'Infinity Pool', 'Glass Walls', 'Solar Panels', 'Smart Systems'],
      budget: '$3.2M',
      timeline: '20 months'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section id="portfolio" className="bg-white">
      <Helmet>
        <title>Portfolio | Elite Construction & Design</title>
        <meta name="description" content="View our portfolio of completed construction projects including custom homes, commercial buildings, and renovations in Southern California." />
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
            <Eye className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Exceptional Projects, Proven Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that showcase our commitment to 
            quality craftsmanship and innovative design solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* View Details Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-slate-500">Budget:</span>
                        <span className="font-bold text-orange-600 ml-1">{project.budget}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Create Your Dream Project?
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and turn it into reality. Our team is ready to 
            guide you through every step of your construction journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-orange-50"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => navigate('/process')}
            >
              Our Process
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{selectedProject.year}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Project Features</h3>
                    <div className="space-y-3">
                      {selectedProject.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Project Stats</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm text-slate-500 mb-1">Total Investment</div>
                        <div className="text-2xl font-bold text-orange-600">{selectedProject.budget}</div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm text-slate-500 mb-1">Timeline</div>
                        <div className="text-2xl font-bold text-slate-900">{selectedProject.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-200">
                  <Button
                    size="lg"
                    variant="primary"
                    className="bg-orange-500 hover:bg-orange-600 text-white flex-1"
                    onClick={() => {
                      closeModal();
                      navigate('/contact');
                    }}
                  >
                    Start Similar Project
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};