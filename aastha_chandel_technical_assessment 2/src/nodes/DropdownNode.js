import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const DropdownNode = ({ id, data }) => {
  const [option, setOption] = useState(data?.option || 'Option1');

  const renderContent = () => (
    <label>
      Select:
      <select value={option} onChange={e => setOption(e.target.value)}>
        <option value="Option1">Option1</option>
        <option value="Option2">Option2</option>
        <option value="Option3">Option3</option>
      </select>
    </label>
  );

  return (
    <BaseNode
      id={id}
      title="Dropdown"
      handles={[{ type: 'source', position: Position.Right, handleId: 'selection' }]}
      renderContent={renderContent}
    />
  );
};