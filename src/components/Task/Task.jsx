import React, {useState} from "react";
import { Reorder } from "framer-motion";
import EditButton from "../EditButton";
import styles from "./Task.module.scss";

export const Task = ({ id, task, onRemove }) => {

  return (
    <Reorder.Item value={task} className={styles.grid}>
      <>
        <div id="name" className={styles.grid__item}>
          {task.text}
        </div>
        <div className={styles.grid__item}>{task.count}</div>
        <div className={styles.grid__item}>{task.izm}</div>
        <EditButton onRemove={onRemove} id={id} task= {task} />
      </>
    </Reorder.Item>
  );
};

export default Task;
