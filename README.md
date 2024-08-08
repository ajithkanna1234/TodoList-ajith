# Todo App with User Authentication

- This repository contains a simple Todo app built with React that includes user authentication features. 
- Users can register, log in, and manage their todo lists within the application. 
- The project is organized using modular components and leverages React's Context API for state management.

## Live Demo

- Check out the live demo of the Todo app here: [Todo App Live Demo](https://ajithkanna1234.github.io/TodoApp)

## Features

- **User Authentication:** Users can register and log in to manage their todos.
- **Todo Management:** Users can add, toggle, delete, and clear todos.
- **State Management:** Utilizes the Context API for managing global state across the app.
- **Modular Components:** Built with reusable and maintainable components.
- **CSS Modules:** Scoped and organized styles for each component.

## Project Structure

- **components**
    - Header.js
    - Body.js
    - Footer.js
    - TodoAdd.js
    - TodoItem.js
    - TodoList.js
    - ToggleTodo.js
    - ClearTodo.js
    - DeleteTodo.js
    - **user**
        - Login.js 
        - Register.js

- **Hooks**
    - **Store**
        - Context.js

- **styles**
    - **modules**
        - AddTodo.css
        - Login.css
        - Register.css
        - TodoList.css
        - TodoItem.css
        - Header.css
        - Footer.css
    - Global.css

- **utils**
    - LocalStorageUtils.js

- app.js
  
## Components Overview

- **App.js:** The root component that wraps the app in `MyContextProvider` to provide global state access. It renders the `Header` and `Body` components.

- **Header.js:** Displays the app's title and a sign-out button for logged-in users.

- **Body.js:** Handles conditional rendering based on user authentication. It shows the `Login` component if the user is not logged in; otherwise, it renders the main Todo components (`Header`, `AddTodo`, `TodoList`, `Footer`).

- **Login.js:** Provides a form for users to log in. It also includes a button to navigate to the registration form.

- **Register.js:** A registration form that allows new users to create an account by providing a username and password.

- **TodoList.js:** Renders a list of todo items using the `TodoItem` component.

- **TodoItem.js:** Represents an individual todo item with options to toggle its completion status and delete it.

- **ToggleTodo.js:** Handles the logic for toggling a todo item’s completion status.

- **DeleteTodo.js:** Handles the logic for deleting a todo item.

- **ClearTodo.js:** Provides a button to clear all completed todos.

- **Footer.js:** Displays the number of remaining tasks and includes a button to clear completed tasks.

## Context and State Management

- **MyContext (in Context.js):** This context provides global state for the application, including functions for authentication (`login`, `logout`, `register`) and managing todos (`todos`, `setTodos`). Components can access this context using the `useContext` hook.