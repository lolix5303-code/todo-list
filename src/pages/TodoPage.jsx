import { useState, useEffect } from 'react'; 
import TodoForm from '../components/TodoForm'; 
import TodoList from '../components/TodoList';




export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  return (
    <div className="ana-konteyner">
      <div className="ic-alan">
        <div className="kart">
          <h1 className="baslik">TODO APP</h1>
          <p className="alt-baslik">Görevlerimi yönetiyorum</p>

          <TodoForm onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>

        <p className="footer">
          Eğitim projesi • React + Pure CSS
        </p>
      </div>
    </div>
  );
}