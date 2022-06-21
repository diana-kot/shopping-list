import React, { useState } from "react";
import cn from "classnames";
import { Reorder } from "framer-motion";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Task from "../Task";

import { editTask, setTasks } from "@store/Tasks/actions";

import styles from "./Tasks.module.scss";

const Tasks = ({ tasks, sortItem, onRemove }) => {

  const setTaskList = () => {
    console.log("Надо изменить стейт");
  };

  return (
    <Reorder.Group as="ol" axys="y" values={tasks} onReorder={setTaskList}>
      {tasks.map((task) => (
        <div className={styles.message__list} key={task.id}>
          <Task
            key={task.id}
            text={task.text}
            // count={task.count}
            // izm={task.izm}
            id={task.id}
            task={task}
            onRemove={onRemove}
          />
        </div>
      ))}
    </Reorder.Group>
  );
};

export default Tasks;
