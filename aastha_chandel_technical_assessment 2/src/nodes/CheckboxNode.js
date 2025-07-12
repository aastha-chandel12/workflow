import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';
export const CheckboxNode = ({ id, data }) => {
  const [checked, setChecked] = useState(data?.checked || false);

  const renderContent = () => (
    <label>
      Checked:
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
      title="Checkbox"
      handles={[{ type: 'source', position: Position.Right, handleId: 'checked' }]}
      renderContent={renderContent}
    />
  );
};