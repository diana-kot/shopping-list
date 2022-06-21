import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import axios from "axios";
import cn from "classnames";

import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, sortTask } from "@store/Tasks/actions";
import { deleteTask, editTask, setTasks } from "@store/Tasks/actions";
import AddTask from "../AddTask";
import Tasks from "../Tasks";
import Input from "../Input/Input";
import Button from "../Button";

import { addTask } from "@store/Tasks/actions";

import styles from "./List.module.scss";

const List = ({ onSortByName, text }) => {
  const sortItem = { type: "name", order: "asc" };

  const dispatch = useDispatch();
  const { listId } = useParams();
  const [inputSearchValue, setInputSearchValue] = React.useState("");

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const { sortBy } = useSelector(({ tasks }) => tasks);

  React.useEffect(() => {
    dispatch(fetchTasks(sortBy));
  }, [sortBy]);

  // const onSelectSortType = React.useCallback((sortType) => {
  //   dispatch(sortTask(sortType));
  //   console.log("сортировка", sortType);
  // }, []);

  const onSortButtonClick = (e) => {
    // onSortByName(sortItem)
    dispatch(sortTask(sortItem));
  };

  const onAddTask = ({ ...newTask }) => {
    // dispatch(
    //   addTask(listId, newTask)
    // );
    // console.log(newTask)
    // console.log(tasks)
  };

  const debouncedGetResponse = useCallback();
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

  const removeTask = (idtask) => {
    dispatch(deleteTask(listId, idtask));
  };



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
              <Button
                // onClick={onSelectSortType}
                // activeSortType={sortBy.type}
                onClick={(e) => onSortButtonClick(e.currentTarget.id)}
                text={"По имени"}
                name="name"
                id={`name`}
                // itemSort={sortItem}
              />
            </div>
            <div className="app-content">
              <Tasks
                tasks={tasks[listId]}
                onSortByName={sortItem}
                onRemove={removeTask}
              />
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
              <Button
                // onClick={onSelectSortType}
                // itemSort={sortItem}
                onClick={(e) => onSortButtonClick(e.currentTarget.id)}
                text={"По имени"}
                name="name"
                id={`name`}
              />
            </div>
            <div className="app-content">
              <Tasks
                onRemove={removeTask}
                tasks={tasks[listId]}
                onSortByName={sortItem}
              />
            </div>
            <AddTask onAddTask={onAddTask} />
          </div>
        </>
      )}
    </>
  );
};

export default List;
