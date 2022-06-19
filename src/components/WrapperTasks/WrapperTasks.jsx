import React, { useCallback, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button";
import TableTask from "../TableTask";
import AddTask from "../AddTask/AddTask";

import { debounce } from "lodash";

import styles from "./WrapperTasks.module.scss";

const WrapperTasks = ({ list }) => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");
  const { listId } = useParams();
  const lists = useSelector(({ lists }) => lists.lists);
  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const debouncedGetResponse = useCallback(
    // debounce(value => getResponse(value), 300),
    // []
    console.log("поиск")
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };
  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__top}>
        <Input
          value={inputSearchValue}
          handleInputChange={handleInputChange}
          placeholder="Поиск..."
          classes={styles.input__search}
        />
        <Button text={"По имени"} />
      </div>
      <div className={styles.tasks__cotent}>
         <TableTask 
          //  key={task.id}
              // list={list}
              
              /> 
        <AddTask />
      </div>
    </div>
  );
};

export default WrapperTasks;
