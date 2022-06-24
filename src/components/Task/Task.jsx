import React from "react";
import { useSelector } from "react-redux";
import { Reorder } from "framer-motion";

import EditButton from "../EditButton";

import styles from "./Task.module.scss";

export const Task = ({ id, task}) => {

  return (
    <Reorder.Item value={task} className={styles.grid}>
      <>
        <div 
        className={styles.grid__item}>
          {task.text}
        </div>
        <div className={styles.grid__item}>{task.count}</div>
        <div className={styles.grid__item}>{task.izm}</div>
        <EditButton id={id} task={task} />
      </>
    </Reorder.Item>
  );
};

export default Task;
