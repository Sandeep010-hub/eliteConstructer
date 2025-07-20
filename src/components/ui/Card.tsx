import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-lg p-6 border border-gray-100',
        hover && 'transition-all duration-300 hover:shadow-orange-glow hover:-translate-y-2 hover:border-primary-orange/30',
        className
      )}
    >
      {children}
    </div>
  );
};