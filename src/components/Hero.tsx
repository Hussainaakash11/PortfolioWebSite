
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-light/10 rounded-full filter blur-3xl animate-pulse-light" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl animate-pulse-light" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-dark/10 rounded-full filter blur-3xl animate-pulse-light" />
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block">Aakash Hussain Naikoo</span>
            <span className={cn(
              "block bg-clip-text text-transparent bg-gradient-to-r mt-2",
              "from-purple-light to-purple-dark"
            )}>
              Data, Code & Creativity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Innovating at the Intersection of ML, Analytics & FrontEnd
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#projects" 
              className="btn-primary"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-1/3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
          <img src="public\abc.jpg" // <- Change this to your actual image path
              alt="Profile"
              className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors animate-fade-in" 
        style={{ animationDelay: "0.6s" }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 animate-float" />
      </a>
    </section>
  );
};

export default Hero;
