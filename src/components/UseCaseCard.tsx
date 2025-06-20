import React, { ReactNode } from 'react';

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  compact?: boolean; 
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default UseCaseCard;