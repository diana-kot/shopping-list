import React from "react";
import { Reorder } from "framer-motion";
import { useSelector } from "react-redux";
import Task from "../Task";

import { setTasks } from "@store/Tasks/actions";

import styles from "./Tasks.module.scss";

const Tasks = ({ tasks,  sortFieldTask}) => {
  // const search = searchValue ? `&search=${searchValue}` : "";
  const { searchValue } = useSelector(({ filter }) => filter);
  
  const { sortField, sortDirection } = useSelector(({ filter }) => filter);

  const setTaskList = () => {
    console.log("Надо изменить стейт");
  };

  return (
    <Reorder.Group as="ol" axys="y" values={tasks} onReorder={setTaskList}>
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
