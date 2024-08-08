import React from "react";
import "./styles/Global.css";
import MyContextProvider from "./Hooks/Store/Context.js";
import Body from "./components/Body.js";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Body/>
      </div>
    </MyContextProvider>
  );
}

export default App;
