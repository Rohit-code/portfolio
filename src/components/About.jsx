'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:order-1 order-2"
          >
            <p className="text-lg text-gray-300 mb-6">
              I'm a Software Engineer with specialization in AI/ML technologies, backend development, and cloud infrastructure. With a background in Chemical Engineering and professional experience across multiple tech stacks, I build robust, scalable solutions with a focus on microservices architecture, containerization, and API development.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My expertise spans Python, JavaScript, and Java ecosystems, with significant experience implementing solutions on AWS and Azure. I'm passionate about developing efficient systems that deliver exceptional performance while maintaining high security standards and test coverage.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Experience</h3>
                <p className="text-gray-400">2+ Years</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Projects</h3>
                <p className="text-gray-400">15+ Completed</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Education</h3>
                <p className="text-gray-400">B.E. Chemical Engineering</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Location</h3>
                <p className="text-gray-400">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:order-2 order-1 relative"
          >
            <div className="aspect-w-1 aspect-h-1 mx-auto max-w-md relative z-10">
              <Image
                src="/about.jpg"
                alt="Working at desk"
                width={500}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-full h-full bg-indigo-600/20 rounded-lg z-0" />
            
            <div className="absolute -bottom-6 -right-6 bg-gray-800 shadow-xl p-6 rounded-lg z-20 max-w-xs">
              <h3 className="font-bold text-xl mb-2 gradient-text">My Goal</h3>
              <p className="text-gray-300">
                To architect and build scalable, maintainable systems that solve real-world problems efficiently.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}