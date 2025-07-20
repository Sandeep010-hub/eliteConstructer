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
  const base = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-orange transform hover:-translate-y-1';
  const variants = {
    primary: 'btn-orange-primary text-white font-bold shadow-lg border-2 border-transparent hover:border-white/20 transition-all duration-300',
    secondary: `btn-orange-secondary ${darkBg ? 'text-white border-white hover:bg-white hover:text-primary-orange' : 'text-primary-orange border-primary-orange hover:bg-primary-orange hover:text-white'} font-bold shadow-lg transition-all duration-300`,
    glass: `glass ${darkBg ? 'text-white text-shadow-dark font-bold' : 'text-black-900 font-bold'} border border-white/30 hover:border-primary-orange hover:text-primary-orange hover:shadow-orange-glow hover:bg-white/10 hover:backdrop-blur-xl transition-all duration-300`,
    ghost: `${darkBg ? 'text-white font-bold' : 'text-black-900 font-bold'} bg-transparent hover:bg-primary-orange/10 hover:text-primary-orange transition-all duration-300`,
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-14 font-bold'
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