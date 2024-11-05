import React from "react";

function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
