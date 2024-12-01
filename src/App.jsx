import { useState } from "react";
import { TodoList } from "./components";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = text => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];
    setTodos(newTodos);
  };

  // Function to toggle todo completion status
  const toggleTodo = id => {
    setTodos(
      todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App d-flex justify-content-center align-items-start">
      <div style={{ backgroundColor: "transparent" }} className="todoCard card">
        <div className="card-body">
          <h1>My To-Do List</h1>
          <TodoList
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
