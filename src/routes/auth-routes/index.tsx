import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AccountType,
  SignUp,
  ResidencyInfo,
  BankInfo,
  Login,
  ForgotPassword,
} from "../../containers";
import { LeftComponent } from "../../components";
const AuthRoutes: React.FC = () => {
  return (
    <div className="Auth-container">
      <LeftComponent />
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/residency-info" element={<ResidencyInfo />} />
        <Route path="/bank-info" element={<BankInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
