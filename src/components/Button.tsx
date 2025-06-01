import React from 'react';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  primary = false, 
  children, 
  className = '',
  onClick 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base whitespace-nowrap";
  const primaryStyles = "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl";
  const secondaryStyles = "border-2 border-primary text-primary hover:bg-primary/10";
  
  return (
    <button 
      className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;