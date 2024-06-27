import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Settings, Auth } from "./routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') || false
  return (
    <Router>
      <Routes>
        <Route path="/*" element={isAuthenticated ? <Navigate to="/settings" /> : <Auth />} />
        <Route path="/settings/*" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
