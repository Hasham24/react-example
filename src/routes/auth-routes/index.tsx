import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const authPaths = ["/", "/signUp", "/residency-info", "/bank-info", "/login", "/forgot-password"];

  return (
    <div className="auth-route-container">
       {authPaths.includes(location.pathname) && <LeftComponent />}
      <Routes>
        <Route index path="/" element={<AccountType />} />
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
