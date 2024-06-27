import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  AuthDescription,
  Button,
  CountrySelect,
  Header,
  Heading,
  PhoneInput,
  SecuredText,
  TextInput,
} from "../../../components";
import useResidency from "./useResidency";

const ResidencyInfo: React.FC<any> = () => {
  const { phoneNumber, setPhoneNumber } = useResidency();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/bank-info");
  };
  return (
    <div className={"auth-container"}>
      <Header title="Residency Info." step={2} />
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
        <form onSubmit={handleSubmit}>
          <PhoneInput
            value={phoneNumber}
            label="Phone number"
            onChange={(val: any) => setPhoneNumber(val)}
          />
          <TextInput label="Your address" placeholder="Please enter address" 
           styles={{
            container:{
              maxWidth: "426px",
            }
          }}
          />
          <CountrySelect label="Country of residence" />
          <Button title="Save & Continue" type="submit"
          sx={{
            marginTop:'20px'
          }}
          />
          <SecuredText />
        </form>
      </Box>
    </div>
  );
};
export default ResidencyInfo;
