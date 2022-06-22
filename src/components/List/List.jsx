import React, { useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, sortTask } from "@store/Tasks/actions";
import { deleteTask, setTasks } from "@store/Tasks/actions";
import AddTask from "../AddTask";
import Tasks from "../Tasks";
import Input from "../Input/Input";
import Button from "../Button";

import styles from "./List.module.scss";

const List = ({ onSortByName }) => {
  const sortItem = { type: "name", order: "asc" };
  const dispatch = useDispatch();
  const { listId } = useParams();

  const [searchValue, setSearchValue] = React.useState("");

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const { sortBy } = useSelector(({ tasks }) => tasks);
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    dispatch(fetchTasks(search, sortBy ));
  }, [searchValue, sortBy ]);

  // const onSelectSortType = React.useCallback((sortType) => {
  //   dispatch(sortTask(sortType));
  //   console.log("сортировка", sortType);
  // }, []);

  const onSortButtonClick = (e) => {
    // onSortByName(sortItem)
    dispatch(sortTask(sortItem));
  };

  if (!tasks[listId]) {
    return <Navigate to="/" replace />;
  }

  const removeTask = (idtask) => {
    dispatch(deleteTask(listId, idtask));
  };

  return (
    <>
      {tasks[listId] ? (
        <>
          <div className={styles.tasks}>
            <div className={styles.tasks__top}>
              <Input
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
              <Button
                // onClick={onSelectSortType}
                // activeSortType={sortBy.type}
                onClick={(e) => onSortButtonClick(e.currentTarget.id)}
                text={"По имени"}
                name="name"
                id={`name`}
                // itemSort={sortItem}
              />
            </div>
            <div className="app-content">
              <Tasks
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                tasks={tasks[listId]}
                onSortByName={sortItem}
                onRemove={removeTask}
              />
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
                // onClick={onSelectSortType}
                // itemSort={sortItem}
                onClick={(e) => onSortButtonClick(e.currentTarget.id)}
                text={"По имени"}
                name="name"
                id={`name`}
              />
            </div>
            <div className="app-content">
              <Tasks
                onRemove={removeTask}
                tasks={tasks[listId]}
                onSortByName={sortItem}
              />
            </div>
            <AddTask />
          </div>
        </>
      )}
    </>
  );
};

export default List;
