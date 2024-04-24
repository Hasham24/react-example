import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import styles from "./styles.module.css";
interface IHeader {
  step: number;
  title: string;
}
const Header: React.FC<IHeader> = (props) => {
  const { title = "", step = 1 } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <IoChevronBackSharp color="#8692A6" size={20} />
        <p className={styles.back}>Back</p>
      </button>
      <div>
        <p className={styles.step}>{`STEP 0${step}/03`}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
export default Header;
