import React, {useEffect} from "react";
import styles from "./styles.module.css";
import {
  Button,
  SocialButton,
  CheckBox,
  Header,
  Heading,
  TextInput,
} from "../../components";

const ResidencyInfo: React.FC<any> = (props) => {
useEffect(() => {
  console.log('first')
}, [])

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
      </div>
    </div>
  );
};
export default ResidencyInfo;
