import React from 'react';
import { HardDrive } from 'lucide-react';
import { Button } from './ui/button';

interface CertificationProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, 
  description, 
  tags, 
  image 
}) => {
  return (
    <div className="certification-card">
      <div className="certification-image-container">
        <div className="certification-image bg-gradient-to-br from-purple-light/30 to-purple-dark/30" />
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

const Certifications: React.FC = () => {
  const certifications: CertificationProps[] = [
    {
      title: 'Machine Learning & Data Analytics',
      description: 'Infosys Springbird course covering Machine Learning & Data Analysis with Python.',
      tags: ['Machine Learning', 'Data Analytics', 'Infosys'],
      image: 'deep-learning.jpg',
    },
    {
      title: 'Coding Exercises: SQL Data Science',
      description: 'Certificate from LinkedIn covering SQL Coding Exercises.',
      tags: ['SQL', 'Data Analysis', 'LinkedIn'],
      image: 'google-data-analytics.jpg',
    },
    {
      title: 'Data Analysis with Python',
      description: 'Infosys Springbird course covering Data Analysis with Python.',
      tags: ['Infosys', 'Data Analysis', 'Python'],
      image: 'cybersecurity-essentials.jpg',
    },
    {
      title: 'Frontend Developer',
      description: 'Completed a course of Front-End Developer certification.',
      tags: ['HTML', 'CSS', 'React', 'JavaScript'],
      image: 'frontend-capstone.jpg',
    },
    {
      title: 'Self Presentation by Wadhwani Foundation',
      description: 'Self Presentation course with Wadhwani Foundation.',
      tags: ['Microsoft', 'PowerPoint', 'PPT'],
      image: 'python-everybody.jpg',
    },
    {
      title: 'AI for Students: Build Your Own Generative AI Model',
      description: 'Non-technical introduction to Artificial Intelligence by Andrew Ng.',
      tags: ['AI', 'NxT Wave', 'Conceptual'],
      image: 'ai-for-everyone.jpg',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Certifications</h2>
        <p className="section-subtitle text-center mx-auto">
          Here are some of the certifications I’ve completed to level up my skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a 
              href="https://drive.google.com/drive/folders/1Yf9lMjPD8uW2NEjhDsEYK7SY5lumgxb4?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <HardDrive className="h-4 w-4" />
              <span>View All Certifications</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;