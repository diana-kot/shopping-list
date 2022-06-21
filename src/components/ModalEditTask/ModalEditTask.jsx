import React, { useEffect, useState } from "react";
import Button from "../Button";
import { editTask } from "@store/Tasks/actions";

import styles from "./ModalEditTask.module.scss";

const ModalEditTask = ({
  inputText,
  setInputText,
  inputCount,
  setInputCount,
  setInputOption,
  inputOption,
  selectIems,
  onCanel,
}) => {
  

 

  return (
    <>
 
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <div className={styles.modal__header}>
              <div className={styles.modal__title}>Редактирование продукта</div>
            </div>
            <form
              className={styles.modal__form}
              //    onSubmit={addTasks}
            >
              <input
                value={inputText}
                className={styles.modal__input}
                type="text"
                placeholder="Продукт"
                onChange={(e) => setInputText(e.target.value)}
              />
              <input
                type="number"
                value={inputCount}
                onChange={(e) => setInputCount(e.target.value)}
                className={styles.modal__input}
                placeholder="Кол-во"
                step="1"
                min="1"
                max="100"
                // required
              />
              <select
                name="izm"
                className={styles.modal__input}
                onChange={(e) => setInputOption(e.target.value)}
                value={inputOption}
              >
                {selectIems &&
                  selectIems.map((item, index) => (
                    <option key={`${item}_${index}`}>{item}</option>
                  ))}
              </select>
              <Button
                // type="submit"
                text={"Сохранить"}
                // disabled={isLoading}
                // onClick={()=> onIsActiveChange(true)}
                className={styles.modal__input}
              ></Button>
            </form>
          </div>
        </div>
     
    </>
  );
};

export default ModalEditTask;
