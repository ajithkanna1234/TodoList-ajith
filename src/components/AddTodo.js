import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context.js";
import "../styles/modules/AddTodo.css";

function AddTodo() {
  
  const { todos, setTodos, newTodo, setNewTodo } = useContext(Mycontext);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
