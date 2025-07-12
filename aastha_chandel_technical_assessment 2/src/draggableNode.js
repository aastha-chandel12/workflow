export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        padding: '10px',
        borderRadius: '6px',
        backgroundColor: '#2A3A57',
        textAlign: 'center',
        color: '#fff',
        userSelect: 'none',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }}
    >
      {label}
    </div>
  );
};
