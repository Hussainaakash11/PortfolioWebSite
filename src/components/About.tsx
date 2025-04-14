
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
              <img src="1211.jpg" // <- Change this to your actual image path
              alt="Profile"
              className="w-full h-full object-cover"/>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/20 -z-10" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">B.Tech Information Technology Student & ML Enthusiast</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Information Technology student at Kamla Nehru Institute of Technology, with a deep fascination for 
              the intersection of machine learning, data analytics, and frontend development.
            </p>
            
            <p className="text-muted-foreground mb-6">
              My journey in tech began with curiosity about how data can drive intelligent solutions. This led me to 
              immerse myself in neural networks, data visualization, and creating intuitive user interfaces.
            </p>
            
            <p className="text-muted-foreground mb-8">
              I don't just code—I create digital symphonies. I believe the future of technology lies in the 
              seamless integration of powerful AI systems with accessible, user-friendly interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Education:</span>
                <span className="text-muted-foreground">B.Tech in Information Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span className="text-muted-foreground">India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Interests:</span>
                <span className="text-muted-foreground">Machine Learning, Data Analytics, Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
