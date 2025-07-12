import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const ColorPickerNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || '#ff0000');

  const renderContent = () => (
    <label>
      Color:
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
    </label>
  );

  return (
    <BaseNode
      id={id}
      title="Color Picker"
      handles={[{ type: 'source', position: Position.Right, handleId: 'color' }]}
      renderContent={renderContent}
    />
  );
};
