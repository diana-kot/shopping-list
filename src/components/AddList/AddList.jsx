import React, { useState} from "react";
import axios from "axios";
import Button from "../Button";
import closeSvg from "@assets/img/remove.svg";
import styles from "./AddList.module.scss";

const AddList = ({ onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const addList = () => {
    if (!name) {
      alert("Введите название списка");
      return;
    }
    setIsLoading(true);
    // dispatch(fetchLists(name));
    // dispatch(addList(`chat-${name}`, name))
    onClose();
    axios
      .post("http://localhost:3002/lists", {
        name,
      })
      .then(({ data }) => {
        const listObj = { ...data};
        // dispatch(fetchLists(listObj));
        onAdd(listObj);
        onClose();
      })
      .catch(() => {
        alert("Ошибка при добавлении списка!");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          <button onClick={addList} className={styles.button}>
            {isLoading ? "Добавление..." : "Добавить"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
