import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  AuthDescription,
  Button,
  Header,
  Heading,
  SecuredText,
  TextInput,
} from "../../../components";
const ResidencyInfo: React.FC<any> = (props) => {
  return (
    <div className={"auth-container"}>
      <Header title="Bank Verification" step={3} />
      <div className={"auth-body"}>
        <Heading title="Complete Your Profile!" />
        <AuthDescription title="For the purpose of industry regulation, your details are required." />
        <TextInput
          label="Bank verification number (BVN)"
          placeholder="Enter account number"
          Icon={<FaCheckCircle size={15} color="#08AD36" />}
        />
        <Button
          title="Save & Continue"
          inputMode="numeric"
          style={{ marginTop: 100 }}
        />
        <SecuredText />
      </div>
    </div>
  );
};
export default ResidencyInfo;
