// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <aside
      style={{
        width: '220px',
        height: '100vh',
        backgroundColor: '#1C2536',
        padding: '16px 12px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        color: '#fff',
        borderRight: '1px solid #333',
        overflowY: 'auto',
      }}
    >
      <h3
        style={{
          textAlign: 'center',
          marginBottom: '12px',
          fontSize: '20px',
          fontWeight: '600',
          color: '#F0F4F8',
        }}
      >
        Node Palette
      </h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {[
          { type: 'customInput', label: 'Input' },
          { type: 'llm', label: 'LLM' },
          { type: 'customOutput', label: 'Output' },
          { type: 'text', label: 'Text' },
          { type: 'numberInput', label: 'Number Input' },
          { type: 'checkbox', label: 'Checkbox' },
          { type: 'dropdown', label: 'Dropdown' },
          {type :'booleanToggleNode',label:'boolean'},
          {type:'colorPickerNode',label:'color Picker'}
        ].map((node) => (
          <div
            key={node.type}
            style={{
              background: '#273142',
              padding: '8px 10px',
              borderRadius: '8px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
              transition: 'background 0.2s, transform 0.1s',
              cursor: 'grab',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = '#32425A')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = '#273142')
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = 'scale(0.98)')
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            <DraggableNode type={node.type} label={node.label} />
          </div>
        ))}
      </div>
    </aside>
  );
};
