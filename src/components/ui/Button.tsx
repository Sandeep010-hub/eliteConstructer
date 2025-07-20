import React from 'react';
import { clsx } from 'clsx';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  darkBg?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  darkBg = false,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-gold';
  const variants = {
    primary: 'bg-gradient-gold text-white font-bold shadow-lg border border-transparent hover:opacity-90 hover:border-white transition-all duration-300',
    secondary: `${darkBg ? 'text-white font-bold' : 'text-navy-900 font-bold'} glass border border-gold-500 hover:text-primary-gold hover:border-primary-gold hover:bg-white/10 shadow-lg transition-all duration-300`,
    glass: `glass ${darkBg ? 'text-white text-shadow-lg font-bold' : 'text-navy-900 font-bold'} border border-white/30 hover:border-primary-gold hover:text-primary-gold hover:shadow-gold-500/40 hover:bg-white/10 hover:backdrop-blur-xl transition-all duration-300`,
    ghost: `${darkBg ? 'text-white font-bold' : 'text-navy-900 font-bold'} bg-transparent hover:bg-white/10 hover:text-primary-gold transition-all duration-300`,
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-14'
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children || 'Button'}
    </button>
  );
};