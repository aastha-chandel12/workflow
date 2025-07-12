// ResetButton.js

import React from 'react';
import { RotateCcw } from 'lucide-react';

export const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: 'rgb(51, 65, 85)',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        color: 'white',
        transition: 'background-color 0.3s ease',
      }}
      className="hover:bg-gray-600 focus:outline-none"
    >
      <RotateCcw size={18} />
      <span style={{ marginLeft: '6px' }}>Reset</span>
    </button>
  );
};
