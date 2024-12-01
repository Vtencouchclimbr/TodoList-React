import "./Todo.css";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      style={{ backgroundColor: "transparent", color: "#ddd" }}
      className={`todo ${todo.completed ? "completed" : ""}`}
    >
      <span className="todoSpn" onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button className="todoBtn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
