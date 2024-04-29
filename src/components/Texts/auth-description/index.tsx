import React from "react";
import { IText } from "../interface";
import styles from "./styles.module.css";
const AuthDescriptionText: React.FC<IText> = (props) => {
  const { title = "" } = props;
  return <p className={styles.description}>{title}</p>;
};
export default AuthDescriptionText;
