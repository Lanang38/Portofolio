import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Sections/HeroSection.jsx';
import SkillSection from './components/Sections/SkillSection.jsx';
import ProjectsSection from './components/Sections/ProjectsSection.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
