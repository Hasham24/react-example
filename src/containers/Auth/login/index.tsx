import React from "react";
import { Box } from "@mui/material";
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
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    setTimeout(() => {
      navigate("/general");
      window.location.reload(); 
    }, 100);
  };

  return (
    <div className={"auth-container"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { lg: "0px 100px 0px 100px", md: "0px" },
        }}
      >
        <Heading title="Login" />
        <AuthDescription title="Please sign in to continue" />
        <form onSubmit={handleSubmit}>
          <TextInput
            label={"Email"}
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"invictus_innocent.309@example.com"}
            styles={{
              container:{
                maxWidth: "426px",
              }
            }}
          />
          <TextInput
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"Enter Password"}
            styles={{
              container:{
                maxWidth: "426px",
              }
            }}
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
      </Box>
    </div>
  );
};
export default Login;
