import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const renderContent = () => (
    <>
      <label>
        Name:
        <input type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={e => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[{ type: 'target', position: Position.Left, handleId: 'value' }]}
      renderContent={renderContent}
    />
  );
};
