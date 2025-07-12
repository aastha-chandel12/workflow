import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';
export const NumberInputNode = ({ id, data }) => {
  const [number, setNumber] = useState(data?.number || 0);

  const renderContent = () => (
    <label>
      Number:
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
    </label>
  );

  return (
    <BaseNode
      id={id}
      title="Number Input"
      handles={[{ type: 'source', position: Position.Right, handleId: 'number' }]}
      renderContent={renderContent}
    />
  );
};