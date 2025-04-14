
import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Cert from '@/components/Cert';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="min-h-screen">
          <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Tools />
          <Projects />
          <Cert />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeToggle>
  );
};

export default Index;
