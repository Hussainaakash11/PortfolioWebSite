
import React from 'react';
import { Brain, BarChart3, Code, Database, Network, LucideIcon } from 'lucide-react';

interface SkillProps {
  title: string;
  description: string;
  icon: LucideIcon;
  proficiency: number; // 0-100
}

const SkillCard: React.FC<SkillProps> = ({ title, description, icon: Icon, proficiency }) => {
  return (
    <div className="skill-card">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full"
          style={{ width: `${proficiency}%` }}
        />
      </div>
      <div className="mt-1 text-xs text-muted-foreground text-right">
        {proficiency}%
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    {
      title: 'Machine Learning',
      description: 'Building and training models using various ML algorithms',
      icon: Brain,
      proficiency: 85,
    },
    {
      title: 'Deep Learning',
      description: 'Neural network design and implementation',
      icon: Network, // Replaced AiFunctions with Network
      proficiency: 75,
    },
    {
      title: 'Data Analytics',
      description: 'Extracting insights from complex datasets',
      icon: BarChart3,
      proficiency: 92,
    },
  
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive web applications',
      icon: Code,
      proficiency: 88,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Core Skills</h2>
        <p className="section-subtitle text-center mx-auto">
          My expertise spans across various domains of machine learning, data science, and web development.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
