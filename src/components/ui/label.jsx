import React from 'react';

export const Label = ({ children, htmlFor, className = '' }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium mb-2 ${className}`}>
    {children}
  </label>
);
