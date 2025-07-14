import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiCode, FiStar } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'AI Fake News Detector',
      description: 'AI fake news detector with 92.5% accuracy using machine learning and NLP. Features real-time analysis, confidence scoring, external verification, and responsive UI with 6 themes. Includes voice input, PDF export, and social sharing.',
      image: '/pictures/fake-news-detector.jpg',
      technologies: ['Python', 'Flask', 'scikit-learn', 'JavaScript', 'Bootstrap', 'NLP'],
      githubUrl: 'https://github.com/kunalxbhandari-git/fake-news-detector',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, and responsive design for seamless shopping experience.',
      image: '/pictures/ecommerce-website.jpg',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/kunalxbhandari-git/ECOMMERCE_WEBSITE',
      featured: false,
    },
    {
      id: 3,
      title: 'Telegram Promo Bot',
      description: 'Automated Telegram bot for promotional activities and user engagement. Built with Python, featuring message automation, user management, and analytics dashboard.',
      image: '/pictures/telegram-promo-bot.jpg',
      technologies: ['Python', 'Telegram API', 'SQLite', 'Automation'],
      githubUrl: 'https://github.com/kunalxbhandari-git/Telegram_promo',
      featured: false,
    },
    {
      id: 4,
      title: 'Telegram Script Manager',
      description: 'Advanced Telegram script management system with automated workflows, message scheduling, and user interaction tracking. Designed for efficient Telegram automation.',
      image: '/pictures/telegram-script-manager.jpg',
      technologies: ['Python', 'Telegram API', 'Asyncio', 'Database'],
      githubUrl: 'https://github.com/kunalxbhandari-git/Telegram_script',
      featured: false,
    },
    {
      id: 5,
      title: 'Dracula SMM',
      description: 'Social Media Marketing automation tool designed for efficient social media management and engagement. Features automated posting, analytics tracking, and multi-platform integration for streamlined social media operations.',
      image: '/pictures/dracula-smm.jpg',
      technologies: ['JavaScript', 'Node.js', 'Express', 'API Development'],
      githubUrl: 'https://draculasmm.xyz/',
      featured: true,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills. Built with React, featuring dark mode, animations, and optimized performance.',
      image: '/pictures/portfolio-website.jpg',
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Responsive Design'],
      githubUrl: 'https://github.com/kunalxbhandari-git/portfolio',
      featured: false,
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            My Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4 sm:mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0"
          >
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving. Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <FiStar size={10} className="sm:hidden" />
                  <FiStar size={12} className="hidden sm:block" />
                  <span className="text-xs">Featured</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 items-center justify-center hidden">
                  <FiCode className="text-4xl sm:text-5xl md:text-6xl text-primary-500/30" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                  >
                    {project.title === 'Dracula SMM' ? (
                      <FiCode size={16} className="sm:hidden" />
                    ) : (
                      <FiGithub size={16} className="sm:hidden" />
                    )}
                    {project.title === 'Dracula SMM' ? (
                      <FiCode size={20} className="hidden sm:block" />
                    ) : (
                      <FiGithub size={20} className="hidden sm:block" />
                    )}
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 md:p-6 flex flex-col h-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-500 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-center hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]"
                  >
                    {project.title === 'Dracula SMM' ? (
                      <>
                        <FiCode size={14} className="sm:hidden" />
                        <FiCode size={16} className="hidden sm:block" />
                        <span>Open Site</span>
                      </>
                    ) : (
                      <>
                        <FiGithub size={14} className="sm:hidden" />
                        <FiGithub size={16} className="hidden sm:block" />
                        <span>View Code</span>
                      </>
                    )}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4 sm:px-0"
        >
          <motion.a
            href="https://github.com/kunalxbhandari-git"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[44px]"
          >
            <FiGithub size={16} className="sm:hidden" />
            <FiGithub size={20} className="hidden sm:block" />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 