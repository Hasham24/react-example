import React from "react";
import logo from "./logo.svg";
import { LeftComponent } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <div
        style={{
          flex: 1,
        }}
      >
        <p>right</p>
      </div>
    </div>
  );
}

export default App;
