import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Apenas anima se não preferir movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-scale').forEach(el => {
        el.classList.add('animate-in');
        el.classList.replace('transition', 'transition-none');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15, 
      rootMargin: '0px 0px -50px 0px' 
    });

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
