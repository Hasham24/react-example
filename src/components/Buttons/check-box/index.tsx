import React from "react";
import styles from "./styles.module.css";
const CheckBox: React.FC<any> = (props) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="agree" name="agree"/>
      <label className={styles.label}>I Agree to Terms & Conditions</label>
    </div>
  );
};
export default CheckBox;
