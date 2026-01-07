import React from 'react';

export const Calendar = ({ mode, selected, onSelect, disabled }) => {
  return (
    <div className="p-4">
      <input 
        type="date"
        value={selected ? selected.toISOString().split('T')[0] : ''}
        onChange={(e) => onSelect?.(new Date(e.target.value))}
        className="form-input"
      />
    </div>
  );
};
