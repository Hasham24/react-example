import React from "react";
import styles from "./styles.module.css";

const OR: React.FC = () => {
  return (
    <div className={styles.orContainer}>
      <hr color={"#F5F5F5"} className={styles.line} />
      <label className={styles.or}>OR</label>
      <hr color={"#F5F5F5"} className={styles.line} />
    </div>
  );
};
export default OR;
