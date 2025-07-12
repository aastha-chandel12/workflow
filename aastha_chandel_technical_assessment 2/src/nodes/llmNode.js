import { Position } from 'reactflow';
import { BaseNode } from '../BaseNode/BaseNode';

export const LLMNode = ({ id, data }) => {
  const renderContent = () => (
    <>
      <div>This is a LLM.</div>
    </>
  );

  const handles = [
    { type: 'target', position: Position.Left, handleId: 'system', style: { top: '33.33%' } },
    { type: 'target', position: Position.Left, handleId: 'prompt', style: { top: '66.66%' } },
    { type: 'source', position: Position.Right, handleId: 'response' },
  ];

  return (
    <BaseNode id={id} title="LLM" handles={handles} renderContent={renderContent} />
  );
};
