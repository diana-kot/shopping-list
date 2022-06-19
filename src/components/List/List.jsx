import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import axios from "axios";
import cn from "classnames";

import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "@store/Tasks/actions";
import AddTask from "../AddTask";
import Tasks from "../Tasks";
import Input from "../Input/Input";
import Button from "../Button";

import { addTask } from "@store/Tasks/actions";

import styles from "./List.module.scss";

const List = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();
  const [inputSearchValue, setInputSearchValue] = React.useState("");

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  console.log(tasks)

  // React.useEffect(() => {
  //   dispatch(fetchTasks());
  // }, []);

  const onAddTask = ({...newTask}) => {
    // dispatch(
    //   addTask(listId, newTask)
     
    // );
    console.log('зашел сюда')
  // console.log(newTask)
  // console.log(tasks)
  };

  const debouncedGetResponse =
    useCallback();
    // debounce(value => getResponse(value), 300),
    // []
    // console.log("поиск")

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  if (!tasks[listId]) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {tasks[listId] ? (
        <>
          <div className={styles.tasks}>
            <div className={styles.tasks__top}>
              <Input
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Поиск..."
                classes={styles.input__search}
              />
              <Button text={"По имени"} />
            </div>
            <div className="app-content">
              <Tasks 
              tasks={tasks[listId]} />
            </div>
            <AddTask onAddTask={onAddTask} />
          </div>
        </>
      ) : (
        <>
          <div className="no-chat-message">Ничего нет</div>

          <div className={styles.tasks}>
            <div className={styles.tasks__top}>
              <Input
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Поиск..."
                classes={styles.input__search}
              />
              <Button text={"По имени"} />
            </div>
            <div className="app-content">
              <Tasks tasks={tasks[listId]} />
            </div>
            <AddTask onAddTask={onAddTask} />
          </div>
        </>
      )}
    </>
  );
};

export default List;
