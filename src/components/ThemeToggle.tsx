
import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC<{
  children: (props: { toggleTheme: () => void; isDarkMode: boolean }) => React.ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      
      // Update localStorage and DOM
      if (newMode) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  return <>{children({ toggleTheme, isDarkMode })}</>;
};

export default ThemeToggle;
