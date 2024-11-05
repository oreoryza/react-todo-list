import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm />
      <TodoList
        todos={todos}
      />
    </div>
  );
}

export default App;
