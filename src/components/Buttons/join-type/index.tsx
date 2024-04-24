import React from "react";
import styles from "./styles.module.css";
import { FaArrowRight } from "react-icons/fa6";
interface IJoinButton {
  isSelected: boolean;
  title: string;
  description: string;
  Icon: JSX.Element;
  onClick: () => void;
}
const JoinTypeButton: React.FC<IJoinButton> = (props) => {
  const {
    isSelected = false,
    title = "",
    description = "",
    Icon,
    onClick,
  } = props;
  return (
    <div
      className={isSelected ? styles.selectedContainer : styles.container}
      onClick={onClick}
    >
      <div className={isSelected ? styles.selectedCircle : styles.circle}>
        {Icon}
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      {isSelected && (
        <button className={styles.arrowButton}>
          <FaArrowRight size={20} color={"#1565D8"} />
        </button>
      )}
    </div>
  );
};
export default JoinTypeButton;
