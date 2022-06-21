import React from "react";
import { Reorder } from "framer-motion";
import Button from "../Button";
import cn from "classnames";
import EditButton from "../EditButton";
import styles from "./Task.module.scss";

export const Task = ({ task, onEdit, onRemove }) => {
  return (
    <Reorder.Item value={task} className={styles.grid}>
      <>
        <div id="name" className={styles.grid__item}>
          {task.text}
        </div>
        <div className={styles.grid__item}>{task.count}</div>
        <div className={styles.grid__item}>{task.izm}</div>
        <EditButton onEdit={onEdit} onRemove={onRemove} />
      </>
    </Reorder.Item>
  );
};

export default Task;
