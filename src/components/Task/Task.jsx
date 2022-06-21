import React from "react";
import { Reorder } from "framer-motion";
import styles from "./Task.module.scss";

export const Task = ({ task }) => {
  return (
    <Reorder.Item value={task} className={styles.grid}>
      <div 
      id="name"
      className={styles.grid__item}>
        {task.text}
        </div>
      <div className={styles.grid__item}>{task.count}</div>
      <div className={styles.grid__item}>{task.izm}</div>
    </Reorder.Item>
  );
};

export default Task;
