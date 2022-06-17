import React from "react";

import { Route, useNavigate } from "react-router-dom";

import Sidebar from "@components/Sidebar";
import WrapperTasks from "@components/WrapperTasks";

import styles from "./ShoppingList.module.scss";

const ShoppingList = () => {
  // let history = useNavigate();

  return (
    <div className={styles.shopping}>
      <div className={styles.shopping__sidebar}>
        <Sidebar
          onClickItem={(list) => {
            // history.push(`/lists/${list.id}`);
            console.log(1);
          }}
          isRemovable
        />
      </div>
      <div className={styles.shopping__tasks}>
        <WrapperTasks />
      </div>
    </div>
  );
};

export default ShoppingList;
