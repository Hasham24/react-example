import React from "react";
import { IText } from "../interface";
import styles from "./styles.module.css";

const Heading: React.FC<IText> = (props) => {
  const { title = "" } = props;
  return <p className={styles.heading}>{title}</p>;
};
export default Heading;
