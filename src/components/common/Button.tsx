import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-fire-red text-white hover:bg-fire-red-dark',
    secondary: 'bg-transparent border border-brand-border text-gray-300 hover:bg-brand-surface',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-brand-surface',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
