import React from "react";

import Task from "../Task";

import styles from "./Tasks.module.scss";

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="message-list" key={task.id}>
          <Task 
          text={task.text} 
          count={task.count} 
          izm={task.izm} 
          />
        </div>
      ))}
    </>
  );
};

export default Tasks;
