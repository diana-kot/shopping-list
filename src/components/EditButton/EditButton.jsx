import React, { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTask, completedTask } from "@store/Tasks/actions";
import ModalEditTask from "../ModalEditTask";

import styles from "./EditButton.module.scss";

const EditButton = ({ id, task }) => {
  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const dispatch = useDispatch();
  const { listId } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleshowDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const changeShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const handleDeleteTask = (idtask) => {
    dispatch(deleteTask(listId, idtask));
  };

  const handleToggleTask = (idtask, index) => {
    
    const taskCompleIndex = idtask
    // const copyArr = {
   
    //   [listId]: tasks[listId]
    //   .splice(taskCompleIndex, 1)[0]
    // }
    // console.log(copyArr)
    // const taskCompleted = copyArr.splice(taskCompleIndex, 1)[0]
    //  console.log(taskCompleted)
    dispatch(completedTask(listId, taskCompleIndex)
    );
 
 
 

  };

  return (
    <>
      <div className={styles.edit__button}>
        <span
          className={cn("fas", "fa-pen", "icon-button")}
          onClick={() => changeShowEditModal(id)}
        ></span>
        <div className={styles.dropdown}>
          <span
            className="fas fa-ellipsis-v icon-button"
            onClick={toggleshowDropdown}
          ></span>
          {isDropdown && (
            <div className={styles.dropdown__content}>
              <div
                className={styles.dropdown__item}
                onClick={() => handleDeleteTask(id)}
              >
                <span className="far fa-trash-alt icon-button"></span>
                <div className={styles.dropdown__item__text}>Удалить</div>
              </div>

              <div
                className={styles.dropdown__item}
                onClick={(index) => handleToggleTask(id, index)}
              >
                <div className={styles.dropdown__item__text}>Завершить</div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.modal}>
          {showEditModal && (
            <ModalEditTask
              id={id}
              task={task}
              setShowEditModal={setShowEditModal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditButton;
