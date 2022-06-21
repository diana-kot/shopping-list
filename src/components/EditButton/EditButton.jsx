import React, { useState } from "react";
import cn from "classnames";

import ModalEditTask from "../ModalEditTask";
import styles from "./EditButton.module.scss";

const EditButton = ({ onRemove, id }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleshowDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const changeShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const deleteTask = () => {
    onRemove(id);
    console.log(id);
  };

  return (
    <>
      <div className={styles.edit__button}>
        <span
          className={cn("fas", "fa-pen", "icon-button")}
          onClick={changeShowEditModal}
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
                onClick={() => deleteTask(id)}
              >
                <span className="far fa-trash-alt icon-button"></span>
                <div className={styles.dropdown__item__text}>Удалить</div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.modal}>
          {showEditModal && (
            <ModalEditTask
            //   onCanel={hideEditeModal}
            //  onEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditButton;
