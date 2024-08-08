import React, { useContext } from "react";
import "../styles/modules/Header.css";
import { Mycontext } from "../Hooks/Store/Context";

function Header() {
  
  const { logout, user } = useContext(Mycontext);
  return (
    <header>
      <h1>
        T<span className="word-o">o</span>d
        <span className="word-second-o">o</span>
        App
      </h1>
      {user ? (
        <button onClick={logout} className="logout-button">
          Sign out
        </button>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
