import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width:'100vw',
        margin:0,
        backgroundColor: '#f0f0f0',
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
