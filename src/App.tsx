import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AccountType,
  SignUp,
  ResidencyInfo,
  BankInfo,
  Login,
  ForgotPassword,
  General
} from "./containers";
import { Auth, Settings } from "./routes";
import "./App.css";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route index element={<AccountType />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="residency-info" element={<ResidencyInfo />} />
        <Route path="bank-info" element={<BankInfo />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/settings" element={<Settings />}>
        <Route path="general" element={<General />} />
        {/* Add more nested routes for Settings as needed */}
      </Route>
      {/* Add a catch-all route for unmatched paths */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
