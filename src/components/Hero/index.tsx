/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./styles.module.css";
import { Images } from "../../Assets";
const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <img src={Images.grid} className={styles.heroPhoto} />
      <h1 className={styles.heroHeader}>Online Experiences</h1>
      <p className={styles.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
export default Hero;
