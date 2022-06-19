import React, { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import AddList from "../AddList";
import AddTask from "../AddTask";
import TableTask from "../TableTask";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLists, addList, deleteList } from "@store/List/actions";

import cn from "classnames";

import removeSvg from "@assets/img/remove.svg";
import styles from "./List.module.scss";

const List = ({ onClickItem, isRemovable, onRemove, activeItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // navigate("/chats", { replace: true });

  // const [activeItem, setActiveItem] = useState(null);
  const lists = useSelector(({ lists }) => lists.lists);
  // const { listId } = useParams();

  // const tasksList = useSelector(({ tasks }) => tasks.tasks);
  // console.log(tasksList[2]);

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
            <Link key={obj.id} to={`/lists/${obj.id}`}>
              <li
                key={obj.id}
                className={cn(activeItem && activeItem.id === obj.id ? styles.active : "")}
                // className={cn(obj.className, {active: activeItem === obj.id})}
                // onClick={() => setActiveItem(obj.id)}
                 onClick={onClickItem ? () => onClickItem(obj) : null}
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
            </Link>
          ))}
      </ul>
    </>
  );
};

export default List;
