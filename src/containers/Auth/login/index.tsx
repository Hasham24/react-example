import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  SocialButton,
  Heading,
  TextInput,
  AuthDescription,
  OR,
  TextButton,
} from "../../../components";
import styles from "./styles.module.css";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
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
          <div className={styles.forgotPassword} onClick={() => navigate('/forgot-password')}>
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
