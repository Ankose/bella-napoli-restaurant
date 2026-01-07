import React from 'react';

export const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-[#8B1538] text-white hover:bg-[#A4243B]',
    ghost: 'hover:bg-gray-100',
    outline: 'border border-gray-300 hover:bg-gray-50'
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
