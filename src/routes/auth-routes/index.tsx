import React from "react";
import { LeftComponent } from "../../components";
const AuthRoutes: React.FC = ({ children }: any) => {
  return (
    <div className="auth-route-container">
      <LeftComponent />
      {children}
    </div>
  );
};

export default AuthRoutes;
