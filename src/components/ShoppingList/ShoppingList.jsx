import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLists, addList, deleteList } from "@store/List/actions";
import { deleteTask, addListTasks } from "@store/Tasks/actions";
import axios from "axios";
import Lists from "./present/Lists";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const lists = useSelector(({ lists }) => lists.lists);
  const { chatId } = useParams();
  const [activeItem, setActiveItem] = useState();
  const navigate = useNavigate();

  const handleSubmit = (obj) => {
    dispatch(addList(`list-${obj}`, obj));
    dispatch(addListTasks(`list-${obj}`));
    console.log("зашел сюда");
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

  const handleDelete = () => {
    dispatch(deleteTask(chatId));
    dispatch(deleteList(chatId));
    navigate("/", { replace: true });
  };

  React.useEffect(() => {
    dispatch(fetchLists());
  }, []);

  return (
    <Lists
      removeList={removeList}
      lists={lists}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      onClickItem={(item) => {
        setActiveItem(item);
      }}
      activeItem={activeItem}
      isRemovable
    />
  );
};

export default ShoppingList;
