import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context.js";
import ClearTodo from "./ClearTodo.js";
import "../styles/modules/Footer.css";

function Footer() {
  
  const { todos } = useContext(Mycontext);

  return (
    <div className="todo-footer">
      <span>{todos.filter((todo) => !todo.completed).length} tasks left</span>
      <ClearTodo />
    </div>
  );
}

export default Footer;
