import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../Button";
import { editTask } from "@store/Tasks/actions";

import styles from "./ModalEditTask.module.scss";

const ModalEditTask = ({
  id,
  task,
  setShowEditModal,
  // selectIems,
}) => {
  const { listId } = useParams();
  const selectIems = ["шт.", "банк", "кг.", "г"];
  const [isLoading, setIsLoading] = useState("");

  const [newText, setNewText] = useState(task.text);
  const [newCount, setNewCount] = useState(task.count);
  const [newOption, setNewOption] = useState(task.izm);
  const dispatch = useDispatch();

  const close = () => {
    setIsLoading(true);
    if (newText && newCount && newOption) {
      dispatch(editTask(listId, id, newText, newCount, newOption));
    }
    setIsLoading(false);
    setShowEditModal(false);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <div className={styles.modal__title}>Редактирование продукта</div>
          </div>
          <div
            className={styles.modal__form}
            // onSubmit={handleEditTask}
          >
            <input
              value={newText}
              className={styles.modal__input}
              type="text"
              placeholder="Продукт"
              onChange={(e) => setNewText(e.target.value)}
              required
            />
            <input
              type="number"
              value={newCount}
              onChange={(e) => setNewCount(e.target.value)}
              className={styles.modal__input}
              placeholder="Кол-во"
              step="1"
              min="1"
              max="100"
              required
            />
            <select
              name="izm"
              className={styles.modal__input}
              onChange={(e) => setNewOption(e.target.value)}
              value={newOption}
            >
              {selectIems &&
                selectIems.map((item, index) => (
                  <option key={`${item}_${index}`}>{item}</option>
                ))}
            </select>
            <Button
              // type="submit"
              text={isLoading ? "сохранение..." : "сохранить"}
              onClick={close}
              disabled={isLoading}
              className={styles.modal__input}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditTask;
