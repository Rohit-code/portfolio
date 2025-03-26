'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * 0.05);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Loop particles if they go out of bounds
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="person" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm {' '}
              <span className="gradient-text">Rohit Boni</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1000,
                  'AI/ML Engineer',
                  1000,
                  'Backend Developer',
                  1000,
                  'Microservices Specialist',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-light text-gray-300"
              />
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Building scalable microservices, cloud-native applications, and AI-powered solutions
              with a focus on performance and security.
            </p>
            
            <div className="flex space-x-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-transparent border border-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-600/20 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </div>
            
            <div className="flex mt-8 space-x-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ y: -5, color: '#6366f1' }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: '#6366f1' }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: '#6366f1' }}
                href="mailto:bonirohit@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-indigo-600/20 animate-glow" />
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                  src="/pic.jpg" 
                  alt="Rohit Boni"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5 
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
