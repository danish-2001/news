import React, { useState, useEffect } from "react";

const TodoList = () => {
  // useState hook se initial state set karna
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // useEffect hook se initial todos load karna (simulating API call)
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchTodos = () => {
      // Sample todos
      const initialTodos = [
        { id: 1, text: "Learn React" },
        { id: 2, text: "Build a project" },
      ];
      setTodos(initialTodos);
    };

    fetchTodos();
  }, []); // Empty dependency array means this effect runs once on component mount

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
      setNewTodo("");
    }
  };

  // Function to handle input change
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
