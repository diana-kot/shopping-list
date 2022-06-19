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

// import { addMessageWithThunk } from "../../store/Tasks/actions";

import styles from "./List.module.scss";

const List = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const [inputSearchValue, setInputSearchValue] = React.useState("");

  const tasks = useSelector(({ tasks }) => tasks.tasks);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);


  const handleSubmit = (messageText) => {
    dispatch();
    // addMessageWithThunk(chatId, {
    //   text: messageText,
    //   author: "me",
    //   id: `msg-${Date.now()}`,
    // })
  };

  const debouncedGetResponse = useCallback(
    // debounce(value => getResponse(value), 300),
    // []
    console.log("поиск")
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  if (!tasks[chatId]) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {tasks[chatId] ? (
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
              <Tasks tasks={tasks[chatId]} />
            </div>
            <AddTask />
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
              <Tasks tasks={tasks[chatId]} />
            </div>
            <AddTask />
          </div>
        </>
      )}
    </>
  );
};

export default List;
