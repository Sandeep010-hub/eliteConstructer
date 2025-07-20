import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatedHeading } from '../ui/AnimatedHeading';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'custom-homes', name: 'Custom Homes' },
  { id: 'renovations', name: 'Renovations' },
  { id: 'commercial', name: 'Commercial' }
];

interface PortfolioProps {
  setCurrentPage?: (page: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.state && location.state.scrollTo === 'portfolio') {
      const section = document.getElementById('portfolio');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear state so it doesn't scroll again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      const images = [selectedProject.image];
      if (selectedProject.beforeImage) images.push(selectedProject.beforeImage);
      if (selectedProject.afterImage) images.push(selectedProject.afterImage);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = [selectedProject.image];
      if (selectedProject.beforeImage) images.push(selectedProject.beforeImage);
      if (selectedProject.afterImage) images.push(selectedProject.afterImage);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleGetQuote = () => {
    closeModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="portfolio" padding="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatedHeading as="h2" className="text-4xl md:text-5xl mb-6 text-navy-900">
            Building Your Dream Projects
          </AnimatedHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of exceptional projects that showcase our commitment to quality, innovation, and craftsmanship.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="secondary"
            size="sm"
            darkBg={false}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-white border-orange-500 text-orange-500 shadow-lg'
                : 'bg-white text-navy-900 border border-gray-200 hover:bg-orange-50 hover:border-orange-500'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.location} • {project.year}</p>
                    <div className="mt-2 text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                      Click to view details
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => navigate('/contact')}
        >
          Start Your Project Today
        </Button>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold text-navy-900">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-6">
                  {(() => {
                    const images = [selectedProject.image];
                    if (selectedProject.beforeImage) images.push(selectedProject.beforeImage);
                    if (selectedProject.afterImage) images.push(selectedProject.afterImage);
                    
                    return (
                      <>
                        <img
                          src={images[currentImageIndex]}
                          alt={selectedProject.title}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                            >
                              <ChevronLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                            >
                              <ChevronRightIcon className="w-6 h-6" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-semibold">{selectedProject.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-semibold">{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-semibold">{selectedProject.specs.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-semibold">{selectedProject.specs.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-semibold">{selectedProject.specs.budget}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h5 className="font-semibold text-navy-900 mb-2">Description</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <Button 
                        className="w-full hover:scale-105 transition-transform"
                        onClick={handleGetQuote}
                      >
                        Get Quote for Similar Project
                      </Button>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {selectedProject.testimonial && (
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-4">Client Testimonial</h4>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex mb-3">
                          {[...Array(selectedProject.testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-5 h-5 text-gold-500" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                          "{selectedProject.testimonial.text}"
                        </p>
                        <p className="font-semibold text-navy-900">
                          — {selectedProject.testimonial.client}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};