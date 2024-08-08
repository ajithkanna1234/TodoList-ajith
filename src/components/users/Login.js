import React, { useState, useContext } from "react";
import "../../styles/modules/Login.css";
import { Mycontext } from "../../Hooks/Store/Context.js";
import Register from "./Register.js";

function Login() {
  const [nav, setNav] = useState(false);
  const { username, setUsername, password, setPassword, login } =
    useContext(Mycontext);

  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password);
  };

  return (
    <div className="login-reg-container">
      {nav ? (
        <Register setNav={setNav} />
      ) : (
        <form onSubmit={handleLogin} className="login-form" autocomplete="off">
          <h2>Sign in</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          <button
            type="button"
            className="reg-btn"
            onClick={() => setNav(true)}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
