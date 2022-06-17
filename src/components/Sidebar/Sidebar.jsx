import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AddList from "../AddList";
import { fetchLists, addList, deleteList } from "@store/Sidebar/actions";

import cn from "classnames";

import removeSvg from "@assets/img/remove.svg";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ onClickItem, isRemovable, onRemove }) => {
  const [activeItem, setActiveItem] = useState(null);

  const dispatch = useDispatch();
  const lists = useSelector(({ lists }) => lists.lists);

  const onAddList = (obj) => {
    dispatch(addList(obj));
  };

  const removeList = async (id) => {
    try {
      if (window.confirm("Вы действительно хотите удалить список?")) {
        dispatch(deleteList(id));
        await axios.delete(`http://localhost:3002/lists/${id}`);
      }
    } catch (error) {
      alert("Ошибка при удалении");
      console.error(error);
    }
  };

  React.useEffect(() => {
    dispatch(fetchLists());
  }, []);

  return (
    <>
      <AddList onAdd={onAddList} />
      <ul className={styles.shopping__list}>
        {lists &&
          lists.map((obj) => (
            <li
              key={obj.id}
              className={cn(activeItem === obj.id ? styles.active : "")}
              onClick={() => setActiveItem(obj.id)}
              //   onClick={onClickItem ? () => onClickItem(obj) : null}
            >
              <span>{obj.name}</span>
              {isRemovable && (
                <img
                  className={styles.shopping__list__remove}
                  src={removeSvg}
                  alt="Remove icon"
                  onClick={() => removeList(obj.id)}
                />
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Sidebar;
