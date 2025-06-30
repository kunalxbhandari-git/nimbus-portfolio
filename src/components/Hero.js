import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Scroll to about section
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 sm:pt-20 md:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs sm:text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animate">
              Kunal Bhandari
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 sm:mb-8"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
          >
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications that solve 
            real-world problems. Let's build something amazing together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <motion.a
              href="https://github.com/kunalxbhandari-git"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px]"
            >
              <FiGithub size={16} className="sm:hidden" />
              <FiGithub size={20} className="hidden sm:block" />
              <span>View GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/kunalxbhandari"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px]"
            >
              <FiLinkedin size={16} className="sm:hidden" />
              <FiLinkedin size={20} className="hidden sm:block" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Kunal_Bhandari_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 min-h-[44px]"
            >
              <FiDownload size={16} className="sm:hidden" />
              <FiDownload size={20} className="hidden sm:block" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 sm:p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <FiArrowDown size={20} className="sm:hidden animate-bounce" />
              <FiArrowDown size={24} className="hidden sm:block animate-bounce" />
            </motion.button>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-primary-500 rounded-full opacity-60 float"></div>
      <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-purple-500 rounded-full opacity-40 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-8 sm:left-20 w-4 sm:w-5 h-4 sm:h-5 bg-pink-500 rounded-full opacity-50 float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-32 sm:bottom-40 right-4 sm:right-10 w-3 h-3 bg-blue-500 rounded-full opacity-70 float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero; 