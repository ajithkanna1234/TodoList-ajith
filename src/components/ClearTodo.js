import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context.js";

function ClearTodo() {
  
  const { todos, setTodos } = useContext(Mycontext);

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return <button onClick={handleClearCompleted}>Clear Completed</button>;
}

export default ClearTodo;
