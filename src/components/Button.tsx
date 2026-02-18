import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  download,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-dark-primary to-dark-secondary text-white shadow-glow hover:shadow-xl hover:scale-105 active:scale-95',
    secondary: 'border-2 border-transparent bg-origin-border bg-gradient-to-r from-dark-primary to-dark-secondary p-[2px] hover:scale-105 active:scale-95',
    outline: 'border-2 border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-white hover:scale-105 active:scale-95',
    ghost: 'bg-transparent hover:bg-white/10 text-dark-text-primary hover:scale-105 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const innerContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const buttonElement = (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variant === 'secondary' ? '' : variants[variant]} ${sizes[size]} ${className}`}
    >
      {variant === 'secondary' ? (
        <span className="flex items-center justify-center w-full h-full bg-light-bg dark:bg-dark-bg rounded-[10px] px-6 py-2">
          {innerContent}
        </span>
      ) : (
        innerContent
      )}
    </motion.button>
  );

  if (href) {
    if (download) {
      return (
        <a href={href} download={download} className="inline-block">
          {buttonElement}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};

export default Button;
