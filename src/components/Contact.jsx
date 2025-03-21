'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulated success - in production connect this to a real API endpoint
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitStatus(null);
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <a href="mailto:bonirohit@gmail.com" className="text-lg hover:text-indigo-400 transition-colors">
                      bonirohit@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                    <a href="tel:+919307983114" className="text-lg hover:text-indigo-400 transition-colors">
                      +91 9307983114
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-400 transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center">
                    <FaGithub className="text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-400">GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-400 transition-colors">
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-indigo-600/10 rounded-lg">
                <h4 className="font-medium mb-2">Current Status</h4>
                <p className="text-gray-300">
                  I'm currently open to new projects and opportunities in software engineering and AI/ML development.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-md text-white font-medium transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-md">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}