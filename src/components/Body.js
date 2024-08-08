import React, { useContext } from "react";
import { Mycontext } from "../Hooks/Store/Context";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";
import Login from "./users/Login";

function Body() {
  const { user } = useContext(Mycontext);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AddTodo />
          <TodoList />
          <Footer />
        </>
      )}
    </>
  );
}

export default Body;
