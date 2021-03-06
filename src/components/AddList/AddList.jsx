import React, { useState } from "react";

import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addList} from "@store/List/actions";
import { addListTasks } from "@store/Tasks/actions";

import closeSvg from "@assets/img/remove.svg";
import styles from "./AddList.module.scss";

const AddList = () => {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitList = () => {
    if (!name) {
      alert("Введите название списка");
      return;
    }
    setIsLoading(true);
    const id = `chat${Date.now()}`;
    dispatch(addList(`list-${id}`, name));
    dispatch(addListTasks(`list-${id}`));
    setIsLoading(false);
    onClose();

    // axios
    //   .post("http://localhost:3002/lists", {
    //     name: name,
    //   })
    //   .then(({ data }) => {
    //     const listObj = { ...data, tasks: [] };
    //     // onAdd(listObj);
    //     onClose();
    //   })

    //   .catch(() => {
    //     alert("Ошибка при добавлении списка!");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //     dispatch(addList(`list-${name}`, name));
    //     dispatch(addListTasks(`list-${name}`));
    //   });
  };

  const onClose = () => {
    setVisiblePopup(false);
    setName("");
  };

  return (
    <div className={styles.add__list}>
      <Button
        text="Доб. список"
        className="shopping__button"
        onClick={() => setVisiblePopup(true)}
      />
      {visiblePopup && (
        <div className={styles.add__list__popup}>
          <img
            onClick={onClose}
            src={closeSvg}
            alt="Close button"
            className={styles.list__popup__close}
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.field}
            type="text"
            placeholder="Название списка"
          />
          <button onClick={submitList} className={styles.button}>
            {isLoading ? "Добавление..." : "Добавить"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
