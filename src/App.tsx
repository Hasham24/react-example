import React from "react";
import { Routes, Route } from "react-router-dom";
import { LeftComponent } from "./components";
import "./App.css";
import { AccountType } from "./containers";

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <Routes>
        <Route path="/" element={<AccountType />} />
      </Routes>
    </div>
  );
}

export default App;
