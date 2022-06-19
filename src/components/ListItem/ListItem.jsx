import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import AddTask from "../AddTask";
import TableTask from "../TableTask";

//добавление таски

import styles from "./ListItem.module.scss";

const ListItem = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();
  const lists = useSelector(({ lists }) => lists.lists);

  const tasksList = useSelector(({ tasks }) => tasks.tasks);
  console.log(tasksList);

  // const handleSubmit = (messageText) => {
  //     dispatch(
  //       addMessageWithThunk(chatId, {
  //         text: messageText,
  //         author: "me",
  //         id: `msg-${Date.now()}`,
  //       })
  //     );
  //   };

  return (
    <div>
 <AddTask />
 <TableTask list={lists[1]}/>
      {/* {tasksList[listId] ? (
        <>
          <TableTask tasks={tasksList[listId]} />
          <AddTask />
        </>
      ) : (
        <>
        <div className="no-chat-message">
         Таблица пуста
        </div>
          <TableTask tasks={tasksList[listId]} />

          <AddTask />
        </>
      )} */}
    </div>
  );
};

export default ListItem;
