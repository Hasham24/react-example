import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const SignUP: React.FC = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isUserLoggedIn", JSON.stringify(false));
    navigate("/account-type");
  };
  return (
    <div onClick={logout} className={styles.container}>
      General
    </div>
  );
};
export default SignUP;
