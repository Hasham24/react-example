import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { Graphics } from "../../assets";
import styles from "./styles.module.css";

const LeftComponent: React.FC<any> = (props) => {
  return (
    <div className={styles.leftComponent}>
      <img src={Graphics.logo} className={styles.logo} alt="logo" />
      <div className={styles.infoContainer}>
        <ImQuotesLeft color="#00DAF7" size={25} />
        <p className={styles.infoText}>
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </p>
        <div className={styles.authorNameContainer}>
          <p className={styles.vincentObi}>Vincent Obi</p>
          <FaCheckCircle size={20} color="#08AD36" />
        </div>
        <div className={styles.blockContainer}>
          <img src={Graphics.block} className={styles.block} alt="block" />
        </div>
      </div>
      <img src={Graphics.circle} className={styles.circle} alt="circle" />
    </div>
  );
};
export default LeftComponent;
