import React from "react";
import { MdLockOutline } from "react-icons/md";
import styles from "./styles.module.css";
const SecuredText: React.FC = () => {
  return (
    <div className={styles.infoDescription}>
      <MdLockOutline size={12} color={"#8692A6"} />
      <small className={styles.infoDescriptionText}>
        Your Info is safely secured
      </small>
    </div>
  );
};
export default SecuredText;
