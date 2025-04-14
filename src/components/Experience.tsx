
import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  organization, 
  period, 
  description, 
  type 
}) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline icon */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-background border border-primary flex items-center justify-center">
        {type === 'work' 
          ? <Briefcase className="h-4 w-4 text-primary" /> 
          : <GraduationCap className="h-4 w-4 text-primary" />
        }
      </div>
      
      <div className="bg-card border rounded-lg p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="font-medium">{title}</h3>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {period}
          </span>
        </div>
        <p className="text-sm font-medium text-primary mb-2">{organization}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperiences = [
    {
      title: "Machine Learning Intern",
      organization: "TechSaksham",
      period: "Feb 2025 - March 2025",
      description: "Developed an AI-powered Resume Screening and Ranking System using CNN/deep learning and Streamlit. Achieved 72% accuracy in matching resumes to job descriptions.",
      type: 'work' as const,
    },
    {
      title: "Frontend Development Intern",
      organization: "Hunar Intern",
      period: "June 2024 - August 2024",
      description: "Built responsive Educational Platforms, a Netflix Clone, and Personal Portfolio Websites using modern web technologies. Implemented intuitive UI/UX designs with HTML, CSS, JavaScript and React.",
      type: 'work' as const,
    }
  ];

  const educationHistory = [
    {
      title: "B.Tech in Information Technology",
      organization: "Kamla Nehru Institute of Technology",
      period: "2022 - 2026 (Expected)",
      description: "Currently maintaining a CGPA of 8.2/10. Focused on core computer science fundamentals, data structures, algorithms, machine learning and web development.",
      type: 'education' as const,
    },
    {
      title: "Honours in CyberSecurity",
      organization: "Kamla Nehru Institute of Technology",
      period: "2022 - 2026 (Expected)",
      description: "Currently maintaining a CGPA of 8.2/10. Focused on core Cyber Security fundamentals.",
      type: 'education' as const,
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Experience & Education</h2>
        <p className="section-subtitle text-center mx-auto">
          My professional journey and academic background that shaped my skills.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>Work Experience</span>
            </h3>
            
            <div className="space-y-6">
              {workExperiences.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>Education</span>
            </h3>
            
            <div className="space-y-6">
              {educationHistory.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
