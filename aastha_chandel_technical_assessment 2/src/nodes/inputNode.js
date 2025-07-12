import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const renderContent = () => (
    <>
      <label>
        Name:
        <input type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={e => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[{ type: 'source', position: Position.Right, handleId: 'value' }]}
      renderContent={renderContent}
    />
  );
};
