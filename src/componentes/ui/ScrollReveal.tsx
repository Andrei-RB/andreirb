import React from 'react';

interface Props {
  children: React.ReactNode;
  animation?: 'reveal-on-scroll' | 'reveal-left' | 'reveal-scale';
  delay?: number;
  className?: string;
  key?: React.Key;
}

export function ScrollReveal({ children, animation = 'reveal-on-scroll', delay = 0, className = '' }: Props) {
  return (
    <div 
      className={`${animation} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
