import React from "react";
import styles from "./styles.module.css";
interface IHeader {
  title: string;
}
const Heading: React.FC<IHeader> = (props) => {
  const { title = "" } = props;
  return <p className={styles.heading}>{title}</p>;
};
export default Heading;
