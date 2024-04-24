import React from "react";
import { Routes, Route } from "react-router-dom";
import { LeftComponent } from "./components";
import { AccountType, SignUp } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
