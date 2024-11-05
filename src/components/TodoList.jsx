import React, {useContext} from "react";
import { LanguageContext } from "../App";

function TodoList({ todos, onDelete, onComplete }) {
  const { language } = useContext(LanguageContext);
  
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
          <div className="btn-group">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(todo.id)}
            >
              {language === "en" ? "Delete" : "Hapus"}
            </button>
            <button
              className="btn btn-success btn-sm ms-1"
              onClick={() => onComplete(todo.id)}
            >
              {todo.completed ? `${language === "en" ? "Not Yet" : "Belum"}` : `${language === "en" ? "Complete" : "Selesai"}`}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
