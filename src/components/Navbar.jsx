import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 
        backdrop-blur-md border-b
        ${
          isDarkMode
            ? 'bg-gray-950/80 border-gray-800'
            : 'bg-gray-50/80 border-gray-200'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Code2 size={24} className="text-blue-500" />
          <span
            className={`text-lg ml-1 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Time to Program
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Skill', 'Work', 'About', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wider transition-colors
                ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {item}
            </motion.button>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors
              ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-black'
              }
            `}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark mode button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors
              ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-black hover:bg-gray-200'
              }
            `}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Menu toggle button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors
              ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-black hover:bg-gray-200'
              }
            `}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`
              md:hidden mt-4 p-4 rounded-lg
              ${isDarkMode ? 'bg-gray-900' : 'bg-white'}
              border
              ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}
            `}
          >
            {['Home', 'Skill', 'Work', 'About', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`
                  block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors
                  ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
