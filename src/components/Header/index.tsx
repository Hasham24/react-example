import React from "react";
import styles from "./styles.module.css";
const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          className={styles.navLogo}
          alt="react-logo"
        />
        <h1 className={styles.navHeader}>ReactFacts</h1>
        <h3 className={styles.navHeading}>React Course - Project 1</h3>
      </nav>
    </header>
  );
};
export default Header;
