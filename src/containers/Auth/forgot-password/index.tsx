import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
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
const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/residency-info");
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
        <Heading title="Forgot Password?" />
        <AuthDescription title="Please enter the email you would like your password reset information sent to" />
        <form onSubmit={handleSubmit}>
          <TextInput
            label={"Email"}
            type={"text"}
            id={"email"}
            name={"email"}
            placeholder={"Enter email"}
            styles={{
              container:{
                maxWidth: "426px",
              }
            }}
          />
          <Button type="submit" title="Request Reset Link"
          sx={{
            marginTop:'20px'
          }}
          />
        </form>
        <OR />
        <SocialButton
          title="Register with Google"
          Icon={<FcGoogle />}
        />
        <TextButton
          postfix="Back to Login"
          prefix=""
          onClick={() => navigate("/login")}
        />
      </Box>
    </div>
  );
};
export default ForgotPassword;
