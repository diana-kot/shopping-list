import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { fetchTasks } from "@store/Tasks/actions";

import styles from "./TableTask.module.scss";

const TableTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks.tasks);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <div className={styles.grid}>
        {tasks.map((task) => (
          <>
            <div key={task.id} className={styles.grid__item}>
              <div>{task.text}</div>
              <div>{task.count}</div>
              <div>{task.izm}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TableTask;
