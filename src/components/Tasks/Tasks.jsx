import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Task from "../Task";
import Button from "../Button";
import { deleteTask, editTask } from "@store/Tasks/actions";
import styles from "./Tasks.module.scss";

const Tasks = ({ tasks }) => {
  const { listId } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(listId, id));
    console.log(1)
  };

  const handleEdit = (id, newText, newCount, newEzn) => {
    dispatch(editTask(listId, id, newText, newCount, newEzn));
    console.log(2)
  };

  return (
    <>
      {tasks.map((task) => (
        <div className={styles.message__list} key={task.id}>
          <Task text={task.text} count={task.count} izm={task.izm} />
          <Button text={"Удалить"} onClick={() => handleDelete(task.id)} />
          <Button onClick={() => handleEdit(task.id)} text={"Редактировать"} />
        </div>
      ))}
    </>
  );
};

export default Tasks;
