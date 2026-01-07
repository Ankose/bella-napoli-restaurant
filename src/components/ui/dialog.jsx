import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => (
  open ? <div className="fixed inset-0 z-50 bg-black/50">{children}</div> : null
);

export const DialogContent = ({ children, className = '' }) => (
  <div className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg ${className}`}>
    {children}
  </div>
);

export const DialogTitle = ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>;
