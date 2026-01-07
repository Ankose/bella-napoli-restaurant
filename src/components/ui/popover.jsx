import React from 'react';

export const Popover = ({ open, onOpenChange, children }) => (
  <div>{children}</div>
);

export const PopoverTrigger = ({ asChild, children }) => <div>{children}</div>;

export const PopoverContent = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);
