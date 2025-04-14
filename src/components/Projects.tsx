import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  tags, 
  image, 
  githubUrl, 
  liveUrl 
}) => {
  return (
    <div className="project-card rounded-lg shadow-lg overflow-hidden bg-white dark:bg-zinc-900">
      <div className="project-image-container relative group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={image.startsWith('http') ? image : `/images/${image}`}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
            <div className="flex gap-4">
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: 'AI-powered Resume Screening',
      description: 'A web application that uses CNN and deep learning to screen and rank resumes based on job descriptions.',
      tags: ['TensorFlow', 'Python', 'Streamlit', 'NLP'],
      image: 'ml.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/Resume-Screening',
    },
    {
      title: 'House Price Predictor',
      description: 'A Flask-based solution for estimating property prices in Bangalore using machine learning algorithms.',
      tags: ['Python', 'Flask', 'Scikit-Learn', 'Pandas'],
      image: 'ml.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/BangaloreHouse-PricePredictor',
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Interactive PowerBI dashboard visualizing key HR metrics and providing actionable insights.',
      tags: ['PowerBI', 'DAX', 'SQL', 'Data Analysis'],
      image: 'da.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/PowerBI-Projects/blob/main/Power%20BI%20Project%202/DASHBOARD.pdf',
    },
    {
      title: 'Court Case Management System',
      description: 'A comprehensive system for tracking and managing court cases using modern web technologies.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'fe.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/Court-Case',
    },
    {
      title: 'Library Management System',
      description: 'An intuitive web application for managing library resources with user-friendly interface.',
      tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      image: 'fe.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/Project1/tree/main/MINI%20PROJECT',
    },
    {
      title: 'E-Commerce Sales Dashboard',
      description: 'PowerBI dashboard analyzing e-commerce sales data with interactive filters and insights.',
      tags: ['PowerBI', 'Data Visualization', 'SQL'],
      image: 'da.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/PowerBI-Projects/blob/main/Power%20BI%20Project/Screenshot%202024-07-15%20151446.png',
    },
    {
      title: 'Pizza Shop Sales using SQL',
      description: 'In this project I performed various queries on my Database using SQL.',
      tags: ['Queries', 'Data Analysis', 'SQL'],
      image: 'da.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/SQL-1st-Project',
    },
    {
      title: 'Coffee Shop Sales',
      description: 'In this project I performed various queries on my Database using Excel.',
      tags: ['Excel', 'Data Visualization', 'Data Analysis'],
      image: 'da.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/CoffeeShopSales',
    },
    {
      title: 'Diwali Sales Dashboard',
      description: 'This project aims to analyze Diwali sales data to identify trends, customer demographics, and purchasing behavior during the Diwali season using Python and Jupyter Notebook.',
      tags: ['Python', 'Data Visualization', 'Data Analysis'],
      image: 'da.jpg',
      githubUrl: 'https://github.com/Hussainaakash11/DiwaliSales-PythonProject',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          Explore my work combining machine learning, data analytics, and web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a 
              href="https://github.com/Hussainaakash11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>View All Projects</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;