// submit.js

import React from 'react';

export const SubmitButton = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={onClick}
        style={{
          backgroundColor: 'rgb(34 197 94)',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        className="hover:bg-green-600 focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};
