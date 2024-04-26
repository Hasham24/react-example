import React from "react";
import styles from "./styles.module.css";
interface IProps {
  title: string;
  Icon: JSX.Element;
}
const SocialButton: React.FC<IProps> = (props) => {
  const { title = "", Icon } = props;
  return (
    <button className={styles.container}>
      {Icon}
      <label className={styles.title}>{title}</label>
    </button>
  );
};
export default SocialButton;
