import React, { useState, createContext, useEffect } from "react";

export const Mycontext = createContext();

function MyContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usersData, setUsersData] = useState(() => {
    const savedData = localStorage.getItem("usersData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Load todos for the logged-in user on mount
  useEffect(() => {
    if (user) {
      const currentUserData = usersData.find(
        (u) => u.username === user.username
      );
      if (currentUserData) {
        setTodos(currentUserData.todos);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos or user change
  useEffect(() => {
    if (user) {
      const updatedUsersData = usersData.map((u) =>
        u.username === user.username ? { ...u, todos } : u
      );
      setUsersData(updatedUsersData);
      localStorage.setItem("usersData", JSON.stringify(updatedUsersData));

      // Also update the current user data in localStorage
      const updatedUser = { ...user, todos };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const updatedTodos = [...todos, { text: newTodo, completed: false }];
      setTodos(updatedTodos);
      setNewTodo("");
    }
  };

  const login = (username, password) => {
    const userRecord = usersData.find(
      (u) => u.username === username && u.password === password
    );
    if (userRecord) {
      setUser(userRecord);
      setTodos(userRecord.todos);
      localStorage.setItem("user", JSON.stringify(userRecord));
      setPassword("");
      setUsername("");
    } else {
      alert("Invalid login credentials");
      setPassword("");
      setUsername("");
    }
  };

  const register = (username, password) => {
    if (usersData.find((u) => u.username === username)) {
      alert("Username already exists");
      return;
    }
    const newUser = { username, password, todos: [] };
    const updatedUsersData = [...usersData, newUser];
    setUsersData(updatedUsersData);
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));
  };

  const logout = () => {
    setUser(null);
    // setTodos([]);
    localStorage.removeItem("user");
  };

  return (
    <Mycontext.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
        todos,
        setTodos,
        newTodo,
        setNewTodo,
        addTodo,
        login,
        register,
        logout,
        user,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
}

export default MyContextProvider;
