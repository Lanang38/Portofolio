import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { PROJECTS } from '../../utils/data';
import ProjectCard from '../ProjectCard';
import { containerVariants, itemVariants } from '../../utils/helper';

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      } relative overflow-hidden`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            Projects
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            My Recent Work{' '}
            <span className="text-blue-500 font-medium">Project</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Here are a few projects I've worked on recently. Want to see more?
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </motion.div>

        {/* GitHub Button */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="https://github.com/Lanang38"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3 rounded-full text-sm uppercase border inline-flex items-center gap-2
              ${
                isDarkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            Visit My GitHub
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
