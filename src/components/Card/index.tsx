/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./styles.module.css";
import { Images } from "../../Assets";
const Card: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data?.coverImg} className={styles.cardImage} />
      <div className={styles.cardStats}>
        <img src={Images.star} className={styles.cardStar} />
        <span>{data?.stats?.rating}</span>
        <span className={styles.gray}>{data?.stats.reviewCount} • </span>
        <span className={styles.gray}>{data?.location}</span>
      </div>
      <h2>{data?.title}</h2>
      <p className={styles.cardPrice}>
        <span className="bold">From ${data.price}</span> / person
      </p>
    </div>
  );
};
export default Card;
