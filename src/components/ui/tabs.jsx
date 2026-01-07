import React, { useState } from 'react';

export const Tabs = ({ value, onValueChange, children }) => {
  const [activeTab, setActiveTab] = useState(value);
  const handleChange = (val) => {
    setActiveTab(val);
    onValueChange?.(val);
  };
  return (
    <div data-state={activeTab} onTabChange={handleChange}>
      {children}
    </div>
  );
};

export const TabsList = ({ children, className = '' }) => (
  <div className={`flex space-x-2 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children, className = '' }) => (
  <button 
    data-state={value} 
    className={`px-4 py-2 ${className}`}
    onClick={() => document.dispatchEvent(new CustomEvent('tabchange', { detail: value }))}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, children, className = '' }) => (
  <div data-state={value} className={className}>{children}</div>
);
