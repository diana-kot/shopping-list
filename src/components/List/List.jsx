import React, { useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "@store/Tasks/actions";
import { setSort } from "@store/Filter/actions";
import { sortByAsc } from "@store/Tasks/actions";

import AddTask from "../AddTask";
import Tasks from "../Tasks";
import Input from "../Input/Input";
import Button from "../Button";

import styles from "./List.module.scss";

const List = () => {
  // const sortItem = { type: "name", order: "asc" };
  const dispatch = useDispatch();
  const { listId } = useParams();

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const { sortField, sortDirection } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  // const onSelectSortType = React.useCallback((sortType) => {
  //   dispatch(sortTask(sortType));
  //   console.log("сортировка", sortType);
  // }, []);

  const sortFieldTask = sortField;
  const sortDirectionTask = sortDirection;
  const [arrFiltred, setArrFiltred] = React.useState(tasks);

  const onSortButtonClick = (e) => {
    let value = 'text';
    //  let direction = value.includes("asc") ? "asc" : "desc";

    // if (value.includes("text")) {
     dispatch(sortByAsc({ listId }));
    
    // }


    // if (sortFieldTask === filterString) {
    //   console.log('1')
    //   // console.log(sortArr)
    //   // const objSort = {
    //   //   sortField: filterString,
    //   //   sortDirection: 1,
    //   // };
    //   dispatch(setSort(filterString, sortDirectionTask === -1 ? 1 : 1));
    // } else {
    //   arrFiltred.sort((a, b) => {
    //     if (a[filterString] > b[filterString]) return 1;
    //     if (b[filterString] > a[filterString]) return -1;
    //     return 0;
    //   });
    // }
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
