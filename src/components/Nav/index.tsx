import React from "react";
import styles from "./styles.module.css";
import {Images} from "../../Assets";
const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={Images.logo} className={styles.navLogo} alt="react-logo" />
      </nav>
    </header>
  );
};
export default Header;
