import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [showHandle, setShowHandle] = useState(false);

  useEffect(() => {
    setShowHandle(/{{\s*[\w]+\s*}}/.test(currText));
  }, [currText]);

  return (
    <div
      style={{
        padding: '12px',
        border: '2px solid #4f46e5',
        borderRadius: '8px',
        background: '#f9fafb',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '180px',
        fontFamily: 'sans-serif',
        position: 'relative'
      }}
    >
      <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
        Text Node
      </div>

      <input
        type="text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        style={{
          width: '92%',
          padding: '6px 8px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          fontSize: '12px',
          outline: 'none',
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: '#3b82f6',
          width: 10,
          height: 10,
          borderRadius: '50%',
          opacity: showHandle ? 1 : 0,
          pointerEvents: showHandle ? 'auto' : 'none'
        }}
        isConnectable={showHandle}
      />

      
    </div>
  );
};
