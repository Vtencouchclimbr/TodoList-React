const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="d-flex justify-content-between align-items-center mb-2">
      <span className="todoSpn" onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
