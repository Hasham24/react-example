import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
  TextInput,
  AuthDescription,
  TextButton,
} from "../../../components";
import styles from "./styles.module.css";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
    setTimeout(() => {
      navigate("/general"); 
    }, 100);
  };

  return (
    <div className={"auth-container"}>
      <div className={"auth-body"}>
        <Heading title="Login" />
        <AuthDescription title="Please sign in to continue" />
        <form onSubmit={handleSubmit}>
          <TextInput
            label={"Email"}
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"invictus_innocent.309@example.com"}
          />
          <TextInput
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"Enter Password"}
          />
          <div
            className={styles.forgotPassword}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password
          </div>
          <Button type="submit" title="Login" />
        </form>
        <TextButton
          postfix="Sign Up"
          prefix="Don’t have an account?"
          onClick={() => navigate("/signUp")}
        />
      </div>
    </div>
  );
};
export default Login;
