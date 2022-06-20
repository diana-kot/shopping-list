import React from "react";
import styles from "./Task.module.scss";

export const Task = ({ id, text, count, izm, removeTask, editTask }) => {
  return (
    <div className={styles.grid}>
      <>
        <div className={styles.grid__item}>{text}</div>
        <div className={styles.grid__item}>{count}</div>
        <div className={styles.grid__item}>{izm}</div>
      </>
    </div>
  );
};

export default Task;
