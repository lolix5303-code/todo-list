import { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="gorev-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
          className="input"
          autoFocus
        />
      ) : (
        <span className={`gorev-metin ${todo.completed ? 'cizili' : ''}`}>
          {todo.text}
        </span>
      )}

      <div className="buton-grup">
        {isEditing ? (
          <button onClick={handleUpdate} className="kaydet-buton">Kaydet</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="duzenle-buton">Düzenle</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="sil-buton">Sil</button>
      </div>
    </div>
  );
}