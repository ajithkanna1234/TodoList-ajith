import React, { useContext } from "react";
import TodoItem from "./TodoItem.js";
import "../styles/modules/TodoList.css";
import { Mycontext } from "../Hooks/Store/Context.js";

function TodoList() {
  
  const { todos } = useContext(Mycontext);

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
