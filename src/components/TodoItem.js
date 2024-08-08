import React from "react";
import "../styles/modules/TodoItem.css";
import ToggleTodo from "./ToggleTodo.js";
import DeleteTodo from "./DeleteTodo.js";

function TodoItem({ todo, index }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <ToggleTodo index={index} />
      <span>{todo.text}</span>
      <DeleteTodo index={index} />
    </li>
  );
}

export default TodoItem;
