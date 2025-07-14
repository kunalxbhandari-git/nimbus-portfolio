import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kunalxbhandari-git',
      icon: FiGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kunalxbhandari',
      icon: FiLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      url: 'mailto:kunalxbhandari@gmail.com',
      icon: FiMail,
      color: 'hover:text-red-500',
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start space-x-2 mb-4"
            >
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Kunal Bhandari
              </motion.span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto md:mx-0">
              Full Stack Developer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              <span>Back to Top</span>
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
              <span>© {new Date().getFullYear()} Kunal Bhandari. All rights reserved.</span>
            </div>

            {/* Made by Kunal */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
              <motion.span
                className="bg-gradient-to-r from-gray-600 to-primary-500 dark:from-gray-300 dark:to-primary-400 bg-clip-text text-transparent font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Made by Kunal 👨‍💻
              </motion.span>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Contact
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Kunal_Bhandari_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer; 