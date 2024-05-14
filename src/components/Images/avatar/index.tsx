import React from "react";
import styles from "./styles.module.css";
const Avatar: React.FC = () => {
  return (
    <img
      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="profile pic"
      width={55}
      height={55}
      className={styles.avatar}
    />
  );
};
export default Avatar;
