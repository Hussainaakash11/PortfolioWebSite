
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills','tools', 'projects', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools',  href: '#tools'},
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'glass-panel py-2' : 'py-4',
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-medium tracking-tight flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold">AH</span>
          </div>
          <span className="hidden sm:inline">Aakash Hussain</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                'nav-link',
                activeSection === link.href.substring(1) && 'nav-link-active'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel">
          <nav className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={cn(
                  'nav-link',
                  activeSection === link.href.substring(1) && 'nav-link-active'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
