import React from "react";
import {
  AuthDescription,
  Button,
  CountrySelect,
  Header,
  Heading,
  PhoneInput,
  SecuredText,
  TextInput,
} from "../../components";
import useResidency from "./useResidency";
import styles from "./styles.module.css";
const ResidencyInfo: React.FC<any> = (props) => {
  const { phoneNumber, setPhoneNumber } = useResidency();

  return (
    <div className={styles.container}>
      <Header title="Personal Info." step={1} />
      <div className={styles.body}>
        <Heading title="Register Individual Account!" />
        <AuthDescription title="For the purpose of industry regulation, your details are required." />
        <PhoneInput
          value={phoneNumber}
          label="Phone number"
          onChange={(val: any) => setPhoneNumber(val)}
        />
        <TextInput label="Your address" placeholder="Please enter address" />
        <CountrySelect label="Country of residence" />
        <Button title="Save & Continue" />
        <SecuredText />
      </div>
    </div>
  );
};
export default ResidencyInfo;
