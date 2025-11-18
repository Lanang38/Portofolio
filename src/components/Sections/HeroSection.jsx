import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import PROFILE_PIC from '../../assets/Image/Profile.jpg';

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <div
      className={`relative overflow-hidden min-h-screen transition-all duration-500 ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* BACKGROUND BLOBS */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 100, 300] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
            }`}
          />

          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 100, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* ===========================
              📱 MOBILE VERSION
          ============================= */}
          <div className="block lg:hidden">
            {/* PROFILE IMAGE MOBILE */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div
                variants={imageVariants}
                className="w-40 h-40 mx-auto relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`absolute w-[125%] h-[125%]
                    rounded-3xl
                    ring-[3px]
                    ${isDarkMode ? 'ring-blue-500/25' : 'ring-blue-400/30'}
                    blur-[3px]
                    opacity-90
                    `}
                />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-full h-full rounded-3xl overflow-hidden shadow-xl border ${
                    isDarkMode ? 'border-gray-800' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* LABEL */}
            <motion.div
              variants={textVariants}
              className={`text-center text-sm uppercase tracking-widest mb-4 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`}
            >
              Full Stack Developer
            </motion.div>

            {/* HEADLINE MOBILE */}
            <motion.h1
              variants={itemVariants}
              className="text-center text-3xl md:text-5xl font-light mb-6 leading-tight"
            >
              Building Digital{' '}
              <span className="text-blue-500 font-medium">Experiences</span>
              <br /> that matter
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className={`text-center text-base mt-4 mb-8 max-w-xl mx-auto font-light leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I craft clean and efficient code, transforming ideas into engaging
              digital experiences.
            </motion.p>

            {/* CTA MOBILE */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 mb-10"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('work')}
                className="w-full max-w-xs px-8 py-3 rounded-full text-sm uppercase font-semibold bg-blue-600 text-white hover:bg-blue-700"
              >
                View Work
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className={`w-full max-w-xs px-8 py-3 rounded-full text-sm uppercase border ${
                  isDarkMode
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* SOCIALS MOBILE */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-5"
            >
              {[
                { icon: FiGithub, link: 'https://github.com/username' },
                {
                  icon: FiLinkedin,
                  link: 'https://www.linkedin.com/in/username/',
                },
                { icon: Mail, link: 'mailto:email@gmail.com' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* TECH STACK MOBILE */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-3 justify-center"
            >
              {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, i) => (
                <span
                  key={i}
                  className={`${
                    isDarkMode ? 'text-gray-500' : 'text-gray-600'
                  }`}
                >
                  {tech}
                  {i !== 3 && (
                    <span
                      className={`mx-1 ${
                        isDarkMode ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ===========================
              💻 DESKTOP VERSION
          ============================= */}
          <div className="hidden lg:flex items-center justify-between gap-10 px-4">
            {/* LEFT TEXT BLOCK */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex-1"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest mb-4 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-6xl font-light leading-tight mb-6"
              >
                Building digital{' '}
                <span className="text-blue-500 font-semibold">experiences</span>
                <br /> that matter
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg max-w-xl font-light leading-relaxed mb-10 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA BUTTONS DESKTOP */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-3 rounded-full text-sm uppercase font-semibold tracking-wider bg-blue-600 text-white hover:bg-blue-700"
                >
                  View Work
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 rounded-full text-sm uppercase border ${
                    isDarkMode
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* SOCIALS */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                {[
                  { icon: FiGithub, link: 'https://github.com/Lanang38' },
                  {
                    icon: FiLinkedin,
                    link: 'https://www.linkedin.com/in/cokorda-gde-lanang',
                  },
                  { icon: Mail, link: 'mailto:cokde38@gmail.com' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE BLOCK */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex-1 flex items-center justify-center relative"
            >
              {/* TECH STACK FLOATING */}
              <div className="absolute top-0 flex gap-6 mb-6 opacity-70 text-sm tracking-wide">
                {['React', 'Node.js', 'TypeScript', 'MongoDB'].map(
                  (tech, i) => (
                    <span key={i}>
                      {tech}
                      {i !== 3 && (
                        <span
                          className={
                            isDarkMode ? 'text-gray-700' : 'text-gray-400'
                          }
                        >
                          {'  ·  '}
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>

              {/* === NEW: ROTATING RING (DESKTOP) === */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className={`
                  absolute w-[420px] h-[520px]
                  rounded-3xl
                  ring-4
                  ${isDarkMode ? 'ring-blue-500/25' : 'ring-blue-400/30'}
                  blur-[3px]
                  opacity-90
                  `}
                style={{ zIndex: 0 }}
              />

              {/* IMAGE CARD */}
              <div
                className={`
                  w-[360px] h-[460px] rounded-3xl overflow-hidden
                  shadow-2xl border relative backdrop-blur-lg
                  ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}
                  `}
                style={{
                  boxShadow: isDarkMode
                    ? '0 0 50px rgba(59,130,246,0.15)'
                    : '0 0 50px rgba(59,130,246,0.25)',
                  zIndex: 1,
                }}
              >
                <img
                  src={PROFILE_PIC}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex justify-center"
          >
            <ArrowDown
              size={20}
              onClick={() => scrollToSection('skill')}
              className={`cursor-pointer ${
                isDarkMode
                  ? 'text-gray-600 hover:text-white'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
