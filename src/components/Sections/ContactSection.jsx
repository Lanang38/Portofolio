import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import TextInput from '../Input/TextInput';
import { containerVariants, itemVariants } from '../../utils/helper';

const ContactSection = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } relative overflow-hidden`}
    >
      {/* Background Effect */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? 'text-gray-500' : 'text-gray-600'
            } mb-4`}
          >
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get In <span className="text-blue-500 font-medium"> Touch </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Whether you have a question, a project idea, or just want to say hi.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm'
                  : 'bg-gray-50/80 border-gray-200 backdrop-blur-sm'
              }`}
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>

              {/* FORM START */}
              <div className="space-y-6">
                {/* Name + Email (2 columns) */}
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.name}
                    handleInputChange={(text) =>
                      handleInputChange('name', text)
                    }
                    label="Your Name"
                  />

                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.email}
                    handleInputChange={(text) =>
                      handleInputChange('email', text)
                    }
                    label="Email Address"
                  />
                </div>

                {/* Message full width */}
                <TextInput
                  isDarkMode={isDarkMode}
                  value={formData.message}
                  handleInputChange={(text) =>
                    handleInputChange('message', text)
                  }
                  label="Your Message"
                  textarea
                />

                {/* Button full width */}
                <motion.button
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending..</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
