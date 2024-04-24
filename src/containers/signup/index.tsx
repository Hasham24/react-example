import React, { useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components";

const SignUP: React.FC<any> = (props) => {
  return (
    <div className={styles.container}>
      <Header title="Personal Info." step={1} />
    </div>
  );
};
export default SignUP;
