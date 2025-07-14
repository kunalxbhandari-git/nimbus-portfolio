import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiNextdotjs,
  SiExpress
} from 'react-icons/si';

const About = () => {
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

  // Tech stack data
  const techStack = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Kunal, a passionate full-stack developer with over 3 years of experience 
                  in creating digital solutions that make a difference. My journey in tech started 
                  with curiosity and has evolved into a deep love for building scalable, user-centric applications.
                </p>
                <p>
                  I specialize in modern web technologies and have a strong foundation in both 
                  frontend and backend development. I enjoy working with React, Node.js, and Python 
                  to create seamless user experiences backed by robust server-side architecture.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying updated with the latest industry trends.
                </p>
                <p>
                  I'm always excited to take on new challenges and collaborate with teams that 
                  share my passion for innovation and excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center mb-2 group-hover:shadow-xl transition-shadow duration-300">
                      <tech.icon className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary-500">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 