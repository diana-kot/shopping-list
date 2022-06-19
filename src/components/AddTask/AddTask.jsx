import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { useParams, Navigate } from "react-router-dom";
import { addTask, addMessageWithThunk } from "@store/Tasks/actions";

const AddTask = ({ lists, onAddTask }) => {
  const selectIems = ["шт.", "банк", "кг.", "г"];
  const [inputText, setInputText] = useState("");
  const [inputCount, setInputCount] = useState("");
  const [inputOption, setInputOption] = useState(selectIems[0]);
  const [isLoading, setIsLoading] = useState("");
  const { listId } = useParams();

  const dispatch = useDispatch();

  const addTasks = (e) => {
    e.preventDefault();
    if (!inputText && !inputCount && !inputOption) {
      alert("Заполните данные");
      return;
     
    }
    const obj = {
      text: inputText,
      count: inputCount,
      izm: inputOption,
      id: `tsk-${Date.now()}`,
    };

    setIsLoading(true);
    onAddTask(obj);
    dispatch(
      addTask(listId, 
        obj
      )
    );
    
    setIsLoading(false);
    onClose();

    // onAddTask(listId, obj)
    // dispatch(
    //   addTask(listId, {
    //     text: inputText,
    //     count: inputCount,
    //     izm: inputOption,
    //     id: `tsk-${Date.now()}`,
    //   })
    // );

    // axios
    //   .post('http://localhost:3002/tasks', obj)
    //   .then(({ data }) => {
    //     onAddTask(listId, data);
    //   })
    //   .catch(e => {
    //     alert('Ошибка при добавлении задачи!');
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const onClose = () => {
    setInputText("");
    setInputCount("");

  };

  return (
    <>
      <form onSubmit={addTasks}>
        <div className={styles.tasks}>
          <input
            value={inputText}
            className={styles.field}
            type="text"
            placeholder="Продукт"
            onChange={(e) => setInputText(e.target.value)}
          />
          <input
            type="number"
            value={inputCount}
            onChange={(e) => setInputCount(e.target.value)}
            className={styles.field}
            placeholder="Кол-во"
            step="1"
            min="1"
            max="100"
            required
          />
          <select
            name="izm"
            className={styles.field}
            onChange={(e) => setInputOption(e.target.value)}
            value={inputOption}
          >
            {selectIems &&
              selectIems.map((item, index) => (
                <option key={`${item}_${index}`}>{item}</option>
              ))}
          </select>
          <Button
            type="submit"
            text={"добавить"}
            disabled={isLoading}
            // onClick={addTasks}
            className={styles.field}
          >
            {isLoading ? "Добавление..." : "Добавить задачу"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
