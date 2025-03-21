'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="relative border-l-2 border-indigo-600 ml-3 md:ml-6 pl-6 md:pl-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] md:-left-[53px] mt-1.5 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-indigo-400">{job.role}</h3>
                  <div className="text-sm text-gray-400 mt-1 md:mt-0">
                    {job.period}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div className="font-medium">{job.company}</div>
                  <div className="text-gray-400 mt-1 md:mt-0">{job.location}</div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}