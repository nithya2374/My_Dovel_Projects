import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ display: 'flex', color: 'black' , alignItems:'center', gap:'10px' }}>
        📝 <span>Todo List</span>
      </h2>

      <div style={{ display: 'flex',color: 'black', gap: '10px', margin: '10px 0' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px 16px' }}>
          Add
        </button>
      </div>

      <ul style={{ paddingLeft: '20px' ,color: 'black'}}>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
