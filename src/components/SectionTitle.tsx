import React from 'react';

interface SectionTitleProps {
  title: string | React.ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${
          light ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;