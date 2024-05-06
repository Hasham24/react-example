import React from "react";
import { useNavigate } from "react-router-dom";
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
import styles from "./styles.module.css";
const ResidencyInfo: React.FC<any> = () => {
  const { phoneNumber, setPhoneNumber } = useResidency();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/bank-info");
  };
  return (
    <div className={styles.container}>
      <Header title="Residency Info." step={2} />
      <div className={styles.body}>
        <Heading title="Register Individual Account!" />
        <AuthDescription title="For the purpose of industry regulation, your details are required." />
        <form onSubmit={handleSubmit}>
          <PhoneInput
            value={phoneNumber}
            label="Phone number"
            onChange={(val: any) => setPhoneNumber(val)}
          />
          <TextInput label="Your address" placeholder="Please enter address" />
          <CountrySelect label="Country of residence" />
          <Button title="Save & Continue" type="submit" />
          <SecuredText />
        </form>
      </div>
    </div>
  );
};
export default ResidencyInfo;
