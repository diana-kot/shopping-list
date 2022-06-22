import React from "react";
import { Reorder } from "framer-motion";
import { useDispatch } from "react-redux";
import Task from "../Task";

import { setTasks } from "@store/Tasks/actions";

import styles from "./Tasks.module.scss";

const Tasks = ({ 
  tasks, 
  sortItem, 
  onRemove, 
  setSearchValue, 
  searchValue }) => {

   

  const setTaskList = () => {
    console.log("Надо изменить стейт");
  };

  return (
    <Reorder.Group as="ol" axys="y" values={tasks} onReorder={setTaskList}>
      {tasks
      
      .filter((task)=> {
        if(task.text.toLowerCase().includes(searchValue.toLowerCase())) {
          return true
        }
        return false
      })
    
      .map((task) => (
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
