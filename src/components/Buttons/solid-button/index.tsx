import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
interface IProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}
const Button: React.FC<IProps> = (props) => {
  const { title = "", ...rest  } = props;
  return <button {...rest} className={styles.container}>{title}</button>;
};
export default Button;
