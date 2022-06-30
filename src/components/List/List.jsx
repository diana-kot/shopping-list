import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "@store/Tasks/actions";
import { sortByAsc } from "@store/Tasks/actions";

import AddTask from "../AddTask";
import Tasks from "../Tasks";
import Input from "../Input/Input";
import Button from "../Button";

import styles from "./List.module.scss";

const List = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const { sortField } = useSelector(({ filter }) => filter);

  // React.useEffect(() => {
  //   dispatch(fetchTasks());
  // }, []);

  const sortFieldTask = sortField;

  const onSortButtonClick = (e) => {
    dispatch(sortByAsc({ listId }));
  };

  if (!tasks[listId]) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {tasks[listId] ? (
        <>
          <div className={styles.tasks}>
            <div className={styles.tasks__top}>
              <Input />
              <Button
                text={"По имени"}
                onClick={() => onSortButtonClick("asc")}
                name="text"
                id={`text`}
              />
            </div>
            <div className="app-content">
              <Tasks tasks={tasks[listId]} sortFieldTask={sortFieldTask} />
            </div>
            <AddTask />
          </div>
        </>
      ) : (
        <>
          <div className={styles.tasks}>
            <div className={styles.tasks__top}>
              <Input />
              <Button
                text={"По имени"}
                onClick={() => onSortButtonClick("text")}
              />
            </div>
            <div className="app-content">
              <Tasks tasks={tasks[listId]} />
            </div>
            <AddTask />
          </div>
        </>
      )}
    </>
  );
};

export default List;
