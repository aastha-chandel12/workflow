import { Handle } from 'reactflow';
import './BaseNode.css';
import { useStore } from '../store';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const BaseNode = ({ id, title, handles = [], renderContent }) => {
  const { removeNodeAndEdges } = useStore();

  return (
    <div className="base-node">
      <button
        onClick={() => removeNodeAndEdges(id)}
        className="base-node-close"
        title="Delete node"
      >
        ×
      </button>

      <div className="base-node-title">{title}</div>

      <div className="base-node-content">
        {renderContent && renderContent()}
      </div>

      {handles.map(({ type, position, handleId, style }) => {
        const randomColor = getRandomColor();
        return (
          <Handle
            key={handleId}
            type={type}
            position={position}
            id={`${id}-${handleId}`}
            isConnectable={true}
            style={{
              width: 16,
              height: 16,
              background: '#fff',
              borderRadius: '50%',
              border: `2px solid ${randomColor}`,
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
              ...style,
            }}
          />
        );
      })}
    </div>
  );
};
