import React, { createContext, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

export const LanguageContext = createContext();

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);

    setText("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) => 
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
  };

  const handleChangeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleChangeLanguage }}>
      <Navbar />
    <div className="container mt-5">
      <h1 className="text-center mb-4">{language === "en" ? "Todo List" : "Daftar Todo"}</h1>
      <TodoForm onChange={handleChange} onClick={addTodo} text={text} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onComplete={handleComplete}
      />
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
