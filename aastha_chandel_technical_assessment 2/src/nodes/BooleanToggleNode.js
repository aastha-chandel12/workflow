import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const BooleanToggleNode = ({ id, data }) => {
  const [checked, setChecked] = useState(data?.checked || false);

  const renderContent = () => (
    <label>
      Boolean:
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </label>
  );

  return (
    <BaseNode
      id={id}
      title="Boolean Toggle"
      handles={[{ type: 'source', position: Position.Right, handleId: 'boolean' }]}
      renderContent={renderContent}
    />
  );
};
