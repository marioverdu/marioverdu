import React from 'react';

interface TypographyProps {
  variant: 'xxxl' | 'xl' | 'caps-subtitle' | 'm-medium' | 's-regular' | 'm-light' | 'm-semibold' | 's-semibold' | 'l-semibold' | 'l-light';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const baseClasses = 'font-inter';
  
  const variantClasses = {
    'xxxl': 'text-xxxl font-medium',
    'xl': 'text-xl font-medium',
    'caps-subtitle': 'text-caps-subtitle font-normal uppercase',
    'm-medium': 'text-m font-medium',
    's-regular': 'text-s font-normal',
    'm-light': 'text-m font-light',
    'm-semibold': 'text-m font-semibold',
    's-semibold': 'text-s font-semibold',
    'l-semibold': 'text-m font-semibold', // Using text-m as 'l' size is not defined
    'l-light': 'text-m font-light', // Using text-m as 'l' size is not defined
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <span className={classes}>{children}</span>;
};

export default Typography;