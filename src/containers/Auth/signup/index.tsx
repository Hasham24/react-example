import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  SocialButton,
  CheckBox,
  Header,
  Heading,
  TextInput,
  AuthDescription,
  OR,
  TextButton,
} from "../../../components";
const SignUP: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/residency-info");
  };

  return (
    <div className={"auth-container"}>
      <Header title="Personal Info." step={1} />
      <div className={"auth-body"}>
        <Heading title="Register Individual Account!" />
        <AuthDescription title="For the purpose of industry regulation, your details are required." />
        <form onSubmit={handleSubmit}>
          <TextInput
            label={"Your fullName*"}
            type={"text"}
            id={"fullName"}
            name={"fullName"}
            placeholder={"Invictus Innocent"}
          />
          <TextInput
            label={"Email address*"}
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"Enter email address"}
          />
          <TextInput
            label={"Create password*"}
            type={"password"}
            id={"password"}
            name={"password"}
            placeholder={"Enter Password"}
          />
          <CheckBox />
          <Button type="submit" title="Register Account" />
        </form>
        <OR />
        <SocialButton title="Register with Google" Icon={<FcGoogle />} />
        <TextButton
          postfix="Login"
          prefix="Already have account?"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};
export default SignUP;
