import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-500 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-gold-500 text-navy-900 hover:bg-gold-500 hover:text-white focus:ring-gold-500',
    ghost: 'text-navy-900 hover:bg-navy-50 focus:ring-navy-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-14'
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};