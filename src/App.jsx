import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Sections/HeroSection.jsx';
import SkillSection from './components/Sections/SkillSection.jsx';
import ProjectsSection from './components/Sections/ProjectsSection.jsx';
import AboutSection from './components/Sections/AboutSection.jsx';
import ContactSection from './components/Sections/ContactSection.jsx';
import Footer from './components/Sections/Footer.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
