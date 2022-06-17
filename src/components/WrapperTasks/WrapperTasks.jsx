import React, { useCallback, useEffect } from "react";

import Input from "../Input/Input";
import Button from "../Button";
import Table from "../Table";
import AddTask from "../AddTask/AddTask";

import { debounce } from "lodash";

import styles from "./WrapperTasks.module.scss";

const WrapperTasks = () => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");

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
        <Table />
        <AddTask />
      </div>
    </div>
  );
};

export default WrapperTasks;
