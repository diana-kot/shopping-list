import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import Button from "../Button";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");

  return (
    <>
      <div className={styles.tasks}>
        <input
          value={inputValue}
          className={styles.field}
          type="text"
          placeholder="Продукт"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          className={styles.field}
          placeholder="Кол-во"
          step="1"
          min="0"
          max="100"
          required
        />
        <select name="age" className={styles.field}>
          <option value={'шт'}>шт</option>
          <option>кг</option>
          <option>бан</option>
        </select>
        <Button
          text={"добавить"}
          disabled={isLoading}
          //   onClick={addTask}
          className={styles.field}
        >
          {isLoading ? "Добавление..." : "Добавить задачу"}
        </Button>
      </div>
    </>
  );
};

export default AddTask;
