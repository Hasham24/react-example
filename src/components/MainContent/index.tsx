import React from "react";
import styles from "./styles.module.css";
const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Fun facts about React</h1>
      <ul className={styles.contentItems}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};
export default MainContent;
