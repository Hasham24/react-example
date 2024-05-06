import React from "react";
import { IAccountButton } from "../interface";
import styles from "./styles.module.css";
const TextButton: React.FC<IAccountButton> = (props) => {
  const { postfix = "", prefix = "", ...rest } = props;
  return (
    <button {...rest} className={styles.container}>
      {prefix} <span className={styles.text}>{postfix}</span>
    </button>
  );
};
export default TextButton;
