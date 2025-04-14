
import React from 'react';

interface ToolProps {
  name: string;
  category: 'ML/AI' | 'Data' | 'Frontend' | 'Backend' | 'Coding';
  icon: string; // This would be an icon or logo
}

const ToolCard: React.FC<ToolProps> = ({ name, category, icon }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'ML/AI':
        return 'bg-purple-light/10 text-purple-light dark:bg-purple-light/20';
      case 'Data':
        return 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20';
      case 'Frontend':
        return 'bg-green-500/10 text-green-500 dark:bg-green-500/20';
      case 'Backend':
        return 'bg-orange-500/10 text-orange-500 dark:bg-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 dark:bg-gray-500/20';
    }
  };

  return (
    <div className="p-4 rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 rounded-lg bg-primary/10 flex items-center justify-center h-12 w-12 text-xl font-bold text-primary">
          {icon}
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor()}`}>
          {category}
        </span>
      </div>
      
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

const Tools: React.FC = () => {
  const tools: ToolProps[] = [
    { name: 'Python', category: 'ML/AI', icon: 'PY' },
    { name: 'TensorFlow', category: 'ML/AI', icon: 'TF' },
    { name: 'PyTorch', category: 'ML/AI', icon: 'PT' },
    { name: 'Scikit-Learn', category: 'ML/AI', icon: 'SK' },
    { name: 'Keras', category: 'ML/AI', icon: 'KR' },
    { name: 'Pandas', category: 'Data', icon: 'PD' },
    { name: 'NumPy', category: 'Data', icon: 'NP' },
    { name: 'Matplotlib', category: 'Data', icon: 'MP' },
    { name: 'Plotly', category: 'Data', icon: 'PL' },
    { name: 'Excel', category: 'Data', icon: 'EX' },
    { name: 'SQL', category: 'Data', icon: 'SQL' },
    { name: 'PowerBI', category: 'Data', icon: 'PB' },
    { name: 'HTML', category: 'Frontend', icon: 'HTML' },
    { name: 'CSS', category: 'Frontend', icon: 'CSS' },
    { name: 'JavaScript', category: 'Frontend', icon: 'JS' },
    { name: 'TypeScript', category: 'Frontend', icon: 'TS' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'TW' },
    { name: 'Streamlit', category: 'Frontend', icon: 'FA' },
    { name: 'Flask', category: 'Backend', icon: 'FL' },
    { name: 'DataStructures', category: 'Coding', icon: 'C++' },
  ];

  return (
    <section id="tools" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <h2 className="section-title text-center">Tools & Technologies</h2>
        <p className="section-subtitle text-center mx-auto">
          The technologies and frameworks I use to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
