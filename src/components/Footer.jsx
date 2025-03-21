'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="#person" className="font-bold text-xl gradient-text">Rohit Boni</Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Software Engineer specializing in backend development, microservices architecture, and cloud technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a href="mailto:bonirohit@gmail.com" className="hover:text-indigo-400 transition-colors">
                  bonirohit@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaGithub className="mr-2" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaLinkedin className="mr-2" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Rohit Boni. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:bonirohit@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}