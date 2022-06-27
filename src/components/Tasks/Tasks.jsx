import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Reorder } from "framer-motion";

import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { reorderTasks, fetchTasks } from "@store/Tasks/actions";

import styles from "./Tasks.module.scss";

const Tasks = ({ tasks, sortFieldTask }) => {
  const { listId } = useParams();
  const [taskDrop, setTaskDrop] = React.useState(tasks);

  const dispatch = useDispatch();
  // const search = searchValue ? `&search=${searchValue}` : "";
  const { searchValue } = useSelector(({ filter }) => filter);

  const { sortField, sortDirection } = useSelector(({ filter }) => filter);

  // const setTaskList = () => {
  //   console.log("Надо изменить стейт");
  //   setTaskDrop()
  //   dispatch(reorderTasks(listId, tasks));
  // };

  return (
    <Reorder.Group as="ol" axys="y" values={tasks} onReorder={()=>setTaskDrop()}>
      {tasks
        .filter((task) => {
          if (task.text.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map((task) => (
          <div className={styles.message__list} key={task.id}>
            <Task
              taskText={sortFieldTask}
              key={task.id}
              text={task.text}
              id={task.id}
              task={task}
            />
          </div>
        ))}
    </Reorder.Group>
  );
};

export default Tasks;
