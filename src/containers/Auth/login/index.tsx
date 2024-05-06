import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  SocialButton,
  CheckBox,
  Heading,
  TextInput,
  AuthDescription,
  OR,
} from "../../../components";
import styles from "./styles.module.css";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/residency-info");
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
          <CheckBox />
          <Button type="submit" title="Login" />
        </form>
        <OR />
        <SocialButton
          title="Register with Google"
          Icon={<FcGoogle className={styles.icon} />}
        />
      </div>
    </div>
  );
};
export default Login;
