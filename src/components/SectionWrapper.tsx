import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id={id} className={`relative py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col mb-12 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-full hidden md:block" />
          {subtitle && (
            <span className="text-dark-primary font-mono text-sm mb-2 tracking-wider uppercase">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-primary dark:text-dark-text-primary">
            <span className="gradient-text">{title}</span>
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
