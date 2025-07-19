import React from 'react';
import { clsx } from 'clsx';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'navy';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'white',
  padding = 'lg',
  containerSize = 'lg'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-navy-900 text-white'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  return (
    <section className={clsx(backgroundClasses[background], paddingClasses[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};