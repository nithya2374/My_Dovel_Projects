import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [fetching, setFetching] = useState(false);

  // Simulated fetch on mount
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddOrUpdate = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = input;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleManualFetch = () => {
    setFetching(true);
    let timeoutId = setTimeout(() => {
      const simulatedTodos = ["Sample Task 1", "Sample Task 2"];
      setTodos(simulatedTodos);
      setFetching(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <button className="fetch-btn" onClick={handleManualFetch} disabled={fetching}>
        {fetching ? "Fetching..." : "Fetch Todos"}
      </button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <div className="actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
