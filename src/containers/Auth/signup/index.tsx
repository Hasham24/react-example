import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { lg: "0px 100px 0px 100px", md: "0px" },
        }}
      >
        <Heading title="Register Individual Account!" />
        <AuthDescription title="For the purpose of industry regulation, your details are required." />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
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
        </Box>
        <OR />
        <SocialButton title="Register with Google" Icon={<FcGoogle />} />
        <TextButton
          postfix="Login"
          prefix="Already have account?"
          onClick={() => navigate("/login")}
        />
      </Box>
    </div>
  );
};
export default SignUP;
