import React from "react";
import { MdLockOutline } from "react-icons/md";
import {
  Button,
  CountrySelect,
  Header,
  Heading,
  PhoneInput,
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
        <p className={styles.description}>
          For the purpose of industry regulation, your
          <br />
          details are required.
        </p>
        <PhoneInput
          value={phoneNumber}
          label="Phone number"
          onChange={(val: any) => setPhoneNumber(val)}
        />
        <TextInput label="Your address" placeholder="Please enter address" />
        <CountrySelect label="Country of residence" />
        <Button title="Save & Continue" />
        <div className={styles.infoDescription}>
          <MdLockOutline size={12} color={"#8692A6"} />
          <small className={styles.infoDescriptionText}>Your Info is safely secured</small>
        </div>
      </div>
    </div>
  );
};
export default ResidencyInfo;
