import React, { useState } from "react";
import cn from "classnames";
import { Reorder } from "framer-motion";
import { createDispatchHook, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Task from "../Task";
import Button from "../Button";
import { deleteTask, editTask, setTasks } from "@store/Tasks/actions";

import styles from "./Tasks.module.scss";

const Tasks = ({ tasks, sortItem, onRemove }) => {
  const { listId } = useParams();
  const dispatch = useDispatch();



  const handleDelete = (id) => {
    dispatch(deleteTask(listId, id));
  };

  const handleEdit = (id, newText, newCount, newEzn) => {
    dispatch(editTask(listId, id, newText, newCount, newEzn));
    console.log(2);
  };

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
          {/* <Button text={"Удалить"} onClick={() => handleDelete(task.id)} /> */}
          {/* <Button onClick={() => handleEdit(task.id)} text={"Редактировать"} /> */}

          
        </div>
      ))}
    </Reorder.Group>
  );
};

export default Tasks;
