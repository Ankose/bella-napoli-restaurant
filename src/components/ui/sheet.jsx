import React from 'react';

export const Sheet = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      {children}
    </div>
  );
};

export const SheetTrigger = ({ asChild, children }) => {
  return <div>{children}</div>;
};

export const SheetContent = ({ side = 'right', children, className = '' }) => {
  const sideStyles = {
    right: 'right-0 animate-slide-in-right',
    left: 'left-0 animate-slide-in-left',
    top: 'top-0 w-full animate-slide-in-top',
    bottom: 'bottom-0 w-full animate-slide-in-bottom'
  };
  
  return (
    <div 
      className={`fixed ${sideStyles[side]} top-0 h-full bg-white shadow-xl p-6 z-50 ${className}`}
      style={{ 
        maxWidth: side === 'right' || side === 'left' ? '400px' : '100%',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export const SheetTitle = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-semibold mb-6 ${className}`}>
    {children}
  </h2>
);
