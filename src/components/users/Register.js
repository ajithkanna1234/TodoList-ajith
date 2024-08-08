import React, { useState, useContext } from "react";
import "../../styles/modules/Register.css";
import { Mycontext } from "../../Hooks/Store/Context.js";

function Register({ setNav }) {
  const [username, setUsername] = useState("");
  const [createpassword, setCreatepassword] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { register } = useContext(Mycontext);

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!createpassword.trim()) {
      newErrors.createpassword = "Create password is required";
    }
    if (createpassword !== password) {
      newErrors.password = "Passwords do not match";
    }
    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      register(username, password);
      setNav(false);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleRegister} className="login-form" autoComplete="off">
      <h2>Register</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p className="error-message">{errors.username}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Create password"
          value={createpassword}
          onChange={(e) => setCreatepassword(e.target.value)}
          required
        />
        {errors.createpassword && (
          <p className="error-message">{errors.createpassword}</p>
        )}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default Register;
