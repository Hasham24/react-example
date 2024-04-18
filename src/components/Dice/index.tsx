import React from "react";
import styles from "./styles.module.css";
export default function Die(props: any) {
  return (
    <div
      className={props.dice?.isHeld ? styles.diceFaceActive : styles.diceFace}
      onClick={props.holdDice}
    >
      <h2 className={styles.diceNum}>{props.dice.value}</h2>
    </div>
  );
}
