import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context.js";

function DeleteTodo({ index }) {
  
  const { todos, setTodos } = useContext(Mycontext);

  const handleDelete = () => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteTodo;
