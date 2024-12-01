import { useState } from "react";
import Todo from "./Todo";

import "./TodoList.css";

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="todo-list">
      <form className="d-flex mb-3" onSubmit={handleSubmit}>
        <div className="flex-grow-1">
          <input
            type="text"
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
            placeholder="Add a new todo"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary ml-2">
          Add Todo
        </button>
      </form>
      <ul className="todoList">
        {todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </ul>
    </div>
  );
};

export default TodoList;
