'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projects } from '@/data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    // Assuming each project has images array with paths to multiple images
    if (selectedProject?.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };
  
  // Helper function to get project images
  const getProjectImages = (project) => {
    // If the project has an images array, use it
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    // Otherwise, use the single image property as a fallback
    return project.image ? [project.image] : ["/project-placeholder.jpg"];
  };
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent development work, from microservices to cloud applications
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                  filter === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="project-card bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
                onClick={() => openProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getProjectImages(project)[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 bg-indigo-600 text-xs text-white rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full py-2 mt-2 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 rounded-md transition-colors duration-300 text-sm">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Project Modal with Image Gallery */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-60 md:h-80">
                  {/* Image Gallery */}
                  <Image
                    src={getProjectImages(selectedProject)[currentImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Image Navigation Controls */}
                  {getProjectImages(selectedProject).length > 1 && (
                    <>
                      <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                        onClick={prevImage}
                      >
                        <FaArrowLeft />
                      </button>
                      <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                        onClick={nextImage}
                      >
                        <FaArrowRight />
                      </button>
                      
                      {/* Image Indicator Dots */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {getProjectImages(selectedProject).map((_, index) => (
                          <button 
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full ${
                              currentImageIndex === index ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  <button 
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                    onClick={closeProject}
                  >
                    ✕
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-indigo-600 text-sm text-white rounded-md mt-2 md:mt-0">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}