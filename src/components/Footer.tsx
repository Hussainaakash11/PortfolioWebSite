
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-panel py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold">AH</span>
              </div>
              <span className="font-medium">Aakash Hussain Naikoo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              B.Tech IT Student | ML Enthusiast | Frontend Developer
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Hussainaakash11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-hussain11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.codechef.com/users/aakash_hussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="CodeChef"
            >
              <Code className="h-5 w-5" />
            </a>
            </a>
            <a
              href="https://leetcode.com/u/ghostman11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="CodeChef"
            >
              <Leetcode className="h-5 w-5" />
            </a>
            <a
              href="mailto:hussainaakash11@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Aakash Hussain Naikoo. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="https://drive.google.com/file/d/1G24xPClbT_k54zaCIikbWXoFpY4nEUBV/view?usp=drive_link" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
