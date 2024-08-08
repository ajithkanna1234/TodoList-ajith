import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context.js";

function ToggleTodo({ index }) {
  const { todos, setTodos } = useContext(Mycontext);

  const handleToggle = () => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <input
      type="checkbox"
      checked={todos[index]?.completed || false}
      onChange={handleToggle}
    />
  );
}

export default ToggleTodo;
