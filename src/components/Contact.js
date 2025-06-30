import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCalendar, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Load Cal.com script and initialize
  useEffect(() => {
    // Cal.com embed initialization
    const initCal = () => {
      if (window.Cal) {
        // Initialize 30min meeting
        window.Cal("init", "30min", {origin:"https://app.cal.com"});
        
        window.Cal.ns["30min"]("inline", {
          elementOrSelector:"#cal-embed-container",
          config: {"layout":"month_view"},
          calLink: "kunal-bhandari/30min",
        });

        window.Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      }
    };

    // Load Cal.com script
    if (!window.Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = initCal;
      document.head.appendChild(script);
      
      // Initialize Cal function
      window.Cal = window.Cal || function () { 
        let cal = window.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          cal.loaded = true; 
        } 
        if (ar[0] === "init") { 
          const api = function () { 
            api.q.push(arguments); 
          }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            api.q.push(ar);
            cal.q.push(["initNamespace", namespace]);
          } else {
            cal.q.push(ar);
          } 
          return;
        } 
        cal.q.push(ar); 
      };
    } else {
      initCal();
    }

    return () => {
      // Cleanup
      if (window.Cal && window.Cal.ns) {
        delete window.Cal.ns["30min"];
      }
    };
  }, []);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out through the form below or schedule a meeting!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass dark:glass-dark rounded-xl p-6 neumorphism dark:neumorphism-dark"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 break-words">kunalxbhandari@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass dark:glass-dark rounded-xl p-6 neumorphism dark:neumorphism-dark"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+918360135175</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass dark:glass-dark rounded-xl p-6 neumorphism dark:neumorphism-dark col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">India</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <FiMessageSquare className="text-primary-500" />
                <span>Send a Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiUser className="inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiMail className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiMessageSquare className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center py-2 px-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    }`}
                  >
                    {submitStatus === 'success'
                      ? '✅ Message sent successfully! I\'ll get back to you soon.'
                      : '❌ Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <FiCalendar className="text-primary-500" />
                <span>Schedule a Meeting</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Prefer to have a direct conversation? Schedule a 30-minute call to discuss your project, 
                collaboration opportunities, or anything tech-related!
              </p>
              
              {/* Cal.com Embed Container */}
              <div 
                id="cal-embed-container"
                style={{
                  width: '100%',
                  height: '700px',
                  overflow: 'scroll',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#ffffff'
                }}
                className="dark:border-gray-600 dark:bg-gray-800"
              ></div>
              
              {/* Fallback for when Cal.com doesn't load */}
              <div className="cal-fallback mt-4 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Can't see the calendar? 
                </p>
                <motion.a
                  href="https://cal.com/kunal-bhandari/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <FiCalendar size={18} />
                  <span>Schedule 30 Min Meeting</span>
                </motion.a>
              </div>
            </div>

            {/* Quick Response Time */}
            <div className="glass dark:glass-dark rounded-xl p-6 neumorphism dark:neumorphism-dark text-center">
              <div className="flex items-center justify-center space-x-2 text-primary-500 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Quick Response</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 