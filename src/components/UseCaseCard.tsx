import React, { ReactNode } from 'react';

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="text-primary mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 text-center min-h-[3rem] flex items-center justify-center">
        {title}
      </h3>
    </div>
  );
};

export default UseCaseCard;