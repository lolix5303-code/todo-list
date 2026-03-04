import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  return (
    <div className="gorev-liste">
      {todos.length === 0 ? (
        <p className="bos-mesaj">Henüz görev bir görev yok</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
}