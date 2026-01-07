import React from 'react';

export const Select = ({ value, onValueChange, children }) => {
  return <div>{children}</div>;
};

export const SelectTrigger = ({ children, className = '' }) => (
  <div className={`flex items-center justify-between ${className}`}>{children}</div>
);

export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

export const SelectContent = ({ children }) => <div>{children}</div>;

export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
